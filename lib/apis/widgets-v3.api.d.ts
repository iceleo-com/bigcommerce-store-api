import RequestService from '../helpers/request/request-service';
import * as WidgetsV3ApiSpecs from '../generated/widgets-v3';
export default class WidgetsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getWidgetTemplates(query?: WidgetsV3ApiSpecs.GetWidgetTemplatesData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, WidgetsV3ApiSpecs.error_Base>>;
    createWidgetTemplate(requestBody: WidgetsV3ApiSpecs.CreateWidgetTemplateData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, WidgetsV3ApiSpecs.error_Base>>;
    previewWidget(requestBody: WidgetsV3ApiSpecs.PreviewWidgetData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<WidgetsV3ApiSpecs.WidgetTemplatePreviewResponse, unknown>>;
    getWidgetTemplate(uuid: WidgetsV3ApiSpecs.GetWidgetTemplateData['path']['uuid'], query?: WidgetsV3ApiSpecs.GetWidgetTemplateData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, WidgetsV3ApiSpecs.error_Base>>;
    updateWidgetTemplate(uuid: WidgetsV3ApiSpecs.UpdateWidgetTemplateData['path']['uuid'], requestBody: WidgetsV3ApiSpecs.UpdateWidgetTemplateData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, WidgetsV3ApiSpecs.error_Base>>;
    deleteWidgetTemplate(uuid: WidgetsV3ApiSpecs.DeleteWidgetTemplateData['path']['uuid']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, WidgetsV3ApiSpecs.error_Base>>;
    getWidgets(query?: WidgetsV3ApiSpecs.GetWidgetsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, WidgetsV3ApiSpecs.error_Base>>;
    createWidget(requestBody: WidgetsV3ApiSpecs.CreateWidgetData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, WidgetsV3ApiSpecs.error_Base>>;
    getWidget(uuid: WidgetsV3ApiSpecs.GetWidgetData['path']['uuid']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, WidgetsV3ApiSpecs.error_Base>>;
    updateWidget(uuid: WidgetsV3ApiSpecs.UpdateWidgetData['path']['uuid'], requestBody: WidgetsV3ApiSpecs.UpdateWidgetData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, WidgetsV3ApiSpecs.error_Base>>;
    deleteWidget(uuid: WidgetsV3ApiSpecs.DeleteWidgetData['path']['uuid']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, WidgetsV3ApiSpecs.error_Base>>;
    getPlacements(query?: WidgetsV3ApiSpecs.GetPlacementsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, WidgetsV3ApiSpecs.error_Base>>;
    createPlacement(requestBody: WidgetsV3ApiSpecs.CreatePlacementData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, WidgetsV3ApiSpecs.error_Base>>;
    getPlacement(uuid: WidgetsV3ApiSpecs.GetPlacementData['path']['uuid']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, WidgetsV3ApiSpecs.error_Base>>;
    updatePlacement(uuid: WidgetsV3ApiSpecs.UpdatePlacementData['path']['uuid'], requestBody: WidgetsV3ApiSpecs.UpdatePlacementData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, WidgetsV3ApiSpecs.error_Base>>;
    deletePlacement(uuid: WidgetsV3ApiSpecs.DeletePlacementData['path']['uuid']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, WidgetsV3ApiSpecs.error_Base>>;
    getContentRegions(query?: WidgetsV3ApiSpecs.GetContentRegionsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, WidgetsV3ApiSpecs.error_Base>>;
}
