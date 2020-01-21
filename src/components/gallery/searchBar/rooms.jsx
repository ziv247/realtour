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
      type: props.type,
      haveFilter: false
    };
  }

  render() {
    const { type } = this.props;
    const { haveFilter, min, max } = this.state;
    const rooms = [1, 2, 3, 4, 5];
    return (
      <Dropdown>
        <Dropdown.Toggle
          variant="outline-secondary"
          id="dropdown-basic"
          style={{ margin: "16px 6px 16px 0px" }}
        >
          {haveFilter && `${min == 0 ? "0" : min}${max == 0 ? "+" : "-" + max}`}
          {haveFilter ? type + "s" : type}
        </Dropdown.Toggle>

        <DropdownMenu
          style={{ width: "max-content", paddingTop: 0, top: "3px" }}
        >
          <Dropdown.Header style={DropdownHeader}>
            {type + "rooms"}
            <button
              onClick={this.onReset}
              style={{
                float: "right",
                border: "0",
                backgroundColor: "transparent"
              }}
            >
              reset
            </button>
          </Dropdown.Header>
          <Container fluid={true}>
            <Dropdown.Item>
              <Row>
                <Col
                  className={"radio checked"}
                  id={"any"}
                  data-value={"0"}
                  onClick={this.onReset}
                >
                  Any
                </Col>
                <Col
                  className={"radio"}
                  id={type + "1"}
                  data-value={"1"}
                  onClick={this.onCheck}
                >
                  1+
                </Col>
                <Col
                  className={"radio"}
                  id={type + "2"}
                  data-value={"2"}
                  onClick={this.onCheck}
                >
                  2+
                </Col>
                <Col
                  className={"radio"}
                  id={type + "3"}
                  data-value={"3"}
                  onClick={this.onCheck}
                >
                  3+
                </Col>
                <Col
                  className={"radio"}
                  id={type + "4"}
                  data-value={"4"}
                  onClick={this.onCheck}
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
                <option value={0}>From</option>
                <option value={""}>Studio</option>
                {rooms.map(num => (
                  <option value={num}>{num}</option>
                ))}
              </select>

              <div className={"ranger"} />

              <select
                className={"btn"}
                style={{ border: "1px solid" }}
                onChange={event => this.onPickMax(event.target.value, type)}
              >
                <option value={0}>To</option>
                {rooms
                  .filter(num => num >= min)
                  .map(num => (
                    <option value={num}>{num}</option>
                  ))}
              </select>
            </Row>
          </Container>
        </DropdownMenu>
      </Dropdown>
    );
  }

  onCheck = e => {
    let type = this.state.type;
    if (type === "Bed") {
      type = "number_of_room";
    } else if (type === "Bath") {
      type = "number_of_bath";
    }
    document.getElementById(e.target.id).classList.add("checked");
    document.getElementById(this.state.checked).classList.remove("checked");
    this.setState({
      checked: e.target.id,
      min: e.target.getAttribute("data-value"),
      max: 0,
      haveFilter: true
    });

    this.props.searchByNumber(e.target.getAttribute("data-value"), 0, type);
  };

  onPickMin = value => {
    this.setState({ min: value, haveFilter: true });
  };

  onPickMax = (value, type) => {
    this.setState({ max: value, haveFilter: true });
    if (type === "Bed") {
      type = "number_of_room";
    } else if (type === "Bath") {
      type = "number_of_bath";
    }
    console.log(
      "Inside min: ",
      this.state.min,
      " max: ",
      value,
      " type: ",
      type
    );
    this.props.searchByNumber(this.state.min, value, type);
  };

  onReset = e => {
    e.preventDefault();
    this.setState({ min: 0, max: 0, haveFilter: false });
    this.props.searchByNumber(0, 0, this.state.type);
  };
}
