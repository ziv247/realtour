import React, { Component } from "react";
import { Carousel, Container, Row, Col, Form, Button } from "react-bootstrap";
import "./single_apartment.css";
import { getApartmentById } from "../../app_data/servelCall";
import PropDisplay from "./PropDisplay";
import { getImage } from "../../app_data/servelCall";
import ImagePreview from "../user/ImagePreview";
import { Section } from "../../style/Section";

export default class Apartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartmentId: props.match.params.id,
      apartment: null,
      laoding: true,
      editteble: false,
      formattedPrice: ""
    };
  }

  async componentDidMount() {
    const result = await getApartmentById(this.state.apartmentId);
    result[0].images = this.parseImages(result[0].images);
    this.setState({
      apartment: result[0],
      laoding: false,
      formattedPrice: result[0].price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    });
  }

  onEditToggle = () => this.setState({ editteble: !this.state.editteble });

  handleEditChange = (prop, value) => {
    console.log(prop, value);
    this.setState({ apartment: { ...this.state.apartment, [prop]: value } });
  };

  setFiles = fileList => {
    console.log(fileList);
    this.setState({
      selectedFiles: fileList
    });
  };

  parseImages = images => {
    return images.split(",").map(image => image.split(" "));
  };

  render() {
    const { laoding } = this.state;
    if (!laoding) {
      const {
        apartment: {
          // id,
          // user_id,
          address,
          // city_id,
          price,

          number_of_room,
          number_of_bath,
          sqft,
          created_on,
          description,
          // sale_status,
          // availability,
          property_type,
          // main_image,
          // status,
          images,
          city_name
        },
        formattedPrice,
        editteble
      } = this.state;

      console.log("created_on: ", created_on.slice(0, 10));
      console.log("images: ", images);

      return (
        <div>
          <div style={{ height: "16px" }} />

          <Section>
            <Container
              style={{
                width: editteble ? "100%" : "70%"
              }}
            >
              {this.state.editteble ? (
                <ImagePreview imageList={images} setFiles={this.setFiles} />
              ) : (
                <Row>
                  <Col sm={10} style={{ paddingRight: 0 }}>
                    <Carousel>
                      {images.map((image, i) => (
                        <Carousel.Item key={i} style={{ height: "300px" }}>
                          <img
                            className="d-block w-100"
                            src={`http://localhost:3000/${image[1]}`}
                            alt={`${i + 1}# `}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </Col>
                  <Col
                    sm={2}
                    style={{
                      padding: 0
                      // display: "flex",
                      // flexWrap: "wrap",
                      // justifyContent: "space-between",
                      // alignItems: "center"
                    }}
                  >
                    {images.map((image, i) => (
                      <Col
                        style={{
                          padding: "0 0 2px"
                          // margin: "0 0 -3px"
                        }}
                      >
                        <img
                          style={{
                            width: `${Math.floor(100 - 100 / images.length)}%`
                          }}
                          src={`http://localhost:3000/${image[1]}`}
                          alt={`${i + 1}# `}
                        />
                      </Col>
                    ))}
                  </Col>
                </Row>
              )}
            </Container>
          </Section>
          <div style={{ height: "16px" }} />
          {/* <Section> */}
          <Container>
            <Form style={{ textAlign: "center" }}>
              <Col
                style={{
                  backgroundColor: "rgb(220,220,220)",
                  minHeight: "55px",
                  borderLeft: "10px solid whitesmoke",
                  borderRight: "10px solid whitesmoke",
                  borderBottom: "5px solid lightgray",
                  borderTop: "5px solid lightgray"
                }}
              >
                <Row>
                  {editteble ? (
                    <PropDisplay
                      title={"Price"}
                      name={"price"}
                      onChange={this.handleEditChange}
                      toggle={editteble}
                      value={price}
                      type="number"
                    />
                  ) : (
                    <PropDisplay
                      title={"Price"}
                      name={"price"}
                      onChange={this.handleEditChange}
                      toggle={this.state.editteble}
                      value={formattedPrice}
                      type="text"
                    />
                  )}

                  <PropDisplay
                    title={"Beds"}
                    name={"number_of_bath"}
                    onChange={this.handleEditChange}
                    toggle={this.state.editteble}
                    value={number_of_room}
                    type={"number"}
                  />
                  <PropDisplay
                    title={"Baths"}
                    name={"number_of_bath"}
                    onChange={this.handleEditChange}
                    toggle={this.state.editteble}
                    value={number_of_bath}
                    type={"number"}
                  />
                  <PropDisplay
                    title={"Sqft"}
                    name={"sqft"}
                    onChange={this.handleEditChange}
                    toggle={this.state.editteble}
                    value={sqft}
                    type={"number"}
                  />
                </Row>
                <Row>
                  <PropDisplay
                    title={"City"}
                    name={"city_name"}
                    onChange={this.handleEditChange}
                    toggle={false}
                    value={city_name}
                  />
                  <PropDisplay
                    title={"Address"}
                    name={"address"}
                    onChange={this.handleEditChange}
                    toggle={this.state.editteble}
                    value={address}
                    type={"text"}
                  />
                  <PropDisplay
                    title={"Property Type"}
                    name={"property_type"}
                    onChange={this.handleEditChange}
                    toggle={this.state.editteble}
                    value={property_type}
                    type={"select"}
                  />
                </Row>
                <Row>
                  <PropDisplay
                    title={"Description"}
                    name={"description"}
                    onChange={this.handleEditChange}
                    toggle={this.state.editteble}
                    value={description}
                    type={"textarea"}
                    rows={4}
                  />
                  <Col
                    sm={4}
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center"
                    }}
                  >
                    <Button variant="secondary" onClick={this.onEditToggle}>
                      Edit
                    </Button>
                    <Button variant="secondary" onClick={this.onEditToggle}>
                      Delete
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Form>
          </Container>
          {/* </Section> */}
        </div>
      );
    } else {
      return <div className="loader">Loading...</div>;
    }
  }
}
