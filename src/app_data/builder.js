// country, city, minPrice, maxPrice, numRooms, numBath, status, type, page = 1, size = 10

class apartmentBuilder {
    constructor(page, size) {
        this.page = page;
        this.size = size;
        this.params = [];
        this.isFirst = true;
        this.url = `http://localhost:3000/apartments/?`;
    }

    _addAddChar() {
        if (this.isFirst) {
            this.isFirst = false;
        } else {
            this.url += "&"
        }
    }

    byCountry(country) {
        if (country) {
            this._addAddChar();
            this.url += `country=${country}`
        }
        return this
    }

    byCity(city) {
        if (city) {
            this._addAddChar();
            this.url += `city=${city}`;
        }
        return this
    }
    byPrice(minPrice, maxPrice) {
        if (minPrice !== -1 || maxPrice !== -1) {
            this._addAddChar();
            this.url += `price=${minPrice || -1}-${maxPrice || -1}`;
        }
        return this
    }

    numOfRooms(minNumRooms, maxNumRooms) {
        if (minNumRooms !== -1 || maxNumRooms !== -1) {
            this._addAddChar();
            this.url += `numOfRooms=${minNumRooms}-${maxNumRooms}`;
        }
        return this
    }

    numOfBath(minNumBaths, maxNumBaths) {
        if (minNumBaths !== -1 || maxNumBaths !== -1) {
            this._addAddChar();
            this.url += `numOfBaths=${minNumBaths}-${maxNumBaths}`;
        }
        return this
    }

    saleStatus(status) {
        if (status) {
            this._addAddChar();
            this.url += `status=${status}`;
        }
        return this
    }

    propertyType(type) {
        if (type) {
            this._addAddChar();
            this.url += `status=${type}`;
        }
        return this
    }

    build() {
        this._addAddChar();
        this.url += `page=${this.page}`;
        return this.url;
    }
}


class Builder {


    static allApartment(page, size) {
        return new apartmentBuilder(page, size);
    }

}
export default Builder;