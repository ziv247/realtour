import React, { Component } from "react";
import UploadApartment from "./uploadApartment";
import { Container, Row, Col, Button } from "react-bootstrap";
import Cookies from "js-cookie";
import { getApartmentsByUserId } from "../../app_data/servelCall";
import Card from "../gallery/card";
import "./uploadApartment.css";

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(Cookies.get("user")),
      userApartments: [],
      showMore: false
    };
  }

  async componentDidMount() {
    try {
      const userApartments = await getApartmentsByUserId(this.state.user.id);
      this.setState({ userApartments }, () =>
        console.log(this.state.userApartments)
      );
    } catch (error) {}
  }

  toggleShowMore = () => this.setState({ showMore: !this.state.showMore });
  render() {
    const { user, userApartments, showMore } = this.state;
    return (
      <Container>
        <Row>
          <h2
            style={{
              margin: "16px auto",
              textShadow: "1px 1px darkred"
            }}
          >
            Welcome {user.username}
          </h2>
        </Row>
        <div className="containerUser">
          <div className="containerHeader">My Apartments</div>
          <Row
            style={{
              overflow: "hidden",
              flexWrap: `${showMore ? "wrap" : "nowrap"}`
            }}
          >
            {userApartments.map((apartment, i) => (
              <Col md={6} lg={3} sm={12} key={i}>
                <Card apartment={apartment} key={i} />
              </Col>
            ))}
          </Row>
          <button className="toggleBtn" onClick={this.toggleShowMore}>
            <i class={`fas fa-chevron-${showMore ? "up" : "down"}`}></i>
            {showMore ? "   Less" : "   More"}
          </button>
        </div>
        <UploadApartment />
      </Container>
    );
  }
}

export default UserPage;
