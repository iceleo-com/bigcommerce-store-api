export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type CertificateWrite = {
    certificate?: string;
    private_key?: string;
    intermediate_certificates?: string;
};
export type SiteCreate = {
    url?: string;
    channel_id?: number;
    certificate?: CertificateWrite;
};
export type SiteSslStatus = 'dedicated' | 'shared';
export type UrlType = 'primary' | 'canonical' | 'checkout';
export type Url = {
    url?: string;
    type?: UrlType;
    created_at?: string;
    updated_at?: string;
};
export type Site = {
    id?: number;
    url?: string;
    channel_id?: number;
    created_at?: string;
    updated_at?: string;
    ssl_status: SiteSslStatus | undefined;
    urls?: Array<Url>;
    is_checkout_url_customized?: boolean;
};
export type MetaOpen = {
    [key: string]: unknown;
};
export type SitesCreateSiteResponse201 = {
    data?: Site;
    meta?: MetaOpen;
};
export type ErrorFull = {
    status?: number;
    title?: string;
    type?: string;
};
export type ErrorDetailedFullErrors = {
    [key: string]: unknown;
};
export type ErrorDetailedFull = {
    errors?: ErrorDetailedFullErrors;
};
export type MetaPagination = {
    offset?: number;
    limit?: number;
    total_items?: number;
};
export type Meta = {
    pagination?: MetaPagination;
};
export type SitesGetSitesResponse200 = {
    data?: Array<Site>;
    meta?: Meta;
};
export type SitesGetSiteResponse200 = {
    data?: Site;
    meta?: MetaOpen;
};
export type PutSite = {
    url?: string;
};
export type SitesUpdateSiteResponse200 = {
    data?: Site;
    meta?: MetaOpen;
};
export type CertificateResponseDataStatus = 'shared' | 'dedicated';
export type InstalledCertificateDetail = {
    common_name?: string;
    subject_alternative_names?: Array<string>;
    validity_not_before?: string;
    validity_not_after?: string;
    signing_algorithm?: string;
    issuer?: string;
    certificate?: string;
    intermediate_certificates?: string;
};
export type CertificateResponseData = {
    status?: CertificateResponseDataStatus;
    installed_certificate?: InstalledCertificateDetail;
};
export type CertificateResponse = {
    data?: InstalledCertificateDetail;
    meta?: MetaOpen;
};
export type InstallCertificateData = {
    url?: string;
    certificate?: CertificateWrite;
};
export type EmptyResponseData = {
    [key: string]: unknown;
};
export type EmptyResponseMeta = {
    [key: string]: unknown;
};
export type EmptyResponse = {
    data?: EmptyResponseData;
    meta?: EmptyResponseMeta;
};
export type GetCertificatesResponse = {
    data?: Array<InstalledCertificateDetail>;
    meta?: MetaOpen;
};
export type SiteRouteBaseType = 'product' | 'brand' | 'category' | 'page' | 'blog' | 'home' | 'cart' | 'checkout' | 'search' | 'account' | 'login' | 'returns' | 'static';
export type SiteRouteFull = {
    type?: SiteRouteBaseType;
    matching?: string;
    route?: string;
    id?: number;
};
export type MetaCollectionPaginationLinks = {
    previous?: string;
    next?: string;
    current?: string;
};
export type MetaCollectionPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: MetaCollectionPaginationLinks;
};
export type MetaCollection = {
    pagination?: MetaCollectionPagination;
};
export type SiteRoutesGetSiteRoutesResponse200 = {
    data?: Array<SiteRouteFull>;
    meta?: MetaCollection;
};
export type SiteRouteBase = {
    type?: SiteRouteBaseType;
    matching?: string;
    route?: string;
};
export type SiteRoutesCreateSiteRouteResponse201 = {
    data?: SiteRouteFull;
    meta?: MetaOpen;
};
export type Errors = {
    [key: string]: unknown;
};
export type CreateSiteRouteRequestUnprocessableEntityError = {
    title?: string;
    status?: string;
    errors?: Errors;
    type?: string;
};
export type SiteRoutesUpdateSiteRoutesResponse200 = {
    data?: Array<SiteRouteFull>;
    meta?: MetaCollection;
};
export type MetaEmpty = {
    [key: string]: unknown;
};
export type UpdateSiteRoutesRequestUnprocessableEntityError = {
    status?: number;
    title?: string;
    errors?: Errors;
    meta?: MetaEmpty;
    type?: string;
};
export type SiteRoutesGetSiteRouteResponse200 = {
    data?: SiteRouteFull;
    meta?: MetaOpen;
};
export type SiteRoutesRouteBaseType = 'product' | 'brand' | 'category' | 'page' | 'blog' | 'home' | 'cart' | 'checkout' | 'search' | 'account' | 'login' | 'returns' | 'static';
export type SiteRoutesRouteBase = {
    type: SiteRoutesRouteBaseType;
    matching: string;
    route: string;
};
export type SiteRoutesUpdateSiteRouteResponse201 = {
    data?: SiteRouteFull;
    meta?: MetaOpen;
};
export type GetSitesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        'channel_id:in'?: Array<number>;
        'url_type:in'?: Array<string>;
    };
    url: '/sites';
};
export type GetSitesResponses = {
    200: SitesGetSitesResponse200;
};
export type GetSitesResponse = GetSitesResponses[keyof GetSitesResponses];
export type CreateSiteData = {
    body?: SiteCreate;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/sites';
};
export type CreateSiteErrors = {
    400: ErrorFull;
    403: ErrorFull;
    404: ErrorFull;
    422: ErrorDetailedFull;
    502: unknown;
    504: ErrorFull;
};
export type CreateSiteError = CreateSiteErrors[keyof CreateSiteErrors];
export type CreateSiteResponses = {
    201: SitesCreateSiteResponse201;
};
export type CreateSiteResponse = CreateSiteResponses[keyof CreateSiteResponses];
export type DeleteSiteData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        site_id: number;
    };
    query?: never;
    url: '/sites/{site_id}';
};
export type DeleteSiteResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteSiteResponse = DeleteSiteResponses[keyof DeleteSiteResponses];
export type GetSiteData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        site_id: number;
    };
    query?: never;
    url: '/sites/{site_id}';
};
export type GetSiteResponses = {
    200: SitesGetSiteResponse200;
};
export type GetSiteResponse = GetSiteResponses[keyof GetSiteResponses];
export type UpdateSiteData = {
    body?: PutSite;
    headers: {
        Accept: string;
    };
    path: {
        site_id: number;
    };
    query?: never;
    url: '/sites/{site_id}';
};
export type UpdateSiteErrors = {
    422: ErrorDetailedFull;
};
export type UpdateSiteError = UpdateSiteErrors[keyof UpdateSiteErrors];
export type UpdateSiteResponses = {
    200: SitesUpdateSiteResponse200;
};
export type UpdateSiteResponse = UpdateSiteResponses[keyof UpdateSiteResponses];
export type GetSiteCertificateData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        site_id: number;
    };
    query?: never;
    url: '/sites/{site_id}/certificate';
};
export type GetSiteCertificateResponses = {
    200: CertificateResponse;
};
export type GetSiteCertificateResponse = GetSiteCertificateResponses[keyof GetSiteCertificateResponses];
export type UpsertSiteCertificateData = {
    body?: InstallCertificateData;
    headers: {
        Accept: string;
    };
    path: {
        site_id: number;
    };
    query?: never;
    url: '/sites/{site_id}/certificate';
};
export type UpsertSiteCertificateResponses = {
    200: EmptyResponse;
};
export type UpsertSiteCertificateResponse = UpsertSiteCertificateResponses[keyof UpsertSiteCertificateResponses];
export type GetSitesCertificatesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'urls:in'?: Array<string>;
    };
    url: '/sites/certificates';
};
export type GetSitesCertificatesResponses = {
    200: GetCertificatesResponse;
};
export type GetSitesCertificatesResponse = GetSitesCertificatesResponses[keyof GetSitesCertificatesResponses];
export type GetSiteRoutesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        site_id: number;
    };
    query?: {
        type?: string;
        page?: number;
        limit?: number;
    };
    url: '/sites/{site_id}/routes';
};
export type GetSiteRoutesResponses = {
    200: SiteRoutesGetSiteRoutesResponse200;
};
export type GetSiteRoutesResponse = GetSiteRoutesResponses[keyof GetSiteRoutesResponses];
export type CreateSiteRouteData = {
    body?: SiteRouteBase;
    headers: {
        Accept: string;
    };
    path: {
        site_id: number;
    };
    query?: never;
    url: '/sites/{site_id}/routes';
};
export type CreateSiteRouteErrors = {
    422: CreateSiteRouteRequestUnprocessableEntityError;
    502: ErrorFull;
};
export type CreateSiteRouteError = CreateSiteRouteErrors[keyof CreateSiteRouteErrors];
export type CreateSiteRouteResponses = {
    201: SiteRoutesCreateSiteRouteResponse201;
};
export type CreateSiteRouteResponse = CreateSiteRouteResponses[keyof CreateSiteRouteResponses];
export type UpdateSiteRoutesData = {
    body?: Array<SiteRouteFull>;
    headers: {
        Accept: string;
    };
    path: {
        site_id: number;
    };
    query?: never;
    url: '/sites/{site_id}/routes';
};
export type UpdateSiteRoutesErrors = {
    422: UpdateSiteRoutesRequestUnprocessableEntityError;
};
export type UpdateSiteRoutesError = UpdateSiteRoutesErrors[keyof UpdateSiteRoutesErrors];
export type UpdateSiteRoutesResponses = {
    200: SiteRoutesUpdateSiteRoutesResponse200;
};
export type UpdateSiteRoutesResponse = UpdateSiteRoutesResponses[keyof UpdateSiteRoutesResponses];
export type DeleteSiteRouteData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        site_id: number;
        route_id: string;
    };
    query?: never;
    url: '/sites/{site_id}/routes/{route_id}';
};
export type DeleteSiteRouteResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteSiteRouteResponse = DeleteSiteRouteResponses[keyof DeleteSiteRouteResponses];
export type GetSiteRouteData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        site_id: number;
        route_id: string;
    };
    query?: never;
    url: '/sites/{site_id}/routes/{route_id}';
};
export type GetSiteRouteResponses = {
    200: SiteRoutesGetSiteRouteResponse200;
};
export type GetSiteRouteResponse = GetSiteRouteResponses[keyof GetSiteRouteResponses];
export type UpdateSiteRouteData = {
    body?: SiteRoutesRouteBase;
    headers: {
        Accept: string;
    };
    path: {
        site_id: number;
        route_id: string;
    };
    query?: never;
    url: '/sites/{site_id}/routes/{route_id}';
};
export type UpdateSiteRouteResponses = {
    201: SiteRoutesUpdateSiteRouteResponse201;
};
export type UpdateSiteRouteResponse = UpdateSiteRouteResponses[keyof UpdateSiteRouteResponses];
