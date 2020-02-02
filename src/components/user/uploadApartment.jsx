import React, { Component } from "react";
import {
  Container,
  Form,
  Col,
  Button,
  InputGroup,
  Fade
} from "react-bootstrap";
import Cookies from "js-cookie";

import {
  addApartmentCall,
  getCountries,
  getCityByCountryId
} from "../../app_data/servelCall.js";
import ImagePreview from "./ImagePreview.jsx";

class UploadApartment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      selectedFiles: [],
      cities: [],
      countries: [],
      toggle: false,
      containerHeight: { false: "2rem", true: "800px" },
      containerduration: { false: "2.5s", true: "2s" },
      user_id: JSON.parse(Cookies.get("user")).id,
      address: "",
      city_id: "",
      price: 0,
      number_of_room: 0,
      number_of_bath: 0,
      sqft: "",
      description: "",
      sale_status: "both",
      availability: "",
      property_type: ""
    };
  }

  componentDidMount() {
    getCountries().then(res => {
      this.setState({ countries: res.data });
    });
  }

  setFiles = fileList => {
    console.log(fileList);
    this.setState({
      selectedFiles: fileList
    });
  };

  formDataBuilder = () => {
    const fd = new FormData();
    const fileList = this.state.selectedFiles;
    for (let file in fileList) {
      fd.append("images", fileList[file]);
    }
    const {
      user_id,
      address,
      city_id,
      price,
      number_of_room,
      number_of_bath,
      sqft,
      description,
      sale_status,
      property_type
    } = this.state;
    if (this.state.sale) {
      if (!this.state.rent) {
        this.setState({ sale_status: "sale" });
      }
    } else if (this.state.rent) {
      this.setState({ sale_status: "rent" });
    }
    fd.append("sale_status", sale_status);
    fd.append("user_id", user_id);
    fd.append("address", address);
    fd.append("city_id", city_id);
    fd.append("price", price);
    fd.append("number_of_room", number_of_room);
    fd.append("number_of_bath", number_of_bath);
    fd.append("sqft", sqft);
    fd.append("description", description);
    fd.append("property_type", property_type);
    return fd;
  };

  onToggle = e => {
    e.preventDefault();
    this.setState({
      toggle: !this.state.toggle
    });
  };

  setCountry = e => {
    if (e) {
      getCityByCountryId(e.target.value).then(res => {
        this.setState({ cities: res.data });
      });
    } else {
      this.setState({ cities: [] });
    }
  };

  inputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  onChecked = e => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  onSubmit = e => {
    e.preventDefault();
    const data = this.formDataBuilder();
    addApartmentCall(data).then(console.log);
  };

  render() {
    const { toggle, containerHeight, containerduration } = this.state;
    return (
      <Container
        className="form-control containerUser"
        style={{
          maxHeight: containerHeight[toggle]
        }}
      >
        <Fade in={!toggle}>
          <h6
            style={{ textAlign: "center", cursor: "cell" }}
            onClick={this.onToggle}
          >
            Click Here To Add New Apartment
          </h6>
        </Fade>

        <Fade in={toggle}>
          <Form>
            <Form.Row>
              <Form.Group as={Col} md={3} controlId="formGridState">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  as="select"
                  name="countries"
                  onChange={this.setCountry}
                >
                  <option>Choose...</option>
                  {this.state.countries.map((country, i) => (
                    <option value={country.id} key={i}>
                      {country["name"]}
                    </option>
                  ))}
                </Form.Control>
                {/* <inputErrors errors={this.state.email.errors} /> */}
              </Form.Group>

              <Form.Group as={Col} md={3} controlId="formGridState1">
                <Form.Label>City</Form.Label>
                <Form.Control
                  as="select"
                  name="city_id"
                  onChange={this.inputChange}
                >
                  <option>Choose...</option>
                  {this.state.cities.map((city, i) => (
                    <option value={city.id} key={i}>
                      {city["name"]}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  placeholder="1234 Main St"
                  name="address"
                  onChange={this.inputChange}
                />
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
                  onChange={this.inputChange}
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
                  onChange={this.inputChange}
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
                  onChange={this.inputChange}
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
                <Form.Control
                  as="select"
                  name="property_type"
                  onChange={this.inputChange}
                >
                  <option>Choose...</option>
                  {["house", "ranch", "condo", "land"].map((type, i) => (
                    <option value={type} key={i}>
                      {type}
                    </option>
                  ))}
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
              <Form.Control
                as="textarea"
                rows="3"
                name="description"
                onChange={this.inputChange}
              />
            </Form.Group>

            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend1">$</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="number"
                placeholder="Price..."
                aria-describedby="inputGroupPrepend"
                name="price"
                onChange={this.inputChange}
                value={this.state.price}
              />
            </InputGroup>
            <ImagePreview setFiles={this.setFiles} />

            <Button variant="secondary" type="submit" onClick={this.onSubmit}>
              Submit
            </Button>
            <button
              onClick={this.onToggle}
              style={{
                fontSize: "24px",
                background: "transparent",
                border: 0,
                float: "right"
              }}
            >
              <i class="fas fa-chevron-up"></i>
            </button>
          </Form>
        </Fade>
      </Container>
    );
  }
}

export default UploadApartment;
