export type _errors = {
    [key: string]: unknown;
};
export type _metaCollection = {
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
export type _metaEmpty = {
    [key: string]: unknown;
};
export type _pagination = {
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
export type _site = {
    id?: number;
    url?: string;
    channel_id?: number;
    created_at?: string;
    updated_at?: string;
    ssl_status?: 'dedicated' | 'shared';
    urls?: Array<Url>;
    is_checkout_url_customized?: boolean;
};
export type ssl_status = 'dedicated' | 'shared';
export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CertificateResponse = {
    data?: {
        status?: 'shared' | 'dedicated';
        installed_certificate?: InstalledCertificateDetail;
    };
    meta?: MetaOpen;
};
export type status = 'shared' | 'dedicated';
export type CertificateWrite = {
    certificate?: string;
    private_key?: string;
    intermediate_certificates?: string;
};
export type DetailedErrors = {
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
export type error_Full = {
    status?: number;
    title?: string;
    type?: string;
};
export type errorDetailed_Full = {
    errors?: {
        [key: string]: unknown;
    };
};
export type ErrorResponse = BaseError & {
    errors?: DetailedErrors;
};
export type GetCertificatesResponse = {
    data?: Array<InstalledCertificateDetail>;
    meta?: MetaOpen;
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
export type InstallCertificateData = {
    url?: string;
    certificate?: CertificateWrite;
};
export type InstalledCertificateDetail = {
    common_name?: string;
    subject_alternative_names?: Array<(string)>;
    validity_not_before?: string;
    validity_not_after?: string;
    signing_algorithm?: string;
    issuer?: string;
    certificate?: string;
    intermediate_certificates?: string;
} | null;
export type Meta = {
    pagination?: {
        offset?: number;
        limit?: number;
        total_items?: number;
    };
};
export type MetaOpen = {
    [key: string]: unknown;
};
export type ParameterAccept = string;
export type ParameterContentType = string;
export type ParameterSiteIdPathParam = number;
export type post_Site = {
    url?: string;
    channel_id?: number;
};
export type put_Site = {
    url?: string;
};
export type SiteCreate = {
    url?: string;
    channel_id?: number;
    certificate?: CertificateWrite;
};
export type siteRoute_Base = {
    type?: 'product' | 'brand' | 'category' | 'page' | 'blog' | 'home' | 'cart' | 'checkout' | 'search' | 'account' | 'login' | 'returns' | 'static';
    matching?: string;
    route?: string;
};
export type type = 'product' | 'brand' | 'category' | 'page' | 'blog' | 'home' | 'cart' | 'checkout' | 'search' | 'account' | 'login' | 'returns' | 'static';
export type siteRoute_Full = {
    id?: number;
} & siteRoute_Base;
export type siteRoutes_Route_Base = {
    type: 'product' | 'brand' | 'category' | 'page' | 'blog' | 'home' | 'cart' | 'checkout' | 'search' | 'account' | 'login' | 'returns' | 'static';
    matching: string;
    route: string;
};
export type Url = {
    url?: string;
    type?: 'primary' | 'canonical' | 'checkout';
    created_at?: string;
    updated_at?: string;
};
export type type2 = 'primary' | 'canonical' | 'checkout';
export type CreateSiteData = {
    body: post_Site;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateSiteResponse = ({
    data?: _site;
    meta?: MetaOpen;
});
export type CreateSiteError = (error_Full | unknown);
export type GetSitesData = {
    headers: {
        Accept: string;
    };
    query?: {
        'channel_id:in'?: Array<(number)>;
        limit?: number;
        page?: number;
        'url_type:in'?: Array<(string)>;
    };
};
export type GetSitesResponse = ({
    data?: Array<_site>;
    meta?: Meta;
});
export type GetSitesError = unknown;
export type GetSiteData = {
    headers: {
        Accept: string;
    };
    path: {
        site_id: string;
    };
};
export type GetSiteResponse = ({
    data?: _site;
    meta?: MetaOpen;
});
export type GetSiteError = unknown;
export type UpdateSiteData = {
    body: put_Site;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        site_id: string;
    };
};
export type UpdateSiteResponse = ({
    data?: _site;
    meta?: MetaOpen;
});
export type UpdateSiteError = unknown;
export type DeleteSiteData = {
    headers: {
        Accept: string;
    };
    path: {
        site_id: string;
    };
};
export type DeleteSiteResponse = ({
    data?: {
        [key: string]: unknown;
    };
    meta?: {
        [key: string]: unknown;
    };
});
export type DeleteSiteError = unknown;
export type GetSiteRoutesData = {
    headers: {
        Accept: string;
    };
    path: {
        site_id: number;
    };
    query?: {
        limit?: number;
        page?: number;
        type?: string;
    };
};
export type GetSiteRoutesResponse = ({
    data?: Array<siteRoute_Full>;
    meta?: _metaCollection;
});
export type GetSiteRoutesError = unknown;
export type CreateSiteRouteData = {
    body: siteRoute_Base;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        site_id: number;
    };
};
export type CreateSiteRouteResponse = ({
    data?: siteRoute_Full;
    meta?: MetaOpen;
});
export type CreateSiteRouteError = ({
    title?: string;
    status?: string;
    errors?: _errors;
    type?: string;
} | error_Full);
export type UpdateSiteRoutesData = {
    body?: Array<siteRoute_Full>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        site_id: number;
    };
};
export type UpdateSiteRoutesResponse = ({
    data?: Array<siteRoute_Full>;
    meta?: _metaCollection;
});
export type UpdateSiteRoutesError = ({
    status?: number;
    title?: string;
    errors?: _errors;
    meta?: _metaEmpty;
    type?: string;
});
export type GetSiteRouteData = {
    headers: {
        Accept: string;
    };
    path: {
        route_id: string;
        site_id: string;
    };
};
export type GetSiteRouteResponse = ({
    data?: siteRoute_Full;
    meta?: MetaOpen;
});
export type GetSiteRouteError = unknown;
export type UpdateSiteRouteData = {
    body: siteRoutes_Route_Base;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        route_id: string;
        site_id: string;
    };
};
export type UpdateSiteRouteResponse = ({
    data?: siteRoute_Full;
    meta?: MetaOpen;
});
export type UpdateSiteRouteError = unknown;
export type DeleteSiteRouteData = {
    headers: {
        Accept: string;
    };
    path: {
        route_id: string;
        site_id: string;
    };
};
export type DeleteSiteRouteResponse = (void);
export type DeleteSiteRouteError = unknown;
export type GetSiteCertificateData = {
    headers: {
        Accept: string;
    };
    path: {
        site_id: number;
    };
};
export type GetSiteCertificateResponse = (CertificateResponse);
export type GetSiteCertificateError = unknown;
export type UpsertSiteCertificateData = {
    body?: InstallCertificateData;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        site_id: number;
    };
};
export type UpsertSiteCertificateResponse = (EmptyResponse);
export type UpsertSiteCertificateError = unknown;
export type GetSitesCertificatesData = {
    headers: {
        Accept: string;
    };
    query?: {
        'urls:in'?: Array<(string)>;
    };
};
export type GetSitesCertificatesResponse = (GetCertificatesResponse);
export type GetSitesCertificatesError = unknown;
