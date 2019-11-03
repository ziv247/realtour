import React from 'react';
import {apartments} from "../app_data/apatments";
import Card from "./card";
import {Container} from "react-bootstrap";

class Gallery extends React.Component{
    render() {
        return(
            <Container fluid={true}>
            <div className={'row'}>
                {apartments.map((item,i)=><Card item={item} key={i}/>)}

            </div>
            </Container>
        )
    }

}

export default Gallery;
