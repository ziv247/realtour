import React, { Component } from "react";
import {
  Button,
  Container,
  FormControl,
  Image,
  InputGroup
} from "react-bootstrap";
import { MainDiv, MainP, NavLi, NavUl } from "./homePageStyle";
import { Link } from "react-router-dom";
import { Section } from "../../style/Section";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }
  render() {
    return (
      <div>
        <Container
          fluid={true}
          style={{ textAlign: "center", padding: "5px 10px" }}
        >
          <i
            className="fas fa-check"
            style={{ color: "green", fontSize: "12px" }}
          />
          <span style={{ margin: "0 5px" }}>
            Be Ready To Buy... How Much Can You Borrow?
          </span>
          <Button variant="outline-danger" style={{ borderRadius: "30px" }}>
            Get Pre-Approved
          </Button>
        </Container>
        <Section>
          {/* <div style={{ width: "100%", position: "relative" }}> */}
          <Container
            style={{
              textAlign: "center",
              padding: "16px"
            }}
          >
            <h1 style={{ fontSize: "3.5em" }}>The Home of Home Search℠</h1>
            <MainP>
              With the most complete source of homes for sale & real estate near
              you
            </MainP>

            <Link to={`/search`}>
              <Button variant="danger" onClick={e => this.onSearchClick(e)}>
                <i className="fas fa-search" />
                <span>SEARCH</span>
              </Button>
            </Link>
          </Container>
          {/* </div> */}
        </Section>
      </div>
    );
  }

  onSearchClick(e) {
    this.setState({ searchValue: e.target.value });
  }
}
