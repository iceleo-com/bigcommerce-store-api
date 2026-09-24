import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as WidgetsV3ApiSpecs from '../generated/widgets-v3';
export * as WidgetsV3ApiSpecs from '../generated/widgets-v3';
export declare class WidgetsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getPlacements(query?: WidgetsV3ApiSpecs.GetPlacementsData['query']): Promise<RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.PlacementGetPlacementsResponse200>> | RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>>>;
    createPlacement(requestBody: WidgetsV3ApiSpecs.CreatePlacementData['body']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.PlacementCreatePlacementResponse200>>>;
    getPlacement(uuid: WidgetsV3ApiSpecs.GetPlacementData['path']['uuid']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.PlacementGetPlacementResponse200>> | RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.ErrorBase>>>;
    updatePlacement(uuid: WidgetsV3ApiSpecs.UpdatePlacementData['path']['uuid'], requestBody: WidgetsV3ApiSpecs.UpdatePlacementData['body']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.PlacementUpdatePlacementResponse200>>>;
    deletePlacement(uuid: WidgetsV3ApiSpecs.DeletePlacementData['path']['uuid']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getContentRegions(query?: WidgetsV3ApiSpecs.GetContentRegionsData['query']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.RegionsGetContentRegionsResponse200>>>;
    getWidgets(query?: WidgetsV3ApiSpecs.GetWidgetsData['query']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.WidgetGetWidgetsResponse200>>>;
    createWidget(requestBody: WidgetsV3ApiSpecs.CreateWidgetData['body']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.WidgetCreateWidgetResponse200>>>;
    getWidget(uuid: WidgetsV3ApiSpecs.GetWidgetData['path']['uuid']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.WidgetGetWidgetResponse200>>>;
    updateWidget(uuid: WidgetsV3ApiSpecs.UpdateWidgetData['path']['uuid'], requestBody: WidgetsV3ApiSpecs.UpdateWidgetData['body']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.WidgetUpdateWidgetResponse200>>>;
    deleteWidget(uuid: WidgetsV3ApiSpecs.DeleteWidgetData['path']['uuid']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getWidgetTemplates(query?: WidgetsV3ApiSpecs.GetWidgetTemplatesData['query']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.WidgetTemplateGetWidgetTemplatesResponse200>>>;
    createWidgetTemplate(requestBody: WidgetsV3ApiSpecs.CreateWidgetTemplateData['body']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.WidgetTemplateCreateWidgetTemplateResponse200>>>;
    previewWidget(uuid: WidgetsV3ApiSpecs.PreviewWidgetData['path']['uuid'], requestBody: WidgetsV3ApiSpecs.PreviewWidgetData['body']): Promise<RequestErrorResponse<404, Required<unknown>> | RequestErrorResponse<422, Required<unknown>> | RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.WidgetTemplatePreviewResponse>>>;
    getWidgetTemplate(uuid: WidgetsV3ApiSpecs.GetWidgetTemplateData['path']['uuid'], query?: WidgetsV3ApiSpecs.GetWidgetTemplateData['query']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.WidgetTemplateGetWidgetTemplateResponse200>>>;
    updateWidgetTemplate(uuid: WidgetsV3ApiSpecs.UpdateWidgetTemplateData['path']['uuid'], requestBody: WidgetsV3ApiSpecs.UpdateWidgetTemplateData['body']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.WidgetTemplateUpdateWidgetTemplateResponse200>>>;
    deleteWidgetTemplate(uuid: WidgetsV3ApiSpecs.DeleteWidgetTemplateData['path']['uuid']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
}
