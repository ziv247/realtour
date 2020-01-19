import React from "react";
import Logo from "./logo";
import "./header.css";
import {
  Container,
  Nav,
  Navbar,
  DropdownButton,
  Dropdown
} from "react-bootstrap";
import { headerData } from "../../app_data/headerData";
import NavbarItem from "./NavbarItem";
import { Link } from "react-router-dom";
import Login from "../login/login";
import Cookies from "js-cookie";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginToggle: false,
      user: null
    };
  }

  onToggleLogin = () => {
    console.log("Login Click");
    this.setState({ loginToggle: !this.state.loginToggle });
  };

  onLogout = () => {
    console.log("LOGOUT");
    Cookies.remove("user");
    this.setState({ user: null });
  };

  componentDidMount() {
    let user = Cookies.get("user");
    if (user) {
      this.setState({ user: JSON.parse(user) });
    }
  }

  render() {
    let { loginToggle, user } = this.state;

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
                {user ? (
                  <Dropdown>
                    <Dropdown.Toggle
                      style={{
                        backgroundColor: "transparent",
                        color: "#333333",
                        boxShadow: "none",
                        border: "0"
                      }}
                      id="dropdown-basic"
                    >
                      {user.username}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href={`/user/${user.id}/apartments`}>
                        My Apartment
                      </Dropdown.Item>
                      <Dropdown.Item href={`/user/${user.id}/wishlist`}>
                        My Wishlist
                      </Dropdown.Item>
                      <Dropdown.Item href="/" onClick={this.onLogout}>
                        Log Out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  // <DropdownButton
                  //   id="dropdown-basic-button"
                  //   title={user.username}
                  //   style={{
                  //     backgroundColor: "transparent",
                  //     color: "#333333",
                  //     boxShadow: "none",
                  //     border: "0"
                  //   }}
                  // >
                  //   <Dropdown.Item href={`/user/${user.id}/apartments`}>
                  //     My Apartment
                  //   </Dropdown.Item>
                  //   <Dropdown.Item href={`/user/${user.id}/wishlist`}>
                  //     My Wishlist
                  //   </Dropdown.Item>
                  //   <Dropdown.Item href="/" onClick={this.onLogout}>
                  //     Log Out
                  //   </Dropdown.Item>
                  // </DropdownButton>
                  <Nav.Link onClick={this.onToggleLogin}>Login</Nav.Link>
                )}
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
