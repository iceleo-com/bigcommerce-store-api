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
    getCountriesCount() {
        return this.request.get({
            path: 'v2/countries/count',
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
exports.GeographyV2Api = GeographyV2Api;
