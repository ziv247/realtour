import React from "react";
import Card from "./card";
import {
  ButtonToolbar,
  Container,
  Form,
  FormControl,
  InputGroup,
  Button
} from "react-bootstrap";
import PriceComponent from "./searchBar/priceComponent";
import RoomsFilter from "./searchBar/rooms";
import {
  fullApartmentList,
  fullCitiesList,
  getApartments
} from "../../app_data/servelCall";

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apartmentList: [],
      searchValue: "",
      price: [0, 0],
      number_of_room: [0, 0],
      number_of_bath: [0, 0],
      loading: false
    };

    // console.log(getApartments());
    // console.log(getCities());
    if (props.location.aboutProps) {
      console.log("Success: ", props.location.aboutProps);
    }
  }

  handleSuccessApartment = apartments => {
    this.setState({ apartmentList: apartments });
  };

  handleSuccessCities = cities => {
    this.setState({ citiesList: cities, loading: true });
  };

  componentDidMount() {
    getApartments().then(res => {
      this.setState({ apartmentList: res });
      console.log(res);
    });

    console.log(this.state.apartmentList);
  }
  searchByNumber = (min, max, type) => {
    type == "price" && this.setState({ price: [min, max] });
    type == "bath" && this.setState({ number_of_bath: [min, max] });
    type == "bed" && this.setState({ number_of_room: [min, max] });
  };

  render() {
    let { apartmentList } = this.state;

    return (
      <Container fluid={true}>
        <div>
          <Form inline>
            <InputGroup style={{ marginRight: "6px" }}>
              <FormControl placeholder="Search" id={"search"} />
              <InputGroup.Append>
                <Button
                  variant="danger"
                  onClick={() => {
                    this.searchByText();
                  }}
                >
                  <i className="fas fa-search" />
                </Button>
              </InputGroup.Append>
            </InputGroup>
            <ButtonToolbar>
              <PriceComponent searchByPrice={this.searchByNumber} />
              <RoomsFilter type={"Bed"} searchByPrice={this.searchByNumber} />
              <RoomsFilter type={"Bath"} searchByPrice={this.searchByNumber} />
              {["Property Type", "More Filters"].map(variant => (
                <PriceComponent
                  searchByPrice={this.searchByPrice}
                  key={variant + 1}
                />
              ))}
            </ButtonToolbar>
          </Form>
        </div>
        <div className={"row"}>
          {apartmentList.map((apartment, i) => (
            <Card apartment={apartment} key={i} />
          ))}
        </div>
      </Container>
    );
  }
}
