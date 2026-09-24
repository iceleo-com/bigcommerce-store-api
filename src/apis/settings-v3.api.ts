import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as SettingsV3ApiSpecs from '../generated/settings-v3';
export * as SettingsV3ApiSpecs from '../generated/settings-v3';

export class SettingsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * List Web Analytics Providers
     *
     * Returns a list of web analytics providers.
     */
    getAnalyticsProviders(
        query?: SettingsV3ApiSpecs.GetAnalyticsProvidersData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetAnalyticsProvidersResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/analytics',
            query,
        });
    }

    /**
     * Get Web Analytics Provider
     *
     * Returns a single web analytics provider data for a default channel.
     */
    getAnalyticsProvider(
        id: SettingsV3ApiSpecs.GetAnalyticsProviderData['path']['id'],
        query?: SettingsV3ApiSpecs.GetAnalyticsProviderData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetAnalyticsProviderResponses[200]>>,(RequestErrorResponse<400, Required<SettingsV3ApiSpecs.GetAnalyticsProviderErrors[400]>> | RequestErrorResponse<404, Required<SettingsV3ApiSpecs.GetAnalyticsProviderErrors[404]>>)>({
            path: `v3/settings/analytics/${id}`,
            query,
        });
    }

    /**
     * Update Web Analytics Provider
     *
     * Updates a single web analytics provider data for a default channel.
     */
    updateAnalyticsProvider(
        id: SettingsV3ApiSpecs.UpdateAnalyticsProviderData['path']['id'],
        requestBody: SettingsV3ApiSpecs.UpdateAnalyticsProviderData['body'],
        query?: SettingsV3ApiSpecs.UpdateAnalyticsProviderData['query'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.UpdateAnalyticsProviderResponses[200]>>,(RequestErrorResponse<400, Required<SettingsV3ApiSpecs.UpdateAnalyticsProviderErrors[400]>> | RequestErrorResponse<404, Required<SettingsV3ApiSpecs.UpdateAnalyticsProviderErrors[404]>> | RequestErrorResponse<409, Required<SettingsV3ApiSpecs.UpdateAnalyticsProviderErrors[409]>> | RequestErrorResponse<422, Required<SettingsV3ApiSpecs.UpdateAnalyticsProviderErrors[422]>>)>({
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
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetSettingsCatalogResponses[200]>>,RequestErrorResponse<400, void>>({
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
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.UpdateSettingsCatalogResponses[200]>>,RequestErrorResponse<400, void>>({
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
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetSettingsEmailStatusesResponses[200]>>,RequestErrorResponse<400, void>>({
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
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.UpdateSettingsEmailStatusesResponses[200]>>,RequestErrorResponse<400, void>>({
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
       - The uploaded image can be up to 10 MB. Larger files result in an error.
     */
    createSettingsFaviconImage(
        requestBody: SettingsV3ApiSpecs.CreateSettingsFaviconImageData['body'],
        query?: SettingsV3ApiSpecs.CreateSettingsFaviconImageData['query'],
    ) {
        return this.request.post<RequestSuccessResponse<204, Required<SettingsV3ApiSpecs.CreateSettingsFaviconImageResponses[204]>>,RequestErrorResponse<422, Required<SettingsV3ApiSpecs.CreateSettingsFaviconImageErrors[422]>>>({
            path: 'v3/settings/favicon/image',
            contentType: 'multipart/form-data',
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
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetSettingsInventoryResponses[200]>>,RequestErrorResponse<422, Required<SettingsV3ApiSpecs.GetSettingsInventoryErrors[422]>>>({
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
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.UpdateSettingsInventoryResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/inventory',
            contentType: 'application/json',
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
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetSettingsInventoryNotificationsResponses[200]>>,RequestErrorResponse<400, void>>({
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
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.UpdateSettingsInventoryNotificationsResponses[200]>>,RequestErrorResponse<400, void>>({
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
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetSettingsLogoResponses[200]>>,RequestErrorResponse<400, void>>({
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
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.UpdateSettingsLogoResponses[200]>>,RequestErrorResponse<400, void>>({
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
        return this.request.post<RequestSuccessResponse<204, Required<SettingsV3ApiSpecs.CreateSettingsLogoImageResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/logo/image',
            contentType: 'multipart/form-data',
            body: requestBody,
            query,
        });
    }

    /**
     * List Enabled Filters
     *
     * Returns a list of enabled default [Product Filtering](https://support.bigcommerce.com/s/article/Product-Filtering-Settings) filters. These filters will be used if a store does not have contextual overrides.
     */
    getSettingsEnabledSearchFilters(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetSettingsEnabledSearchFiltersResponses[200]>>,RequestErrorResponse<400, void>>({
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
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.UpdateSettingsEnabledSearchFiltersResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/search/filters',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * List Available Filters
     *
     * Returns a list of filters available to power [Product Filtering](https://support.bigcommerce.com/s/article/Product-Filtering-Settings).
     */
    getSettingsAvailableFilters(
        query?: SettingsV3ApiSpecs.GetSettingsAvailableFiltersData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetSettingsAvailableFiltersResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/search/filters/available',
            query,
        });
    }

    /**
     * List Contextual Filters
     *
     * Returns a list of contextual filters enabled for a particular channel or category.

     **Usage Notes**

     Contextual filters allow you to configure the enabled filters per channel or category, so that shoppers can filter by the most relevant criteria.

     The order of the returned filters will match the sort order of the filters on the storefront.
     */
    getSettingsFiltersContexts(
        query?: SettingsV3ApiSpecs.GetSettingsFiltersContextsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetSettingsFiltersContextsResponses[200]>>,RequestErrorResponse<400, void>>({
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
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.UpsertSettingsFiltersContextsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/search/filters/contexts',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Locale Settings
     *
     * Returns global locale settings.

     For stores with Catalyst channels, the `shopper_language_selection_method` field is deprecated. Using this endpoint on those stores will return a warning about the deprecation. For additional information, refer to [Locale Configuration](/developer/docs/admin/store-configuration/settings/locales-configuration).
     */
    getSettingsLocale(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetSettingsLocaleResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/store/locale',
        });
    }

    /**
     * Update Locale Settings
     *
     * Updates global locale settings.

     For stores with Catalyst channels, the `shopper_language_selection_method` field is deprecated. Using this endpoint on those stores will return a warning about the deprecation. For additional information, refer to [Locale Configuration](/developer/docs/admin/store-configuration/settings/locales-configuration).
     */
    updateSettingsLocale(
        requestBody: SettingsV3ApiSpecs.UpdateSettingsLocaleData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.UpdateSettingsLocaleResponses[200]>>,RequestErrorResponse<422, Required<SettingsV3ApiSpecs.UpdateSettingsLocaleErrors[422]>>>({
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
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetSettingsStoreProfileResponses[200]>>,RequestErrorResponse<400, void>>({
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
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.UpdateSettingsStoreProfileResponses[200]>>,RequestErrorResponse<422, Required<SettingsV3ApiSpecs.UpdateSettingsStoreProfileErrors[422]>>>({
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
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetSettingsStorefrontCategoryResponses[200]>>,RequestErrorResponse<400, void>>({
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
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.UpdateSettingsStorefrontCategoryResponses[200]>>,RequestErrorResponse<422, Required<SettingsV3ApiSpecs.UpdateSettingsStorefrontCategoryErrors[422]>>>({
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
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetSettingsStorefrontProductResponses[200]>>,RequestErrorResponse<400, void>>({
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
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.UpdateSettingsStorefrontProductResponses[200]>>,RequestErrorResponse<422, Required<SettingsV3ApiSpecs.UpdateSettingsStorefrontProductErrors[422]>>>({
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
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetSettingsRobotsTxtResponses[200]>>,RequestErrorResponse<400, void>>({
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
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.UpdateSettingsRobotsTxtResponses[200]>>,RequestErrorResponse<400, void>>({
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
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetSettingsStorefrontSearchResponses[200]>>,RequestErrorResponse<400, void>>({
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
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.UpdateSettingsStorefrontSearchResponses[200]>>,RequestErrorResponse<400, void>>({
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
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetSettingsStorefrontSecurityResponses[200]>>,RequestErrorResponse<400, void>>({
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
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.UpdateSettingsStorefrontSecurityResponses[200]>>,RequestErrorResponse<400, void>>({
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
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetSettingsStorefrontSeoResponses[200]>>,RequestErrorResponse<400, void>>({
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
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.UpdateSettingsStorefrontSeoResponses[200]>>,RequestErrorResponse<422, Required<SettingsV3ApiSpecs.UpdateSettingsStorefrontSeoErrors[422]>>>({
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
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetSettingsStorefrontStatusResponses[200]>>,RequestErrorResponse<400, void>>({
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
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.UpdateSettingsStorefrontStatusResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/storefront/status',
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
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetSettingsMeasurementUnitsResponses[200]>>,RequestErrorResponse<422, Required<SettingsV3ApiSpecs.GetSettingsMeasurementUnitsErrors[422]>>>({
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
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.UpdateSettingsMeasurementUnitsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/store/units-of-measurement',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
}
