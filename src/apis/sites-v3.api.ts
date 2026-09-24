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
     * List Sites
     *
     * Get sites linked to a [headless storefront](/developer/docs/storefront/headless) sales channels.
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
     * Create Site
     *
     * Create a site that links a [headless storefront](/developer/docs/storefront/headless) to a sales [channel](/developer/api-reference/rest/admin/management/channels).
     */
    createSite(
        requestBody: SitesV3ApiSpecs.CreateSiteData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<SitesV3ApiSpecs.CreateSiteResponses[201]>>,(RequestErrorResponse<400, Required<SitesV3ApiSpecs.CreateSiteErrors[400]>> | RequestErrorResponse<403, Required<SitesV3ApiSpecs.CreateSiteErrors[403]>> | RequestErrorResponse<404, Required<SitesV3ApiSpecs.CreateSiteErrors[404]>> | RequestErrorResponse<422, Required<SitesV3ApiSpecs.CreateSiteErrors[422]>> | RequestErrorResponse<502, Required<SitesV3ApiSpecs.CreateSiteErrors[502]>> | RequestErrorResponse<504, Required<SitesV3ApiSpecs.CreateSiteErrors[504]>>)>({
            path: 'v3/sites',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Site
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
     * Update Site
     *
     * Update a site with site ID `{site_id}`.
     */
    updateSite(
        siteId: SitesV3ApiSpecs.UpdateSiteData['path']['site_id'],
        requestBody: SitesV3ApiSpecs.UpdateSiteData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SitesV3ApiSpecs.UpdateSiteResponses[200]>>,RequestErrorResponse<422, Required<SitesV3ApiSpecs.UpdateSiteErrors[422]>>>({
            path: `v3/sites/${siteId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Site
     *
     * Delete a site with site ID `{site_id}`. Remove the URL set for a given site ID.
     */
    deleteSite(
        siteId: SitesV3ApiSpecs.DeleteSiteData['path']['site_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<SitesV3ApiSpecs.DeleteSiteResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/sites/${siteId}`,
        });
    }

    /**
     * Get Site’s SSL TLS Certificate Information
     *
     * Obtain information about a site’s SSL/TLS certificate.
     */
    getSiteCertificate(
        siteId: SitesV3ApiSpecs.GetSiteCertificateData['path']['site_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SitesV3ApiSpecs.GetSiteCertificateResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/sites/${siteId}/certificate`,
        });
    }

    /**
     * Upsert Site’s SSL TLS Certificate Information
     *
     * - If a value for `url` is not supplied, the saved certificate is associated with the specified site’s `primary` URL.
     - Use caution. Because this endpoint upserts, supplying an SSL certificate for a domain that already has a certificate connected overwrites the domain’s extant certificate.'
     */
    upsertSiteCertificate(
        siteId: SitesV3ApiSpecs.UpsertSiteCertificateData['path']['site_id'],
        requestBody: SitesV3ApiSpecs.UpsertSiteCertificateData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SitesV3ApiSpecs.UpsertSiteCertificateResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/sites/${siteId}/certificate`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * List Site Certificates
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

    /**
     * Get Site’s Routes
     *
     * Get a site’s routes.
     */
    getSiteRoutes(
        siteId: SitesV3ApiSpecs.GetSiteRoutesData['path']['site_id'],
        query?: SitesV3ApiSpecs.GetSiteRoutesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SitesV3ApiSpecs.GetSiteRoutesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/sites/${siteId}/routes`,
            query,
        });
    }

    /**
     * Create Site Route
     *
     * Create routes that tell BigCommerce how to link to pages on a [headless storefront](/developer/docs/storefront/headless).

     ## Usage Notes
     * For a list of supported route types, see [Route types](/developer/api-reference/rest/admin/management/sites#route-types).
     */
    createSiteRoute(
        siteId: SitesV3ApiSpecs.CreateSiteRouteData['path']['site_id'],
        requestBody: SitesV3ApiSpecs.CreateSiteRouteData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<SitesV3ApiSpecs.CreateSiteRouteResponses[201]>>,(RequestErrorResponse<422, Required<SitesV3ApiSpecs.CreateSiteRouteErrors[422]>> | RequestErrorResponse<502, Required<SitesV3ApiSpecs.CreateSiteRouteErrors[502]>>)>({
            path: `v3/sites/${siteId}/routes`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update Site’s Routes
     *
     * Upsert routes for site with ID `{site_id}`.

     ## Usage Notes
     * `id` is required when updating an existing route.
     */
    updateSiteRoutes(
        siteId: SitesV3ApiSpecs.UpdateSiteRoutesData['path']['site_id'],
        requestBody: SitesV3ApiSpecs.UpdateSiteRoutesData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SitesV3ApiSpecs.UpdateSiteRoutesResponses[200]>>,RequestErrorResponse<422, Required<SitesV3ApiSpecs.UpdateSiteRoutesErrors[422]>>>({
            path: `v3/sites/${siteId}/routes`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Site Route
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
     * Update Site Route
     *
     * Update a site’s route.

     */
    updateSiteRoute(
        siteId: SitesV3ApiSpecs.UpdateSiteRouteData['path']['site_id'],
        routeId: SitesV3ApiSpecs.UpdateSiteRouteData['path']['route_id'],
        requestBody: SitesV3ApiSpecs.UpdateSiteRouteData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<201, Required<SitesV3ApiSpecs.UpdateSiteRouteResponses[201]>>,RequestErrorResponse<400, void>>({
            path: `v3/sites/${siteId}/routes/${routeId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Site Route
     *
     * Delete a site’s route.
     */
    deleteSiteRoute(
        siteId: SitesV3ApiSpecs.DeleteSiteRouteData['path']['site_id'],
        routeId: SitesV3ApiSpecs.DeleteSiteRouteData['path']['route_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<SitesV3ApiSpecs.DeleteSiteRouteResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/sites/${siteId}/routes/${routeId}`,
        });
    }
}
