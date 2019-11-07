import React from 'react';
import {apartments} from "../../app_data/apatments";
import Card from "./card";
import {
    ButtonToolbar,
    Container,
    Form,
    FormControl,
    InputGroup,
    Button
} from "react-bootstrap";
import PriceComponent from "./searchBar/priceComponent";



class Gallery extends React.Component{
    render() {

        return(
            <Container fluid={true}>
                <div>
                    <Form inline>
                        <InputGroup style={{marginRight:"6px"}}>

                            <FormControl placeholder="Search"/>
                            <InputGroup.Append>
                                <Button variant="danger"><i className="fas fa-search"/></Button>
                            </InputGroup.Append>
                        </InputGroup>
                        <ButtonToolbar>
                            {['Price', 'Property Type', 'beds', 'baths', 'More Filters'].map(
                                variant => (
                                   <PriceComponent/>
                                ),
                            )}
                        </ButtonToolbar>
                    </Form>
                </div>
                <div className={'row'}>
                    {apartments.map((item,i)=><Card item={item} key={i}/>)}
               </div>
            </Container>
        )

    }

}

export default Gallery;
