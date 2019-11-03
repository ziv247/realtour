import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import MenuContentList from "./menuContentList";

export default class NavbarContent extends React.Component{
    render() {
        const {menuContent} = this.props;

        return(
            <div className={'navbar-content'}>
                <Container>
                    <Row>
                        {menuContent.map((item,i)=>

                                <MenuContentList item={item}/>
                            )}
                    </Row>
                </Container>
            </div>
        )
    }
}