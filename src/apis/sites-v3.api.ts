import RequestService from '../helpers/request/request-service';
import * as SitesV3ApiSpecs from '../generated/sites-v3';

export default class SitesV3Api {
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
        return this.request.get<any, any>({
            path: 'v3/sites',
            query,
        });
    }

    /**
     * Create a Site
     *
     * Create a site that links a [headless storefront](/docs/storefront/headless) to a sales [channel](/docs/rest-management/channels).
     */
    createSite(
        requestBody: SitesV3ApiSpecs.CreateSiteData['body'],
    ) {
        return this.request.post<any, SitesV3ApiSpecs.CreateSiteError>({
            path: 'v3/sites',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Site
     *
     * Get a site with site ID `{site_id}`.
     */
    getSite(
        siteId: SitesV3ApiSpecs.GetSiteData['path']['site_id'],
    ) {
        return this.request.get<any, any>({
            path: `v3/sites/${siteId}`,
        });
    }

    /**
     * Update a Site
     *
     * Update a site with site ID `{site_id}`.
     */
    updateSite(
        siteId: SitesV3ApiSpecs.UpdateSiteData['path']['site_id'],
        requestBody: SitesV3ApiSpecs.UpdateSiteData['body'],
    ) {
        return this.request.put<any, any>({
            path: `v3/sites/${siteId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Site
     *
     * Delete a site with site ID `{site_id}`. Remove the URL set for a given site ID.
     */
    deleteSite(
        siteId: SitesV3ApiSpecs.DeleteSiteData['path']['site_id'],
    ) {
        return this.request.delete<any, any>({
            path: `v3/sites/${siteId}`,
        });
    }

    /**
     * Get a Site’s Routes
     *
     * Get a site’s routes.
     */
    getSiteRoutes(
        siteId: SitesV3ApiSpecs.GetSiteRoutesData['path']['site_id'],
        query?: SitesV3ApiSpecs.GetSiteRoutesData['query'],
    ) {
        return this.request.get<SitesV3ApiSpecs.GetSiteRoutesResponse, any>({
            path: `v3/sites/${siteId}/routes`,
            query,
        });
    }

    /**
     * Create a Site Route
     *
     * Create routes that tell BigCommerce how to link to pages on a [headless storefront](/docs/storefront/headless).

     ## Usage Notes
     * For a list of supported route types, see [Route types](/docs/rest-management/sites#route-types).
     */
    createSiteRoute(
        siteId: SitesV3ApiSpecs.CreateSiteRouteData['path']['site_id'],
        requestBody: SitesV3ApiSpecs.CreateSiteRouteData['body'],
    ) {
        return this.request.post<any, SitesV3ApiSpecs.CreateSiteRouteError>({
            path: `v3/sites/${siteId}/routes`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update a Site’s Routes
     *
     * Upsert routes for site with ID `{site_id}`.

     ## Usage Notes
     * `id` is required when updating an existing route.
     */
    updateSiteRoutes(
        siteId: SitesV3ApiSpecs.UpdateSiteRoutesData['path']['site_id'],
        requestBody: SitesV3ApiSpecs.UpdateSiteRoutesData['body'],
    ) {
        return this.request.put<SitesV3ApiSpecs.UpdateSiteRoutesResponse, SitesV3ApiSpecs.UpdateSiteRoutesError>({
            path: `v3/sites/${siteId}/routes`,
            contentType: 'application/json',
            body: requestBody,
        });
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
        return this.request.get<SitesV3ApiSpecs.GetSiteRouteResponse, any>({
            path: `v3/sites/${siteId}/routes/${routeId}`,
        });
    }

    /**
     * Update a Site Route
     *
     * Update a site’s route.

     */
    updateSiteRoute(
        siteId: SitesV3ApiSpecs.UpdateSiteRouteData['path']['site_id'],
        routeId: SitesV3ApiSpecs.UpdateSiteRouteData['path']['route_id'],
        requestBody: SitesV3ApiSpecs.UpdateSiteRouteData['body'],
    ) {
        return this.request.put<any, any>({
            path: `v3/sites/${siteId}/routes/${routeId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Site Route
     *
     * Delete a site’s route.
     */
    deleteSiteRoute(
        siteId: SitesV3ApiSpecs.DeleteSiteRouteData['path']['site_id'],
        routeId: SitesV3ApiSpecs.DeleteSiteRouteData['path']['route_id'],
    ) {
        return this.request.delete<any, any>({
            path: `v3/sites/${siteId}/routes/${routeId}`,
        });
    }

    /**
     * Get a Site’s SSL TLS Certificate Information
     *
     * Obtain information about a site’s SSL/TLS certificate.
     */
    getSiteCertificate(
        siteId: SitesV3ApiSpecs.GetSiteCertificateData['path']['site_id'],
    ) {
        return this.request.get<SitesV3ApiSpecs.GetSiteCertificateResponse, any>({
            path: `v3/sites/${siteId}/certificate`,
        });
    }

    /**
     * Upsert a Site’s SSL TLS Certificate Information
     *
     * - If a value for `url` is not supplied, the saved certificate is associated with the specified site’s `primary` URL.
     - Use caution. Because this endpoint upserts, supplying an SSL certificate for a domain that already has a certificate connected overwrites the domain’s extant certificate.'
     */
    upsertSiteCertificate(
        siteId: SitesV3ApiSpecs.UpsertSiteCertificateData['path']['site_id'],
        requestBody: SitesV3ApiSpecs.UpsertSiteCertificateData['body'],
    ) {
        return this.request.put<SitesV3ApiSpecs.UpsertSiteCertificateResponse, any>({
            path: `v3/sites/${siteId}/certificate`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Site Certificates
     *
     * Return all SSL certificates connected to domains within a store.
     */
    getSitesCertificates(
        query?: SitesV3ApiSpecs.GetSitesCertificatesData['query'],
    ) {
        return this.request.get<SitesV3ApiSpecs.GetSitesCertificatesResponse, any>({
            path: 'v3/sites/certificates',
            query,
        });
    }
}
