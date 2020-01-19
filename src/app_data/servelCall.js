import Builder from './builder';
import fetcher from '../app_data/api/fetcher';
import Cookies from 'js-cookie'
async function getApartments(country = "", city = "", minPrice = -1, maxPrice = -1, minNumRooms = -1, maxNumRooms = -1, minNumBaths = -1, maxNumBaths = -1, status = "", type = "", page = 1, size = 10) {
    const url = Builder.allApartment(1, 10)
        .byCountry(country)
        .byCity(city)
        .byPrice(minPrice, maxPrice)
        .numOfRooms(minNumRooms, maxNumRooms)
        .numOfBath(minNumBaths, maxNumBaths)
        .saleStatus(status)
        .propertyType(type)
        .build();
    console.log(url);
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
                console.log(myJson);
                res(myJson);
            });
    });
    return promise
}

async function registerCall(data) {
    try {
        const response = await fetcher.post('/register', data);
        console.log('Success:', response);
        // Cookies.set('user', response.data);
        console.log("Cookie! ", Cookies.get('user'))

        return response
    } catch (error) {
        // console.error('Error:', error);
        return error.response.data
    }
}

async function loginCall(data) {
    try {
        const response = await fetcher.post('/login', data);
        console.log('Success:', response);
        // Cookies.set('user', response.data);
        console.log("Cookie! ", Cookies.get('user'))

        return response
    } catch (error) {
        // console.error('Error:', error);
        return error.response.data
    }
}

// function loginCall(data) {
//     fetch('http://localhost:3000/login', {
//         method: 'POST', // or 'PUT'
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log('Success:', data);

//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
// }

export { getApartments, getApartmentById, registerCall, loginCall }