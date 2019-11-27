import React from 'react';
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
import RoomsFilter from "./searchBar/rooms";
import {fullApartmentList, fullCitiesList, getApartments, getCities, getDataFromSever} from "../../app_data/servelCall";


export default class Gallery extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            citiesList: fullCitiesList,
            apartmentList: fullApartmentList,
            searchValue: "",
            price: [0, 0],
            number_of_beds: [0, 0],
            number_of_rooms: [0, 0],
            loading: false
        };

        console.log(getApartments());
        console.log(getCities());
        if (props.location.aboutProps) {
            console.log("Success: ", props.location.aboutProps)
        }
    }


    handleSuccessApartment = (apartments) => {
        this.setState({apartmentList: apartments});

    };

    handleSuccessCities = (cities) => {
        this.setState({citiesList: cities, loading: true});
    };

    componentDidMount() {
        const {match: {params}} = this.props;
        this.setState({searchValue: params.searchValue});
        this.handleSuccessApartment(fullApartmentList);
        this.handleSuccessCities(fullCitiesList);
    }

    render() {
        let {apartmentList} = this.state;
        apartmentList = this.mainFilter(apartmentList);

        return (
            <Container fluid={true}>
                <div>
                    <Form inline>
                        <InputGroup style={{marginRight: "6px"}}>

                            <FormControl placeholder="Search" id={"search"}/>
                            <InputGroup.Append>
                                <Button variant="danger" onClick={() => {
                                    this.searchByText()
                                }}><i className="fas fa-search"/></Button>
                            </InputGroup.Append>
                        </InputGroup>
                        <ButtonToolbar>

                            <PriceComponent searchByPrice={this.searchByNumber}/>
                            <RoomsFilter type={'Bed'} searchByPrice={this.searchByNumber}/>
                            <RoomsFilter type={'Bath'} searchByPrice={this.searchByNumber}/>
                            {['Property Type', 'More Filters'].map(
                                variant => (
                                    <PriceComponent searchByPrice={this.searchByNumber} key={variant + 1}/>
                                ),
                            )}
                        </ButtonToolbar>
                    </Form>
                </div>
                <div className={'row'}>
                    {apartmentList.map((item, i) => <Card item={item} key={i}/>)}
                </div>
            </Container>
        )

    }

    filterByNumber = (typeStr, type, apartmentList) => {
        type[0] <= 0 && type[1] > 0 ? apartmentList = apartmentList.filter((apartment) => apartment[typeStr] <= type[1])
            :
            type[0] > 0 && type[1] <= 0 ? apartmentList = apartmentList.filter((apartment) => apartment[typeStr] >= type[0])
                :
                apartmentList = apartmentList.filter((apartment) => apartment[typeStr] <= type[1] && apartment[typeStr] >= type[0]);
        return apartmentList;
    };

    searchByNumber = (min, max, type) => {
        console.log(type + " " + min + " " + max);
        type === "price" ?
            this.setState({price: [min, max]})
            :
            type === "number_of_beds" ?
                this.setState({number_of_beds: [min, max]})
                :
                type === "number_of_rooms" &&
                this.setState({number_of_rooms: [min, max]})

    };

    searchByText = () => {
        const value = document.getElementById('search').value.toLowerCase();
        this.setState({searchValue: value});
    };


    mainFilter(apartmentList) {
        let {citiesList, searchValue, price, number_of_beds, number_of_rooms} = this.state;

        if (searchValue && this.state.loading) {
            let filteredList = [];
            for (let i = 0; i < this.state.apartmentList.length; i++) {
                // eslint-disable-next-line no-loop-func
                let city = citiesList.find(c => c.id === apartmentList[i].cityId);
                city = city.label.toLowerCase();
                if (apartmentList[i].address.toLocaleLowerCase().includes(searchValue) || city.includes(searchValue)) {
                    filteredList.push(this.state.apartmentList[i]);
                }
            }
            apartmentList = filteredList;
        }

        if (price[0] > 0 || price[1] > 0) {
            apartmentList = this.filterByNumber("price", price, apartmentList);
        }

        if (number_of_beds[0] > 0 || number_of_beds[1] > 0) {
            apartmentList = this.filterByNumber("number_of_beds", number_of_beds, apartmentList);
        }

        if (number_of_rooms[0] > 0 || number_of_rooms[1] > 0) {
            apartmentList = this.filterByNumber("number_of_rooms", number_of_rooms, apartmentList);
        }
        return apartmentList

    }
}

