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
    getSettingsAnalytics(query) {
        return this.request.get({
            path: 'v3/settings/analytics',
            query,
        });
    }
    getAnalyticsProviders(...args) {
        return this.getSettingsAnalytics(...args);
    }
    getSettingsAnalyticsById(id, query) {
        return this.request.get({
            path: `v3/settings/analytics/${id}`,
            query,
        });
    }
    getAnalyticsProvider(...args) {
        return this.getSettingsAnalyticsById(...args);
    }
    putSettingsAnalyticsById(id, requestBody, query) {
        return this.request.put({
            path: `v3/settings/analytics/${id}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    updateAnalyticsProvider(...args) {
        return this.putSettingsAnalyticsById(...args);
    }
    getSettingsCatalog(query) {
        return this.request.get({
            path: 'v3/settings/catalog',
            query,
        });
    }
    putSettingsCatalog(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/catalog',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    updateSettingsCatalog(...args) {
        return this.putSettingsCatalog(...args);
    }
    getSettingsEmailsEnabled(query) {
        return this.request.get({
            path: 'v3/settings/email-statuses',
            query,
        });
    }
    getSettingsEmailStatuses(...args) {
        return this.getSettingsEmailsEnabled(...args);
    }
    putSettingsTransactionalEmailsEnabled(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/email-statuses',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    updateSettingsEmailStatuses(...args) {
        return this.putSettingsTransactionalEmailsEnabled(...args);
    }
    postFaviconLogoImage(requestBody, query) {
        return this.request.post({
            path: 'v3/settings/favicon/image',
            contentType: 'multipart/form-data',
            body: requestBody,
            query,
        });
    }
    createSettingsFaviconImage(...args) {
        return this.postFaviconLogoImage(...args);
    }
    getSettingsInventoryNotifications(query) {
        return this.request.get({
            path: 'v3/settings/inventory/notifications',
            query,
        });
    }
    putSettingsInventoryNotifications(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/inventory/notifications',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    updateSettingsInventoryNotifications(...args) {
        return this.putSettingsInventoryNotifications(...args);
    }
    getSettingsLogo(query) {
        return this.request.get({
            path: 'v3/settings/logo',
            query,
        });
    }
    putSettingsLogo(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/logo',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    updateSettingsLogo(...args) {
        return this.putSettingsLogo(...args);
    }
    postSettingsLogoImage(requestBody, query) {
        return this.request.post({
            path: 'v3/settings/logo/image',
            contentType: 'multipart/form-data',
            body: requestBody,
            query,
        });
    }
    createSettingsLogoImage(...args) {
        return this.postSettingsLogoImage(...args);
    }
    getEnabled() {
        return this.request.get({
            path: 'v3/settings/search/filters',
        });
    }
    getSettingsEnabledSearchFilters(...args) {
        return this.getEnabled(...args);
    }
    updateEnabled(requestBody) {
        return this.request.put({
            path: 'v3/settings/search/filters',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateSettingsEnabledSearchFilters(...args) {
        return this.updateEnabled(...args);
    }
    getAvailable(query) {
        return this.request.get({
            path: 'v3/settings/search/filters/available',
            query,
        });
    }
    getSettingsAvailableFilters(...args) {
        return this.getAvailable(...args);
    }
    getContexts(query) {
        return this.request.get({
            path: 'v3/settings/search/filters/contexts',
            query,
        });
    }
    getSettingsFiltersContexts(...args) {
        return this.getContexts(...args);
    }
    upsertContexts(requestBody) {
        return this.request.put({
            path: 'v3/settings/search/filters/contexts',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    upsertSettingsFiltersContexts(...args) {
        return this.upsertContexts(...args);
    }
    getSettingsStoreLocale(query) {
        return this.request.get({
            path: 'v3/settings/store/locale',
            query,
        });
    }
    getSettingsLocale(...args) {
        return this.getSettingsStoreLocale(...args);
    }
    putSettingsStoreLocale(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/store/locale',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    updateSettingsLocale(...args) {
        return this.putSettingsStoreLocale(...args);
    }
    getSettingsStoreProfile(query) {
        return this.request.get({
            path: 'v3/settings/store/profile',
            query,
        });
    }
    putSettingsStoreProfile(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/store/profile',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    updateSettingsStoreProfile(...args) {
        return this.putSettingsStoreProfile(...args);
    }
    getSettingsStorefrontCategory(query) {
        return this.request.get({
            path: 'v3/settings/storefront/category',
            query,
        });
    }
    putSettingsStorefrontCategory(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/storefront/category',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    updateSettingsStorefrontCategory(...args) {
        return this.putSettingsStorefrontCategory(...args);
    }
    getSettingsStorefrontProduct(query) {
        return this.request.get({
            path: 'v3/settings/storefront/product',
            query,
        });
    }
    putSettingsStorefrontProduct(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/storefront/product',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    updateSettingsStorefrontProduct(...args) {
        return this.putSettingsStorefrontProduct(...args);
    }
    getSettingsStorefrontRobotstxt(query) {
        return this.request.get({
            path: 'v3/settings/storefront/robotstxt',
            query,
        });
    }
    getSettingsRobotsTxt(...args) {
        return this.getSettingsStorefrontRobotstxt(...args);
    }
    putSettingsStorefrontRobotstxt(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/storefront/robotstxt',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    updateSettingsRobotsTxt(...args) {
        return this.putSettingsStorefrontRobotstxt(...args);
    }
    getSettingsStorefrontSearch(query) {
        return this.request.get({
            path: 'v3/settings/storefront/search',
            query,
        });
    }
    putSettingsStorefrontSearch(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/storefront/search',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    updateSettingsStorefrontSearch(...args) {
        return this.putSettingsStorefrontSearch(...args);
    }
    getSettingsStorefrontSecurity(query) {
        return this.request.get({
            path: 'v3/settings/storefront/security',
            query,
        });
    }
    putSettingsStorefrontSecurity(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/storefront/security',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    updateSettingsStorefrontSecurity(...args) {
        return this.putSettingsStorefrontSecurity(...args);
    }
    getSettingsStorefrontSeo(query) {
        return this.request.get({
            path: 'v3/settings/storefront/seo',
            query,
        });
    }
    putSettingsStorefrontSeo(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/storefront/seo',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    updateSettingsStorefrontSeo(...args) {
        return this.putSettingsStorefrontSeo(...args);
    }
    getSettingsStorefrontStatus(query) {
        return this.request.get({
            path: 'v3/settings/storefront/status',
            query,
        });
    }
    putSettingsStorefrontStatus(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/storefront/status',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    updateSettingsStorefrontStatus(...args) {
        return this.putSettingsStorefrontStatus(...args);
    }
    getSettingsInventory(query) {
        return this.request.get({
            path: 'v3/settings/inventory',
            query,
        });
    }
    putSettingsInventory(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/inventory',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    updateSettingsInventory(...args) {
        return this.putSettingsInventory(...args);
    }
    getSettingsStoreUnitsOfMeasurement(query) {
        return this.request.get({
            path: 'v3/settings/store/units-of-measurement',
            query,
        });
    }
    getSettingsMeasurementUnits(...args) {
        return this.getSettingsStoreUnitsOfMeasurement(...args);
    }
    putSettingsStoreUnitsOfMeasurement(requestBody, query) {
        return this.request.put({
            path: 'v3/settings/store/units-of-measurement',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    updateSettingsMeasurementUnits(...args) {
        return this.putSettingsStoreUnitsOfMeasurement(...args);
    }
}
exports.SettingsV3Api = SettingsV3Api;
