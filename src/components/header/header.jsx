import React from "react";
import Logo from "./logo";
import "./header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { headerData } from "../../app_data/headerData";
import NavbarItem from "./NavbarItem";
import { Link } from "react-router-dom";
import Login from "../login/login";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginToggle: false
    };
  }

  onToggleLogin = () => {
    console.log("Login Click");
    this.setState({ loginToggle: !this.state.loginToggle });
  };

  render() {
    let { loginToggle } = this.state;
    return (
      <div className={"header"} id={"header"}>
        {this.state.loginToggle && <Login onToggleLogin={this.onToggleLogin} />}
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <Logo />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {headerData.map((item, i) => (
                  <NavbarItem item={item} key={i} />
                ))}
              </Nav>
              <Nav className="ml-auto">
                <Nav.Link href="#home">
                  <i className="fas fa-mobile-alt d-flex align-items-center" />
                </Nav.Link>
                <Nav.Link onClick={this.onToggleLogin}>Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/*<NavbarContent />*/}
      </div>
    );
  }
}
export default Header;
