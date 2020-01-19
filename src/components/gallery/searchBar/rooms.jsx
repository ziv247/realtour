import React, { Component } from "react";
import { DropdownHeader } from "./filterbarStyle";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import "./searchFilterStyle.css";

export default class RoomsFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: "any",
      min: 0,
      max: 0,
      type: props.type
    };
  }

  render() {
    const { type, searchByPrice: searchByNumber } = this.props;

    return (
      <Dropdown>
        <Dropdown.Toggle
          variant="outline-secondary"
          id="dropdown-basic"
          style={{ margin: "16px 6px 16px 0px" }}
        >
          {type}
        </Dropdown.Toggle>

        <DropdownMenu
          style={{ width: "max-content", paddingTop: 0, top: "3px" }}
        >
          <Dropdown.Header style={DropdownHeader}>
            {type + "rooms"}
          </Dropdown.Header>
          <Container fluid={true}>
            <Dropdown.Item>
              <Row>
                <Col
                  className={"radio checked"}
                  id={"any"}
                  data-value={"0"}
                  onClick={e => this.onCheck(e, searchByNumber)}
                >
                  Any
                </Col>
                <Col
                  className={"radio"}
                  id={type + "1"}
                  data-value={"1"}
                  onClick={e => this.onCheck(e, searchByNumber)}
                >
                  1+
                </Col>
                <Col
                  className={"radio"}
                  id={type + "2"}
                  data-value={"2"}
                  onClick={e => this.onCheck(e, searchByNumber)}
                >
                  2+
                </Col>
                <Col
                  className={"radio"}
                  id={type + "3"}
                  data-value={"3"}
                  onClick={e => this.onCheck(e, searchByNumber)}
                >
                  3+
                </Col>
                <Col
                  className={"radio"}
                  id={type + "4"}
                  data-value={"4"}
                  onClick={e => this.onCheck(e, searchByNumber)}
                >
                  4+
                </Col>
              </Row>
            </Dropdown.Item>
            <p style={{ textAlign: "center" }}>Or Select Bedrooms Range</p>
            <Row style={{ justifyContent: "space-around" }}>
              <select
                className={"btn"}
                style={{ border: "1px solid" }}
                onChange={event => this.onPickMin(event.target.value)}
              >
                <option disabled={true}>From</option>
                <option value={""}>Studio</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <div className={"ranger"} />

              <select
                className={"btn"}
                style={{ border: "1px solid" }}
                onChange={event =>
                  this.onPickMax(event.target.value, type, searchByNumber)
                }
              >
                <option disabled={true}>To</option>
                <option>Studio</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </Row>
          </Container>
        </DropdownMenu>
      </Dropdown>
    );
  }

  onCheck = (e, searchFunc) => {
    // debugger;
    let type = this.state.type;
    if (type === "Bed") {
      type = "number_of_beds";
    } else if (type === "Bath") {
      type = "number_of_rooms";
    }
    document.getElementById(e.target.id).classList.add("checked");
    document.getElementById(this.state.checked).classList.remove("checked");
    this.setState({ checked: e.target.id });
    console.log(e.target.getAttribute("data-value"));
    this.setState({ min: e.target.getAttribute("data-value") });

    searchFunc(e.target.getAttribute("data-value"), 0, type);
  };

  onPickMin = value => {
    this.setState({ min: value });
  };

  onPickMax = (value, type, searchFunc) => {
    this.setState({ max: value });
    if (type === "Bed") {
      type = "number_of_beds";
    } else if (type === "Bath") {
      type = "number_of_rooms";
    }
    searchFunc(this.state.min, value, type);
  };
}
