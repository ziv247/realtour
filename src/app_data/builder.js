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
            this.params += `country=${country.id}`
        }
        return this
    }

    byCity(city) {
        if (city) {
            this._addAddChar();
            this.params += `city=${city.id}`;
        }
        return this
    }
    byPrice(minPrice, maxPrice) {
        if (minPrice !== -1) {
            this._addAddChar();
            this.params += `minPrice=${minPrice}`;
        }
        if (maxPrice !== -1) {
            this._addAddChar();
            this.params += `maxPrice=${maxPrice}`;
        }
        return this
    }

    numOfRooms(minNumRooms, maxNumRooms) {
        if (minNumRooms !== 0) {
            this._addAddChar();
            this.params += `minNumRooms=${minNumRooms}`;
        }
        if (maxNumRooms !== 0) {
            this._addAddChar();
            this.params += `maxNumRooms=${maxNumRooms}`;
        }

        return this
    }

    numOfBath(minNumBaths, maxNumBaths) {
        if (minNumBaths !== 0) {
            this._addAddChar();
            this.params += `minNumBaths=${minNumBaths}`;
        }
        if (maxNumBaths !== 0) {
            this._addAddChar();
            this.params += `maxNumBaths=${maxNumBaths}`;
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