"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CheckoutsV3Api {
    constructor(request) {
        this.request = request;
    }
    getCheckout(checkoutId, query) {
        return this.request.get({
            path: `v3/checkouts/${checkoutId}`,
            query,
        });
    }
    updateCheckout(checkoutId, requestBody) {
        return this.request.put({
            path: `v3/checkouts/${checkoutId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    addCheckoutDiscount(requestBody) {
        return this.request.post({
            path: 'v3/checkouts/{checkoutId}/discounts',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    addCheckoutBillingAddress(requestBody) {
        return this.request.post({
            path: 'v3/checkouts/{checkoutId}/billing-address',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateCheckoutBillingAddress(requestBody) {
        return this.request.put({
            path: 'v3/checkouts/{checkoutId}/billing-address/{addressId}',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    addCheckoutConsignment(requestBody, query) {
        return this.request.post({
            path: 'v3/checkouts/{checkoutId}/consignments',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    updateCheckoutConsignment(checkoutId, consignmentId, requestBody, query) {
        return this.request.put({
            path: `v3/checkouts/${checkoutId}/consignments/${consignmentId}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    deleteCheckoutConsignment(checkoutId, consignmentId, requestBody) {
        return this.request.delete({
            path: `v3/checkouts/${checkoutId}/consignments/${consignmentId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    addCheckoutCoupon(requestBody) {
        return this.request.post({
            path: 'v3/checkouts/{checkoutId}/coupons',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCheckoutCoupon(requestBody) {
        return this.request.delete({
            path: 'v3/checkouts/{checkoutId}/coupons/{couponCode}',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    checkoutsFeesByCheckoutIdPost(requestBody) {
        return this.request.post({
            path: 'v3/checkouts/{checkoutId}/fees',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    checkoutsFeesByCheckoutIdPut(requestBody) {
        return this.request.put({
            path: 'v3/checkouts/{checkoutId}/fees',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    checkoutsFeesByCheckoutIdDelete(requestBody) {
        return this.request.delete({
            path: 'v3/checkouts/{checkoutId}/fees',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createOrder() {
        return this.request.post({
            path: 'v3/checkouts/{checkoutId}/orders',
        });
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
    createCheckoutToken(checkoutId, requestBody) {
        return this.request.post({
            path: `v3/checkouts/${checkoutId}/token`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
exports.default = CheckoutsV3Api;
