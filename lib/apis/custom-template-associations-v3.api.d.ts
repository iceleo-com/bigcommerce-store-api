import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CustomTemplateAssociationsV3ApiSpecs from '../generated/custom-template-associations-v3';
export * as CustomTemplateAssociationsV3ApiSpecs from '../generated/custom-template-associations-v3';
export declare class CustomTemplateAssociationsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getCustomTemplateAssociations(query?: CustomTemplateAssociationsV3ApiSpecs.GetCustomTemplateAssociationsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomTemplateAssociationsV3ApiSpecs.CustomTemplateAssociationsGetCustomTemplateAssociationsResponse200>>>;
    upsertCustomTemplateAssociations(requestBody: CustomTemplateAssociationsV3ApiSpecs.UpsertCustomTemplateAssociationsData['body']): Promise<RequestSuccessResponse<200, Required<CustomTemplateAssociationsV3ApiSpecs.CustomTemplateAssociationsUpsertCustomTemplateAssociationsResponse200>> | RequestErrorResponse<422, Required<CustomTemplateAssociationsV3ApiSpecs.ErrorResponse>>>;
    deleteCustomTemplateAssociations(query?: CustomTemplateAssociationsV3ApiSpecs.DeleteCustomTemplateAssociationsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
}
