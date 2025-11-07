import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as SitesV3ApiSpecs from '../generated/sites-v3';
export * as SitesV3ApiSpecs from '../generated/sites-v3';
export declare class SitesV3Api {
    private readonly request;
    constructor(request: RequestService);
    getSites(query?: SitesV3ApiSpecs.GetSitesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<SitesV3ApiSpecs.Site>;
        meta?: SitesV3ApiSpecs.Meta;
    }>>>;
    createSite(requestBody: SitesV3ApiSpecs.CreateSiteData['body']): Promise<RequestSuccessResponse<201, Required<{
        data?: SitesV3ApiSpecs.Site;
        meta?: SitesV3ApiSpecs.MetaOpen;
    }>> | RequestErrorResponse<400, Required<SitesV3ApiSpecs.ErrorFull>> | RequestErrorResponse<403, Required<SitesV3ApiSpecs.ErrorFull>> | RequestErrorResponse<404, Required<SitesV3ApiSpecs.ErrorFull>> | RequestErrorResponse<502, Required<unknown>> | RequestErrorResponse<504, Required<SitesV3ApiSpecs.ErrorFull>>>;
    getSite(siteId: SitesV3ApiSpecs.GetSiteData['path']['site_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SitesV3ApiSpecs.Site;
        meta?: SitesV3ApiSpecs.MetaOpen;
    }>>>;
    updateSite(siteId: SitesV3ApiSpecs.UpdateSiteData['path']['site_id'], requestBody: SitesV3ApiSpecs.UpdateSiteData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SitesV3ApiSpecs.Site;
        meta?: SitesV3ApiSpecs.MetaOpen;
    }>>>;
    deleteSite(siteId: SitesV3ApiSpecs.DeleteSiteData['path']['site_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        data?: {
            [key: string]: unknown;
        };
        meta?: {
            [key: string]: unknown;
        };
    }>>>;
    getSiteRoutes(siteId: SitesV3ApiSpecs.GetSiteRoutesData['path']['site_id'], query?: SitesV3ApiSpecs.GetSiteRoutesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<SitesV3ApiSpecs.SiteRouteFull>;
        meta?: SitesV3ApiSpecs.MetaCollection;
    }>>>;
    createSiteRoute(siteId: SitesV3ApiSpecs.CreateSiteRouteData['path']['site_id'], requestBody: SitesV3ApiSpecs.CreateSiteRouteData['body']): Promise<RequestSuccessResponse<201, Required<{
        data?: SitesV3ApiSpecs.SiteRouteFull;
        meta?: SitesV3ApiSpecs.MetaOpen;
    }>> | RequestErrorResponse<422, Required<{
        title?: string;
        status?: string;
        errors?: SitesV3ApiSpecs.Errors;
        type?: string;
    }>> | RequestErrorResponse<502, Required<SitesV3ApiSpecs.ErrorFull>>>;
    updateSiteRoutes(siteId: SitesV3ApiSpecs.UpdateSiteRoutesData['path']['site_id'], requestBody: SitesV3ApiSpecs.UpdateSiteRoutesData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<SitesV3ApiSpecs.SiteRouteFull>;
        meta?: SitesV3ApiSpecs.MetaCollection;
    }>> | RequestErrorResponse<422, Required<{
        status?: number;
        title?: string;
        errors?: SitesV3ApiSpecs.Errors;
        meta?: SitesV3ApiSpecs.MetaEmpty;
        type?: string;
    }>>>;
    getSiteRoute(siteId: SitesV3ApiSpecs.GetSiteRouteData['path']['site_id'], routeId: SitesV3ApiSpecs.GetSiteRouteData['path']['route_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SitesV3ApiSpecs.SiteRouteFull;
        meta?: SitesV3ApiSpecs.MetaOpen;
    }>>>;
    updateSiteRoute(siteId: SitesV3ApiSpecs.UpdateSiteRouteData['path']['site_id'], routeId: SitesV3ApiSpecs.UpdateSiteRouteData['path']['route_id'], requestBody: SitesV3ApiSpecs.UpdateSiteRouteData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<{
        data?: SitesV3ApiSpecs.SiteRouteFull;
        meta?: SitesV3ApiSpecs.MetaOpen;
    }>>>;
    deleteSiteRoute(siteId: SitesV3ApiSpecs.DeleteSiteRouteData['path']['site_id'], routeId: SitesV3ApiSpecs.DeleteSiteRouteData['path']['route_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getSiteCertificate(siteId: SitesV3ApiSpecs.GetSiteCertificateData['path']['site_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<SitesV3ApiSpecs.CertificateResponse>>>;
    upsertSiteCertificate(siteId: SitesV3ApiSpecs.UpsertSiteCertificateData['path']['site_id'], requestBody: SitesV3ApiSpecs.UpsertSiteCertificateData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<SitesV3ApiSpecs.EmptyResponse>>>;
    getSitesCertificates(query?: SitesV3ApiSpecs.GetSitesCertificatesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<SitesV3ApiSpecs.GetCertificatesResponse>>>;
}
