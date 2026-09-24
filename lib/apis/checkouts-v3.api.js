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
exports.CheckoutsV3Api = exports.CheckoutsV3ApiSpecs = void 0;
exports.CheckoutsV3ApiSpecs = __importStar(require("../generated/checkouts-v3"));
class CheckoutsV3Api {
    constructor(request) {
        this.request = request;
    }
    checkoutsByCheckoutIdGet(checkoutId, query) {
        return this.request.get({
            path: `v3/checkouts/${checkoutId}`,
            query,
        });
    }
    getCheckout(...args) {
        return this.checkoutsByCheckoutIdGet(...args);
    }
    checkoutsByCheckoutIdPut(checkoutId, requestBody) {
        return this.request.put({
            path: `v3/checkouts/${checkoutId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateCheckout(...args) {
        return this.checkoutsByCheckoutIdPut(...args);
    }
    postStoreHashV3CheckoutsCheckoutIdDiscounts(checkoutId, requestBody) {
        return this.request.post({
            path: `v3/checkouts/${checkoutId}/discounts`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    addCheckoutDiscount(...args) {
        return this.postStoreHashV3CheckoutsCheckoutIdDiscounts(...args);
    }
    checkoutsBillingAddressByCheckoutIdPost(checkoutId, requestBody) {
        return this.request.post({
            path: `v3/checkouts/${checkoutId}/billing-address`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    addCheckoutBillingAddress(...args) {
        return this.checkoutsBillingAddressByCheckoutIdPost(...args);
    }
    checkoutsBillingAddressByCheckoutIdAndAddressIdPut(checkoutId, addressId, requestBody) {
        return this.request.put({
            path: `v3/checkouts/${checkoutId}/billing-address/${addressId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateCheckoutBillingAddress(...args) {
        return this.checkoutsBillingAddressByCheckoutIdAndAddressIdPut(...args);
    }
    checkoutsConsignmentsByCheckoutIdPost(checkoutId, requestBody, query) {
        return this.request.post({
            path: `v3/checkouts/${checkoutId}/consignments`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    addCheckoutConsignment(...args) {
        return this.checkoutsConsignmentsByCheckoutIdPost(...args);
    }
    checkoutsConsignmentsByCheckoutIdAndConsignmentIdPut(checkoutId, consignmentId, requestBody, query) {
        return this.request.put({
            path: `v3/checkouts/${checkoutId}/consignments/${consignmentId}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    updateCheckoutConsignment(...args) {
        return this.checkoutsConsignmentsByCheckoutIdAndConsignmentIdPut(...args);
    }
    checkoutsConsignmentsByCheckoutIdAndConsignmentIdDelete(checkoutId, consignmentId) {
        return this.request.delete({
            path: `v3/checkouts/${checkoutId}/consignments/${consignmentId}`,
        });
    }
    deleteCheckoutConsignment(...args) {
        return this.checkoutsConsignmentsByCheckoutIdAndConsignmentIdDelete(...args);
    }
    checkoutsCouponsByCheckoutIdPost(checkoutId, requestBody) {
        return this.request.post({
            path: `v3/checkouts/${checkoutId}/coupons`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    addCheckoutCoupon(...args) {
        return this.checkoutsCouponsByCheckoutIdPost(...args);
    }
    checkoutsCouponsByCheckoutIdAndCouponCodeDelete(checkoutId, couponCode) {
        return this.request.delete({
            path: `v3/checkouts/${checkoutId}/coupons/${couponCode}`,
        });
    }
    deleteCheckoutCoupon(...args) {
        return this.checkoutsCouponsByCheckoutIdAndCouponCodeDelete(...args);
    }
    createAnOrder(checkoutId) {
        return this.request.post({
            path: `v3/checkouts/${checkoutId}/orders`,
        });
    }
    createOrder(...args) {
        return this.createAnOrder(...args);
    }
    getCheckoutSettings() {
        return this.request.get({
            path: 'v3/checkouts/settings',
        });
    }
    updateCheckoutSettings(requestBody) {
        return this.request.put({
            path: 'v3/checkouts/settings',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    checkoutToken(checkoutId, requestBody) {
        return this.request.post({
            path: `v3/checkouts/${checkoutId}/token`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createCheckoutToken(...args) {
        return this.checkoutToken(...args);
    }
}
exports.CheckoutsV3Api = CheckoutsV3Api;
