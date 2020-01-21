import React, { Component } from "react";
import { Carousel, Container } from "react-bootstrap";
import "./single_apartment.css";
import { getApartmentById } from "../../app_data/servelCall";

export default class Apartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartmentId: props.match.params.id,
      apartment: null,
      laoding: true
    };
  }

  async componentDidMount() {
    const result = await getApartmentById(this.state.apartmentId);
    this.setState({ apartment: result[0], laoding: false });
  }

  render() {
    const { laoding } = this.state;
    if (!laoding) {
      const {
        // id,
        // user_id,
        address,
        // city_id,
        price,
        // number_of_room,
        // number_of_bath,
        // sqft,
        // created_on,
        // description,
        // sale_status,
        // availability,
        // property_type,
        // main_image,
        // status,
        images,
        city_name
      } = this.state.apartment;

      return (
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
            {images.split(",").map((image, i) => (
              <Carousel.Item key={i}>
                <img
                  className="d-block w-100"
                  src={`http://localhost:3000/${image}`}
                  alt={`${i + 1}# `}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <div>
            <span style={{ fontSize: "30px", fontWeight: "bold" }}>
              ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
            <h2 style={{ fontSize: "18px" }}>{address}</h2>

            <span
              style={{
                fontSize: "16px",
                fontWeight: "normal",
                color: "#757575",
                margin: "6px 0 0"
              }}
            >
              {city_name}
            </span>
          </div>
        </Container>
      );
    } else {
      return <div className="loader">Loading...</div>;
    }
  }
}
