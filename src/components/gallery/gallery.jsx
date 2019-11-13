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
import {cities} from "../../app_data/cities";
import RoomsFilter from "./searchBar/rooms";



class Gallery extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            apartmentList:apartments,
            searchValue:""
        }
    }

    render() {
        const {apartmentList} = this.state;
        return(
            <Container fluid={true}>
                <div>
                    <Form inline>
                        <InputGroup style={{marginRight:"6px"}}>

                            <FormControl placeholder="Search" id={"search"}/>
                            <InputGroup.Append>
                                <Button variant="danger" onClick={()=>{this.searchByText()}}><i className="fas fa-search"/></Button>
                            </InputGroup.Append>
                        </InputGroup>
                        <ButtonToolbar>

                            <PriceComponent searchByPrice={this.searchByPrice} />
                            <RoomsFilter type={'Bed'}/>
                            <RoomsFilter type={'Bath'}/>
                            {['Property Type', 'More Filters'].map(
                                variant => (
                                   <PriceComponent searchByPrice={this.searchByPrice} />
                                ),
                            )}
                        </ButtonToolbar>
                    </Form>
                </div>
                <div className={'row'}>
                    {apartmentList.map((item,i)=><Card item={item} key={i}/>)}
               </div>
            </Container>
        )

    }
    searchByPrice= (min,max) =>{
        let filteredList =[];

        min<0 && max<0 ? this.setState({apartmentList:apartments}):
        min<0 && max>0 ? apartments.map((apartment,i)=>{apartment.price <= max && filteredList.push(apartment);}):
        min>0 && max<0 ? apartments.map((apartment,i)=>{apartment.price >= min && filteredList.push(apartment);}):
            apartments.map((apartment,i)=>{apartment.price <= max && apartment.price >= min && filteredList.push(apartment);});
        this.setState({apartmentList:filteredList});
    };

    searchByText = () => {
        let filteredList = [];
        const value = document.getElementById('search').value.toLowerCase();
        for (let i = 0; i<apartments.length;i++){
            const city = cities.find(city => city.id===apartments[i].cityId).label.toLowerCase();
            if (apartments[i].address.toLocaleLowerCase().includes(value)||city.includes(value)){
                filteredList.push(apartments[i]);
            }
            console.log(filteredList);
            this.setState({apartmentList:filteredList});
        }
    };

    searchFunc=(apartment)=>{
        const value = document.getElementById('search').value;
        if (apartment.address.includes(value)){
            return true;
        }

        // const city = cities.map(city => city.id === apartment.cityId &&  city.label);
        return cities.includes(value);

    }

}

export default Gallery;
