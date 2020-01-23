import React, { Component } from "react";
import { Container, Form, Col, Button, InputGroup } from "react-bootstrap";
import props from "./../login/inputErrors";
import Cookies from "js-cookie";
import validate, { field } from "../login/validator";
import { allCountries, allCities } from "../../app_data/servelCall.js";

// `id`,
//   `user_id`,
//   `address`,
//   `city_id`,
//   `price`,
//   `number_of_room`,
//   `number_of_bath`,
//   `sqft`,
//   `created_on`,
//   `description`,
//   `sale_status`,
//   `availability`,
//   `property_type`,
//   `main_image`,
//   `status`;

class UploadApartment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [],
      countries: [],
      toggle: false,
      containerHeight: { false: "3rem", true: "29rem" },
      containerduration: { false: ".5s", true: "1s" },
      user_id: JSON.parse(Cookies.get("user")).id,
      address: field({ name: "address", isRequired: true, minLength: 2 }),
      city_id: field({ name: "city_id", isRequired: true, minValue: true }),
      price: field({ name: "price", isRequired: true, minValue: true }),
      number_of_room: field({
        name: "number_of_room",
        isRequired: true,
        minValue: true
      }),
      number_of_bath: field({
        name: "number_of_bath",
        isRequired: true,
        minValue: true
      }),
      sqft: field({ name: "sqft", isRequired: true, minValue: true }),
      description: field({ name: "description" }),
      sale_status: field({ name: "sale_status", isRequired: true }),
      availability: field({ name: "availability", isRequired: true }),
      property_type: field({ name: "property_type", isRequired: true }),
      main_image: field({ name: "main_image", isRequired: true }),
      status: field({ name: "status", isRequired: true })
    };
  }

  async componentDidMount() {
    this.countries = await allCountries();
    this.fullCities = await allCities();

    console.log(this.countries, this.fullCities);
  }

  onToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  inputChange = ({ target: { name, value } }) => {
    const errors = validate(name, value, this.state[name].validations);
    this.setState({
      [name]: {
        ...this.state[name],
        value,
        errors
      }
    });
  };

  onChecked = e => {
    console.log(e.target.checked);
  };

  onSubmit = e => {
    e.preventDefault();
    let isOK = true;

    for (let prop in this.state) {
      if (
        prop === "countries" ||
        prop === "cities" ||
        prop === "toggle" ||
        prop === "containerHeight" ||
        prop === "containerduration" ||
        prop === "user_id"
      )
        continue;
      const field = this.state[prop];
      const errors = validate(prop, field.value, field.validations);
      if (errors.length) {
        isOK = false;
        this.setState({
          [prop]: {
            ...this.state[prop],
            errors
          }
        });
      }
    }

    if (isOK) {
      const result = {};

      for (let prop in this.state) {
        if (
          prop === "countries" ||
          prop === "cities" ||
          prop === "toggle" ||
          prop === "containerHeight" ||
          prop === "containerduration"
        )
          continue;
        result[this.state[prop].name] = this.state[prop].value;
      }
    }
    console.log(this.state);
  };

  render() {
    const { toggle, containerHeight, containerduration } = this.state;
    return (
      <Container
        className="form-control"
        style={{
          height: `${containerHeight[toggle]}`,
          boxShadow: "0px 0px 3px 1px",
          transition: `all ${containerduration[toggle]} linear`,
          backgroundColor: "ghostwhite",
          overflow: "hidden"
        }}
      >
        {!toggle ? (
          <h4
            style={{ textAlign: "center", cursor: "cell" }}
            onClick={this.onToggle}
          >
            Click Here To Add New Apartment
          </h4>
        ) : (
          <Form>
            <Form.Row>
              <Form.Group as={Col} md={3} controlId="formGridState">
                <Form.Label>Country</Form.Label>
                <Form.Control as="select" name="country">
                  <option>Choose...</option>
                  {this.countries.map((country, i) => (
                    <option>{country["name"]}</option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} md={3} controlId="formGridState">
                <Form.Label>City</Form.Label>
                <Form.Control as="select" name="city_id">
                  <option>Choose...</option>
                  {/* {this.fullCities.map((city, i) => (
                    <option>{city["name"]}</option>
                  ))} */}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" name="address" />
              </Form.Group>
            </Form.Row>

            <Form.Row className={"mb-3"}>
              <InputGroup as={Col}>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">
                    Rooms
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="number"
                  placeholder="Rooms..."
                  aria-describedby="inputGroupPrepend"
                  name="number_of_room"
                />
              </InputGroup>

              <InputGroup as={Col}>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">
                    Baths
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="number"
                  placeholder="Baths..."
                  aria-describedby="inputGroupPrepend"
                  name="number_of_bath"
                />
              </InputGroup>

              <InputGroup as={Col}>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">Sqft</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="number"
                  placeholder="Sqft..."
                  aria-describedby="inputGroupPrepend"
                  name="sqft"
                />
              </InputGroup>
            </Form.Row>

            <Form.Row className="mb-3">
              <InputGroup as={Col} md={6}>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">
                    Property Type
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control as="select" name="property_type">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </InputGroup>

              <InputGroup as={Col} md={3} style={{ justifyContent: "center" }}>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">
                    Sale
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <InputGroup.Checkbox onChange={this.onChecked} name="sale" />
              </InputGroup>

              <InputGroup as={Col} md={3}>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">
                    Rent
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <InputGroup.Checkbox onChange={this.onChecked} name="rent" />
              </InputGroup>
            </Form.Row>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows="3" name="description" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Upload Images</Form.Label>
              <Form.Control type="file" name="main_image" />
            </Form.Group>

            <Button variant="secondary" type="submit" onClick={this.onSubmit}>
              Submit
            </Button>
          </Form>
        )}
      </Container>
    );
  }
}

export default UploadApartment;
