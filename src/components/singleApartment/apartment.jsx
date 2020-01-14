import React, { Component } from "react";
import { Carousel, Container } from "react-bootstrap";
import "./single_apartment.css";
import { getApartmentById } from "../../app_data/servelCall";

export default class Apartment extends Component {
  //   constructor(props) {
  //     super(props);
  //     const {
  //       match: { params }
  //     } = this.props;
  //     this.state = {
  //       //   apartment: getApartmentByID(params.id)
  //       // city: getCityByID(3).label
  //     };
  constructor(props) {
    super(props);
    console.log(props.match.params.id);
    this.state = {
      apartmentId: props.match.params.id,
      apartment: null,
      laoding: true
    };
  }

  async componentDidMount() {
    const result = await getApartmentById(this.state.apartmentId);
    console.log(result[0]);
    this.setState(
      { apartment: result[0], laoding: false },
      console.log(this.state.apartment)
    );
  }

  render() {
    const { apartment } = this.state;
    console.log(apartment);
    return this.state.laoding ? (
      <div className="loader">Loading...</div>
    ) : (
      <Container>
        <div style={{ padding: "8px 0", fontSize: "12px" }}>
          <span>Presented by:</span>
          <br />
          <span>
            <b>Frank Aromando</b> with{" "}
            <b>Keller Williams Realty/United Partners</b>
          </span>
        </div>
        <Carousel>
          {apartment.images.split(",").map((image, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={`../../images/apartment/${image}`}
                alt={`${i + 1}# Image`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <div>
          <span style={{ fontSize: "30px", fontWeight: "bold" }}>
            $
            {(apartment.price * 1000000)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
          <h2 style={{ fontSize: "18px" }}>{apartment.address}</h2>

          <span
            style={{
              fontSize: "16px",
              fontWeight: "normal",
              color: "#757575",
              margin: "6px 0 0"
            }}
          >
            {/* {getCityByID(3).label} */}
          </span>
        </div>
      </Container>
    );
  }
}
