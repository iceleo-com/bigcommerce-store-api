"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_service_1 = __importDefault(require("./helpers/request/request-service"));
const currencies_v2_api_1 = __importDefault(require("./apis/currencies-v2.api"));
const customers_v2_api_1 = __importDefault(require("./apis/customers-v2.api"));
const geography_v2_api_1 = __importDefault(require("./apis/geography-v2.api"));
const marketing_v2_api_1 = __importDefault(require("./apis/marketing-v2.api"));
const orders_v2_oas2_api_1 = __importDefault(require("./apis/orders-v2-oas2.api"));
const methods_v2_api_1 = __importDefault(require("./apis/methods-v2.api"));
const shipping_v2_api_1 = __importDefault(require("./apis/shipping-v2.api"));
const store_content_v2_api_1 = __importDefault(require("./apis/store-content-v2.api"));
const store_information_v2_api_1 = __importDefault(require("./apis/store-information-v2.api"));
const tax_classes_v2_api_1 = __importDefault(require("./apis/tax-classes-v2.api"));
const abandoned_carts_v3_api_1 = __importDefault(require("./apis/abandoned-carts-v3.api"));
const carts_v3_api_1 = __importDefault(require("./apis/carts-v3.api"));
const brands_v3_api_1 = __importDefault(require("./apis/brands-v3.api"));
const categories_v3_api_1 = __importDefault(require("./apis/categories-v3.api"));
const category_trees_v3_api_1 = __importDefault(require("./apis/category-trees-v3.api"));
const product_modifiers_v3_api_1 = __importDefault(require("./apis/product-modifiers-v3.api"));
const product_variant_options_v3_api_1 = __importDefault(require("./apis/product-variant-options-v3.api"));
const product_variants_v3_api_1 = __importDefault(require("./apis/product-variants-v3.api"));
const products_v3_api_1 = __importDefault(require("./apis/products-v3.api"));
const channels_v3_api_1 = __importDefault(require("./apis/channels-v3.api"));
const checkouts_v3_api_1 = __importDefault(require("./apis/checkouts-v3.api"));
const current_customer_api_1 = __importDefault(require("./apis/current-customer.api"));
const custom_template_associations_v3_api_1 = __importDefault(require("./apis/custom-template-associations-v3.api"));
const customer_login_api_1 = __importDefault(require("./apis/customer-login.api"));
const customers_v3_api_1 = __importDefault(require("./apis/customers-v3.api"));
const email_templates_v3_api_1 = __importDefault(require("./apis/email-templates-v3.api"));
const inventory_v3_api_1 = __importDefault(require("./apis/inventory-v3.api"));
const locations_v3_api_1 = __importDefault(require("./apis/locations-v3.api"));
const orders_v3_api_1 = __importDefault(require("./apis/orders-v3.api"));
const page_widgets_v3_api_1 = __importDefault(require("./apis/page-widgets-v3.api"));
const pages_v3_api_1 = __importDefault(require("./apis/pages-v3.api"));
const accepted_methods_v3_api_1 = __importDefault(require("./apis/accepted-methods-v3.api"));
const access_tokens_v3_api_1 = __importDefault(require("./apis/access-tokens-v3.api"));
const process_api_1 = __importDefault(require("./apis/process.api"));
const pickup_v3_api_1 = __importDefault(require("./apis/pickup-v3.api"));
const pickup_methods_v3_api_1 = __importDefault(require("./apis/pickup-methods-v3.api"));
const pickup_options_v3_api_1 = __importDefault(require("./apis/pickup-options-v3.api"));
const price_lists_v3_api_1 = __importDefault(require("./apis/price-lists-v3.api"));
const promotion_settings_v3_api_1 = __importDefault(require("./apis/promotion-settings-v3.api"));
const promotions_v3_api_1 = __importDefault(require("./apis/promotions-v3.api"));
const redirects_v3_api_1 = __importDefault(require("./apis/redirects-v3.api"));
const scripts_v3_api_1 = __importDefault(require("./apis/scripts-v3.api"));
const segments_v3_api_1 = __importDefault(require("./apis/segments-v3.api"));
const settings_v3_api_1 = __importDefault(require("./apis/settings-v3.api"));
const shipping_v3_api_1 = __importDefault(require("./apis/shipping-v3.api"));
const shipping_provider_api_1 = __importDefault(require("./apis/shipping-provider.api"));
const sites_v3_api_1 = __importDefault(require("./apis/sites-v3.api"));
const store_logs_v3_api_1 = __importDefault(require("./apis/store-logs-v3.api"));
const storefront_tokens_v3_api_1 = __importDefault(require("./apis/storefront-tokens-v3.api"));
const subscribers_v3_api_1 = __importDefault(require("./apis/subscribers-v3.api"));
const tax_v3_api_1 = __importDefault(require("./apis/tax-v3.api"));
const tax_properties_v3_api_1 = __importDefault(require("./apis/tax-properties-v3.api"));
const tax_provider_api_1 = __importDefault(require("./apis/tax-provider.api"));
const tax_rates_zones_v3_api_1 = __importDefault(require("./apis/tax-rates-zones-v3.api"));
const tax_settings_v3_api_1 = __importDefault(require("./apis/tax-settings-v3.api"));
const tax_zone_check_v3_api_1 = __importDefault(require("./apis/tax-zone-check-v3.api"));
const themes_v3_api_1 = __importDefault(require("./apis/themes-v3.api"));
const webhooks_v3_api_1 = __importDefault(require("./apis/webhooks-v3.api"));
const widgets_v3_api_1 = __importDefault(require("./apis/widgets-v3.api"));
const wishlists_v3_api_1 = __importDefault(require("./apis/wishlists-v3.api"));
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
            currencies: new currencies_v2_api_1.default(this.request),
            customers: new customers_v2_api_1.default(this.request),
            geography: new geography_v2_api_1.default(this.request),
            marketing: new marketing_v2_api_1.default(this.request),
            ordersV2Oas2: new orders_v2_oas2_api_1.default(this.request),
            methods: new methods_v2_api_1.default(this.request),
            shipping: new shipping_v2_api_1.default(this.request),
            storeContent: new store_content_v2_api_1.default(this.request),
            storeInformation: new store_information_v2_api_1.default(this.request),
            taxClasses: new tax_classes_v2_api_1.default(this.request),
        };
        this.v3 = {
            abandonedCarts: new abandoned_carts_v3_api_1.default(this.request),
            carts: new carts_v3_api_1.default(this.request),
            brands: new brands_v3_api_1.default(this.request),
            categories: new categories_v3_api_1.default(this.request),
            categoryTrees: new category_trees_v3_api_1.default(this.request),
            productModifiers: new product_modifiers_v3_api_1.default(this.request),
            productVariantOptions: new product_variant_options_v3_api_1.default(this.request),
            productVariants: new product_variants_v3_api_1.default(this.request),
            products: new products_v3_api_1.default(this.request),
            channels: new channels_v3_api_1.default(this.request),
            checkouts: new checkouts_v3_api_1.default(this.request),
            currentCustomer: new current_customer_api_1.default(this.request),
            customTemplateAssociations: new custom_template_associations_v3_api_1.default(this.request),
            customerLogin: new customer_login_api_1.default(this.request),
            customers: new customers_v3_api_1.default(this.request),
            emailTemplates: new email_templates_v3_api_1.default(this.request),
            inventory: new inventory_v3_api_1.default(this.request),
            locations: new locations_v3_api_1.default(this.request),
            orders: new orders_v3_api_1.default(this.request),
            pageWidgets: new page_widgets_v3_api_1.default(this.request),
            pages: new pages_v3_api_1.default(this.request),
            acceptedMethods: new accepted_methods_v3_api_1.default(this.request),
            accessTokens: new access_tokens_v3_api_1.default(this.request),
            process: new process_api_1.default(this.request),
            pickup: new pickup_v3_api_1.default(this.request),
            pickupMethods: new pickup_methods_v3_api_1.default(this.request),
            pickupOptions: new pickup_options_v3_api_1.default(this.request),
            priceLists: new price_lists_v3_api_1.default(this.request),
            promotionSettings: new promotion_settings_v3_api_1.default(this.request),
            promotions: new promotions_v3_api_1.default(this.request),
            redirects: new redirects_v3_api_1.default(this.request),
            scripts: new scripts_v3_api_1.default(this.request),
            segments: new segments_v3_api_1.default(this.request),
            settings: new settings_v3_api_1.default(this.request),
            shipping: new shipping_v3_api_1.default(this.request),
            shippingProvider: new shipping_provider_api_1.default(this.request),
            sites: new sites_v3_api_1.default(this.request),
            storeLogs: new store_logs_v3_api_1.default(this.request),
            storefrontTokens: new storefront_tokens_v3_api_1.default(this.request),
            subscribers: new subscribers_v3_api_1.default(this.request),
            tax: new tax_v3_api_1.default(this.request),
            taxProperties: new tax_properties_v3_api_1.default(this.request),
            taxProvider: new tax_provider_api_1.default(this.request),
            taxRatesZones: new tax_rates_zones_v3_api_1.default(this.request),
            taxSettings: new tax_settings_v3_api_1.default(this.request),
            taxZoneCheck: new tax_zone_check_v3_api_1.default(this.request),
            themes: new themes_v3_api_1.default(this.request),
            webhooks: new webhooks_v3_api_1.default(this.request),
            widgets: new widgets_v3_api_1.default(this.request),
            wishlists: new wishlists_v3_api_1.default(this.request),
        };
    }
}
exports.default = BigCommerceStoreApi;
