import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { DropdownHeader } from "./filterbarStyle";
import DropdownMenu from "react-bootstrap/DropdownMenu";

export default class CitiesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      haveFilter: false,
      setCity: props.setCity,
      city: null,
      cities: []
    };
  }

  onSelect = (key, e) => {
    this.setState({ city: e.target.innerText, haveFilter: true });
    this.state.setCity(this.props.cities[key]);
  };
  onReset = e => {
    e.preventDefault();
    this.setState({ city: null, haveFilter: false });
    this.state.setCity(null);
  };
  render() {
    const { haveFilter } = this.state;
    const { cities } = this.props;
    return (
      <Dropdown>
        <Dropdown.Toggle
          variant="outline-secondary"
          id="dropdown-basic"
          style={{ margin: "16px 6px 16px 0px" }}
        >
          {haveFilter ? this.state.city : "City"}
        </Dropdown.Toggle>

        <DropdownMenu style={{ width: "285px", paddingTop: 0, top: "3px" }}>
          <Dropdown.Header style={DropdownHeader}>
            Country
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
          <div
            style={{ height: "auto", maxHeight: "200px", overflowX: "hidden" }}
          >
            {cities.map((city, i) => (
              <Dropdown.Item eventKey={i} key={i} onSelect={this.onSelect}>
                {city.name}
              </Dropdown.Item>
            ))}
          </div>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
