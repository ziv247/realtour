import React, {Component} from "react";
import {Button, Container, FormControl, Image, InputGroup} from "react-bootstrap";
import {MainDiv, MainP, NavLi, NavUl} from "./homePageStyle";
import {Link} from "react-router-dom";

export default class HomePage extends Component{

    constructor(props){
        super(props);
        this.state={
            searchValue:""
        }
    }
    render(){
        return(
            <div>
                <Container fluid={true} style={{textAlign:"center",padding:"5px 10px"}}>
                    <i className="fas fa-check" style={{color: "green", fontSize: "12px"}}/>
                    <span style={{margin:"0 5px"}}>Be Ready To Buy... How Much Can You Borrow?</span>
                    <Button variant="outline-danger" style={{borderRadius:"30px"}}>Get Pre-Approved</Button>
                </Container>
                <div style={{width:"100%",position:"relative"}}>
                    <Image src="https://static.rdc.moveaws.com/images/hero/nyc/hp-hero-ny-desktop.jpg" fluid style={{width:"100%",minHeight:"400px"}} />
                    <MainDiv>
                        <h1 style={{fontSize:"3.5em"}}>The Home of Home Search℠</h1>
                        <MainP>With the most complete source of homes for sale & real estate near you</MainP>
                        <NavUl>
                            <NavLi>BUY</NavLi>
                            <NavLi>RENT</NavLi>
                            <NavLi>JUST SOLD</NavLi>
                            <NavLi>HOME VALUE</NavLi>
                        </NavUl>
                        <InputGroup style={{marginRight: "6px"}}>

                            <FormControl placeholder="New York, NYC" id={"main_search"} onChange={e => this.onSearchClick(e)}/>
                            <InputGroup.Append>
                                <Link to={`/search/${this.state.searchValue}`}>
                                <Button variant="danger" onClick={(e) =>
                                 this.onSearchClick(e)
                                }><i className="fas fa-search"/></Button>
                                </Link>
                            </InputGroup.Append>
                        </InputGroup>

                    </MainDiv>
                </div>
            </div>
        )
    }

    onSearchClick(e) {
        // const value = document.getElementById('main_search').value.toLowerCase();
        this.setState({searchValue: e.target.value},console.log(e.target.value));    }
}


// style={{width:"100%",
//     backgroundImage:'url("https://static.rdc.moveaws.com/images/hero/nyc/hp-hero-ny-desktop.jpg")',
//     height:"500px",
//     minHeight:"400px"}}

// document.getElementById('main_search').value.toLowerCase()