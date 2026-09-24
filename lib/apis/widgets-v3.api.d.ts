import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as WidgetsV3ApiSpecs from '../generated/widgets-v3';
export * as WidgetsV3ApiSpecs from '../generated/widgets-v3';
export declare class WidgetsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getWidgetTemplates(query?: WidgetsV3ApiSpecs.GetWidgetTemplatesData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<WidgetsV3ApiSpecs.WidgetTemplateFull>;
        meta?: WidgetsV3ApiSpecs.MetaCollection;
    }>> | RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>>>;
    createWidgetTemplate(requestBody: WidgetsV3ApiSpecs.CreateWidgetTemplateData['body']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<{
        data?: WidgetsV3ApiSpecs.WidgetTemplateFull;
    } & {
        meta?: WidgetsV3ApiSpecs.Meta;
    }>>>;
    previewWidget(uuid: WidgetsV3ApiSpecs.PreviewWidgetData['path']['uuid'], requestBody: WidgetsV3ApiSpecs.PreviewWidgetData['body']): Promise<RequestErrorResponse<404, Required<unknown>> | RequestErrorResponse<422, Required<unknown>> | RequestSuccessResponse<200, Required<WidgetsV3ApiSpecs.WidgetTemplatePreviewResponse>>>;
    getWidgetTemplate(uuid: WidgetsV3ApiSpecs.GetWidgetTemplateData['path']['uuid'], query?: WidgetsV3ApiSpecs.GetWidgetTemplateData['query']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<{
        data?: WidgetsV3ApiSpecs.WidgetTemplateFull;
    } & {
        meta?: WidgetsV3ApiSpecs.Meta;
    }>> | RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.ErrorBase>>>;
    updateWidgetTemplate(uuid: WidgetsV3ApiSpecs.UpdateWidgetTemplateData['path']['uuid'], requestBody: WidgetsV3ApiSpecs.UpdateWidgetTemplateData['body']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<{
        data?: WidgetsV3ApiSpecs.WidgetTemplateFull;
    } & {
        meta?: WidgetsV3ApiSpecs.Meta;
    }>>>;
    deleteWidgetTemplate(uuid: WidgetsV3ApiSpecs.DeleteWidgetTemplateData['path']['uuid']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.ErrorBase>>>;
    getWidgets(query?: WidgetsV3ApiSpecs.GetWidgetsData['query']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<{
        data?: Array<WidgetsV3ApiSpecs.WidgetFull>;
        meta?: WidgetsV3ApiSpecs.MetaCollection;
    }>>>;
    createWidget(requestBody: WidgetsV3ApiSpecs.CreateWidgetData['body']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<{
        data?: WidgetsV3ApiSpecs.WidgetFull;
        meta?: WidgetsV3ApiSpecs.Meta;
    }>>>;
    getWidget(uuid: WidgetsV3ApiSpecs.GetWidgetData['path']['uuid']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<{
        data?: WidgetsV3ApiSpecs.WidgetFull;
        meta?: WidgetsV3ApiSpecs.Meta;
    }>>>;
    updateWidget(uuid: WidgetsV3ApiSpecs.UpdateWidgetData['path']['uuid'], requestBody: WidgetsV3ApiSpecs.UpdateWidgetData['body']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<{
        data?: WidgetsV3ApiSpecs.WidgetFull;
        meta?: WidgetsV3ApiSpecs.Meta;
    }>>>;
    deleteWidget(uuid: WidgetsV3ApiSpecs.DeleteWidgetData['path']['uuid']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.ErrorBase>>>;
    getPlacements(query?: WidgetsV3ApiSpecs.GetPlacementsData['query']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<{
        data?: Array<WidgetsV3ApiSpecs.PlacementFull>;
        meta?: WidgetsV3ApiSpecs.MetaCollection;
    }>>>;
    createPlacement(requestBody: WidgetsV3ApiSpecs.CreatePlacementData['body']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<{
        data?: WidgetsV3ApiSpecs.PlacementFull;
        meta?: WidgetsV3ApiSpecs.Meta;
    }>>>;
    getPlacement(uuid: WidgetsV3ApiSpecs.GetPlacementData['path']['uuid']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<{
        data?: WidgetsV3ApiSpecs.PlacementFull;
        meta?: WidgetsV3ApiSpecs.Meta;
    }>>>;
    updatePlacement(uuid: WidgetsV3ApiSpecs.UpdatePlacementData['path']['uuid'], requestBody: WidgetsV3ApiSpecs.UpdatePlacementData['body']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<{
        data?: WidgetsV3ApiSpecs.PlacementFull;
        meta?: WidgetsV3ApiSpecs.Meta;
    }>>>;
    deletePlacement(uuid: WidgetsV3ApiSpecs.DeletePlacementData['path']['uuid']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.ErrorBase>>>;
    getContentRegions(query?: WidgetsV3ApiSpecs.GetContentRegionsData['query']): Promise<RequestErrorResponse<422, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestErrorResponse<404, Required<WidgetsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<{
        data?: Array<WidgetsV3ApiSpecs.ThemeRegion>;
        meta?: WidgetsV3ApiSpecs.Meta;
    }>>>;
}
