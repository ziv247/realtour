import React, {Component} from "react";
import {Col, Container, Dropdown, DropdownItem, Form, Row} from "react-bootstrap";
import {Dollar, dash, PriceUl, PriceLi, DropdownHeader} from "./filterbarStyle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import nFormatter from '../../numberFormatter'

export default class PriceComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            minPrice: -1,
            maxPrice: -1,
            haveFilter: false,
            searchByPrice: this.props.searchByPrice
        }
    }


    render() {
        const {show, minPrice, maxPrice, haveFilter} = this.state;
        const minPriceList = [["$0", 0], ["$200k", 200000], ['$400k', 400000], ["$800k", 800000], ["$1M", 1000000], ["$1.2M", 1200000], ["$1.4M", 1400000]];
        const maxPriceList = [["$350k", 350000], ["$700k", 700000], ['$400k', 400000], ["$1M", 1000000], ["$1.4M", 1400000], ["$1.8M", 1800000], ["$2.2M", 2200000], ["$2.4M", 2400000]];

        return (
            <Dropdown>
                <Dropdown.Toggle
                    variant="outline-secondary"
                    id="dropdown-basic"
                    style={{margin: "16px 6px 16px 0px"}}>
                    {haveFilter ? `${nFormatter(this.state.minPrice)}-${nFormatter(this.state.maxPrice)}` : "Price"}
                </Dropdown.Toggle>

                <DropdownMenu style={{width: "285px", paddingTop: 0, top: "3px"}}>
                    <Dropdown.Header style={DropdownHeader}>Price range</Dropdown.Header>
                    <Container fluid={true}>

                        <Row>
                            <Col xs={6} style={{position: "relative"}}>
                                <span style={Dollar}>$</span>
                                <Form.Control onChange={(e) => this.minCustomUpdate(e.target.value)}
                                              value={minPrice !== -1 ? minPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):""}
                                              style={{width: "100%"}} onFocus={() => {
                                    this.setState({show: true})
                                }}
                                              placeholder={"No Min"}/>
                                <PriceUl>
                                    {show && minPriceList.map((price, i) =>
                                        <PriceLi data-val={minPriceList[i][1]}
                                                 onClick={(e) => this.onPickMin(e.target.getAttribute("data-val"))}
                                                 key={i}>
                                            {minPriceList[i][0]}
                                        </PriceLi>)}
                                </PriceUl>
                            </Col>
                            <div style={{position: "relative"}}><span style={dash}>-</span></div>
                            <Col xs={6}>
                                <span style={Dollar}>$</span>
                                <Form.Control onKeyDown={this.onKeyDown}
                                              onChange={(e) => this.maxCustomUpdate(e.target.value)}
                                              ref={(input) => {
                                                  this.nameInput = input;
                                              }}
                                              placeholder={"No Max"}
                                              value={maxPrice !== -1 ? maxPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):""}
                                              style={{width: "100%"}} onFocus={() => {
                                    this.setState({show: false})
                                }}/>
                                <PriceUl>
                                    {!show && maxPriceList.map((price, i) =>
                                        <DropdownItem as={PriceLi} key={i} data-val={maxPriceList[i][1]}
                                                      onClick={(e) => this.onPickMax(e.target.getAttribute("data-val"))}>
                                            {maxPriceList[i][0]}
                                        </DropdownItem>)}
                                </PriceUl>
                            </Col>
                        </Row>
                    </Container>
                </DropdownMenu>
            </Dropdown>
        )
    }

    onPickMin = (value) => {
        this.setState({minPrice: value});
        this.nameInput.focus();
    };

    onPickMax(value) {
        this.setState({maxPrice: value, haveFilter: true});
        this.state.searchByPrice(this.state.minPrice/1000000,value/1000000,"price");
    };

    minCustomUpdate = (v) => {
        // eslint-disable-next-line no-useless-escape
        v = v.replace(/\,/g, '');
        const min = isNaN(v) || v==="" ? "": parseInt(v);
        this.setState({minPrice: min});
    };

    maxCustomUpdate = (v) => {
        // eslint-disable-next-line no-useless-escape
        v = v.replace(/\,/g, '');
        const max = isNaN(v) || v === "" ? "" : parseInt(v);
        this.setState({maxPrice: max});
    };

    onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
        if (event.key === 'Enter') {
            this.state.searchByPrice(this.state.minPrice,this.state.maxPrice,"price");
        }
    }
}

