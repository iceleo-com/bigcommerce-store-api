import RequestService from '../helpers/request/request-service';
import * as SettingsV3ApiSpecs from '../generated/settings-v3';

export default class SettingsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get All Web Analytics Providers
     *
     * Returns a list of web analytics providers.
     */
    getAnalyticsProviders(
        query?: SettingsV3ApiSpecs.GetAnalyticsProvidersData['query'],
    ) {
        return this.request.get<SettingsV3ApiSpecs.GetAnalyticsProvidersResponse, any>({
            path: 'v3/settings/analytics',
            query,
        });
    }

    /**
     * Get a Web Analytics Provider
     *
     * Returns a single web analytics provider data for a default channel.
     */
    getAnalyticsProvider(
        id: SettingsV3ApiSpecs.GetAnalyticsProviderData['path']['id'],
        query?: SettingsV3ApiSpecs.GetAnalyticsProviderData['query'],
    ) {
        return this.request.get<SettingsV3ApiSpecs.GetAnalyticsProviderResponse, SettingsV3ApiSpecs.GetAnalyticsProviderError>({
            path: `v3/settings/analytics/${id}`,
            query,
        });
    }

    /**
     * Update a Web Analytics Provider
     *
     * Updates a single web analytics provider data for a default channel.
     */
    updateAnalyticsProvider(
        id: SettingsV3ApiSpecs.UpdateAnalyticsProviderData['path']['id'],
        requestBody: SettingsV3ApiSpecs.UpdateAnalyticsProviderData['body'],
        query?: SettingsV3ApiSpecs.UpdateAnalyticsProviderData['query'],
    ) {
        return this.request.put<SettingsV3ApiSpecs.UpdateAnalyticsProviderResponse, SettingsV3ApiSpecs.UpdateAnalyticsProviderError>({
            path: `v3/settings/analytics/${id}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Get Catalog Settings
     *
     * Returns catalog settings.

      - Channel ID can be used as a query parameter for getting channel-specific settings. If omitted, you will interact with the global settings only. 

      - `null` indicates that a particular field has not been overridden on a channel level when channel level settings are requested and values are inherited from global level.
     */
    getSettingsCatalog(
        query?: SettingsV3ApiSpecs.GetSettingsCatalogData['query'],
    ) {
        return this.request.get<SettingsV3ApiSpecs.GetSettingsCatalogResponse, any>({
            path: 'v3/settings/catalog',
            query,
        });
    }

    /**
     * Update Catalog Settings
     *
     * Updates catalog settings.

      - Channel ID can be used as a query parameter for updating channel-specific settings. If omitted, you will interact with the global settings only. 

      - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
     */
    updateSettingsCatalog(
        requestBody: SettingsV3ApiSpecs.UpdateSettingsCatalogData['body'],
        query?: SettingsV3ApiSpecs.UpdateSettingsCatalogData['query'],
    ) {
        return this.request.put<SettingsV3ApiSpecs.UpdateSettingsCatalogResponse, any>({
            path: 'v3/settings/catalog',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Get Transactional Email Settings
     *
     * Get global transactional email settings or channel specific overrides by `channel_id`.
     */
    getSettingsEmailStatuses(
        query?: SettingsV3ApiSpecs.GetSettingsEmailStatusesData['query'],
    ) {
        return this.request.get<SettingsV3ApiSpecs.GetSettingsEmailStatusesResponse, any>({
            path: 'v3/settings/email-statuses',
            query,
        });
    }

    /**
     * Update Transactional Email Settings
     *
     * Update global transactional email settings or create channel specific overrides by `channel_id`.
     */
    updateSettingsEmailStatuses(
        requestBody: SettingsV3ApiSpecs.UpdateSettingsEmailStatusesData['body'],
        query?: SettingsV3ApiSpecs.UpdateSettingsEmailStatusesData['query'],
    ) {
        return this.request.put<SettingsV3ApiSpecs.UpdateSettingsEmailStatusesResponse, any>({
            path: 'v3/settings/email-statuses',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Create Favicon Image
     *
     * Uploads an image file to use as the storefront favicon. Supported MIME types include GIF, JPEG, and PNG. 

       - Channel ID can be used as a query parameter for updating channel-specific settings. If omitted, you will interact with the global settings only.
     */
    createSettingsFaviconImage(
        requestBody: SettingsV3ApiSpecs.CreateSettingsFaviconImageData['body'],
        query?: SettingsV3ApiSpecs.CreateSettingsFaviconImageData['query'],
    ) {
        return this.request.post<any, any>({
            path: 'v3/settings/favicon/image',
            contentType: 'multipart/form-data',
            body: requestBody,
            query,
        });
    }

    /**
     * Get Inventory Notifications Settings
     *
     * Returns inventory notification settings. 
     * `channel_id` can be used as a query parameter to get inventory notification settings per channel. If omitted, you will interact with the global settings only.
     */
    getSettingsInventoryNotifications(
        query?: SettingsV3ApiSpecs.GetSettingsInventoryNotificationsData['query'],
    ) {
        return this.request.get<SettingsV3ApiSpecs.GetSettingsInventoryNotificationsResponse, any>({
            path: 'v3/settings/inventory/notifications',
            query,
        });
    }

    /**
     * Update Inventory Notifications Settings
     *
     * Updates inventory notification settings. 
     * `channel_id` can be used as a query parameter to get inventory notification settings per channel. If omitted, you will interact with the global settings only. 
     * Supplying `null` settings values per channel will delete overrides per given channel and values will be inherited from global level. 
     * Partial updates are not supported within the given endpoint. In order to delete overrides per channel, `null` should be supplied for all the settings within the given endpoint.
     */
    updateSettingsInventoryNotifications(
        requestBody: SettingsV3ApiSpecs.UpdateSettingsInventoryNotificationsData['body'],
        query?: SettingsV3ApiSpecs.UpdateSettingsInventoryNotificationsData['query'],
    ) {
        return this.request.put<any, any>({
            path: 'v3/settings/inventory/notifications',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Get Store Logo Settings
     *
     * Returns store logo settings.

      - Channel ID can be used as a query parameter for getting channel-specific settings. If omitted, you will interact with the global settings only. 

      - `null` indicates that a particular field has not been overridden on a channel level when channel level settings are requested and values are inherited from global level.
     */
    getSettingsLogo(
        query?: SettingsV3ApiSpecs.GetSettingsLogoData['query'],
    ) {
        return this.request.get<SettingsV3ApiSpecs.GetSettingsLogoResponse, any>({
            path: 'v3/settings/logo',
            query,
        });
    }

    /**
     * Update Store Logo Settings
     *
     * Updates the logo type and logo text for a textual logo. To upload new images, use the dedicated image POST endpoints.

      - Channel ID can be used as a query parameter for updating channel-specific settings. If omitted, you will interact with the global settings only. 

      - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
     */
    updateSettingsLogo(
        requestBody: SettingsV3ApiSpecs.UpdateSettingsLogoData['body'],
        query?: SettingsV3ApiSpecs.UpdateSettingsLogoData['query'],
    ) {
        return this.request.put<SettingsV3ApiSpecs.UpdateSettingsLogoResponse, any>({
            path: 'v3/settings/logo',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Create Logo Image
     *
     * Uploads an image file to use as the storefront logo. Supported MIME types include GIF, JPEG, and PNG. 

      - Channel ID can be used as a query parameter for updating channel-specific settings. If omitted, you will interact with the global settings only.
     */
    createSettingsLogoImage(
        requestBody: SettingsV3ApiSpecs.CreateSettingsLogoImageData['body'],
        query?: SettingsV3ApiSpecs.CreateSettingsLogoImageData['query'],
    ) {
        return this.request.post<any, any>({
            path: 'v3/settings/logo/image',
            contentType: 'multipart/form-data',
            body: requestBody,
            query,
        });
    }

    /**
     * Get Enabled Filters
     *
     * Returns a list of enabled default [Product Filtering](https://support.bigcommerce.com/s/article/Product-Filtering-Settings) filters. These filters will be used if a store does not have contextual overrides.
     */
    getSettingsEnabledSearchFilters(
    ) {
        return this.request.get<SettingsV3ApiSpecs.GetSettingsEnabledSearchFiltersResponse, any>({
            path: 'v3/settings/search/filters',
        });
    }

    /**
     * Update Enabled Filters
     *
     * Updates enabled default [Product Filtering](https://support.bigcommerce.com/s/article/Product-Filtering-Settings) filters.
     */
    updateSettingsEnabledSearchFilters(
        requestBody: SettingsV3ApiSpecs.UpdateSettingsEnabledSearchFiltersData['body'],
    ) {
        return this.request.put<SettingsV3ApiSpecs.UpdateSettingsEnabledSearchFiltersResponse, any>({
            path: 'v3/settings/search/filters',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Available Filters
     *
     * Returns a list of filters available to power [Product Filtering](https://support.bigcommerce.com/s/article/Product-Filtering-Settings).
     */
    getSettingsAvailableFilters(
        query?: SettingsV3ApiSpecs.GetSettingsAvailableFiltersData['query'],
    ) {
        return this.request.get<SettingsV3ApiSpecs.GetSettingsAvailableFiltersResponse, any>({
            path: 'v3/settings/search/filters/available',
            query,
        });
    }

    /**
     * Get Contextual Filters
     *
     * Returns a list of contextual filters enabled for a particular channel or category.

     **Usage Notes**

     Contextual filters allow you to configure the enabled filters per channel or category, so that shoppers can filter by the most relevant criteria.

     The order of the returned filters will match the sort order of the filters on the storefront.
     */
    getSettingsFiltersContexts(
        query?: SettingsV3ApiSpecs.GetSettingsFiltersContextsData['query'],
    ) {
        return this.request.get<SettingsV3ApiSpecs.GetSettingsFiltersContextsResponse, any>({
            path: 'v3/settings/search/filters/contexts',
            query,
        });
    }

    /**
     * Upsert Contextual Filters
     *
     * Upserts contextual filters for a particular channel or category.

     **Usage Notes**

     Contextual filters allow you to configure the enabled filters per channel or category, so that shoppers can filter by the most relevant criteria.

     You can change the order of the filters on the live site by changing the order of the filters you send.
     */
    upsertSettingsFiltersContexts(
        requestBody: SettingsV3ApiSpecs.UpsertSettingsFiltersContextsData['body'],
    ) {
        return this.request.put<SettingsV3ApiSpecs.UpsertSettingsFiltersContextsResponse, any>({
            path: 'v3/settings/search/filters/contexts',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Locale Settings
     *
     * Returns global locale settings.
     */
    getSettingsLocale(
    ) {
        return this.request.get<SettingsV3ApiSpecs.GetSettingsLocaleResponse, any>({
            path: 'v3/settings/store/locale',
        });
    }

    /**
     * Update Locale Settings
     *
     * Updates global locale settings.
     */
    updateSettingsLocale(
        requestBody: SettingsV3ApiSpecs.UpdateSettingsLocaleData['body'],
    ) {
        return this.request.put<SettingsV3ApiSpecs.UpdateSettingsLocaleResponse, SettingsV3ApiSpecs.UpdateSettingsLocaleError>({
            path: 'v3/settings/store/locale',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Store Profile Settings
     *
     * Returns store profile settings.

      - Channel ID can be used as a query parameter for getting channel-specific settings. If omitted, you will interact with the global settings only. 

      - `null` indicates that a particular field has not been overridden on a channel level when channel level settings are requested and values are inherited from global level.
     */
    getSettingsStoreProfile(
        query?: SettingsV3ApiSpecs.GetSettingsStoreProfileData['query'],
    ) {
        return this.request.get<SettingsV3ApiSpecs.GetSettingsStoreProfileResponse, any>({
            path: 'v3/settings/store/profile',
            query,
        });
    }

    /**
     * Update Store Profile Settings
     *
     * Updates store profile settings.

      - Channel ID can be used as a query parameter for updating channel-specific settings. If omitted, you will interact with the global settings only. 

      - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
     */
    updateSettingsStoreProfile(
        requestBody: SettingsV3ApiSpecs.UpdateSettingsStoreProfileData['body'],
        query?: SettingsV3ApiSpecs.UpdateSettingsStoreProfileData['query'],
    ) {
        return this.request.put<SettingsV3ApiSpecs.UpdateSettingsStoreProfileResponse, SettingsV3ApiSpecs.UpdateSettingsStoreProfileError>({
            path: 'v3/settings/store/profile',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Get Storefront Category Settings
     *
     * Returns category settings.

      - Channel ID can be used as a query parameter for getting channel-specific settings. If omitted, you will interact with the global settings only. 

      - `null` indicates that a particular field has not been overridden on a channel level when channel level settings are requested and values are inherited from global level.
     */
    getSettingsStorefrontCategory(
        query?: SettingsV3ApiSpecs.GetSettingsStorefrontCategoryData['query'],
    ) {
        return this.request.get<SettingsV3ApiSpecs.GetSettingsStorefrontCategoryResponse, any>({
            path: 'v3/settings/storefront/category',
            query,
        });
    }

    /**
     * Update Storefront Category Settings
     *
     * Updates category settings.

      - Channel ID can be used as a query parameter for updating channel-specific settings. If omitted, you will interact with the global settings only. 

      - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
     */
    updateSettingsStorefrontCategory(
        requestBody: SettingsV3ApiSpecs.UpdateSettingsStorefrontCategoryData['body'],
        query?: SettingsV3ApiSpecs.UpdateSettingsStorefrontCategoryData['query'],
    ) {
        return this.request.put<SettingsV3ApiSpecs.UpdateSettingsStorefrontCategoryResponse, SettingsV3ApiSpecs.UpdateSettingsStorefrontCategoryError>({
            path: 'v3/settings/storefront/category',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Get Storefront Product Settings
     *
     * Returns product settings.

      - Channel ID can be used as a query parameter for getting channel-specific settings. If omitted, you will interact with the global settings only. 

      - `null` indicates that a particular field has not been overridden on a channel level when channel level settings are requested and values are inherited from global level.
     */
    getSettingsStorefrontProduct(
        query?: SettingsV3ApiSpecs.GetSettingsStorefrontProductData['query'],
    ) {
        return this.request.get<any, any>({
            path: 'v3/settings/storefront/product',
            query,
        });
    }

    /**
     * Update Storefront Product Settings
     *
     * Updates product settings.

      - Channel ID can be used as a query parameter for updating channel-specific settings. If omitted, you will interact with the global settings only. 

      - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
     */
    updateSettingsStorefrontProduct(
        requestBody: SettingsV3ApiSpecs.UpdateSettingsStorefrontProductData['body'],
        query?: SettingsV3ApiSpecs.UpdateSettingsStorefrontProductData['query'],
    ) {
        return this.request.put<any, SettingsV3ApiSpecs.UpdateSettingsStorefrontProductError>({
            path: 'v3/settings/storefront/product',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Get Robots.txt Settings
     *
     * Returns Robots.txt settings.

      - Channel ID can be used as a query parameter for getting channel-specific settings. If omitted, you will interact with the global settings only. 

      - `null` indicates that a particular field has not been overridden on a channel level when channel level settings are requested and values are inherited from global level.
     */
    getSettingsRobotsTxt(
        query?: SettingsV3ApiSpecs.GetSettingsRobotsTxtData['query'],
    ) {
        return this.request.get<SettingsV3ApiSpecs.GetSettingsRobotsTxtResponse, any>({
            path: 'v3/settings/storefront/robotstxt',
            query,
        });
    }

    /**
     * Update Robots.txt Settings
     *
     * Updates Robots.txt settings.

      - Channel ID can be used as a query parameter for updating channel-specific settings. If omitted, you will interact with the global settings only. 

      - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
     */
    updateSettingsRobotsTxt(
        requestBody: SettingsV3ApiSpecs.UpdateSettingsRobotsTxtData['body'],
        query?: SettingsV3ApiSpecs.UpdateSettingsRobotsTxtData['query'],
    ) {
        return this.request.put<SettingsV3ApiSpecs.UpdateSettingsRobotsTxtResponse, any>({
            path: 'v3/settings/storefront/robotstxt',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Get Storefront Search Settings
     *
     * Returns search settings.

      - Channel ID can be used as a query parameter for getting channel-specific settings. If omitted, you will interact with the global settings only. 

      - `null` indicates that a particular field has not been overridden on a channel level when channel level settings are requested and values are inherited from global level.
     */
    getSettingsStorefrontSearch(
        query?: SettingsV3ApiSpecs.GetSettingsStorefrontSearchData['query'],
    ) {
        return this.request.get<SettingsV3ApiSpecs.GetSettingsStorefrontSearchResponse, any>({
            path: 'v3/settings/storefront/search',
            query,
        });
    }

    /**
     * Update Storefront Search Settings
     *
     * Updates search settings.

      - Channel ID can be used as a query parameter for updating channel-specific settings. If omitted, you will interact with the global settings only. 

      - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
     */
    updateSettingsStorefrontSearch(
        requestBody: SettingsV3ApiSpecs.UpdateSettingsStorefrontSearchData['body'],
        query?: SettingsV3ApiSpecs.UpdateSettingsStorefrontSearchData['query'],
    ) {
        return this.request.put<SettingsV3ApiSpecs.UpdateSettingsStorefrontSearchResponse, any>({
            path: 'v3/settings/storefront/search',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Get Storefront Security Settings
     *
     * Returns security settings.

      - Channel ID can be used as a query parameter for getting channel-specific settings. If omitted, you will interact with the global settings only. 

      - `null` indicates that a particular field has not been overridden on a channel level when channel level settings are requested and values are inherited from global level.
     */
    getSettingsStorefrontSecurity(
        query?: SettingsV3ApiSpecs.GetSettingsStorefrontSecurityData['query'],
    ) {
        return this.request.get<SettingsV3ApiSpecs.GetSettingsStorefrontSecurityResponse, any>({
            path: 'v3/settings/storefront/security',
            query,
        });
    }

    /**
     * Update Storefront Security Settings
     *
     * Updates security settings.

      - Channel ID can be used as a query parameter for updating channel-specific settings. If omitted, you will interact with the global settings only. 

      - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
     */
    updateSettingsStorefrontSecurity(
        requestBody: SettingsV3ApiSpecs.UpdateSettingsStorefrontSecurityData['body'],
        query?: SettingsV3ApiSpecs.UpdateSettingsStorefrontSecurityData['query'],
    ) {
        return this.request.put<SettingsV3ApiSpecs.UpdateSettingsStorefrontSecurityResponse, any>({
            path: 'v3/settings/storefront/security',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Get Storefront SEO Settings
     *
     * Returns SEO settings.

      - Channel ID can be used as a query parameter for getting channel-specific settings. If omitted, you will interact with the global settings only. 

      - `null` indicates that a particular field has not been overridden on a channel level when channel level settings are requested and values are inherited from global level.
     */
    getSettingsStorefrontSeo(
        query?: SettingsV3ApiSpecs.GetSettingsStorefrontSeoData['query'],
    ) {
        return this.request.get<SettingsV3ApiSpecs.GetSettingsStorefrontSeoResponse, any>({
            path: 'v3/settings/storefront/seo',
            query,
        });
    }

    /**
     * Update Storefront SEO Settings
     *
     * Updates SEO settings.

      - You can use `channel_id` as a query parameter to update channel-specific settings. If omitted, you will only interact with the global settings. 

      - You can use `channel_id` in the request body of a headless channel of this endpoint to control the `www_redirect` settings for the headless channel's unique checkout URL.

      - `null` should be supplied to delete overrides per given channel and to inherit values from a global level. 
     */
    updateSettingsStorefrontSeo(
        requestBody: SettingsV3ApiSpecs.UpdateSettingsStorefrontSeoData['body'],
        query?: SettingsV3ApiSpecs.UpdateSettingsStorefrontSeoData['query'],
    ) {
        return this.request.put<SettingsV3ApiSpecs.UpdateSettingsStorefrontSeoResponse, SettingsV3ApiSpecs.UpdateSettingsStorefrontSeoError>({
            path: 'v3/settings/storefront/seo',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Get Storefront Status
     *
     * Returns storefront status-related settings. 

      - Channel ID can be used as a query parameter for getting channel-specific settings. If omitted, you will interact with the global settings only. 

      - `null` indicates that a particular field has not been overridden on a channel level when channel level settings are requested and values are inherited from global level.
     */
    getSettingsStorefrontStatus(
        query?: SettingsV3ApiSpecs.GetSettingsStorefrontStatusData['query'],
    ) {
        return this.request.get<SettingsV3ApiSpecs.GetSettingsStorefrontStatusResponse, any>({
            path: 'v3/settings/storefront/status',
            query,
        });
    }

    /**
     * Update Storefront Status
     *
     * Updates storefront status-related settings.

      - Channel ID can be used as a query parameter for updating channel-specific settings. If omitted, you will interact with the global settings only. 

      - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
     */
    updateSettingsStorefrontStatus(
        requestBody: SettingsV3ApiSpecs.UpdateSettingsStorefrontStatusData['body'],
        query?: SettingsV3ApiSpecs.UpdateSettingsStorefrontStatusData['query'],
    ) {
        return this.request.put<SettingsV3ApiSpecs.UpdateSettingsStorefrontStatusResponse, any>({
            path: 'v3/settings/storefront/status',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Get Inventory Settings
     *
     * Get Inventory Settings
     */
    getSettingsInventory(
        query?: SettingsV3ApiSpecs.GetSettingsInventoryData['query'],
    ) {
        return this.request.get<SettingsV3ApiSpecs.GetSettingsInventoryResponse, SettingsV3ApiSpecs.GetSettingsInventoryError>({
            path: 'v3/settings/inventory',
            query,
        });
    }

    /**
     * Update Inventory Settings
     *
     * Update inventory settings
     */
    updateSettingsInventory(
        requestBody: SettingsV3ApiSpecs.UpdateSettingsInventoryData['body'],
        query?: SettingsV3ApiSpecs.UpdateSettingsInventoryData['query'],
    ) {
        return this.request.put<SettingsV3ApiSpecs.UpdateSettingsInventoryResponse, any>({
            path: 'v3/settings/inventory',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Get Units of Measurement Settings
     *
     * Get settings for [units of measurements](https://support.bigcommerce.com/s/article/Store-Settings?language=en_US#physical).
     */
    getSettingsMeasurementUnits(
        query?: SettingsV3ApiSpecs.GetSettingsMeasurementUnitsData['query'],
    ) {
        return this.request.get<SettingsV3ApiSpecs.GetSettingsMeasurementUnitsResponse, SettingsV3ApiSpecs.GetSettingsMeasurementUnitsError>({
            path: 'v3/settings/store/units-of-measurement',
            query,
        });
    }

    /**
     * Update Units of Measurement Settings
     *
     * Update settings for [units of measurements](https://support.bigcommerce.com/s/article/Store-Settings?language=en_US#physical).

     The endpoint does not support partial updates. Provide all fields to update global or channel-level settings.

     Create channel-level settings, or overrides for a channel, using the `channel_id`  query parameter. 

     To delete overrides for a channel, supply `null` as a value for all fields. A channel then inherits global values.

     The endpoint does not support 'null' as a value for global-level settings.
     */
    updateSettingsMeasurementUnits(
        requestBody: SettingsV3ApiSpecs.UpdateSettingsMeasurementUnitsData['body'],
        query?: SettingsV3ApiSpecs.UpdateSettingsMeasurementUnitsData['query'],
    ) {
        return this.request.put<SettingsV3ApiSpecs.UpdateSettingsMeasurementUnitsResponse, any>({
            path: 'v3/settings/store/units-of-measurement',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
}
