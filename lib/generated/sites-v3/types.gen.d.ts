export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type MetaCollection = {
    pagination?: {
        total?: number;
        count?: number;
        per_page?: number;
        current_page?: number;
        total_page?: number;
        links?: {
            previous?: string;
            next?: string;
            current?: string;
        };
    };
};
export type SiteRouteFull = {
    id?: number;
} & SiteRouteBase;
export type PutSite = {
    url?: string;
};
export type Site = {
    id?: number;
    url?: string;
    channel_id?: number;
    created_at?: string;
    updated_at?: string;
    ssl_status?: 'dedicated' | 'shared';
    urls?: Array<Url>;
    is_checkout_url_customized?: boolean;
};
export type MetaEmpty = {
    [key: string]: unknown;
};
export type Pagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: {
        previous?: string;
        current?: string;
        next?: string;
    };
};
export type Errors = {
    [key: string]: unknown;
};
export type EmptyResponse = {
    data?: {
        [key: string]: unknown;
    };
    meta?: {
        [key: string]: unknown;
    };
};
export type ErrorFull = {
    status?: number;
    title?: string;
    type?: string;
};
export type ErrorDetailedFull = {
    errors?: {
        [key: string]: unknown;
    };
};
export type PostSite = {
    url?: string;
    channel_id?: number;
};
export type SiteRouteBase = {
    type?: 'product' | 'brand' | 'category' | 'page' | 'blog' | 'home' | 'cart' | 'checkout' | 'search' | 'account' | 'login' | 'returns' | 'static';
    matching?: string;
    route?: string;
};
export type SiteRoutesRouteBase = {
    type: 'product' | 'brand' | 'category' | 'page' | 'blog' | 'home' | 'cart' | 'checkout' | 'search' | 'account' | 'login' | 'returns' | 'static';
    matching: string;
    route: string;
};
export type IndexMeta = {
    pagination?: {
        total?: number;
        count?: number;
        per_page?: number;
        current_page?: number;
        total_pages?: number;
        links?: {
            previous?: string;
            current?: string;
            next?: string;
        };
    };
};
export type Url = {
    url?: string;
    type?: 'primary' | 'canonical' | 'checkout';
    created_at?: string;
    updated_at?: string;
};
export type SiteCreate = {
    url?: string;
    channel_id?: number;
    certificate?: CertificateWrite;
};
export type CertificateWrite = {
    certificate?: string;
    private_key?: string;
    intermediate_certificates?: string;
};
export type CertificateResponse = {
    data?: {
        status?: 'shared' | 'dedicated';
        installed_certificate?: InstalledCertificateDetail;
    };
    meta?: MetaOpen;
};
export type InstallCertificateData = {
    url?: string;
    certificate?: CertificateWrite;
};
export type InstalledCertificateDetail = {
    common_name?: string;
    subject_alternative_names?: Array<string>;
    validity_not_before?: string;
    validity_not_after?: string;
    signing_algorithm?: string;
    issuer?: string;
    certificate?: string;
    intermediate_certificates?: string;
} | null;
export type ErrorResponse = BaseError & {
    errors?: DetailedErrors;
};
export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type DetailedErrors = {
    [key: string]: unknown;
};
export type GetCertificatesResponse = {
    data?: Array<InstalledCertificateDetail>;
    meta?: MetaOpen;
};
export type MetaOpen = {
    [key: string]: unknown;
};
export type Meta = {
    pagination?: {
        offset?: number;
        limit?: number;
        total_items?: number;
    };
};
export type Accept = string;
export type ContentType = string;
export type SiteIdPathParam = number;
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
    200: {
        data?: Array<Site>;
        meta?: Meta;
    };
};
export type GetSitesResponse = GetSitesResponses[keyof GetSitesResponses];
export type CreateSiteData = {
    body: PostSite;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/sites';
};
export type CreateSiteErrors = {
    400: ErrorFull;
    403: ErrorFull;
    404: ErrorFull;
    502: unknown;
    504: ErrorFull;
};
export type CreateSiteError = CreateSiteErrors[keyof CreateSiteErrors];
export type CreateSiteResponses = {
    201: {
        data?: Site;
        meta?: MetaOpen;
    };
};
export type CreateSiteResponse = CreateSiteResponses[keyof CreateSiteResponses];
export type DeleteSiteData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        site_id: string;
    };
    query?: never;
    url: '/sites/{site_id}';
};
export type DeleteSiteResponses = {
    204: {
        data?: {
            [key: string]: unknown;
        };
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type DeleteSiteResponse = DeleteSiteResponses[keyof DeleteSiteResponses];
export type GetSiteData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        site_id: string;
    };
    query?: never;
    url: '/sites/{site_id}';
};
export type GetSiteResponses = {
    200: {
        data?: Site;
        meta?: MetaOpen;
    };
};
export type GetSiteResponse = GetSiteResponses[keyof GetSiteResponses];
export type UpdateSiteData = {
    body: PutSite;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        site_id: string;
    };
    query?: never;
    url: '/sites/{site_id}';
};
export type UpdateSiteResponses = {
    200: {
        data?: Site;
        meta?: MetaOpen;
    };
};
export type UpdateSiteResponse = UpdateSiteResponses[keyof UpdateSiteResponses];
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
    200: {
        data?: Array<SiteRouteFull>;
        meta?: MetaCollection;
    };
};
export type GetSiteRoutesResponse = GetSiteRoutesResponses[keyof GetSiteRoutesResponses];
export type CreateSiteRouteData = {
    body: SiteRouteBase;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        site_id: number;
    };
    query?: never;
    url: '/sites/{site_id}/routes';
};
export type CreateSiteRouteErrors = {
    422: {
        title?: string;
        status?: string;
        errors?: Errors;
        type?: string;
    };
    502: ErrorFull;
};
export type CreateSiteRouteError = CreateSiteRouteErrors[keyof CreateSiteRouteErrors];
export type CreateSiteRouteResponses = {
    201: {
        data?: SiteRouteFull;
        meta?: MetaOpen;
    };
};
export type CreateSiteRouteResponse = CreateSiteRouteResponses[keyof CreateSiteRouteResponses];
export type UpdateSiteRoutesData = {
    body?: Array<SiteRouteFull>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        site_id: number;
    };
    query?: never;
    url: '/sites/{site_id}/routes';
};
export type UpdateSiteRoutesErrors = {
    422: {
        status?: number;
        title?: string;
        errors?: Errors;
        meta?: MetaEmpty;
        type?: string;
    };
};
export type UpdateSiteRoutesError = UpdateSiteRoutesErrors[keyof UpdateSiteRoutesErrors];
export type UpdateSiteRoutesResponses = {
    200: {
        data?: Array<SiteRouteFull>;
        meta?: MetaCollection;
    };
};
export type UpdateSiteRoutesResponse = UpdateSiteRoutesResponses[keyof UpdateSiteRoutesResponses];
export type DeleteSiteRouteData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        site_id: string;
        route_id: string;
    };
    query?: never;
    url: '/sites/{site_id}/routes/{route_id}';
};
export type DeleteSiteRouteResponses = {
    204: void;
};
export type DeleteSiteRouteResponse = DeleteSiteRouteResponses[keyof DeleteSiteRouteResponses];
export type GetSiteRouteData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        site_id: string;
        route_id: string;
    };
    query?: never;
    url: '/sites/{site_id}/routes/{route_id}';
};
export type GetSiteRouteResponses = {
    200: {
        data?: SiteRouteFull;
        meta?: MetaOpen;
    };
};
export type GetSiteRouteResponse = GetSiteRouteResponses[keyof GetSiteRouteResponses];
export type UpdateSiteRouteData = {
    body: SiteRoutesRouteBase;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        site_id: string;
        route_id: string;
    };
    query?: never;
    url: '/sites/{site_id}/routes/{route_id}';
};
export type UpdateSiteRouteResponses = {
    201: {
        data?: SiteRouteFull;
        meta?: MetaOpen;
    };
};
export type UpdateSiteRouteResponse = UpdateSiteRouteResponses[keyof UpdateSiteRouteResponses];
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
        'Content-Type': string;
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
