// country, city, minPrice, maxPrice, numRooms, numBath, status, type, page = 1, size = 10

class apartmentBuilder {
    constructor(page, size) {
        this.page = page;
        this.size = size;
        this.params = [];
        this.isFirst = true;
        this.params = '';
    }

    _addAddChar() {
        if (this.isFirst) {
            this.isFirst = false;
        } else {
            this.params += "&"
        }
    }

    byCountry(country) {
        if (country) {
            this._addAddChar();
            this.params += `country=${country}`
        }
        return this
    }

    byCity(city) {
        if (city) {
            this._addAddChar();
            this.params += `city=${city}`;
        }
        return this
    }
    byPrice(minPrice, maxPrice) {
        if (minPrice !== -1 || maxPrice !== -1) {
            this._addAddChar();
            this.params += `price=${minPrice || -1}-${maxPrice || -1}`;
        }
        return this
    }

    numOfRooms(minNumRooms, maxNumRooms) {
        if (minNumRooms !== -1 || maxNumRooms !== -1) {
            this._addAddChar();
            this.params += `numOfRooms=${minNumRooms}-${maxNumRooms}`;
        }
        return this
    }

    numOfBath(minNumBaths, maxNumBaths) {
        if (minNumBaths !== -1 || maxNumBaths !== -1) {
            this._addAddChar();
            this.params += `numOfBaths=${minNumBaths}-${maxNumBaths}`;
        }
        return this
    }

    saleStatus(status) {
        if (status) {
            this._addAddChar();
            this.params += `status=${status}`;
        }
        return this
    }

    propertyType(type) {
        if (type) {
            this._addAddChar();
            this.params += `status=${type}`;
        }
        return this
    }

    build() {
        this._addAddChar();
        this.params += `page=${this.page}`;
        return this.params;
    }
}


class Builder {


    static allApartment(page, size) {
        return new apartmentBuilder(page, size);
    }

}
export default Builder;