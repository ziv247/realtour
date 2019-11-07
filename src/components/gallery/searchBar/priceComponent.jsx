import React, {Component} from "react";
import {Col, Container, Dropdown, DropdownItem, Form, Row} from "react-bootstrap";
import {Dollar, dash, PriceUl, PriceLi, DropdownHeader} from "./filterbarStyle";
import DropdownMenu from "react-bootstrap/DropdownMenu";

export default class PriceComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            show:false,
            minPrice:"No Min",
            maxPrice:"No Max"
        }
    }


    onPickMax(value) {
        this.setState({maxPrice:value});

    }

    render() {
        const {show,minPrice,maxPrice} = this.state;
        const minPriceList = [["$0",0],["$200k",200000],['$400k',400000],["$800k",800000],["$1M",1000000],["$1.2M",1200000],["$1.4M",1400000]];
        const maxPriceList = [["$350k",350000],["$700k",700000],['$400k',400000],["$1M",1000000],["$1.4M",1400000],["$1.8M",1800000],["$2.2M",2200000],["$2.4M",2400000]];
        return(
            <Dropdown>
                <Dropdown.Toggle
                    variant="outline-secondary"
                    id="dropdown-basic"
                    style={{margin:"16px 6px 16px 0px"}}>
                    Price
                </Dropdown.Toggle>

                <DropdownMenu style={{width:"285px",paddingTop:0,top:"3px"}}>
                    <Dropdown.Header style={DropdownHeader}>Price range</Dropdown.Header>
                    <Container fluid={true}>
                        <Row>
                            <Col xs={6} style={{position:"relative"}}>
                                <span style={Dollar}>$</span>
                                <Form.Control onChange={(e)=>this.minCustomUpdate(e.target.value)}
                                              value={minPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                              style={{width:"100%"}} onFocus={()=>{this.setState({show:true})}}
                                              placeholder={"No Min"}/>
                                {console.log(minPrice)}
                                <PriceUl>
                                    {show&& minPriceList.map((price,i) =>
                                        <PriceLi data-val={minPriceList[i][1]} onClick={(e) =>this.onPickMin(e.target.getAttribute("data-val"))}>
                                            {minPriceList[i][0]}
                                        </PriceLi>)}
                                </PriceUl>
                            </Col>
                            <div style={{position:"relative"}}><span style={dash}>-</span></div>
                            <Col xs={6}>
                                <span style={Dollar}>$</span>
                                <Form.Control onChange={(e)=>this.maxCustomUpdate(e.target.value)}
                                              ref={(input) => { this.nameInput = input; }}
                                              placeholder={"No Max"}
                                              value={maxPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                              style={{width:"100%"}} onFocus={()=>{this.setState({show:false})}}/>
                                <PriceUl>
                                    {!show&& maxPriceList.map((price,i) =>
                                        <DropdownItem as={PriceLi} data-val={maxPriceList[i][1]} onClick={(e) =>this.onPickMax(e.target.getAttribute("data-val"))}>
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
    onPickMin=(value)=>{
        this.setState({minPrice:value});
        this.nameInput.focus();
    };

    minCustomUpdate = (v) =>{
        const min =  v ? parseInt(v.replace(/\,/g,'')) : "";
        this.setState({minPrice:min});
    };

    maxCustomUpdate = (v) =>{
        const max =  v ? parseInt(v.replace(/\,/g,'')) : "";
        this.setState({maxPrice:max});
    };
}