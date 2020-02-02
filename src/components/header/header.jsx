import React from "react";
import Logo from "./logo";
import "./header.css";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
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
    this.setState({ loginToggle: !this.state.loginToggle });
  };

  onUserLogin = () => {
    let user = Cookies.get("user");
    if (user) {
      this.setState({ user: JSON.parse(user), loginToggle: false });
    }
  };

  onLogout = () => {
    Cookies.remove("user");
    this.setState({ user: null });
  };

  componentDidMount() {
    this.onUserLogin();
  }

  render() {
    let { user } = this.state;

    return (
      <div className={"header"} id={"header"}>
        {this.state.loginToggle && (
          <Login
            onToggleLogin={this.onToggleLogin}
            onUserLogin={this.onUserLogin}
          />
        )}

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
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="/search">Buy</Nav.Link>
                <Nav.Link href="/user">Sell</Nav.Link>
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
