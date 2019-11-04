import React from "react";
import {Container, Row} from "react-bootstrap";
import MenuContentList from "./menuContentList";

export default class NavbarContent extends React.Component{

    constructor(prop){
        super(prop);
        this.state = {
            headerHeight:'43px'
        }
    }


    render() {
        const {menuContent} = this.props;
        return(
            <div onMouseOver={this.props.mouseOver} className={'navbar-content'} style={{top:this.state.headerHeight}}>
                <Container>
                    <Row>
                        {menuContent.map((item,i)=>
                                <MenuContentList item={item} key={i}/>
                            )}
                    </Row>
                </Container>
            </div>
        )
    }
}