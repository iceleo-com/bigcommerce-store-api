"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GeographyV2Api {
    constructor(request) {
        this.request = request;
    }
    getCountries(query) {
        return this.request.get({
            path: 'v2/countries',
            query,
        });
    }
    getCountry(id) {
        return this.request.get({
            path: `v2/countries/${id}`,
        });
    }
    getCountryStates(countryId, query) {
        return this.request.get({
            path: `v2/countries/${countryId}/states`,
            query,
        });
    }
    getCountryState(countryId, id) {
        return this.request.get({
            path: `v2/countries/${countryId}/states/${id}`,
        });
    }
    getCountriesCount() {
        return this.request.get({
            path: 'v2/countries/count',
        });
    }
    getStatesCount() {
        return this.request.get({
            path: 'v2/countries/states/count',
        });
    }
    getStates(query) {
        return this.request.get({
            path: 'v2/countries/states',
            query,
        });
    }
    getCountryStatesCount(countryId) {
        return this.request.get({
            path: `v2/countries/${countryId}/states/count`,
        });
    }
}
exports.default = GeographyV2Api;
