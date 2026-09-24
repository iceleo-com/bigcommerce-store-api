import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as SitesV3ApiSpecs from '../generated/sites-v3';
export * as SitesV3ApiSpecs from '../generated/sites-v3';
export declare class SitesV3Api {
    private readonly request;
    constructor(request: RequestService);
    getSites(query?: SitesV3ApiSpecs.GetSitesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<SitesV3ApiSpecs.Site>;
        meta?: SitesV3ApiSpecs.MetaCollection;
    }>>>;
    postSite(requestBody: SitesV3ApiSpecs.PostSiteData['body']): Promise<RequestSuccessResponse<201, Required<{
        data?: SitesV3ApiSpecs.Site;
        meta?: SitesV3ApiSpecs.MetaCollection;
    }>> | RequestErrorResponse<400, Required<SitesV3ApiSpecs.ErrorFull>> | RequestErrorResponse<403, Required<SitesV3ApiSpecs.ErrorFull>> | RequestErrorResponse<404, Required<SitesV3ApiSpecs.ErrorFull>> | RequestErrorResponse<502, Required<unknown>> | RequestErrorResponse<504, Required<SitesV3ApiSpecs.ErrorFull>>>;
    createSite(...args: Parameters<SitesV3Api['postSite']>): Promise<RequestSuccessResponse<201, Required<{
        data?: SitesV3ApiSpecs.Site;
        meta?: SitesV3ApiSpecs.MetaCollection;
    }>> | RequestErrorResponse<400, Required<SitesV3ApiSpecs.ErrorFull>> | RequestErrorResponse<403, Required<SitesV3ApiSpecs.ErrorFull>> | RequestErrorResponse<404, Required<SitesV3ApiSpecs.ErrorFull>> | RequestErrorResponse<502, Required<unknown>> | RequestErrorResponse<504, Required<SitesV3ApiSpecs.ErrorFull>>>;
    getSite(siteId: SitesV3ApiSpecs.GetSiteData['path']['site_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SitesV3ApiSpecs.Site;
        meta?: SitesV3ApiSpecs.MetaCollection;
    }>>>;
    putSite(siteId: SitesV3ApiSpecs.PutSiteData['path']['site_id'], requestBody: SitesV3ApiSpecs.PutSiteData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SitesV3ApiSpecs.Site;
        meta?: SitesV3ApiSpecs.MetaCollection;
    }>>>;
    updateSite(...args: Parameters<SitesV3Api['putSite']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: SitesV3ApiSpecs.Site;
        meta?: SitesV3ApiSpecs.MetaCollection;
    }>>>;
    deleteSite(siteId: SitesV3ApiSpecs.DeleteSiteData['path']['site_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    indexSiteRoutes(siteId: SitesV3ApiSpecs.IndexSiteRoutesData['path']['site_id'], query?: SitesV3ApiSpecs.IndexSiteRoutesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<SitesV3ApiSpecs.SiteRouteFull>;
        meta?: SitesV3ApiSpecs.MetaCollection;
    }>>>;
    getSiteRoutes(...args: Parameters<SitesV3Api['indexSiteRoutes']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<SitesV3ApiSpecs.SiteRouteFull>;
        meta?: SitesV3ApiSpecs.MetaCollection;
    }>>>;
    postSiteRoute(siteId: SitesV3ApiSpecs.PostSiteRouteData['path']['site_id'], requestBody: SitesV3ApiSpecs.PostSiteRouteData['body']): Promise<RequestSuccessResponse<201, Required<{
        data?: SitesV3ApiSpecs.SiteRouteFull;
        meta?: SitesV3ApiSpecs.MetaOpen;
    }>> | RequestErrorResponse<422, Required<{
        title?: string;
        status?: string;
        errors?: SitesV3ApiSpecs.Errors;
        type?: string;
    }>> | RequestErrorResponse<502, Required<SitesV3ApiSpecs.ErrorFull>>>;
    createSiteRoute(...args: Parameters<SitesV3Api['postSiteRoute']>): Promise<RequestSuccessResponse<201, Required<{
        data?: SitesV3ApiSpecs.SiteRouteFull;
        meta?: SitesV3ApiSpecs.MetaOpen;
    }>> | RequestErrorResponse<422, Required<{
        title?: string;
        status?: string;
        errors?: SitesV3ApiSpecs.Errors;
        type?: string;
    }>> | RequestErrorResponse<502, Required<SitesV3ApiSpecs.ErrorFull>>>;
    putSitesBySiteIdRoutes(siteId: SitesV3ApiSpecs.PutSitesBySiteIdRoutesData['path']['site_id'], requestBody: SitesV3ApiSpecs.PutSitesBySiteIdRoutesData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<SitesV3ApiSpecs.SiteRouteFull>;
        meta?: SitesV3ApiSpecs.MetaCollection;
    }>> | RequestErrorResponse<422, Required<{
        status?: number;
        title?: string;
        errors?: SitesV3ApiSpecs.Errors;
        meta?: SitesV3ApiSpecs.MetaEmpty;
        type?: string;
    }>>>;
    updateSiteRoutes(...args: Parameters<SitesV3Api['putSitesBySiteIdRoutes']>): Promise<RequestSuccessResponse<200, Required<{
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
    putSiteRoute(siteId: SitesV3ApiSpecs.PutSiteRouteData['path']['site_id'], routeId: SitesV3ApiSpecs.PutSiteRouteData['path']['route_id'], requestBody: SitesV3ApiSpecs.PutSiteRouteData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<{
        data?: SitesV3ApiSpecs.SiteRouteFull;
        meta?: SitesV3ApiSpecs.MetaOpen;
    }>>>;
    updateSiteRoute(...args: Parameters<SitesV3Api['putSiteRoute']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<{
        data?: SitesV3ApiSpecs.SiteRouteFull;
        meta?: SitesV3ApiSpecs.MetaOpen;
    }>>>;
    deleteRoute(siteId: SitesV3ApiSpecs.DeleteRouteData['path']['site_id'], routeId: SitesV3ApiSpecs.DeleteRouteData['path']['route_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteSiteRoute(...args: Parameters<SitesV3Api['deleteRoute']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getSitesIdCertificate(siteId: SitesV3ApiSpecs.GetSitesIdCertificateData['path']['site_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<SitesV3ApiSpecs.CertificateResponse>>>;
    getSiteCertificate(...args: Parameters<SitesV3Api['getSitesIdCertificate']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<SitesV3ApiSpecs.CertificateResponse>>>;
    putSiteIdCertificate(siteId: SitesV3ApiSpecs.PutSiteIdCertificateData['path']['site_id'], requestBody: SitesV3ApiSpecs.PutSiteIdCertificateData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<SitesV3ApiSpecs.EmptyResponse>>>;
    upsertSiteCertificate(...args: Parameters<SitesV3Api['putSiteIdCertificate']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<SitesV3ApiSpecs.EmptyResponse>>>;
    getSitesCertificates(query?: SitesV3ApiSpecs.GetSitesCertificatesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<SitesV3ApiSpecs.GetCertificatesResponse>>>;
}
