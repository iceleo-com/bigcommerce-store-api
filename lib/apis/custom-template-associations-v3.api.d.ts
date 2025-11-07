import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CustomTemplateAssociationsV3ApiSpecs from '../generated/custom-template-associations-v3';
export * as CustomTemplateAssociationsV3ApiSpecs from '../generated/custom-template-associations-v3';
export declare class CustomTemplateAssociationsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getCustomTemplateAssociations(query?: CustomTemplateAssociationsV3ApiSpecs.GetCustomTemplateAssociationsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<CustomTemplateAssociationsV3ApiSpecs.CustomTemplateAssociation>;
        meta?: CustomTemplateAssociationsV3ApiSpecs.MetaPaginationObject;
    }>>>;
    upsertCustomTemplateAssociations(requestBody: CustomTemplateAssociationsV3ApiSpecs.UpsertCustomTemplateAssociationsData['body']): Promise<RequestSuccessResponse<200, Required<{
        [key: string]: unknown;
    }>> | RequestErrorResponse<422, Required<CustomTemplateAssociationsV3ApiSpecs.ErrorResponse>>>;
    deleteCustomTemplateAssociations(query?: CustomTemplateAssociationsV3ApiSpecs.DeleteCustomTemplateAssociationsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
}
