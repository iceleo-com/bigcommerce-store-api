import RequestService from '../helpers/request/request-service';
import * as SitesV3ApiSpecs from '../generated/sites-v3';
export default class SitesV3Api {
    private readonly request;
    constructor(request: RequestService);
    getSites(query?: SitesV3ApiSpecs.GetSitesData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    createSite(requestBody: SitesV3ApiSpecs.CreateSiteData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, unknown>>;
    getSite(siteId: SitesV3ApiSpecs.GetSiteData['path']['site_id']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    updateSite(siteId: SitesV3ApiSpecs.UpdateSiteData['path']['site_id'], requestBody: SitesV3ApiSpecs.UpdateSiteData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    deleteSite(siteId: SitesV3ApiSpecs.DeleteSiteData['path']['site_id']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getSiteRoutes(siteId: SitesV3ApiSpecs.GetSiteRoutesData['path']['site_id'], query?: SitesV3ApiSpecs.GetSiteRoutesData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<SitesV3ApiSpecs.GetSiteRoutesResponse, any>>;
    createSiteRoute(siteId: SitesV3ApiSpecs.CreateSiteRouteData['path']['site_id'], requestBody: SitesV3ApiSpecs.CreateSiteRouteData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, SitesV3ApiSpecs.CreateSiteRouteError>>;
    updateSiteRoutes(siteId: SitesV3ApiSpecs.UpdateSiteRoutesData['path']['site_id'], requestBody: SitesV3ApiSpecs.UpdateSiteRoutesData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<SitesV3ApiSpecs.UpdateSiteRoutesResponse, SitesV3ApiSpecs.UpdateSiteRoutesError>>;
    getSiteRoute(siteId: SitesV3ApiSpecs.GetSiteRouteData['path']['site_id'], routeId: SitesV3ApiSpecs.GetSiteRouteData['path']['route_id']): Promise<import("../helpers/request/request-service.types").RequestResponse<SitesV3ApiSpecs.GetSiteRouteResponse, any>>;
    updateSiteRoute(siteId: SitesV3ApiSpecs.UpdateSiteRouteData['path']['site_id'], routeId: SitesV3ApiSpecs.UpdateSiteRouteData['path']['route_id'], requestBody: SitesV3ApiSpecs.UpdateSiteRouteData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    deleteSiteRoute(siteId: SitesV3ApiSpecs.DeleteSiteRouteData['path']['site_id'], routeId: SitesV3ApiSpecs.DeleteSiteRouteData['path']['route_id']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getSiteCertificate(siteId: SitesV3ApiSpecs.GetSiteCertificateData['path']['site_id']): Promise<import("../helpers/request/request-service.types").RequestResponse<SitesV3ApiSpecs.CertificateResponse, any>>;
    upsertSiteCertificate(siteId: SitesV3ApiSpecs.UpsertSiteCertificateData['path']['site_id'], requestBody: SitesV3ApiSpecs.UpsertSiteCertificateData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<SitesV3ApiSpecs.EmptyResponse, any>>;
    getSitesCertificates(query?: SitesV3ApiSpecs.GetSitesCertificatesData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<SitesV3ApiSpecs.GetCertificatesResponse, any>>;
}
