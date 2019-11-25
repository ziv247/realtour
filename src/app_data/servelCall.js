function getDataFromSever(type,handleSuccess) {
    fetch(`https://storage.googleapis.com/realtour/${type}-rt.json`, {
            method: 'GET',
        }
    ).then(response => response.json()
    ).then(success => {
        handleSuccess(success);
        }
    ).catch(error => console.log(error));
}

export {getDataFromSever}