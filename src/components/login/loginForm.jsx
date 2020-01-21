import React, { Component } from "react";

import validate, { field } from "./validator";
import InputErrors from "./inputErrors";
import { Col } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { loginCall } from "../../app_data/servelCall";
import { Redirect } from "react-router-dom";

export default class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: field({
        name: "email",
        isRequired: true,
        pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
      }),
      password: field({ name: "password", isRequired: true, minLength: 6 }),
      isLogged: false
    };
  }

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

  onSubmit = e => {
    e.preventDefault();
    let isOK = true;

    for (let prop in this.state) {
      if (prop === "isLogged") continue;
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
        if (prop === "isLogged") continue;
        result[this.state[prop].name] = this.state[prop].value;
      }

      loginCall(result)
        .then(response => {
          if (response.status === 200) {
            this.props.onUserLogin();
            // this.setState({ isLogged: true });
          } else {
            const errors = this.state.email.errors;
            // errors.push("Email in system, please insert ");
            this.setState({
              email: {
                ...this.state.email,
                errors
              }
            });
          }
        })
        .catch(error => {});
      // registerCall(result);
    }
  };

  render() {
    const { isLogged } = this.state;
    return isLogged ? (
      <Redirect to={"/search"} />
    ) : (
      <>
        <div>
          <h4 className="alert-heading text-center">Login</h4>
          <hr />
          <Form onSubmit={this.onSubmit}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">
                      <i className="fas fa-at"></i>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="email@realtor.com"
                    aria-describedby="inputGroupPrepend"
                    onBlur={this.inputChange}
                  />
                </InputGroup>
                <InputErrors errors={this.state.email.errors}></InputErrors>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">
                      <i className="fas fa-key"></i>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    aria-describedby="inputGroupPrepend"
                    onBlur={this.inputChange}
                  />
                </InputGroup>
                <InputErrors errors={this.state.password.errors}></InputErrors>
              </Form.Group>
            </Form.Row>
            <Button type="submit">Login</Button>
          </Form>
        </div>
      </>
    );
  }
}
