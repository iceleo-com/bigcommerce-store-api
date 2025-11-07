import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as SettingsV3ApiSpecs from '../generated/settings-v3';
export * as SettingsV3ApiSpecs from '../generated/settings-v3';
export declare class SettingsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getAnalyticsProviders(query?: SettingsV3ApiSpecs.GetAnalyticsProvidersData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.AnalyticsProviders;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getAnalyticsProvider(id: SettingsV3ApiSpecs.GetAnalyticsProviderData['path']['id'], query?: SettingsV3ApiSpecs.GetAnalyticsProviderData['query']): Promise<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.AnalyticsProvider>> | RequestErrorResponse<400, Required<SettingsV3ApiSpecs.ErrorResponse400>> | RequestErrorResponse<404, Required<SettingsV3ApiSpecs.ErrorResponse404>>>;
    updateAnalyticsProvider(id: SettingsV3ApiSpecs.UpdateAnalyticsProviderData['path']['id'], requestBody: SettingsV3ApiSpecs.UpdateAnalyticsProviderData['body'], query?: SettingsV3ApiSpecs.UpdateAnalyticsProviderData['query']): Promise<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.AnalyticsProvider>> | RequestErrorResponse<400, Required<SettingsV3ApiSpecs.ErrorResponse400>> | RequestErrorResponse<404, Required<SettingsV3ApiSpecs.ErrorResponse404>> | RequestErrorResponse<409, Required<SettingsV3ApiSpecs.ErrorResponse409>> | RequestErrorResponse<422, Required<SettingsV3ApiSpecs.ErrorResponse422>>>;
    getSettingsCatalog(query?: SettingsV3ApiSpecs.GetSettingsCatalogData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.CatalogSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateSettingsCatalog(requestBody: SettingsV3ApiSpecs.UpdateSettingsCatalogData['body'], query?: SettingsV3ApiSpecs.UpdateSettingsCatalogData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.CatalogSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getSettingsEmailStatuses(query?: SettingsV3ApiSpecs.GetSettingsEmailStatusesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.EnabledTransactionalEmails;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateSettingsEmailStatuses(requestBody: SettingsV3ApiSpecs.UpdateSettingsEmailStatusesData['body'], query?: SettingsV3ApiSpecs.UpdateSettingsEmailStatusesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.EnabledTransactionalEmails;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    createSettingsFaviconImage(requestBody: SettingsV3ApiSpecs.CreateSettingsFaviconImageData['body'], query?: SettingsV3ApiSpecs.CreateSettingsFaviconImageData['query']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<422, Required<unknown>>>;
    getSettingsInventoryNotifications(query?: SettingsV3ApiSpecs.GetSettingsInventoryNotificationsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.InventoryNotificationsSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateSettingsInventoryNotifications(requestBody: SettingsV3ApiSpecs.UpdateSettingsInventoryNotificationsData['body'], query?: SettingsV3ApiSpecs.UpdateSettingsInventoryNotificationsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<unknown>>>;
    getSettingsLogo(query?: SettingsV3ApiSpecs.GetSettingsLogoData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.LogoSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateSettingsLogo(requestBody: SettingsV3ApiSpecs.UpdateSettingsLogoData['body'], query?: SettingsV3ApiSpecs.UpdateSettingsLogoData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.LogoSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    createSettingsLogoImage(requestBody: SettingsV3ApiSpecs.CreateSettingsLogoImageData['body'], query?: SettingsV3ApiSpecs.CreateSettingsLogoImageData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getSettingsEnabledSearchFilters(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.ConfiguredFilters;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateSettingsEnabledSearchFilters(requestBody: SettingsV3ApiSpecs.UpdateSettingsEnabledSearchFiltersData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.ConfiguredFilters;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getSettingsAvailableFilters(query?: SettingsV3ApiSpecs.GetSettingsAvailableFiltersData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<SettingsV3ApiSpecs.AvailableFilter>;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getSettingsFiltersContexts(query?: SettingsV3ApiSpecs.GetSettingsFiltersContextsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<SettingsV3ApiSpecs.ConfiguredFiltersOverride>;
        meta?: SettingsV3ApiSpecs.MetaPaginationObject;
    }>>>;
    upsertSettingsFiltersContexts(requestBody: SettingsV3ApiSpecs.UpsertSettingsFiltersContextsData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<SettingsV3ApiSpecs.ConfiguredFiltersOverride>;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getSettingsLocale(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.Locale;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateSettingsLocale(requestBody: SettingsV3ApiSpecs.UpdateSettingsLocaleData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.Locale;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>> | RequestErrorResponse<422, Required<SettingsV3ApiSpecs.ErrorResponse>>>;
    getSettingsStoreProfile(query?: SettingsV3ApiSpecs.GetSettingsStoreProfileData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.StoreProfile;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateSettingsStoreProfile(requestBody: SettingsV3ApiSpecs.UpdateSettingsStoreProfileData['body'], query?: SettingsV3ApiSpecs.UpdateSettingsStoreProfileData['query']): Promise<RequestErrorResponse<422, Required<SettingsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.StoreProfile;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getSettingsStorefrontCategory(query?: SettingsV3ApiSpecs.GetSettingsStorefrontCategoryData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.StorefrontCategorySettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateSettingsStorefrontCategory(requestBody: SettingsV3ApiSpecs.UpdateSettingsStorefrontCategoryData['body'], query?: SettingsV3ApiSpecs.UpdateSettingsStorefrontCategoryData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.StorefrontCategorySettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            ""?: string;
        };
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    getSettingsStorefrontProduct(query?: SettingsV3ApiSpecs.GetSettingsStorefrontProductData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.StorefrontProductSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateSettingsStorefrontProduct(requestBody: SettingsV3ApiSpecs.UpdateSettingsStorefrontProductData['body'], query?: SettingsV3ApiSpecs.UpdateSettingsStorefrontProductData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.StorefrontProductSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            ""?: string;
        };
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    getSettingsRobotsTxt(query?: SettingsV3ApiSpecs.GetSettingsRobotsTxtData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.RobotsTxtSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateSettingsRobotsTxt(requestBody: SettingsV3ApiSpecs.UpdateSettingsRobotsTxtData['body'], query?: SettingsV3ApiSpecs.UpdateSettingsRobotsTxtData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.RobotsTxtSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getSettingsStorefrontSearch(query?: SettingsV3ApiSpecs.GetSettingsStorefrontSearchData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.StorefrontSearchSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateSettingsStorefrontSearch(requestBody: SettingsV3ApiSpecs.UpdateSettingsStorefrontSearchData['body'], query?: SettingsV3ApiSpecs.UpdateSettingsStorefrontSearchData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.StorefrontSearchSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getSettingsStorefrontSecurity(query?: SettingsV3ApiSpecs.GetSettingsStorefrontSecurityData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.StorefrontSecuritySettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateSettingsStorefrontSecurity(requestBody: SettingsV3ApiSpecs.UpdateSettingsStorefrontSecurityData['body'], query?: SettingsV3ApiSpecs.UpdateSettingsStorefrontSecurityData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.StorefrontSecuritySettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getSettingsStorefrontSeo(query?: SettingsV3ApiSpecs.GetSettingsStorefrontSeoData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.SeoSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateSettingsStorefrontSeo(requestBody: SettingsV3ApiSpecs.UpdateSettingsStorefrontSeoData['body'], query?: SettingsV3ApiSpecs.UpdateSettingsStorefrontSeoData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.SeoSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            ""?: string;
        };
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    getSettingsStorefrontStatus(query?: SettingsV3ApiSpecs.GetSettingsStorefrontStatusData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.StorefrontStatus;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateSettingsStorefrontStatus(requestBody: SettingsV3ApiSpecs.UpdateSettingsStorefrontStatusData['body'], query?: SettingsV3ApiSpecs.UpdateSettingsStorefrontStatusData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.StorefrontStatus;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getSettingsInventory(query?: SettingsV3ApiSpecs.GetSettingsInventoryData['query']): Promise<RequestErrorResponse<422, Required<SettingsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.InventorySettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateSettingsInventory(requestBody: SettingsV3ApiSpecs.UpdateSettingsInventoryData['body'], query?: SettingsV3ApiSpecs.UpdateSettingsInventoryData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.InventorySettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getSettingsMeasurementUnits(query?: SettingsV3ApiSpecs.GetSettingsMeasurementUnitsData['query']): Promise<RequestErrorResponse<422, Required<SettingsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.MeasurementUnitsSettings;
        meta?: {
            [key: string]: unknown;
        };
    }>>>;
    updateSettingsMeasurementUnits(requestBody: SettingsV3ApiSpecs.UpdateSettingsMeasurementUnitsData['body'], query?: SettingsV3ApiSpecs.UpdateSettingsMeasurementUnitsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.MeasurementUnitsSettings;
        meta?: {
            [key: string]: unknown;
        };
    }>>>;
}
