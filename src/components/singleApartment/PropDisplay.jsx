import React from "react";
import { Col, Form } from "react-bootstrap";
const propsNames = {
  fontSize: "16px",
  fontWeight: "normal",
  color: "#757575",
  margin: "6px 0 0 0"
};
const propsItems = {
  fontSize: "24px",
  fontWeight: "normal",
  color: "#333333",
  margin: "0 0 6px 0",
  position: "relative",
  top: "-12px",
  textAlign: "center"
};
const editItems = {
  fontSize: "16px",
  fontWeight: "normal",
  color: "#333333",
  margin: "0 0 6px 0"
};
const propsWrapper = {
  display: "flex",
  flexDirection: "column"
};

// title={"City"}
//                   name={"city_name"}
//                   onChange={this.handleEditChange}
//                   toggle={this.state.editteble}
//                   value={city_name}

function PropDisplay({ title, name, value, onChange, toggle, type, rows = 1 }) {
  function getValueFromElement(e) {
    onChange(e.target.name, e.target.value);
  }
  console.log(value);
  return (
    <Col style={propsWrapper}>
      <span style={propsNames}>{title}</span>
      <Form.Control
        type={type}
        plaintext={!toggle}
        readOnly={!toggle}
        value={value}
        defaultValue={value}
        style={!toggle ? propsItems : editItems}
        name={name}
        onChange={getValueFromElement}
        rows={rows}
        required
      />
      {/* <span style={propsItems}>{value}</span> */}
    </Col>
  );
}

export default PropDisplay;
