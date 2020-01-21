import Builder from './builder';
import fetcher from '../app_data/api/fetcher';

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

async function getCityByCountryId(countryId) {
    try {
        const response = await fetcher.get(`/city/${countryId}`);
        return response
    } catch (error) {
        return error
    }
}

export { getApartments, getApartmentById, registerCall, loginCall, getCountries, getCityByCountryId }