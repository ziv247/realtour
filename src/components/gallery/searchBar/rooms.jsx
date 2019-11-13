import React, {Component} from "react";
import {DropdownHeader} from "./filterbarStyle";
import {Col, Container, Dropdown, Row} from "react-bootstrap";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import './searchFilterStyle.css';

export default class RoomsFilter extends Component {

    constructor(props){
        super(props);
        this.state ={
            checked:"any"
        };
    }

    render() {
        const {type} = this.props;

        return (

            <Dropdown>
                <Dropdown.Toggle
                    variant="outline-secondary"
                    id="dropdown-basic"
                    style={{margin: "16px 6px 16px 0px"}}>
                    {type}
                </Dropdown.Toggle>

                <DropdownMenu style={{width: "max-content", paddingTop: 0, top: "3px"}}>
                    <Dropdown.Header style={DropdownHeader}>{type+"rooms"}</Dropdown.Header>
                    <Container fluid={true}>
                        <Row>
                            <Col className={'radio checked'} id={"any"} onClick={(e)=>this.onCheck(e)}><div>Any</div></Col>
                            <Col className={'radio'} id={type+"2"} onClick={(e)=>this.onCheck(e)}><div>1+</div></Col>
                            <Col className={'radio'} id={type+"3"} onClick={(e)=>this.onCheck(e)}><div>2+</div></Col>
                            <Col className={'radio'} id={type+"4"} onClick={(e)=>this.onCheck(e)}><div>3+</div></Col>
                            <Col className={'radio'} id={type+"5"} onClick={(e)=>this.onCheck(e)}><div>4+</div></Col>
                        </Row>


                    </Container>
                </DropdownMenu>
            </Dropdown>
        )
    }
    onCheck = (e) =>{
        console.log(e.target.id);
        document.getElementById(this.state.checked).classList.remove('checked');
        document.getElementById(e.target.id).classList.add('checked');
        this.setState({checked:e.target.id});
        console.log(this.state.checked);

    }
}