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
exports.SettingsV3Api = exports.SettingsV3ApiSpecs = void 0;
exports.SettingsV3ApiSpecs = __importStar(require("../generated/settings-v3"));
class SettingsV3Api {
    constructor(request) {
        this.request = request;
    }
    getAnalyticsProviders(query) {
        return this.request.get({
            path: 'v3/settings/analytics',
            query,
        });
    }
    getAnalyticsProvider(id, query) {
        return this.request.get({
            path: `v3/settings/analytics/${id}`,
            query,
        });
    }
    updateAnalyticsProvider(id, requestBody, query) {
        return this.request.put({
            path: `v3/settings/analytics/${id}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    getSettingsCatalog(query) {
        return this.request.get({
            path: 'v3/settings/catalog',
            query,
        });
    }
    updateSettingsCatalog(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/catalog',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    getSettingsEmailStatuses(query) {
        return this.request.get({
            path: 'v3/settings/email-statuses',
            query,
        });
    }
    updateSettingsEmailStatuses(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/email-statuses',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    createSettingsFaviconImage(requestBody, query) {
        return this.request.post({
            path: 'v3/settings/favicon/image',
            contentType: 'multipart/form-data',
            body: requestBody,
            query,
        });
    }
    getSettingsInventory(query) {
        return this.request.get({
            path: 'v3/settings/inventory',
            query,
        });
    }
    updateSettingsInventory(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/inventory',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    getSettingsInventoryNotifications(query) {
        return this.request.get({
            path: 'v3/settings/inventory/notifications',
            query,
        });
    }
    updateSettingsInventoryNotifications(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/inventory/notifications',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    getSettingsLogo(query) {
        return this.request.get({
            path: 'v3/settings/logo',
            query,
        });
    }
    updateSettingsLogo(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/logo',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    createSettingsLogoImage(requestBody, query) {
        return this.request.post({
            path: 'v3/settings/logo/image',
            contentType: 'multipart/form-data',
            body: requestBody,
            query,
        });
    }
    getSettingsEnabledSearchFilters() {
        return this.request.get({
            path: 'v3/settings/search/filters',
        });
    }
    updateSettingsEnabledSearchFilters(requestBody) {
        return this.request.put({
            path: 'v3/settings/search/filters',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getSettingsAvailableFilters(query) {
        return this.request.get({
            path: 'v3/settings/search/filters/available',
            query,
        });
    }
    getSettingsFiltersContexts(query) {
        return this.request.get({
            path: 'v3/settings/search/filters/contexts',
            query,
        });
    }
    upsertSettingsFiltersContexts(requestBody) {
        return this.request.put({
            path: 'v3/settings/search/filters/contexts',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getSettingsLocale() {
        return this.request.get({
            path: 'v3/settings/store/locale',
        });
    }
    updateSettingsLocale(requestBody) {
        return this.request.put({
            path: 'v3/settings/store/locale',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getSettingsStoreProfile(query) {
        return this.request.get({
            path: 'v3/settings/store/profile',
            query,
        });
    }
    updateSettingsStoreProfile(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/store/profile',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    getSettingsStorefrontCategory(query) {
        return this.request.get({
            path: 'v3/settings/storefront/category',
            query,
        });
    }
    updateSettingsStorefrontCategory(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/storefront/category',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    getSettingsStorefrontProduct(query) {
        return this.request.get({
            path: 'v3/settings/storefront/product',
            query,
        });
    }
    updateSettingsStorefrontProduct(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/storefront/product',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    getSettingsRobotsTxt(query) {
        return this.request.get({
            path: 'v3/settings/storefront/robotstxt',
            query,
        });
    }
    updateSettingsRobotsTxt(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/storefront/robotstxt',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    getSettingsStorefrontSearch(query) {
        return this.request.get({
            path: 'v3/settings/storefront/search',
            query,
        });
    }
    updateSettingsStorefrontSearch(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/storefront/search',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    getSettingsStorefrontSecurity(query) {
        return this.request.get({
            path: 'v3/settings/storefront/security',
            query,
        });
    }
    updateSettingsStorefrontSecurity(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/storefront/security',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    getSettingsStorefrontSeo(query) {
        return this.request.get({
            path: 'v3/settings/storefront/seo',
            query,
        });
    }
    updateSettingsStorefrontSeo(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/storefront/seo',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    getSettingsStorefrontStatus(query) {
        return this.request.get({
            path: 'v3/settings/storefront/status',
            query,
        });
    }
    updateSettingsStorefrontStatus(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/storefront/status',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    getSettingsMeasurementUnits(query) {
        return this.request.get({
            path: 'v3/settings/store/units-of-measurement',
            query,
        });
    }
    updateSettingsMeasurementUnits(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/store/units-of-measurement',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
}
exports.SettingsV3Api = SettingsV3Api;
