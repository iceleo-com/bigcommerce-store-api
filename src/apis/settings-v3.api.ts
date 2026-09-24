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
     * Get All Web Analytics Providers
     *
     * Returns a list of web analytics providers.
     */
    getSettingsAnalytics(
        query?: SettingsV3ApiSpecs.GetSettingsAnalyticsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetSettingsAnalyticsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/analytics',
            query,
        });
    }

    /**
     * @deprecated Use `getSettingsAnalytics` instead.
     */
    getAnalyticsProviders(...args: Parameters<SettingsV3Api['getSettingsAnalytics']>) {
        return this.getSettingsAnalytics(...args);
    }

    /**
     * Get a Web Analytics Provider
     *
     * Returns a single web analytics provider data for a default channel.
     */
    getSettingsAnalyticsById(
        id: SettingsV3ApiSpecs.GetSettingsAnalyticsByIdData['path']['id'],
        query?: SettingsV3ApiSpecs.GetSettingsAnalyticsByIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetSettingsAnalyticsByIdResponses[200]>>,(RequestErrorResponse<400, Required<SettingsV3ApiSpecs.GetSettingsAnalyticsByIdErrors[400]>> | RequestErrorResponse<404, Required<SettingsV3ApiSpecs.GetSettingsAnalyticsByIdErrors[404]>>)>({
            path: `v3/settings/analytics/${id}`,
            query,
        });
    }

    /**
     * @deprecated Use `getSettingsAnalyticsById` instead.
     */
    getAnalyticsProvider(...args: Parameters<SettingsV3Api['getSettingsAnalyticsById']>) {
        return this.getSettingsAnalyticsById(...args);
    }

    /**
     * Update a Web Analytics Provider
     *
     * Updates a single web analytics provider data for a default channel.
     */
    putSettingsAnalyticsById(
        id: SettingsV3ApiSpecs.PutSettingsAnalyticsByIdData['path']['id'],
        requestBody: SettingsV3ApiSpecs.PutSettingsAnalyticsByIdData['body'],
        query?: SettingsV3ApiSpecs.PutSettingsAnalyticsByIdData['query'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.PutSettingsAnalyticsByIdResponses[200]>>,(RequestErrorResponse<400, Required<SettingsV3ApiSpecs.PutSettingsAnalyticsByIdErrors[400]>> | RequestErrorResponse<404, Required<SettingsV3ApiSpecs.PutSettingsAnalyticsByIdErrors[404]>> | RequestErrorResponse<409, Required<SettingsV3ApiSpecs.PutSettingsAnalyticsByIdErrors[409]>> | RequestErrorResponse<422, Required<SettingsV3ApiSpecs.PutSettingsAnalyticsByIdErrors[422]>>)>({
            path: `v3/settings/analytics/${id}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `putSettingsAnalyticsById` instead.
     */
    updateAnalyticsProvider(...args: Parameters<SettingsV3Api['putSettingsAnalyticsById']>) {
        return this.putSettingsAnalyticsById(...args);
    }

    /**
     * Get Catalog Settings
     *
     * Returns catalog settings.

      - Channel ID can be used as a query parameter for getting channel-specific setting. If omitted, you will interact with the global setting only. 

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

      - Channel ID can be used as a query parameter for updating channel-specific setting. If omitted, you will interact with the global setting only. 

      - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
     */
    putSettingsCatalog(
        requestBody: SettingsV3ApiSpecs.PutSettingsCatalogData['body'],
        query?: SettingsV3ApiSpecs.PutSettingsCatalogData['query'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.PutSettingsCatalogResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/catalog',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `putSettingsCatalog` instead.
     */
    updateSettingsCatalog(...args: Parameters<SettingsV3Api['putSettingsCatalog']>) {
        return this.putSettingsCatalog(...args);
    }

    /**
     * Get Transactional Email Settings
     *
     * Get global transactional email settings or channel specific overrides by `channel_id`.
     */
    getSettingsEmailsEnabled(
        query?: SettingsV3ApiSpecs.GetSettingsEmailsEnabledData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetSettingsEmailsEnabledResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/email-statuses',
            query,
        });
    }

    /**
     * @deprecated Use `getSettingsEmailsEnabled` instead.
     */
    getSettingsEmailStatuses(...args: Parameters<SettingsV3Api['getSettingsEmailsEnabled']>) {
        return this.getSettingsEmailsEnabled(...args);
    }

    /**
     * Update Transactional Email Settings
     *
     * Update global transactional email settings or create channel specific overrides by `channel_id`.
     */
    putSettingsTransactionalEmailsEnabled(
        requestBody: SettingsV3ApiSpecs.PutSettingsTransactionalEmailsEnabledData['body'],
        query?: SettingsV3ApiSpecs.PutSettingsTransactionalEmailsEnabledData['query'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.PutSettingsTransactionalEmailsEnabledResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/email-statuses',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `putSettingsTransactionalEmailsEnabled` instead.
     */
    updateSettingsEmailStatuses(...args: Parameters<SettingsV3Api['putSettingsTransactionalEmailsEnabled']>) {
        return this.putSettingsTransactionalEmailsEnabled(...args);
    }

    /**
     * Create Favicon Image
     *
     * Uploads an image file to use as the storefront favicon. Supported MIME types include GIF, JPEG, and PNG. 

       - Channel ID can be used as a query parameter for updating channel-specific setting. If omitted, you will interact with the global setting only.
     */
    postFaviconLogoImage(
        requestBody: SettingsV3ApiSpecs.PostFaviconLogoImageData['body'],
        query?: SettingsV3ApiSpecs.PostFaviconLogoImageData['query'],
    ) {
        return this.request.post<RequestSuccessResponse<204, Required<SettingsV3ApiSpecs.PostFaviconLogoImageResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/favicon/image',
            contentType: 'multipart/form-data',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `postFaviconLogoImage` instead.
     */
    createSettingsFaviconImage(...args: Parameters<SettingsV3Api['postFaviconLogoImage']>) {
        return this.postFaviconLogoImage(...args);
    }

    /**
     * Get Inventory Notifications Settings
     *
     * Returns inventory notification settings. 
     * `channel_id` can be used as a query parameter to get inventory notification settings per channel. If omitted, you will interact with the global setting only.
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
     * `channel_id` can be used as a query parameter to get inventory notification settings per channel. If omitted, you will interact with the global setting only. 
     * Supplying `null` settings values per channel will delete overrides per given channel and values will be inherited from global level. 
     * Partial updates are not supported within the given endpoint. In order to delete overrides per channel, `null` should be supplied for all the settings within the given endpoint.
     */
    putSettingsInventoryNotifications(
        requestBody: SettingsV3ApiSpecs.PutSettingsInventoryNotificationsData['body'],
        query?: SettingsV3ApiSpecs.PutSettingsInventoryNotificationsData['query'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.PutSettingsInventoryNotificationsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/inventory/notifications',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `putSettingsInventoryNotifications` instead.
     */
    updateSettingsInventoryNotifications(...args: Parameters<SettingsV3Api['putSettingsInventoryNotifications']>) {
        return this.putSettingsInventoryNotifications(...args);
    }

    /**
     * Get Store Logo Settings
     *
     * Returns store logo settings.

      - Channel ID can be used as a query parameter for getting channel-specific setting. If omitted, you will interact with the global setting only. 

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

      - Channel ID can be used as a query parameter for updating channel-specific setting. If omitted, you will interact with the global setting only. 

      - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
     */
    putSettingsLogo(
        requestBody: SettingsV3ApiSpecs.PutSettingsLogoData['body'],
        query?: SettingsV3ApiSpecs.PutSettingsLogoData['query'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.PutSettingsLogoResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/logo',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `putSettingsLogo` instead.
     */
    updateSettingsLogo(...args: Parameters<SettingsV3Api['putSettingsLogo']>) {
        return this.putSettingsLogo(...args);
    }

    /**
     * Create Logo Image
     *
     * Uploads an image file to use as the storefront logo. Supported MIME types include GIF, JPEG, and PNG. 

      - Channel ID can be used as a query parameter for updating channel-specific setting. If omitted, you will interact with the global setting only.
     */
    postSettingsLogoImage(
        requestBody: SettingsV3ApiSpecs.PostSettingsLogoImageData['body'],
        query?: SettingsV3ApiSpecs.PostSettingsLogoImageData['query'],
    ) {
        return this.request.post<RequestSuccessResponse<204, Required<SettingsV3ApiSpecs.PostSettingsLogoImageResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/logo/image',
            contentType: 'multipart/form-data',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `postSettingsLogoImage` instead.
     */
    createSettingsLogoImage(...args: Parameters<SettingsV3Api['postSettingsLogoImage']>) {
        return this.postSettingsLogoImage(...args);
    }

    /**
     * Get Enabled Filters
     *
     * Returns a list of enabled default [Product Filtering](https://support.bigcommerce.com/s/article/Product-Filtering-Settings) filters. These filters will be used if a store does not have contextual overrides.
     */
    getEnabled(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetEnabledResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/search/filters',
        });
    }

    /**
     * @deprecated Use `getEnabled` instead.
     */
    getSettingsEnabledSearchFilters(...args: Parameters<SettingsV3Api['getEnabled']>) {
        return this.getEnabled(...args);
    }

    /**
     * Update Enabled Filters
     *
     * Updates enabled default [Product Filtering](https://support.bigcommerce.com/s/article/Product-Filtering-Settings) filters.
     */
    updateEnabled(
        requestBody: SettingsV3ApiSpecs.UpdateEnabledData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.UpdateEnabledResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/search/filters',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `updateEnabled` instead.
     */
    updateSettingsEnabledSearchFilters(...args: Parameters<SettingsV3Api['updateEnabled']>) {
        return this.updateEnabled(...args);
    }

    /**
     * Get Available Filters
     *
     * Returns a list of filters available to power [Product Filtering](https://support.bigcommerce.com/s/article/Product-Filtering-Settings).
     */
    getAvailable(
        query?: SettingsV3ApiSpecs.GetAvailableData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetAvailableResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/search/filters/available',
            query,
        });
    }

    /**
     * @deprecated Use `getAvailable` instead.
     */
    getSettingsAvailableFilters(...args: Parameters<SettingsV3Api['getAvailable']>) {
        return this.getAvailable(...args);
    }

    /**
     * Get Contextual Filters
     *
     * Returns a list of contextual filters enabled for a particular channel or category.

     **Usage Notes**

     Contextual filters allow you to configure the enabled filters per channel or category, so that shoppers can filter by the most relevant criteria.

     The order of the returned filters will match the sort order of the filters on the storefront.
     */
    getContexts(
        query?: SettingsV3ApiSpecs.GetContextsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetContextsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/search/filters/contexts',
            query,
        });
    }

    /**
     * @deprecated Use `getContexts` instead.
     */
    getSettingsFiltersContexts(...args: Parameters<SettingsV3Api['getContexts']>) {
        return this.getContexts(...args);
    }

    /**
     * Upsert Contextual Filters
     *
     * Upserts contextual filters for a particular channel or category.

     **Usage Notes**

     Contextual filters allow you to configure the enabled filters per channel or category, so that shoppers can filter by the most relevant criteria.

     You can change the order of the filters on the live site by changing the order of the filters you send.
     */
    upsertContexts(
        requestBody: SettingsV3ApiSpecs.UpsertContextsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.UpsertContextsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/search/filters/contexts',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `upsertContexts` instead.
     */
    upsertSettingsFiltersContexts(...args: Parameters<SettingsV3Api['upsertContexts']>) {
        return this.upsertContexts(...args);
    }

    /**
     * Get Locale Settings
     *
     * Returns global locale settings.
     */
    getSettingsStoreLocale(
        query?: SettingsV3ApiSpecs.GetSettingsStoreLocaleData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetSettingsStoreLocaleResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/store/locale',
            query,
        });
    }

    /**
     * @deprecated Use `getSettingsStoreLocale` instead.
     */
    getSettingsLocale(...args: Parameters<SettingsV3Api['getSettingsStoreLocale']>) {
        return this.getSettingsStoreLocale(...args);
    }

    /**
     * Update Locale Settings
     *
     * Updates global locale settings.

     Set a channel override by using the `channel_id` query parameter. To remove a channel override, set `null` for a field. The field then inherits the global value.
     */
    putSettingsStoreLocale(
        requestBody: SettingsV3ApiSpecs.PutSettingsStoreLocaleData['body'],
        query?: SettingsV3ApiSpecs.PutSettingsStoreLocaleData['query'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.PutSettingsStoreLocaleResponses[200]>>,RequestErrorResponse<422, Required<SettingsV3ApiSpecs.PutSettingsStoreLocaleErrors[422]>>>({
            path: 'v3/settings/store/locale',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `putSettingsStoreLocale` instead.
     */
    updateSettingsLocale(...args: Parameters<SettingsV3Api['putSettingsStoreLocale']>) {
        return this.putSettingsStoreLocale(...args);
    }

    /**
     * Get Store Profile Settings
     *
     * Returns store profile settings.

      - Channel ID can be used as a query parameter for getting channel-specific setting. If omitted, you will interact with the global setting only. 

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

      - Channel ID can be used as a query parameter for updating channel-specific setting. If omitted, you will interact with the global setting only. 

      - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
     */
    putSettingsStoreProfile(
        requestBody: SettingsV3ApiSpecs.PutSettingsStoreProfileData['body'],
        query?: SettingsV3ApiSpecs.PutSettingsStoreProfileData['query'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.PutSettingsStoreProfileResponses[200]>>,RequestErrorResponse<422, Required<SettingsV3ApiSpecs.PutSettingsStoreProfileErrors[422]>>>({
            path: 'v3/settings/store/profile',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `putSettingsStoreProfile` instead.
     */
    updateSettingsStoreProfile(...args: Parameters<SettingsV3Api['putSettingsStoreProfile']>) {
        return this.putSettingsStoreProfile(...args);
    }

    /**
     * Get Storefront Category Settings
     *
     * Returns category settings.

      - Channel ID can be used as a query parameter for getting channel-specific setting. If omitted, you will interact with the global setting only. 

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

      - Channel ID can be used as a query parameter for updating channel-specific setting. If omitted, you will interact with the global setting only. 

      - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
     */
    putSettingsStorefrontCategory(
        requestBody: SettingsV3ApiSpecs.PutSettingsStorefrontCategoryData['body'],
        query?: SettingsV3ApiSpecs.PutSettingsStorefrontCategoryData['query'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.PutSettingsStorefrontCategoryResponses[200]>>,RequestErrorResponse<422, Required<SettingsV3ApiSpecs.PutSettingsStorefrontCategoryErrors[422]>>>({
            path: 'v3/settings/storefront/category',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `putSettingsStorefrontCategory` instead.
     */
    updateSettingsStorefrontCategory(...args: Parameters<SettingsV3Api['putSettingsStorefrontCategory']>) {
        return this.putSettingsStorefrontCategory(...args);
    }

    /**
     * Get Storefront Product Settings
     *
     * Returns product settings.

      - Channel ID can be used as a query parameter for getting channel-specific setting. If omitted, you will interact with the global setting only. 

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

      - Channel ID can be used as a query parameter for updating channel-specific setting. If omitted, you will interact with the global setting only. 

      - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
     */
    putSettingsStorefrontProduct(
        requestBody: SettingsV3ApiSpecs.PutSettingsStorefrontProductData['body'],
        query?: SettingsV3ApiSpecs.PutSettingsStorefrontProductData['query'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.PutSettingsStorefrontProductResponses[200]>>,RequestErrorResponse<422, Required<SettingsV3ApiSpecs.PutSettingsStorefrontProductErrors[422]>>>({
            path: 'v3/settings/storefront/product',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `putSettingsStorefrontProduct` instead.
     */
    updateSettingsStorefrontProduct(...args: Parameters<SettingsV3Api['putSettingsStorefrontProduct']>) {
        return this.putSettingsStorefrontProduct(...args);
    }

    /**
     * Get Robots.txt Settings
     *
     * Returns Robots.txt settings.

      - Channel ID can be used as a query parameter for getting channel-specific setting. If omitted, you will interact with the global setting only. 

      - `null` indicates that a particular field has not been overridden on a channel level when channel level settings are requested and values are inherited from global level.
     */
    getSettingsStorefrontRobotstxt(
        query?: SettingsV3ApiSpecs.GetSettingsStorefrontRobotstxtData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetSettingsStorefrontRobotstxtResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/storefront/robotstxt',
            query,
        });
    }

    /**
     * @deprecated Use `getSettingsStorefrontRobotstxt` instead.
     */
    getSettingsRobotsTxt(...args: Parameters<SettingsV3Api['getSettingsStorefrontRobotstxt']>) {
        return this.getSettingsStorefrontRobotstxt(...args);
    }

    /**
     * Update Robots.txt Settings
     *
     * Updates Robots.txt settings.

      - Channel ID can be used as a query parameter for updating channel-specific setting. If omitted, you will interact with the global setting only. 

      - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
     */
    putSettingsStorefrontRobotstxt(
        requestBody: SettingsV3ApiSpecs.PutSettingsStorefrontRobotstxtData['body'],
        query?: SettingsV3ApiSpecs.PutSettingsStorefrontRobotstxtData['query'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.PutSettingsStorefrontRobotstxtResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/storefront/robotstxt',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `putSettingsStorefrontRobotstxt` instead.
     */
    updateSettingsRobotsTxt(...args: Parameters<SettingsV3Api['putSettingsStorefrontRobotstxt']>) {
        return this.putSettingsStorefrontRobotstxt(...args);
    }

    /**
     * Get Storefront Search Settings
     *
     * Returns search settings.

      - Channel ID can be used as a query parameter for getting channel-specific setting. If omitted, you will interact with the global setting only. 

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

      - Channel ID can be used as a query parameter for updating channel-specific setting. If omitted, you will interact with the global setting only. 

      - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
     */
    putSettingsStorefrontSearch(
        requestBody: SettingsV3ApiSpecs.PutSettingsStorefrontSearchData['body'],
        query?: SettingsV3ApiSpecs.PutSettingsStorefrontSearchData['query'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.PutSettingsStorefrontSearchResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/storefront/search',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `putSettingsStorefrontSearch` instead.
     */
    updateSettingsStorefrontSearch(...args: Parameters<SettingsV3Api['putSettingsStorefrontSearch']>) {
        return this.putSettingsStorefrontSearch(...args);
    }

    /**
     * Get Storefront Security Settings
     *
     * Returns security settings.

      - Channel ID can be used as a query parameter for getting channel-specific setting. If omitted, you will interact with the global setting only. 

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

      - Channel ID can be used as a query parameter for updating channel-specific setting. If omitted, you will interact with the global setting only. 

      - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
     */
    putSettingsStorefrontSecurity(
        requestBody: SettingsV3ApiSpecs.PutSettingsStorefrontSecurityData['body'],
        query?: SettingsV3ApiSpecs.PutSettingsStorefrontSecurityData['query'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.PutSettingsStorefrontSecurityResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/storefront/security',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `putSettingsStorefrontSecurity` instead.
     */
    updateSettingsStorefrontSecurity(...args: Parameters<SettingsV3Api['putSettingsStorefrontSecurity']>) {
        return this.putSettingsStorefrontSecurity(...args);
    }

    /**
     * Get Storefront SEO Settings
     *
     * Returns SEO settings.

      - Channel ID can be used as a query parameter for getting channel-specific setting. If omitted, you will interact with the global setting only. 

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

      - Channel ID can be used as a query parameter for updating channel-specific setting. If omitted, you will interact with the global setting only. 

      - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
     */
    putSettingsStorefrontSeo(
        requestBody: SettingsV3ApiSpecs.PutSettingsStorefrontSeoData['body'],
        query?: SettingsV3ApiSpecs.PutSettingsStorefrontSeoData['query'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.PutSettingsStorefrontSeoResponses[200]>>,RequestErrorResponse<422, Required<SettingsV3ApiSpecs.PutSettingsStorefrontSeoErrors[422]>>>({
            path: 'v3/settings/storefront/seo',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `putSettingsStorefrontSeo` instead.
     */
    updateSettingsStorefrontSeo(...args: Parameters<SettingsV3Api['putSettingsStorefrontSeo']>) {
        return this.putSettingsStorefrontSeo(...args);
    }

    /**
     * Get Storefront Status
     *
     * Returns storefront status-related settings. 

      - Channel ID can be used as a query parameter for getting channel-specific setting. If omitted, you will interact with the global setting only. 

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

      - Channel ID can be used as a query parameter for updating channel-specific setting. If omitted, you will interact with the global setting only. 

      - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
     */
    putSettingsStorefrontStatus(
        requestBody: SettingsV3ApiSpecs.PutSettingsStorefrontStatusData['body'],
        query?: SettingsV3ApiSpecs.PutSettingsStorefrontStatusData['query'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.PutSettingsStorefrontStatusResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/storefront/status',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `putSettingsStorefrontStatus` instead.
     */
    updateSettingsStorefrontStatus(...args: Parameters<SettingsV3Api['putSettingsStorefrontStatus']>) {
        return this.putSettingsStorefrontStatus(...args);
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
    putSettingsInventory(
        requestBody: SettingsV3ApiSpecs.PutSettingsInventoryData['body'],
        query?: SettingsV3ApiSpecs.PutSettingsInventoryData['query'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.PutSettingsInventoryResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/inventory',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `putSettingsInventory` instead.
     */
    updateSettingsInventory(...args: Parameters<SettingsV3Api['putSettingsInventory']>) {
        return this.putSettingsInventory(...args);
    }

    /**
     * Get Units of Measurement Settings
     *
     * Get settings for [units of measurements](https://support.bigcommerce.com/s/article/Store-Settings?language=en_US#physical).
     */
    getSettingsStoreUnitsOfMeasurement(
        query?: SettingsV3ApiSpecs.GetSettingsStoreUnitsOfMeasurementData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.GetSettingsStoreUnitsOfMeasurementResponses[200]>>,RequestErrorResponse<422, Required<SettingsV3ApiSpecs.GetSettingsStoreUnitsOfMeasurementErrors[422]>>>({
            path: 'v3/settings/store/units-of-measurement',
            query,
        });
    }

    /**
     * @deprecated Use `getSettingsStoreUnitsOfMeasurement` instead.
     */
    getSettingsMeasurementUnits(...args: Parameters<SettingsV3Api['getSettingsStoreUnitsOfMeasurement']>) {
        return this.getSettingsStoreUnitsOfMeasurement(...args);
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
    putSettingsStoreUnitsOfMeasurement(
        requestBody: SettingsV3ApiSpecs.PutSettingsStoreUnitsOfMeasurementData['body'],
        query?: SettingsV3ApiSpecs.PutSettingsStoreUnitsOfMeasurementData['query'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.PutSettingsStoreUnitsOfMeasurementResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/settings/store/units-of-measurement',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `putSettingsStoreUnitsOfMeasurement` instead.
     */
    updateSettingsMeasurementUnits(...args: Parameters<SettingsV3Api['putSettingsStoreUnitsOfMeasurement']>) {
        return this.putSettingsStoreUnitsOfMeasurement(...args);
    }
}
