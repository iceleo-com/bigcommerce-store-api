import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as WidgetsV3ApiSpecs from '../generated/widgets-v3';
export * as WidgetsV3ApiSpecs from '../generated/widgets-v3';

export class WidgetsV3Api {
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
        return this.request.get<RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.GetWidgetTemplatesResponses[200]>>,RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.GetWidgetTemplatesErrors[422]>>>({
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
        return this.request.post<RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.CreateWidgetTemplateResponses[200]>>,RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.CreateWidgetTemplateErrors[422]>>>({
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
        uuid: WidgetsV3ApiSpecs.PreviewWidgetData['path']['uuid'],
        requestBody: WidgetsV3ApiSpecs.PreviewWidgetData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.PreviewWidgetResponses[200]>>,(RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.PreviewWidgetErrors[404]>> | RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.PreviewWidgetErrors[422]>>)>({
            path: `v3/content/widget-templates/${uuid}/preview`,
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
        return this.request.get<RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.GetWidgetTemplateResponses[200]>>,(RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.GetWidgetTemplateErrors[404]>> | RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.GetWidgetTemplateErrors[422]>>)>({
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
        return this.request.put<RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.UpdateWidgetTemplateResponses[200]>>,(RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.UpdateWidgetTemplateErrors[404]>> | RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.UpdateWidgetTemplateErrors[422]>>)>({
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
        return this.request.delete<RequestSuccessResponse<204, Required<WidgetsV3ApiSpecs.DeleteWidgetTemplateResponses[204]>>,(RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.DeleteWidgetTemplateErrors[404]>> | RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.DeleteWidgetTemplateErrors[422]>>)>({
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
        return this.request.get<RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.GetWidgetsResponses[200]>>,RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.GetWidgetsErrors[422]>>>({
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
        return this.request.post<RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.CreateWidgetResponses[200]>>,RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.CreateWidgetErrors[422]>>>({
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
        return this.request.get<RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.GetWidgetResponses[200]>>,(RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.GetWidgetErrors[404]>> | RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.GetWidgetErrors[422]>>)>({
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
        return this.request.put<RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.UpdateWidgetResponses[200]>>,(RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.UpdateWidgetErrors[404]>> | RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.UpdateWidgetErrors[422]>>)>({
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
        return this.request.delete<RequestSuccessResponse<204, Required<WidgetsV3ApiSpecs.DeleteWidgetResponses[204]>>,(RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.DeleteWidgetErrors[404]>> | RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.DeleteWidgetErrors[422]>>)>({
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
        return this.request.get<RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.GetPlacementsResponses[200]>>,RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.GetPlacementsErrors[422]>>>({
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
        return this.request.post<RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.CreatePlacementResponses[200]>>,RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.CreatePlacementErrors[422]>>>({
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
        return this.request.get<RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.GetPlacementResponses[200]>>,(RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.GetPlacementErrors[404]>> | RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.GetPlacementErrors[422]>>)>({
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
        return this.request.put<RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.UpdatePlacementResponses[200]>>,(RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.UpdatePlacementErrors[404]>> | RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.UpdatePlacementErrors[422]>>)>({
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
        return this.request.delete<RequestSuccessResponse<204, Required<WidgetsV3ApiSpecs.DeletePlacementResponses[204]>>,(RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.DeletePlacementErrors[404]>> | RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.DeletePlacementErrors[422]>>)>({
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
        return this.request.get<RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.GetContentRegionsResponses[200]>>,(RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.GetContentRegionsErrors[404]>> | RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.GetContentRegionsErrors[422]>>)>({
            path: 'v3/content/regions',
            query,
        });
    }
}
