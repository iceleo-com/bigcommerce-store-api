"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaxClassesV2Api {
    constructor(request) {
        this.request = request;
    }
    getTaxClasses(query) {
        return this.request.get({
            path: 'v2/tax_classes',
            query,
        });
    }
    getTaxClass() {
        return this.request.get({
            path: 'v2/tax_classes/{id}',
        });
    }
}
exports.default = TaxClassesV2Api;
