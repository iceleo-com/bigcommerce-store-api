import RequestService from '../helpers/request/request-service';
import * as WidgetsV3ApiSpecs from '../generated/widgets-v3';

export default class WidgetsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get All Widget Templates
     *
     * Returns a list of **Widget Templates**.
     */
    getWidgetTemplates(
        query?: WidgetsV3ApiSpecs.GetWidgetTemplatesData['query'],
    ) {
        return this.request.get<any, WidgetsV3ApiSpecs.GetWidgetTemplatesError>({
            path: 'v3/content/widget-templates',
            query,
        });
    }

    /**
     * Create a Widget Template
     *
     * Creates a **Widget Template**.

     ***Note:*** *There is a limit of 1000 custom widget templates per store.*

     **Required Fields**
     * name
     * template
     */
    createWidgetTemplate(
        requestBody: WidgetsV3ApiSpecs.CreateWidgetTemplateData['body'],
    ) {
        return this.request.post<any, WidgetsV3ApiSpecs.CreateWidgetTemplateError>({
            path: 'v3/content/widget-templates',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Render a Widget Template
     *
     * Render a widget template and return the widget html.
     */
    previewWidget(
        requestBody: WidgetsV3ApiSpecs.PreviewWidgetData['body'],
    ) {
        return this.request.post<WidgetsV3ApiSpecs.PreviewWidgetResponse, WidgetsV3ApiSpecs.PreviewWidgetError>({
            path: 'v3/content/widget-templates/{uuid}/preview',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Widget Template
     *
     * Returns a single **Widget Template**.
     */
    getWidgetTemplate(
        uuid: WidgetsV3ApiSpecs.GetWidgetTemplateData['path']['uuid'],
        query?: WidgetsV3ApiSpecs.GetWidgetTemplateData['query'],
    ) {
        return this.request.get<any, WidgetsV3ApiSpecs.GetWidgetTemplateError>({
            path: `v3/content/widget-templates/${uuid}`,
            query,
        });
    }

    /**
     * Update a Widget Template
     *
     * Updates a **Widget Template**.
     */
    updateWidgetTemplate(
        uuid: WidgetsV3ApiSpecs.UpdateWidgetTemplateData['path']['uuid'],
        requestBody: WidgetsV3ApiSpecs.UpdateWidgetTemplateData['body'],
    ) {
        return this.request.put<any, WidgetsV3ApiSpecs.UpdateWidgetTemplateError>({
            path: `v3/content/widget-templates/${uuid}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete A Widget Template
     *
     * Deletes a **Widget Template**.
     */
    deleteWidgetTemplate(
        uuid: WidgetsV3ApiSpecs.DeleteWidgetTemplateData['path']['uuid'],
    ) {
        return this.request.delete<any, WidgetsV3ApiSpecs.DeleteWidgetTemplateError>({
            path: `v3/content/widget-templates/${uuid}`,
        });
    }

    /**
     * Get All Widgets
     *
     * Returns a list of **Widgets**. Optional parameters can be passed in.
     */
    getWidgets(
        query?: WidgetsV3ApiSpecs.GetWidgetsData['query'],
    ) {
        return this.request.get<any, WidgetsV3ApiSpecs.GetWidgetsError>({
            path: 'v3/content/widgets',
            query,
        });
    }

    /**
     * Create a Widget
     *
     * Creates a **Widget**.

     **Note:** There is a limit of 100,000 widgets per store and 150 widgets per page. For more information, see [Store Limits](https://support.bigcommerce.com/s/article/Platform-Limits#storelimits).
     */
    createWidget(
        requestBody: WidgetsV3ApiSpecs.CreateWidgetData['body'],
    ) {
        return this.request.post<any, WidgetsV3ApiSpecs.CreateWidgetError>({
            path: 'v3/content/widgets',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Widget
     *
     * Returns a single **Widget**.
     */
    getWidget(
        uuid: WidgetsV3ApiSpecs.GetWidgetData['path']['uuid'],
    ) {
        return this.request.get<any, WidgetsV3ApiSpecs.GetWidgetError>({
            path: `v3/content/widgets/${uuid}`,
        });
    }

    /**
     * Update a Widget
     *
     * Updates a **Widget**.
     */
    updateWidget(
        uuid: WidgetsV3ApiSpecs.UpdateWidgetData['path']['uuid'],
        requestBody: WidgetsV3ApiSpecs.UpdateWidgetData['body'],
    ) {
        return this.request.put<any, WidgetsV3ApiSpecs.UpdateWidgetError>({
            path: `v3/content/widgets/${uuid}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Widget
     *
     * Deletes a **Widget**.
     */
    deleteWidget(
        uuid: WidgetsV3ApiSpecs.DeleteWidgetData['path']['uuid'],
    ) {
        return this.request.delete<any, WidgetsV3ApiSpecs.DeleteWidgetError>({
            path: `v3/content/widgets/${uuid}`,
        });
    }

    /**
     * Get All Placements
     *
     * Returns a list of **Placements**.
     */
    getPlacements(
        query?: WidgetsV3ApiSpecs.GetPlacementsData['query'],
    ) {
        return this.request.get<any, WidgetsV3ApiSpecs.GetPlacementsError>({
            path: 'v3/content/placements',
            query,
        });
    }

    /**
     * Create a Placement
     *
     * Creates a **Placement**.

     **Template Files**

     To view the list of values accepted by the `template_file` property, including **custom** templates, see [Placements](/docs/storefront/widgets#placements).
     */
    createPlacement(
        requestBody: WidgetsV3ApiSpecs.CreatePlacementData['body'],
    ) {
        return this.request.post<any, WidgetsV3ApiSpecs.CreatePlacementError>({
            path: 'v3/content/placements',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Placement
     *
     * Returns a single **Placement**.
     */
    getPlacement(
        uuid: WidgetsV3ApiSpecs.GetPlacementData['path']['uuid'],
    ) {
        return this.request.get<any, WidgetsV3ApiSpecs.GetPlacementError>({
            path: `v3/content/placements/${uuid}`,
        });
    }

    /**
     * Update a Placement
     *
     * Updates a **Placement**.
     */
    updatePlacement(
        uuid: WidgetsV3ApiSpecs.UpdatePlacementData['path']['uuid'],
        requestBody: WidgetsV3ApiSpecs.UpdatePlacementData['body'],
    ) {
        return this.request.put<any, WidgetsV3ApiSpecs.UpdatePlacementError>({
            path: `v3/content/placements/${uuid}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Placement
     *
     * Deletes a **Placement**.
     */
    deletePlacement(
        uuid: WidgetsV3ApiSpecs.DeletePlacementData['path']['uuid'],
    ) {
        return this.request.delete<any, WidgetsV3ApiSpecs.DeletePlacementError>({
            path: `v3/content/placements/${uuid}`,
        });
    }

    /**
     * Get Theme Regions
     *
     * Returns a list of unique **Theme Regions** in a file.
     */
    getContentRegions(
        query?: WidgetsV3ApiSpecs.GetContentRegionsData['query'],
    ) {
        return this.request.get<any, WidgetsV3ApiSpecs.GetContentRegionsError>({
            path: 'v3/content/regions',
            query,
        });
    }
}
