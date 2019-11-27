let fullApartmentList, fullCitiesList;


function loadData(onSuccess) {
    getDataFromSever("apartments", fullApartmentList, onSuccess);
}

function getDataFromSever(type, list, onSuccess) {
    fetch(`https://storage.googleapis.com/realtour/${type}-rt.json`, {
            method: 'GET',
        }
    ).then(response => response.json()
    ).then(success => {
            list = success;
            console.log(list);
            if (type === "apartments") {
                getDataFromSever("cities", fullCitiesList, onSuccess);
                fullApartmentList = success;
            }
            if (type === "cities") {
                fullCitiesList = success;
                onSuccess();
            }


        }
    ).catch(error => console.log(error));
}


function getApartments() {
    return fullApartmentList;
}


function getCities() {
    return fullCitiesList;
}


function getApartmentByID(id) {
    return fullApartmentList.find(apartment => apartment.id == id)
}

function getCityByID(id) {
    const ct = fullCitiesList.find(city => city.id == id);
    console.log(ct)
    return ct

}


export {loadData, getCities, getApartments, getApartmentByID,getCityByID, fullApartmentList, fullCitiesList}