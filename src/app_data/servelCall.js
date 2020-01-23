import Builder from './builder';
import fetcher from '../app_data/api/fetcher';
import axios from 'axios';

async function getApartments(country = null, city = null, minPrice = 0, maxPrice = 0, minNumRooms = 0, maxNumRooms = 0, minNumBaths = 0, maxNumBaths = 0, status = "", type = "", page = 1, size = 10) {
    const url = Builder.allApartment(1, 10)
        .byCountry(country)
        .byCity(city)
        .byPrice(minPrice, maxPrice)
        .numOfRooms(minNumRooms, maxNumRooms)
        .numOfBath(minNumBaths, maxNumBaths)
        .saleStatus(status)
        .propertyType(type)
        .build();
    try {
        const { data } = await fetcher.get(`/apartments/?${url}`);
        return data;
    } catch (error) {
        throw new Error(`Error getting apartments: ${error.message}`);
    }
}

function getApartmentById(apartmentId) {
    const url = `http://localhost:3000/apartments/${apartmentId}`
    const promise = new Promise((res, reg) => {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                res(myJson);
            });
    });
    return promise
}

async function registerCall(data) {
    try {
        const response = await fetcher.post('/register', data);

        return response
    } catch (error) {
        return error.response.data
    }
}

async function loginCall(data) {
    try {
        const response = await fetcher.post('/login', data);
        return response
    } catch (error) {
        // console.error('Error:', error);
        return error.response.data
    }
}

async function getCountries() {
    try {
        const response = await fetcher.get('/countries');
        return response
    } catch (error) {
        return error
    }
}

async function allCountries() {
    try {
        const response = await fetch("https://restcountries.eu/rest/v2/all");
        const countries = await response.json();
        return countries;
    } catch (error) {

    }
}
async function allCities() {
    axios({
        "method": "GET",
        "url": "https://andruxnet-world-cities-v1.p.rapidapi.com/",
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "andruxnet-world-cities-v1.p.rapidapi.com",
            "x-rapidapi-key": "34178736c3msh88992f8753d61ddp1defffjsn7bf3b8abdc7a"
        }, "params": {
            "query": "paris",
            "searchby": "city"
        }
    })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    // try {
    //     const response = await fetch("geodb-free-service.wirefreethought.com/v1/geo/cities");
    //     // const cities = await response.json();
    //     console.log(response.json())
    //     // return cities;
    // } catch (error) {
    //     console.log("ERROR: ", error)
    // }
}

async function getCityByCountryId(countryId) {
    try {
        const response = await fetcher.get(`/city/${countryId}`);
        return response
    } catch (error) {
        return error
    }
}

export { getApartments, getApartmentById, registerCall, loginCall, getCountries, getCityByCountryId, allCountries, allCities }