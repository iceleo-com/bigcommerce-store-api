import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as SettingsV3ApiSpecs from '../generated/settings-v3';
export * as SettingsV3ApiSpecs from '../generated/settings-v3';
export declare class SettingsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getSettingsAnalytics(query?: SettingsV3ApiSpecs.GetSettingsAnalyticsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.AnalyticsProviders;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getAnalyticsProviders(...args: Parameters<SettingsV3Api['getSettingsAnalytics']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.AnalyticsProviders;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getSettingsAnalyticsById(id: SettingsV3ApiSpecs.GetSettingsAnalyticsByIdData['path']['id'], query?: SettingsV3ApiSpecs.GetSettingsAnalyticsByIdData['query']): Promise<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.AnalyticsProvider>> | RequestErrorResponse<400, Required<SettingsV3ApiSpecs.ErrorResponse400>> | RequestErrorResponse<404, Required<SettingsV3ApiSpecs.ErrorResponse404>>>;
    getAnalyticsProvider(...args: Parameters<SettingsV3Api['getSettingsAnalyticsById']>): Promise<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.AnalyticsProvider>> | RequestErrorResponse<400, Required<SettingsV3ApiSpecs.ErrorResponse400>> | RequestErrorResponse<404, Required<SettingsV3ApiSpecs.ErrorResponse404>>>;
    putSettingsAnalyticsById(id: SettingsV3ApiSpecs.PutSettingsAnalyticsByIdData['path']['id'], requestBody: SettingsV3ApiSpecs.PutSettingsAnalyticsByIdData['body'], query?: SettingsV3ApiSpecs.PutSettingsAnalyticsByIdData['query']): Promise<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.AnalyticsProvider>> | RequestErrorResponse<400, Required<SettingsV3ApiSpecs.ErrorResponse400>> | RequestErrorResponse<404, Required<SettingsV3ApiSpecs.ErrorResponse404>> | RequestErrorResponse<409, Required<SettingsV3ApiSpecs.ErrorResponse409>> | RequestErrorResponse<422, Required<SettingsV3ApiSpecs.ErrorResponse422>>>;
    updateAnalyticsProvider(...args: Parameters<SettingsV3Api['putSettingsAnalyticsById']>): Promise<RequestSuccessResponse<200, Required<SettingsV3ApiSpecs.AnalyticsProvider>> | RequestErrorResponse<400, Required<SettingsV3ApiSpecs.ErrorResponse400>> | RequestErrorResponse<404, Required<SettingsV3ApiSpecs.ErrorResponse404>> | RequestErrorResponse<409, Required<SettingsV3ApiSpecs.ErrorResponse409>> | RequestErrorResponse<422, Required<SettingsV3ApiSpecs.ErrorResponse422>>>;
    getSettingsCatalog(query?: SettingsV3ApiSpecs.GetSettingsCatalogData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.CatalogSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    putSettingsCatalog(requestBody: SettingsV3ApiSpecs.PutSettingsCatalogData['body'], query?: SettingsV3ApiSpecs.PutSettingsCatalogData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.CatalogSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateSettingsCatalog(...args: Parameters<SettingsV3Api['putSettingsCatalog']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.CatalogSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getSettingsEmailsEnabled(query?: SettingsV3ApiSpecs.GetSettingsEmailsEnabledData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.EnabledTransactionalEmails;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getSettingsEmailStatuses(...args: Parameters<SettingsV3Api['getSettingsEmailsEnabled']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.EnabledTransactionalEmails;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    putSettingsTransactionalEmailsEnabled(requestBody: SettingsV3ApiSpecs.PutSettingsTransactionalEmailsEnabledData['body'], query?: SettingsV3ApiSpecs.PutSettingsTransactionalEmailsEnabledData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.EnabledTransactionalEmails;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateSettingsEmailStatuses(...args: Parameters<SettingsV3Api['putSettingsTransactionalEmailsEnabled']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.EnabledTransactionalEmails;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    postFaviconLogoImage(requestBody: SettingsV3ApiSpecs.PostFaviconLogoImageData['body'], query?: SettingsV3ApiSpecs.PostFaviconLogoImageData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    createSettingsFaviconImage(...args: Parameters<SettingsV3Api['postFaviconLogoImage']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getSettingsInventoryNotifications(query?: SettingsV3ApiSpecs.GetSettingsInventoryNotificationsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.InventoryNotificationsSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    putSettingsInventoryNotifications(requestBody: SettingsV3ApiSpecs.PutSettingsInventoryNotificationsData['body'], query?: SettingsV3ApiSpecs.PutSettingsInventoryNotificationsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<unknown>>>;
    updateSettingsInventoryNotifications(...args: Parameters<SettingsV3Api['putSettingsInventoryNotifications']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<unknown>>>;
    getSettingsLogo(query?: SettingsV3ApiSpecs.GetSettingsLogoData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.LogoSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    putSettingsLogo(requestBody: SettingsV3ApiSpecs.PutSettingsLogoData['body'], query?: SettingsV3ApiSpecs.PutSettingsLogoData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.LogoSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateSettingsLogo(...args: Parameters<SettingsV3Api['putSettingsLogo']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.LogoSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    postSettingsLogoImage(requestBody: SettingsV3ApiSpecs.PostSettingsLogoImageData['body'], query?: SettingsV3ApiSpecs.PostSettingsLogoImageData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    createSettingsLogoImage(...args: Parameters<SettingsV3Api['postSettingsLogoImage']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getEnabled(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.ConfiguredFilters;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getSettingsEnabledSearchFilters(...args: Parameters<SettingsV3Api['getEnabled']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.ConfiguredFilters;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateEnabled(requestBody: SettingsV3ApiSpecs.UpdateEnabledData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.ConfiguredFilters;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateSettingsEnabledSearchFilters(...args: Parameters<SettingsV3Api['updateEnabled']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.ConfiguredFilters;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getAvailable(query?: SettingsV3ApiSpecs.GetAvailableData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<SettingsV3ApiSpecs.AvailableFilter>;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getSettingsAvailableFilters(...args: Parameters<SettingsV3Api['getAvailable']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<SettingsV3ApiSpecs.AvailableFilter>;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getContexts(query?: SettingsV3ApiSpecs.GetContextsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<SettingsV3ApiSpecs.ConfiguredFiltersOverride>;
        meta?: SettingsV3ApiSpecs.MetaPaginationObject;
    }>>>;
    getSettingsFiltersContexts(...args: Parameters<SettingsV3Api['getContexts']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<SettingsV3ApiSpecs.ConfiguredFiltersOverride>;
        meta?: SettingsV3ApiSpecs.MetaPaginationObject;
    }>>>;
    upsertContexts(requestBody: SettingsV3ApiSpecs.UpsertContextsData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<SettingsV3ApiSpecs.ConfiguredFiltersOverride>;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    upsertSettingsFiltersContexts(...args: Parameters<SettingsV3Api['upsertContexts']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<SettingsV3ApiSpecs.ConfiguredFiltersOverride>;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getSettingsStoreLocale(query?: SettingsV3ApiSpecs.GetSettingsStoreLocaleData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.Locale;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getSettingsLocale(...args: Parameters<SettingsV3Api['getSettingsStoreLocale']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.Locale;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    putSettingsStoreLocale(requestBody: SettingsV3ApiSpecs.PutSettingsStoreLocaleData['body'], query?: SettingsV3ApiSpecs.PutSettingsStoreLocaleData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.Locale;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>> | RequestErrorResponse<422, Required<SettingsV3ApiSpecs.ErrorResponse>>>;
    updateSettingsLocale(...args: Parameters<SettingsV3Api['putSettingsStoreLocale']>): Promise<RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.Locale;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>> | RequestErrorResponse<422, Required<SettingsV3ApiSpecs.ErrorResponse>>>;
    getSettingsStoreProfile(query?: SettingsV3ApiSpecs.GetSettingsStoreProfileData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.StoreProfile;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    putSettingsStoreProfile(requestBody: SettingsV3ApiSpecs.PutSettingsStoreProfileData['body'], query?: SettingsV3ApiSpecs.PutSettingsStoreProfileData['query']): Promise<RequestErrorResponse<422, Required<SettingsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.StoreProfile;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateSettingsStoreProfile(...args: Parameters<SettingsV3Api['putSettingsStoreProfile']>): Promise<RequestErrorResponse<422, Required<SettingsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.StoreProfile;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getSettingsStorefrontCategory(query?: SettingsV3ApiSpecs.GetSettingsStorefrontCategoryData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.StorefrontCategorySettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    putSettingsStorefrontCategory(requestBody: SettingsV3ApiSpecs.PutSettingsStorefrontCategoryData['body'], query?: SettingsV3ApiSpecs.PutSettingsStorefrontCategoryData['query']): Promise<RequestSuccessResponse<200, Required<{
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
    updateSettingsStorefrontCategory(...args: Parameters<SettingsV3Api['putSettingsStorefrontCategory']>): Promise<RequestSuccessResponse<200, Required<{
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
    putSettingsStorefrontProduct(requestBody: SettingsV3ApiSpecs.PutSettingsStorefrontProductData['body'], query?: SettingsV3ApiSpecs.PutSettingsStorefrontProductData['query']): Promise<RequestSuccessResponse<200, Required<{
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
    updateSettingsStorefrontProduct(...args: Parameters<SettingsV3Api['putSettingsStorefrontProduct']>): Promise<RequestSuccessResponse<200, Required<{
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
    getSettingsStorefrontRobotstxt(query?: SettingsV3ApiSpecs.GetSettingsStorefrontRobotstxtData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.RobotsTxtSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getSettingsRobotsTxt(...args: Parameters<SettingsV3Api['getSettingsStorefrontRobotstxt']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.RobotsTxtSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    putSettingsStorefrontRobotstxt(requestBody: SettingsV3ApiSpecs.PutSettingsStorefrontRobotstxtData['body'], query?: SettingsV3ApiSpecs.PutSettingsStorefrontRobotstxtData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.RobotsTxtSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateSettingsRobotsTxt(...args: Parameters<SettingsV3Api['putSettingsStorefrontRobotstxt']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.RobotsTxtSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getSettingsStorefrontSearch(query?: SettingsV3ApiSpecs.GetSettingsStorefrontSearchData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.StorefrontSearchSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    putSettingsStorefrontSearch(requestBody: SettingsV3ApiSpecs.PutSettingsStorefrontSearchData['body'], query?: SettingsV3ApiSpecs.PutSettingsStorefrontSearchData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.StorefrontSearchSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateSettingsStorefrontSearch(...args: Parameters<SettingsV3Api['putSettingsStorefrontSearch']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.StorefrontSearchSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getSettingsStorefrontSecurity(query?: SettingsV3ApiSpecs.GetSettingsStorefrontSecurityData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.StorefrontSecuritySettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    putSettingsStorefrontSecurity(requestBody: SettingsV3ApiSpecs.PutSettingsStorefrontSecurityData['body'], query?: SettingsV3ApiSpecs.PutSettingsStorefrontSecurityData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.StorefrontSecuritySettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateSettingsStorefrontSecurity(...args: Parameters<SettingsV3Api['putSettingsStorefrontSecurity']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.StorefrontSecuritySettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getSettingsStorefrontSeo(query?: SettingsV3ApiSpecs.GetSettingsStorefrontSeoData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.SeoSettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    putSettingsStorefrontSeo(requestBody: SettingsV3ApiSpecs.PutSettingsStorefrontSeoData['body'], query?: SettingsV3ApiSpecs.PutSettingsStorefrontSeoData['query']): Promise<RequestSuccessResponse<200, Required<{
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
    updateSettingsStorefrontSeo(...args: Parameters<SettingsV3Api['putSettingsStorefrontSeo']>): Promise<RequestSuccessResponse<200, Required<{
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
    putSettingsStorefrontStatus(requestBody: SettingsV3ApiSpecs.PutSettingsStorefrontStatusData['body'], query?: SettingsV3ApiSpecs.PutSettingsStorefrontStatusData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.StorefrontStatus;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateSettingsStorefrontStatus(...args: Parameters<SettingsV3Api['putSettingsStorefrontStatus']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.StorefrontStatus;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getSettingsInventory(query?: SettingsV3ApiSpecs.GetSettingsInventoryData['query']): Promise<RequestErrorResponse<422, Required<SettingsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.InventorySettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    putSettingsInventory(requestBody: SettingsV3ApiSpecs.PutSettingsInventoryData['body'], query?: SettingsV3ApiSpecs.PutSettingsInventoryData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.InventorySettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateSettingsInventory(...args: Parameters<SettingsV3Api['putSettingsInventory']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.InventorySettings;
        meta?: SettingsV3ApiSpecs.MetaOpen;
    }>>>;
    getSettingsStoreUnitsOfMeasurement(query?: SettingsV3ApiSpecs.GetSettingsStoreUnitsOfMeasurementData['query']): Promise<RequestErrorResponse<422, Required<SettingsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.MeasurementUnitsSettings;
        meta?: {
            [key: string]: unknown;
        };
    }>>>;
    getSettingsMeasurementUnits(...args: Parameters<SettingsV3Api['getSettingsStoreUnitsOfMeasurement']>): Promise<RequestErrorResponse<422, Required<SettingsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.MeasurementUnitsSettings;
        meta?: {
            [key: string]: unknown;
        };
    }>>>;
    putSettingsStoreUnitsOfMeasurement(requestBody: SettingsV3ApiSpecs.PutSettingsStoreUnitsOfMeasurementData['body'], query?: SettingsV3ApiSpecs.PutSettingsStoreUnitsOfMeasurementData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.MeasurementUnitsSettings;
        meta?: {
            [key: string]: unknown;
        };
    }>>>;
    updateSettingsMeasurementUnits(...args: Parameters<SettingsV3Api['putSettingsStoreUnitsOfMeasurement']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SettingsV3ApiSpecs.MeasurementUnitsSettings;
        meta?: {
            [key: string]: unknown;
        };
    }>>>;
}
