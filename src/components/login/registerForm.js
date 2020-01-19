import React, { Component } from 'react';

import validate, { field } from './validator';
import InputErrors from './inputErrors';
import { Col } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { registerCall } from '../../app_data/servelCall';
import { Cookies } from 'js-cookie'

export default class FormRegister extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: field({ name: 'first_name', isRequired: true, minLength: 2 }),
            lastName: field({ name: 'last_name', isRequired: true, minLength: 2 }),
            username: field({ name: 'username', isRequired: true, minLength: 2 }),
            password: field({ name: 'password', isRequired: true, minLength: 6 }),
            email: field({ name: 'email', isRequired: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })
        }

    }

    //Bind the function will use the prototype chain, Ya'ani - 1 method per class
    inputChange = ({ target: { name, value } }) => {
        const errors = validate(name, value, this.state[name].validations);

        this.setState({
            [name]: {
                ...this.state[name],
                value,
                errors
            }
        });
    }

    //Each object will have this onSubmit method - Ya'ani - 1 method per object!  A copy
    onSubmit = e => {
        e.preventDefault();
        let isOK = true;

        for (let prop in this.state) {
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
                result[this.state[prop].name] = this.state[prop].value;
            }

            //Send the data somewhere
            registerCall(result)
                .then(response => {
                    console.log("response: ", response);
                    if (response.status == 200) {
                        window.location.reload();
                        // console.log();
                    } else {
                        const errors = this.state.email.errors;
                        errors.push("Email in system, please insert ")
                        this.setState({
                            email: {
                                ...this.state.email,
                                errors
                            }
                        });
                    }
                })
                .catch(error => {

                });

        }
    }

    render() {
        return (<>

            <div>
                <h4 className="alert-heading text-center">Register</h4>
                <hr />
                <Form onSubmit={this.onSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md="6" >
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="First name"
                                name="firstName"
                                onBlur={this.inputChange}
                            />
                            <InputErrors errors={this.state.firstName.errors}></InputErrors>
                        </Form.Group>

                        <Form.Group as={Col} md="6" >
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Last name"
                                name="lastName"
                                onBlur={this.inputChange}
                            />
                            <InputErrors errors={this.state.lastName.errors}></InputErrors>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} md="12" >
                            <Form.Label>Username</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">
                                        <i className="fas fa-user"></i>
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    aria-describedby="inputGroupPrepend"
                                    onBlur={this.inputChange}
                                />
                            </InputGroup>
                            <InputErrors errors={this.state.username.errors}></InputErrors>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} md="6" >
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

                        <Form.Group as={Col} md="6" >
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
                    <Button type="submit">Submit form</Button>
                </Form>

            </div>
        </>)
    }
}
