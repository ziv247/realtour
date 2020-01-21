import React from "react";
import Card from "./card";
import { ButtonToolbar, Container, Form, Button } from "react-bootstrap";
import PriceComponent from "./searchBar/priceComponent";
import RoomsFilter from "./searchBar/rooms";
import CountryComponent from "./searchBar/countriesComponent";
import CitiesComponent from "./searchBar/citiesComponent";
import TypeFilter from "./searchBar/typeFilter";

import {
  getApartments,
  getCountries,
  getCityByCountryId
} from "../../app_data/servelCall";
import NoResultComponent from "./searchBar/noResultComponent";

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apartmentList: [],
      page: 1,
      size: 16,
      price: [0, 0],
      number_of_room: [0, 0],
      number_of_bath: [0, 0],
      loading: false,
      country: "",
      countries: [],
      city: "",
      cities: [],
      type: "",
      status: "",
      reRender: true
    };
  }

  handleSuccessApartment = apartments => {
    this.setState({ apartmentList: apartments });
  };

  handleSuccessCities = cities => {
    this.setState({ citiesList: cities, loading: true });
  };

  setCountry = country => {
    this.setState({ country });
    if (country) {
      getCityByCountryId(country.id).then(res => {
        this.setState({ cities: res.data });
      });
    } else {
      this.setState({ cities: [] });
    }
  };

  setCity = city => {
    this.setState({ city });
  };

  onChooseType = type => {
    this.setState({ type });
  };

  componentDidMount() {
    getApartments().then(res => {
      this.setState({ apartmentList: res });
    });

    getCountries().then(res => {
      this.setState({ countries: res.data });
    });
  }
  searchByNumber = (min, max, type) => {
    console.log("Outside min: ", min, " max: ", max, " type: ", type);
    this.setState({ [type]: [min, max] });
  };

  search = () => {
    console.log(this.state);
    const {
      country,
      city,
      price,
      number_of_room,
      number_of_bath,
      status,
      type,
      page,
      size
    } = this.state;
    getApartments(
      country,
      city,
      price[0],
      price[1],
      number_of_room[0],
      number_of_room[1],
      number_of_bath[0],
      number_of_bath[1],
      status,
      type,
      page,
      size
    ).then(res => {
      this.setState({ apartmentList: res });
    });
  };

  reset = () => {
    this.setState({
      country: "",
      city: "",
      price: [0, 0],
      number_of_room: [0, 0],
      number_of_bath: [0, 0],
      status: "",
      type: "",
      page: 1,
      size: 16,
      reRender: !this.state.reRender
    });

    getApartments().then(res => {
      this.setState({ apartmentList: res, reRender: !this.state.reRender });
    });
  };

  render() {
    let {
      reRender,
      apartmentList,
      country,
      countries,
      cities,
      city
    } = this.state;

    return (
      <Container fluid={true}>
        <div>
          {reRender && (
            <Form inline>
              <ButtonToolbar>
                <CountryComponent
                  countries={countries}
                  country={country}
                  setCountry={this.setCountry}
                />
                {cities.length > 0 && (
                  <CitiesComponent
                    cities={cities}
                    city={city}
                    setCity={this.setCity}
                  />
                )}
                <PriceComponent searchByPrice={this.searchByNumber} />
                <RoomsFilter
                  type={"Bed"}
                  searchByNumber={this.searchByNumber}
                />
                <RoomsFilter
                  type={"Bath"}
                  searchByNumber={this.searchByNumber}
                />
                <TypeFilter onChooseType={this.onChooseType} />
              </ButtonToolbar>
              <Button
                variant="danger"
                style={{ margin: "16px 6px 16px 0px" }}
                onClick={() => {
                  this.search();
                }}
              >
                <i className="fas fa-search" />
              </Button>
              <Button
                variant="secondary"
                style={{ margin: "16px 6px 16px 0px" }}
                onClick={() => {
                  this.reset();
                }}
              >
                Reset
              </Button>
            </Form>
          )}
        </div>
        <div className={"row"}>
          {apartmentList.length < 1 ? (
            <NoResultComponent reset={this.reset} />
          ) : (
            apartmentList.map((apartment, i) => (
              <Card apartment={apartment} key={i} />
            ))
          )}
        </div>
      </Container>
    );
  }
}
