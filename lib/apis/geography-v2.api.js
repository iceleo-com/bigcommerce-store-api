"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeographyV2Api = exports.GeographyV2ApiSpecs = void 0;
exports.GeographyV2ApiSpecs = __importStar(require("../generated/geography-v2"));
class GeographyV2Api {
    constructor(request) {
        this.request = request;
    }
    getAllCountries(query) {
        return this.request.get({
            path: 'v2/countries',
            query,
        });
    }
    getCountries(...args) {
        return this.getAllCountries(...args);
    }
    getAcountry(id) {
        return this.request.get({
            path: `v2/countries/${id}`,
        });
    }
    getCountry(...args) {
        return this.getAcountry(...args);
    }
    getAllCountryStates(countryId, query) {
        return this.request.get({
            path: `v2/countries/${countryId}/states`,
            query,
        });
    }
    getCountryStates(...args) {
        return this.getAllCountryStates(...args);
    }
    getAstate(countryId, id) {
        return this.request.get({
            path: `v2/countries/${countryId}/states/${id}`,
        });
    }
    getCountryState(...args) {
        return this.getAstate(...args);
    }
    getCountCountries() {
        return this.request.get({
            path: 'v2/countries/count',
        });
    }
    getCountriesCount(...args) {
        return this.getCountCountries(...args);
    }
    getCountStates() {
        return this.request.get({
            path: 'v2/countries/states/count',
        });
    }
    getStatesCount(...args) {
        return this.getCountStates(...args);
    }
    getAllStates(query) {
        return this.request.get({
            path: 'v2/countries/states',
            query,
        });
    }
    getStates(...args) {
        return this.getAllStates(...args);
    }
    getCountCountryStates(countryId) {
        return this.request.get({
            path: `v2/countries/${countryId}/states/count`,
        });
    }
    getCountryStatesCount(...args) {
        return this.getCountCountryStates(...args);
    }
}
exports.GeographyV2Api = GeographyV2Api;
