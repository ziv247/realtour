import Builder from './builder';

function getApartments(country = "", city = "", minPrice = -1, maxPrice = -1, minNumRooms = -1, maxNumRooms = -1, minNumBaths = -1, maxNumBaths = -1, status = "", type = "", page = 1, size = 10) {
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

export { getApartments, getApartmentById }