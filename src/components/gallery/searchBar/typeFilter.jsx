import React, { Component } from "react";
import { DropdownHeader } from "./filterbarStyle";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import "./searchFilterStyle.css";

export default class TypeFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: "any",
      haveFilter: false
    };
  }

  render() {
    const { onChooseType } = this.props;
    const { haveFilter, checked } = this.state;
    return (
      <Dropdown>
        <Dropdown.Toggle
          variant="outline-secondary"
          id="dropdown-basic"
          style={{ margin: "16px 6px 16px 0px" }}
        >
          {haveFilter ? `Type: ${checked}` : "Property Type"}
        </Dropdown.Toggle>

        <DropdownMenu
          style={{ width: "max-content", paddingTop: 0, top: "3px" }}
        >
          <Dropdown.Header style={DropdownHeader}>
            Property Type
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
                  data-value={"any"}
                  onClick={this.onReset}
                >
                  Any
                </Col>
                <Col
                  className={"radio"}
                  id={"house"}
                  data-value={"house"}
                  onClick={this.onCheck}
                >
                  <i className="fas fa-home" id={"house"}></i>
                  House
                </Col>
                <Col
                  className={"radio"}
                  id={"ranch"}
                  data-value={"ranch"}
                  onClick={this.onCheck}
                >
                  <i className="fas fa-hat-cowboy" id={"ranch"}></i>
                  Ranch
                </Col>
                <Col
                  className={"radio"}
                  id={"condo"}
                  data-value={"condo"}
                  onClick={this.onCheck}
                >
                  <i className="far fa-building" id={"condo"}></i>
                  Condo
                </Col>
                <Col
                  className={"radio"}
                  id={"land"}
                  data-value={"land"}
                  onClick={this.onCheck}
                >
                  <i className="fas fa-landmark" id={"land"}></i>
                  Land
                </Col>
              </Row>
            </Dropdown.Item>
          </Container>
        </DropdownMenu>
      </Dropdown>
    );
  }

  onCheck = e => {
    e.target.classList.add("checked");
    document.getElementById(this.state.checked).classList.remove("checked");
    this.setState({
      checked: e.target.id,
      haveFilter: true
    });
    this.props.onChooseType(e.target.id);
    // searchFunc(e.target.getAttribute("data-value"), 0,);
  };

  onReset = e => {
    e.preventDefault();
    this.setState({ min: 0, max: 0, haveFilter: false });
    this.props.onChooseType("");
  };
}
