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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_service_1 = __importDefault(require("./helpers/request/request-service"));
const currencies_v2_api_1 = require("./apis/currencies-v2.api");
const customers_v2_api_1 = require("./apis/customers-v2.api");
const geography_v2_api_1 = require("./apis/geography-v2.api");
const marketing_v2_api_1 = require("./apis/marketing-v2.api");
const orders_v2_oas2_api_1 = require("./apis/orders-v2-oas2.api");
const methods_v2_api_1 = require("./apis/methods-v2.api");
const shipping_v2_api_1 = require("./apis/shipping-v2.api");
const store_content_v2_api_1 = require("./apis/store-content-v2.api");
const store_information_v2_api_1 = require("./apis/store-information-v2.api");
const tax_classes_v2_api_1 = require("./apis/tax-classes-v2.api");
const abandoned_carts_v3_api_1 = require("./apis/abandoned-carts-v3.api");
const carts_v3_api_1 = require("./apis/carts-v3.api");
const brands_v3_api_1 = require("./apis/brands-v3.api");
const categories_v3_api_1 = require("./apis/categories-v3.api");
const category_trees_v3_api_1 = require("./apis/category-trees-v3.api");
const product_modifiers_v3_api_1 = require("./apis/product-modifiers-v3.api");
const product_variant_options_v3_api_1 = require("./apis/product-variant-options-v3.api");
const product_variants_v3_api_1 = require("./apis/product-variants-v3.api");
const products_v3_api_1 = require("./apis/products-v3.api");
const channels_v3_api_1 = require("./apis/channels-v3.api");
const checkouts_v3_api_1 = require("./apis/checkouts-v3.api");
const current_customer_api_1 = require("./apis/current-customer.api");
const custom_template_associations_v3_api_1 = require("./apis/custom-template-associations-v3.api");
const customer_login_api_1 = require("./apis/customer-login.api");
const customers_v3_api_1 = require("./apis/customers-v3.api");
const email_templates_v3_api_1 = require("./apis/email-templates-v3.api");
const inventory_v3_api_1 = require("./apis/inventory-v3.api");
const locations_v3_api_1 = require("./apis/locations-v3.api");
const orders_v3_api_1 = require("./apis/orders-v3.api");
const page_widgets_v3_api_1 = require("./apis/page-widgets-v3.api");
const pages_v3_api_1 = require("./apis/pages-v3.api");
const accepted_methods_v3_api_1 = require("./apis/accepted-methods-v3.api");
const access_tokens_v3_api_1 = require("./apis/access-tokens-v3.api");
const process_api_1 = require("./apis/process.api");
const pickup_v3_api_1 = require("./apis/pickup-v3.api");
const pickup_methods_v3_api_1 = require("./apis/pickup-methods-v3.api");
const pickup_options_v3_api_1 = require("./apis/pickup-options-v3.api");
const price_lists_v3_api_1 = require("./apis/price-lists-v3.api");
const promotion_settings_v3_api_1 = require("./apis/promotion-settings-v3.api");
const promotions_v3_api_1 = require("./apis/promotions-v3.api");
const redirects_v3_api_1 = require("./apis/redirects-v3.api");
const scripts_v3_api_1 = require("./apis/scripts-v3.api");
const segments_v3_api_1 = require("./apis/segments-v3.api");
const settings_v3_api_1 = require("./apis/settings-v3.api");
const shipping_v3_api_1 = require("./apis/shipping-v3.api");
const shipping_provider_api_1 = require("./apis/shipping-provider.api");
const sites_v3_api_1 = require("./apis/sites-v3.api");
const store_logs_v3_api_1 = require("./apis/store-logs-v3.api");
const storefront_tokens_v3_api_1 = require("./apis/storefront-tokens-v3.api");
const subscribers_v3_api_1 = require("./apis/subscribers-v3.api");
const tax_v3_api_1 = require("./apis/tax-v3.api");
const tax_properties_v3_api_1 = require("./apis/tax-properties-v3.api");
const tax_provider_api_1 = require("./apis/tax-provider.api");
const tax_rates_zones_v3_api_1 = require("./apis/tax-rates-zones-v3.api");
const tax_settings_v3_api_1 = require("./apis/tax-settings-v3.api");
const tax_zone_check_v3_api_1 = require("./apis/tax-zone-check-v3.api");
const themes_v3_api_1 = require("./apis/themes-v3.api");
const webhooks_v3_api_1 = require("./apis/webhooks-v3.api");
const widgets_v3_api_1 = require("./apis/widgets-v3.api");
const wishlists_v3_api_1 = require("./apis/wishlists-v3.api");
__exportStar(require("./index.types"), exports);
__exportStar(require("./apis/currencies-v2.api"), exports);
__exportStar(require("./apis/customers-v2.api"), exports);
__exportStar(require("./apis/geography-v2.api"), exports);
__exportStar(require("./apis/marketing-v2.api"), exports);
__exportStar(require("./apis/orders-v2-oas2.api"), exports);
__exportStar(require("./apis/methods-v2.api"), exports);
__exportStar(require("./apis/shipping-v2.api"), exports);
__exportStar(require("./apis/store-content-v2.api"), exports);
__exportStar(require("./apis/store-information-v2.api"), exports);
__exportStar(require("./apis/tax-classes-v2.api"), exports);
__exportStar(require("./apis/abandoned-carts-v3.api"), exports);
__exportStar(require("./apis/carts-v3.api"), exports);
__exportStar(require("./apis/brands-v3.api"), exports);
__exportStar(require("./apis/categories-v3.api"), exports);
__exportStar(require("./apis/category-trees-v3.api"), exports);
__exportStar(require("./apis/product-modifiers-v3.api"), exports);
__exportStar(require("./apis/product-variant-options-v3.api"), exports);
__exportStar(require("./apis/product-variants-v3.api"), exports);
__exportStar(require("./apis/products-v3.api"), exports);
__exportStar(require("./apis/channels-v3.api"), exports);
__exportStar(require("./apis/checkouts-v3.api"), exports);
__exportStar(require("./apis/current-customer.api"), exports);
__exportStar(require("./apis/custom-template-associations-v3.api"), exports);
__exportStar(require("./apis/customer-login.api"), exports);
__exportStar(require("./apis/customers-v3.api"), exports);
__exportStar(require("./apis/email-templates-v3.api"), exports);
__exportStar(require("./apis/inventory-v3.api"), exports);
__exportStar(require("./apis/locations-v3.api"), exports);
__exportStar(require("./apis/orders-v3.api"), exports);
__exportStar(require("./apis/page-widgets-v3.api"), exports);
__exportStar(require("./apis/pages-v3.api"), exports);
__exportStar(require("./apis/accepted-methods-v3.api"), exports);
__exportStar(require("./apis/access-tokens-v3.api"), exports);
__exportStar(require("./apis/process.api"), exports);
__exportStar(require("./apis/pickup-v3.api"), exports);
__exportStar(require("./apis/pickup-methods-v3.api"), exports);
__exportStar(require("./apis/pickup-options-v3.api"), exports);
__exportStar(require("./apis/price-lists-v3.api"), exports);
__exportStar(require("./apis/promotion-settings-v3.api"), exports);
__exportStar(require("./apis/promotions-v3.api"), exports);
__exportStar(require("./apis/redirects-v3.api"), exports);
__exportStar(require("./apis/scripts-v3.api"), exports);
__exportStar(require("./apis/segments-v3.api"), exports);
__exportStar(require("./apis/settings-v3.api"), exports);
__exportStar(require("./apis/shipping-v3.api"), exports);
__exportStar(require("./apis/shipping-provider.api"), exports);
__exportStar(require("./apis/sites-v3.api"), exports);
__exportStar(require("./apis/store-logs-v3.api"), exports);
__exportStar(require("./apis/storefront-tokens-v3.api"), exports);
__exportStar(require("./apis/subscribers-v3.api"), exports);
__exportStar(require("./apis/tax-v3.api"), exports);
__exportStar(require("./apis/tax-properties-v3.api"), exports);
__exportStar(require("./apis/tax-provider.api"), exports);
__exportStar(require("./apis/tax-rates-zones-v3.api"), exports);
__exportStar(require("./apis/tax-settings-v3.api"), exports);
__exportStar(require("./apis/tax-zone-check-v3.api"), exports);
__exportStar(require("./apis/themes-v3.api"), exports);
__exportStar(require("./apis/webhooks-v3.api"), exports);
__exportStar(require("./apis/widgets-v3.api"), exports);
__exportStar(require("./apis/wishlists-v3.api"), exports);
const defaultConfig = {
    storeHash: '',
    accessToken: '',
};
Object.seal(defaultConfig);
class BigCommerceStoreApi {
    constructor(config) {
        this.config = Object.assign({}, defaultConfig, config);
        this.request = new request_service_1.default(this.config);
        this.v2 = {
            currencies: new currencies_v2_api_1.CurrenciesV2Api(this.request),
            customers: new customers_v2_api_1.CustomersV2Api(this.request),
            geography: new geography_v2_api_1.GeographyV2Api(this.request),
            marketing: new marketing_v2_api_1.MarketingV2Api(this.request),
            ordersV2Oas2: new orders_v2_oas2_api_1.OrdersV2Oas2Api(this.request),
            methods: new methods_v2_api_1.MethodsV2Api(this.request),
            shipping: new shipping_v2_api_1.ShippingV2Api(this.request),
            storeContent: new store_content_v2_api_1.StoreContentV2Api(this.request),
            storeInformation: new store_information_v2_api_1.StoreInformationV2Api(this.request),
            taxClasses: new tax_classes_v2_api_1.TaxClassesV2Api(this.request),
        };
        this.v3 = {
            abandonedCarts: new abandoned_carts_v3_api_1.AbandonedCartsV3Api(this.request),
            carts: new carts_v3_api_1.CartsV3Api(this.request),
            brands: new brands_v3_api_1.BrandsV3Api(this.request),
            categories: new categories_v3_api_1.CategoriesV3Api(this.request),
            categoryTrees: new category_trees_v3_api_1.CategoryTreesV3Api(this.request),
            productModifiers: new product_modifiers_v3_api_1.ProductModifiersV3Api(this.request),
            productVariantOptions: new product_variant_options_v3_api_1.ProductVariantOptionsV3Api(this.request),
            productVariants: new product_variants_v3_api_1.ProductVariantsV3Api(this.request),
            products: new products_v3_api_1.ProductsV3Api(this.request),
            channels: new channels_v3_api_1.ChannelsV3Api(this.request),
            checkouts: new checkouts_v3_api_1.CheckoutsV3Api(this.request),
            currentCustomer: new current_customer_api_1.CurrentCustomerApi(this.request),
            customTemplateAssociations: new custom_template_associations_v3_api_1.CustomTemplateAssociationsV3Api(this.request),
            customerLogin: new customer_login_api_1.CustomerLoginApi(this.request),
            customers: new customers_v3_api_1.CustomersV3Api(this.request),
            emailTemplates: new email_templates_v3_api_1.EmailTemplatesV3Api(this.request),
            inventory: new inventory_v3_api_1.InventoryV3Api(this.request),
            locations: new locations_v3_api_1.LocationsV3Api(this.request),
            orders: new orders_v3_api_1.OrdersV3Api(this.request),
            pageWidgets: new page_widgets_v3_api_1.PageWidgetsV3Api(this.request),
            pages: new pages_v3_api_1.PagesV3Api(this.request),
            acceptedMethods: new accepted_methods_v3_api_1.AcceptedMethodsV3Api(this.request),
            accessTokens: new access_tokens_v3_api_1.AccessTokensV3Api(this.request),
            process: new process_api_1.ProcessApi(this.request),
            pickup: new pickup_v3_api_1.PickupV3Api(this.request),
            pickupMethods: new pickup_methods_v3_api_1.PickupMethodsV3Api(this.request),
            pickupOptions: new pickup_options_v3_api_1.PickupOptionsV3Api(this.request),
            priceLists: new price_lists_v3_api_1.PriceListsV3Api(this.request),
            promotionSettings: new promotion_settings_v3_api_1.PromotionSettingsV3Api(this.request),
            promotions: new promotions_v3_api_1.PromotionsV3Api(this.request),
            redirects: new redirects_v3_api_1.RedirectsV3Api(this.request),
            scripts: new scripts_v3_api_1.ScriptsV3Api(this.request),
            segments: new segments_v3_api_1.SegmentsV3Api(this.request),
            settings: new settings_v3_api_1.SettingsV3Api(this.request),
            shipping: new shipping_v3_api_1.ShippingV3Api(this.request),
            shippingProvider: new shipping_provider_api_1.ShippingProviderApi(this.request),
            sites: new sites_v3_api_1.SitesV3Api(this.request),
            storeLogs: new store_logs_v3_api_1.StoreLogsV3Api(this.request),
            storefrontTokens: new storefront_tokens_v3_api_1.StorefrontTokensV3Api(this.request),
            subscribers: new subscribers_v3_api_1.SubscribersV3Api(this.request),
            tax: new tax_v3_api_1.TaxV3Api(this.request),
            taxProperties: new tax_properties_v3_api_1.TaxPropertiesV3Api(this.request),
            taxProvider: new tax_provider_api_1.TaxProviderApi(this.request),
            taxRatesZones: new tax_rates_zones_v3_api_1.TaxRatesZonesV3Api(this.request),
            taxSettings: new tax_settings_v3_api_1.TaxSettingsV3Api(this.request),
            taxZoneCheck: new tax_zone_check_v3_api_1.TaxZoneCheckV3Api(this.request),
            themes: new themes_v3_api_1.ThemesV3Api(this.request),
            webhooks: new webhooks_v3_api_1.WebhooksV3Api(this.request),
            widgets: new widgets_v3_api_1.WidgetsV3Api(this.request),
            wishlists: new wishlists_v3_api_1.WishlistsV3Api(this.request),
        };
    }
}
exports.default = BigCommerceStoreApi;
