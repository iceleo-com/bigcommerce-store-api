import RequestService from '../helpers/request/request-service';
import * as CustomTemplateAssociationsV3ApiSpecs from '../generated/custom-template-associations-v3';
export default class CustomTemplateAssociationsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getCustomTemplateAssociations(query?: CustomTemplateAssociationsV3ApiSpecs.GetCustomTemplateAssociationsData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<CustomTemplateAssociationsV3ApiSpecs.GetCustomTemplateAssociationsResponse, any>>;
    upsertCustomTemplateAssociations(requestBody: CustomTemplateAssociationsV3ApiSpecs.UpsertCustomTemplateAssociationsData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<CustomTemplateAssociationsV3ApiSpecs.UpsertCustomTemplateAssociationsResponse, CustomTemplateAssociationsV3ApiSpecs.ErrorResponse>>;
    deleteCustomTemplateAssociations(query?: CustomTemplateAssociationsV3ApiSpecs.DeleteCustomTemplateAssociationsData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
}
