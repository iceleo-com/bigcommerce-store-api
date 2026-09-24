import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as SitesV3ApiSpecs from '../generated/sites-v3';
export * as SitesV3ApiSpecs from '../generated/sites-v3';

export class SitesV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get Sites
     *
     * Get sites linked to a [headless storefront](/docs/storefront/headless) sales channels.
     */
    getSites(
        query?: SitesV3ApiSpecs.GetSitesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SitesV3ApiSpecs.GetSitesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/sites',
            query,
        });
    }

    /**
     * Create a Site
     *
     * Create a site that links a [headless storefront](/docs/storefront/headless) to a sales [channel](/docs/rest-management/channels).
     */
    postSite(
        requestBody: SitesV3ApiSpecs.PostSiteData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<SitesV3ApiSpecs.PostSiteResponses[201]>>,(RequestErrorResponse<400, Required<SitesV3ApiSpecs.PostSiteErrors[400]>> | RequestErrorResponse<403, Required<SitesV3ApiSpecs.PostSiteErrors[403]>> | RequestErrorResponse<404, Required<SitesV3ApiSpecs.PostSiteErrors[404]>> | RequestErrorResponse<502, Required<SitesV3ApiSpecs.PostSiteErrors[502]>> | RequestErrorResponse<504, Required<SitesV3ApiSpecs.PostSiteErrors[504]>>)>({
            path: 'v3/sites',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `postSite` instead.
     */
    createSite(...args: Parameters<SitesV3Api['postSite']>) {
        return this.postSite(...args);
    }

    /**
     * Get a Site
     *
     * Get a site with site ID `{site_id}`.
     */
    getSite(
        siteId: SitesV3ApiSpecs.GetSiteData['path']['site_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SitesV3ApiSpecs.GetSiteResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/sites/${siteId}`,
        });
    }

    /**
     * Update a Site
     *
     * Update a site with site ID `{site_id}`.
     */
    putSite(
        siteId: SitesV3ApiSpecs.PutSiteData['path']['site_id'],
        requestBody: SitesV3ApiSpecs.PutSiteData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SitesV3ApiSpecs.PutSiteResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/sites/${siteId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `putSite` instead.
     */
    updateSite(...args: Parameters<SitesV3Api['putSite']>) {
        return this.putSite(...args);
    }

    /**
     * Delete a Site
     *
     * Delete a site with site ID `{site_id}`.
     */
    deleteSite(
        siteId: SitesV3ApiSpecs.DeleteSiteData['path']['site_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<SitesV3ApiSpecs.DeleteSiteResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/sites/${siteId}`,
        });
    }

    /**
     * Get a Site’s Routes
     *
     * Get a site’s routes.
     */
    indexSiteRoutes(
        siteId: SitesV3ApiSpecs.IndexSiteRoutesData['path']['site_id'],
        query?: SitesV3ApiSpecs.IndexSiteRoutesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SitesV3ApiSpecs.IndexSiteRoutesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/sites/${siteId}/routes`,
            query,
        });
    }

    /**
     * @deprecated Use `indexSiteRoutes` instead.
     */
    getSiteRoutes(...args: Parameters<SitesV3Api['indexSiteRoutes']>) {
        return this.indexSiteRoutes(...args);
    }

    /**
     * Create a Site Route
     *
     * Create routes that tell BigCommerce how to link to pages on a [headless storefront](/docs/storefront/headless).

     ## Usage Notes
     * For a list of supported route types, see [Route types](/docs/rest-management/sites#route-types).
     */
    postSiteRoute(
        siteId: SitesV3ApiSpecs.PostSiteRouteData['path']['site_id'],
        requestBody: SitesV3ApiSpecs.PostSiteRouteData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<SitesV3ApiSpecs.PostSiteRouteResponses[201]>>,(RequestErrorResponse<422, Required<SitesV3ApiSpecs.PostSiteRouteErrors[422]>> | RequestErrorResponse<502, Required<SitesV3ApiSpecs.PostSiteRouteErrors[502]>>)>({
            path: `v3/sites/${siteId}/routes`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `postSiteRoute` instead.
     */
    createSiteRoute(...args: Parameters<SitesV3Api['postSiteRoute']>) {
        return this.postSiteRoute(...args);
    }

    /**
     * Update a Site’s Routes
     *
     * Upsert routes for site with ID `{site_id}`.

     ## Usage Notes
     * `id` is required when updating an existing route.
     */
    putSitesBySiteIdRoutes(
        siteId: SitesV3ApiSpecs.PutSitesBySiteIdRoutesData['path']['site_id'],
        requestBody: SitesV3ApiSpecs.PutSitesBySiteIdRoutesData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SitesV3ApiSpecs.PutSitesBySiteIdRoutesResponses[200]>>,RequestErrorResponse<422, Required<SitesV3ApiSpecs.PutSitesBySiteIdRoutesErrors[422]>>>({
            path: `v3/sites/${siteId}/routes`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `putSitesBySiteIdRoutes` instead.
     */
    updateSiteRoutes(...args: Parameters<SitesV3Api['putSitesBySiteIdRoutes']>) {
        return this.putSitesBySiteIdRoutes(...args);
    }

    /**
     * Get a Site Route
     *
     * Get a site’s route.
     */
    getSiteRoute(
        siteId: SitesV3ApiSpecs.GetSiteRouteData['path']['site_id'],
        routeId: SitesV3ApiSpecs.GetSiteRouteData['path']['route_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SitesV3ApiSpecs.GetSiteRouteResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/sites/${siteId}/routes/${routeId}`,
        });
    }

    /**
     * Update a Site Route
     *
     * Update a site’s route.

     */
    putSiteRoute(
        siteId: SitesV3ApiSpecs.PutSiteRouteData['path']['site_id'],
        routeId: SitesV3ApiSpecs.PutSiteRouteData['path']['route_id'],
        requestBody: SitesV3ApiSpecs.PutSiteRouteData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<201, Required<SitesV3ApiSpecs.PutSiteRouteResponses[201]>>,RequestErrorResponse<400, void>>({
            path: `v3/sites/${siteId}/routes/${routeId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `putSiteRoute` instead.
     */
    updateSiteRoute(...args: Parameters<SitesV3Api['putSiteRoute']>) {
        return this.putSiteRoute(...args);
    }

    /**
     * Delete a Site Route
     *
     * Delete a site’s route.
     */
    deleteRoute(
        siteId: SitesV3ApiSpecs.DeleteRouteData['path']['site_id'],
        routeId: SitesV3ApiSpecs.DeleteRouteData['path']['route_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<SitesV3ApiSpecs.DeleteRouteResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/sites/${siteId}/routes/${routeId}`,
        });
    }

    /**
     * @deprecated Use `deleteRoute` instead.
     */
    deleteSiteRoute(...args: Parameters<SitesV3Api['deleteRoute']>) {
        return this.deleteRoute(...args);
    }

    /**
     * Get a Site’s SSL/TLS Certificate Information
     *
     * Obtain information about a site’s SSL/TLS certificate.
     */
    getSitesIdCertificate(
        siteId: SitesV3ApiSpecs.GetSitesIdCertificateData['path']['site_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SitesV3ApiSpecs.GetSitesIdCertificateResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/sites/${siteId}/certificate`,
        });
    }

    /**
     * @deprecated Use `getSitesIdCertificate` instead.
     */
    getSiteCertificate(...args: Parameters<SitesV3Api['getSitesIdCertificate']>) {
        return this.getSitesIdCertificate(...args);
    }

    /**
     * Upsert a Site’s SSL/TLS Certificate Information
     *
     * - If a value for `url` is not supplied, the saved certificate is associated with the specified site’s `primary` URL.
     - Use caution. Because this endpoint upserts, supplying an SSL certificate for a domain that already has a certificate connected overwrites the domain’s extant certificate.'
     */
    putSiteIdCertificate(
        siteId: SitesV3ApiSpecs.PutSiteIdCertificateData['path']['site_id'],
        requestBody: SitesV3ApiSpecs.PutSiteIdCertificateData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SitesV3ApiSpecs.PutSiteIdCertificateResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/sites/${siteId}/certificate`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `putSiteIdCertificate` instead.
     */
    upsertSiteCertificate(...args: Parameters<SitesV3Api['putSiteIdCertificate']>) {
        return this.putSiteIdCertificate(...args);
    }

    /**
     * Get Site Certificates
     *
     * Return all SSL certificates connected to domains within a store.
     */
    getSitesCertificates(
        query?: SitesV3ApiSpecs.GetSitesCertificatesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SitesV3ApiSpecs.GetSitesCertificatesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/sites/certificates',
            query,
        });
    }
}
