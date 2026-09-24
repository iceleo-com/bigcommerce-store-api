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
exports.CurrenciesV2Api = exports.CurrenciesV2ApiSpecs = void 0;
exports.CurrenciesV2ApiSpecs = __importStar(require("../generated/currencies-v2"));
class CurrenciesV2Api {
    constructor(request) {
        this.request = request;
    }
    getAllCurrencies(query) {
        return this.request.get({
            path: 'v2/currencies',
            query,
        });
    }
    getCurrencies(...args) {
        return this.getAllCurrencies(...args);
    }
    createAcurrency(requestBody) {
        return this.request.post({
            path: 'v2/currencies',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createCurrency(...args) {
        return this.createAcurrency(...args);
    }
    deleteAllCurrencies() {
        return this.request.delete({
            path: 'v2/currencies',
        });
    }
    deleteCurrencies(...args) {
        return this.deleteAllCurrencies(...args);
    }
    getAcurrency(id) {
        return this.request.get({
            path: `v2/currencies/${id}`,
        });
    }
    getCurrency(...args) {
        return this.getAcurrency(...args);
    }
    updateAcurrency(id, requestBody) {
        return this.request.put({
            path: `v2/currencies/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateCurrency(...args) {
        return this.updateAcurrency(...args);
    }
    deleteAcurrency(id) {
        return this.request.delete({
            path: `v2/currencies/${id}`,
        });
    }
    deleteCurrency(...args) {
        return this.deleteAcurrency(...args);
    }
}
exports.CurrenciesV2Api = CurrenciesV2Api;
