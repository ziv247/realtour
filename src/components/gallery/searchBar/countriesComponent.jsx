import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { DropdownHeader } from "./filterbarStyle";
import DropdownMenu from "react-bootstrap/DropdownMenu";

export default class CountryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      haveFilter: false,
      setCountry: props.setCountry,
      country: null,
      countries: []
    };
  }

  onSelect = (key, e) => {
    this.setState({ country: e.target.innerText, haveFilter: true });
    this.state.setCountry(this.props.countries[key]);
  };

  onReset = e => {
    e.preventDefault();
    this.setState({ country: null, haveFilter: false });
    this.state.setCountry(null);
  };

  render() {
    const { haveFilter } = this.state;
    const { countries } = this.props;
    return (
      <Dropdown>
        <Dropdown.Toggle
          variant="outline-secondary"
          id="dropdown-basic"
          style={{ margin: "16px 6px 16px 0px" }}
        >
          {haveFilter ? this.state.country : "Country"}
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
            {countries.map((country, i) => (
              <Dropdown.Item eventKey={i} key={i} onSelect={this.onSelect}>
                {country.name}
              </Dropdown.Item>
            ))}
          </div>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
