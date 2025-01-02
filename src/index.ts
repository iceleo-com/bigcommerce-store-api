import RequestService from './helpers/request/request-service';
import { BigCommerceStoreApiConfig } from './index.types';

import CurrenciesV2Api from './apis/currencies-v2.api';
import CustomersV2Api from './apis/customers-v2.api';
import GeographyV2Api from './apis/geography-v2.api';
import MarketingV2Api from './apis/marketing-v2.api';
import OrdersV2Oas2Api from './apis/orders-v2-oas2.api';
import MethodsV2Api from './apis/methods-v2.api';
import ShippingV2Api from './apis/shipping-v2.api';
import StoreContentV2Api from './apis/store-content-v2.api';
import StoreInformationV2Api from './apis/store-information-v2.api';
import TaxClassesV2Api from './apis/tax-classes-v2.api';
import AbandonedCartsV3Api from './apis/abandoned-carts-v3.api';
import CartsV3Api from './apis/carts-v3.api';
import BrandsV3Api from './apis/brands-v3.api';
import CategoriesV3Api from './apis/categories-v3.api';
import CategoryTreesV3Api from './apis/category-trees-v3.api';
import ProductModifiersV3Api from './apis/product-modifiers-v3.api';
import ProductVariantOptionsV3Api from './apis/product-variant-options-v3.api';
import ProductVariantsV3Api from './apis/product-variants-v3.api';
import ProductsV3Api from './apis/products-v3.api';
import ChannelsV3Api from './apis/channels-v3.api';
import CheckoutsV3Api from './apis/checkouts-v3.api';
import CurrentCustomerApi from './apis/current-customer.api';
import CustomTemplateAssociationsV3Api from './apis/custom-template-associations-v3.api';
import CustomerLoginApi from './apis/customer-login.api';
import CustomersV3Api from './apis/customers-v3.api';
import EmailTemplatesV3Api from './apis/email-templates-v3.api';
import InventoryV3Api from './apis/inventory-v3.api';
import LocationsV3Api from './apis/locations-v3.api';
import OrdersV3Api from './apis/orders-v3.api';
import PageWidgetsV3Api from './apis/page-widgets-v3.api';
import PagesV3Api from './apis/pages-v3.api';
import AcceptedMethodsV3Api from './apis/accepted-methods-v3.api';
import AccessTokensV3Api from './apis/access-tokens-v3.api';
import ProcessApi from './apis/process.api';
import PickupV3Api from './apis/pickup-v3.api';
import PickupMethodsV3Api from './apis/pickup-methods-v3.api';
import PickupOptionsV3Api from './apis/pickup-options-v3.api';
import PriceListsV3Api from './apis/price-lists-v3.api';
import PromotionSettingsV3Api from './apis/promotion-settings-v3.api';
import PromotionsV3Api from './apis/promotions-v3.api';
import RedirectsV3Api from './apis/redirects-v3.api';
import ScriptsV3Api from './apis/scripts-v3.api';
import SegmentsV3Api from './apis/segments-v3.api';
import SettingsV3Api from './apis/settings-v3.api';
import ShippingV3Api from './apis/shipping-v3.api';
import ShippingProviderApi from './apis/shipping-provider.api';
import SitesV3Api from './apis/sites-v3.api';
import StoreLogsV3Api from './apis/store-logs-v3.api';
import StorefrontTokensV3Api from './apis/storefront-tokens-v3.api';
import SubscribersV3Api from './apis/subscribers-v3.api';
import TaxV3Api from './apis/tax-v3.api';
import TaxPropertiesV3Api from './apis/tax-properties-v3.api';
import TaxProviderApi from './apis/tax-provider.api';
import TaxRatesZonesV3Api from './apis/tax-rates-zones-v3.api';
import TaxSettingsV3Api from './apis/tax-settings-v3.api';
import TaxZoneCheckV3Api from './apis/tax-zone-check-v3.api';
import ThemesV3Api from './apis/themes-v3.api';
import WebhooksV3Api from './apis/webhooks-v3.api';
import WidgetsV3Api from './apis/widgets-v3.api';
import WishlistsV3Api from './apis/wishlists-v3.api';

const defaultConfig: BigCommerceStoreApiConfig = {
    storeHash: '',
    accessToken: '',
};

Object.seal(defaultConfig);

class BigCommerceStoreApi {
    readonly config: BigCommerceStoreApiConfig;
    readonly request: RequestService;

    readonly v2: {
        readonly currencies: CurrenciesV2Api;
        readonly customers: CustomersV2Api;
        readonly geography: GeographyV2Api;
        readonly marketing: MarketingV2Api;
        readonly ordersV2Oas2: OrdersV2Oas2Api;
        readonly methods: MethodsV2Api;
        readonly shipping: ShippingV2Api;
        readonly storeContent: StoreContentV2Api;
        readonly storeInformation: StoreInformationV2Api;
        readonly taxClasses: TaxClassesV2Api;
    };

    readonly v3: {
        readonly abandonedCarts: AbandonedCartsV3Api;
        readonly carts: CartsV3Api;
        readonly brands: BrandsV3Api;
        readonly categories: CategoriesV3Api;
        readonly categoryTrees: CategoryTreesV3Api;
        readonly productModifiers: ProductModifiersV3Api;
        readonly productVariantOptions: ProductVariantOptionsV3Api;
        readonly productVariants: ProductVariantsV3Api;
        readonly products: ProductsV3Api;
        readonly channels: ChannelsV3Api;
        readonly checkouts: CheckoutsV3Api;
        readonly currentCustomer: CurrentCustomerApi;
        readonly customTemplateAssociations: CustomTemplateAssociationsV3Api;
        readonly customerLogin: CustomerLoginApi;
        readonly customers: CustomersV3Api;
        readonly emailTemplates: EmailTemplatesV3Api;
        readonly inventory: InventoryV3Api;
        readonly locations: LocationsV3Api;
        readonly orders: OrdersV3Api;
        readonly pageWidgets: PageWidgetsV3Api;
        readonly pages: PagesV3Api;
        readonly acceptedMethods: AcceptedMethodsV3Api;
        readonly accessTokens: AccessTokensV3Api;
        readonly process: ProcessApi;
        readonly pickup: PickupV3Api;
        readonly pickupMethods: PickupMethodsV3Api;
        readonly pickupOptions: PickupOptionsV3Api;
        readonly priceLists: PriceListsV3Api;
        readonly promotionSettings: PromotionSettingsV3Api;
        readonly promotions: PromotionsV3Api;
        readonly redirects: RedirectsV3Api;
        readonly scripts: ScriptsV3Api;
        readonly segments: SegmentsV3Api;
        readonly settings: SettingsV3Api;
        readonly shipping: ShippingV3Api;
        readonly shippingProvider: ShippingProviderApi;
        readonly sites: SitesV3Api;
        readonly storeLogs: StoreLogsV3Api;
        readonly storefrontTokens: StorefrontTokensV3Api;
        readonly subscribers: SubscribersV3Api;
        readonly tax: TaxV3Api;
        readonly taxProperties: TaxPropertiesV3Api;
        readonly taxProvider: TaxProviderApi;
        readonly taxRatesZones: TaxRatesZonesV3Api;
        readonly taxSettings: TaxSettingsV3Api;
        readonly taxZoneCheck: TaxZoneCheckV3Api;
        readonly themes: ThemesV3Api;
        readonly webhooks: WebhooksV3Api;
        readonly widgets: WidgetsV3Api;
        readonly wishlists: WishlistsV3Api;
    };

    constructor(config: BigCommerceStoreApiConfig) {
        this.config = Object.assign({}, defaultConfig, config);
        this.request = new RequestService(this.config);

        this.v2 = {
            currencies: new CurrenciesV2Api(this.request),
            customers: new CustomersV2Api(this.request),
            geography: new GeographyV2Api(this.request),
            marketing: new MarketingV2Api(this.request),
            ordersV2Oas2: new OrdersV2Oas2Api(this.request),
            methods: new MethodsV2Api(this.request),
            shipping: new ShippingV2Api(this.request),
            storeContent: new StoreContentV2Api(this.request),
            storeInformation: new StoreInformationV2Api(this.request),
            taxClasses: new TaxClassesV2Api(this.request),
        };

        this.v3 = {
            abandonedCarts: new AbandonedCartsV3Api(this.request),
            carts: new CartsV3Api(this.request),
            brands: new BrandsV3Api(this.request),
            categories: new CategoriesV3Api(this.request),
            categoryTrees: new CategoryTreesV3Api(this.request),
            productModifiers: new ProductModifiersV3Api(this.request),
            productVariantOptions: new ProductVariantOptionsV3Api(this.request),
            productVariants: new ProductVariantsV3Api(this.request),
            products: new ProductsV3Api(this.request),
            channels: new ChannelsV3Api(this.request),
            checkouts: new CheckoutsV3Api(this.request),
            currentCustomer: new CurrentCustomerApi(this.request),
            customTemplateAssociations: new CustomTemplateAssociationsV3Api(this.request),
            customerLogin: new CustomerLoginApi(this.request),
            customers: new CustomersV3Api(this.request),
            emailTemplates: new EmailTemplatesV3Api(this.request),
            inventory: new InventoryV3Api(this.request),
            locations: new LocationsV3Api(this.request),
            orders: new OrdersV3Api(this.request),
            pageWidgets: new PageWidgetsV3Api(this.request),
            pages: new PagesV3Api(this.request),
            acceptedMethods: new AcceptedMethodsV3Api(this.request),
            accessTokens: new AccessTokensV3Api(this.request),
            process: new ProcessApi(this.request),
            pickup: new PickupV3Api(this.request),
            pickupMethods: new PickupMethodsV3Api(this.request),
            pickupOptions: new PickupOptionsV3Api(this.request),
            priceLists: new PriceListsV3Api(this.request),
            promotionSettings: new PromotionSettingsV3Api(this.request),
            promotions: new PromotionsV3Api(this.request),
            redirects: new RedirectsV3Api(this.request),
            scripts: new ScriptsV3Api(this.request),
            segments: new SegmentsV3Api(this.request),
            settings: new SettingsV3Api(this.request),
            shipping: new ShippingV3Api(this.request),
            shippingProvider: new ShippingProviderApi(this.request),
            sites: new SitesV3Api(this.request),
            storeLogs: new StoreLogsV3Api(this.request),
            storefrontTokens: new StorefrontTokensV3Api(this.request),
            subscribers: new SubscribersV3Api(this.request),
            tax: new TaxV3Api(this.request),
            taxProperties: new TaxPropertiesV3Api(this.request),
            taxProvider: new TaxProviderApi(this.request),
            taxRatesZones: new TaxRatesZonesV3Api(this.request),
            taxSettings: new TaxSettingsV3Api(this.request),
            taxZoneCheck: new TaxZoneCheckV3Api(this.request),
            themes: new ThemesV3Api(this.request),
            webhooks: new WebhooksV3Api(this.request),
            widgets: new WidgetsV3Api(this.request),
            wishlists: new WishlistsV3Api(this.request),
        };
    }
}

export default BigCommerceStoreApi;
