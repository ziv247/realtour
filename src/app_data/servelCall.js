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

async function getApartmentsByUserId(userId) {
    try {
        const response = await fetcher.get(`/users/${userId}/apartments`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    }


    // const url = `http://localhost:3000/users/${userId}/apartments`
    // const promise = new Promise((res, reg) => {
    //     fetch(url)
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((myJson) => {
    //             res(myJson);
    //         });
    // });
    // return promise
}

async function getImage(url) {
    try {
        const response = await fetcher.get(url);
        console.log("@@@@@    ", response);
        return response
    } catch (error) {
        console.error(error);
    }
    // return new Promise((resolve, reject) => {
    //     var request = new XMLHttpRequest();
    //     request.open("GET", `http://localhost:3000/${url}`, true);
    //     request.responseType = "blob";
    //     request.onload = function () {
    //         var reader = new FileReader();
    //         reader.readAsDataURL(request.response);
    //         reader.onload = function (e) {
    //             resolve(new File([e.target.result], url, { type: "image/jpeg" }));
    //         };
    //     };
    //     request.send();
    // });
}

async function registerCall(data) {
    try {
        const response = await fetcher.post('/register', data);

        return response
    } catch (error) {
        return error.response.data
    }
}

async function addApartmentCall(data) {
    try {
        const response = await fetcher.post('/apartments', data);

        return response
    } catch (error) {
        return error
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
        const response = await fetcher.get("/country");
        const countries = await response.json();
        return countries;
    } catch (error) {

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
async function deleteImage(image_id) {
    try {
        const response = await fetcher.delete(`/apartments/image/${image_id}`);
        return response
    } catch (error) {
        return error
    }
}

export { deleteImage, getApartments, getApartmentById, registerCall, loginCall, getCountries, getCityByCountryId, allCountries, addApartmentCall, getApartmentsByUserId, getImage }