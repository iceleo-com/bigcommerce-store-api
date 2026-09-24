import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CustomTemplateAssociationsV3ApiSpecs from '../generated/custom-template-associations-v3';
export * as CustomTemplateAssociationsV3ApiSpecs from '../generated/custom-template-associations-v3';

export class CustomTemplateAssociationsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * List Custom Template Associations
     *
     * Get a collection of the storeʼs custom template associations across all storefronts.
     */
    getCustomTemplateAssociations(
        query?: CustomTemplateAssociationsV3ApiSpecs.GetCustomTemplateAssociationsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CustomTemplateAssociationsV3ApiSpecs.GetCustomTemplateAssociationsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/storefront/custom-template-associations',
            query,
        });
    }

    /**
     * Upsert Custom Template Associations
     *
     * Upsert new custom template associations data across all storefronts. If an existing record is found for the combination of channel ID, entity ID, and type, the existing record will be overwritten with the new template.
     */
    upsertCustomTemplateAssociations(
        requestBody: CustomTemplateAssociationsV3ApiSpecs.UpsertCustomTemplateAssociationsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CustomTemplateAssociationsV3ApiSpecs.UpsertCustomTemplateAssociationsResponses[200]>>,RequestErrorResponse<422, Required<CustomTemplateAssociationsV3ApiSpecs.UpsertCustomTemplateAssociationsErrors[422]>>>({
            path: 'v3/storefront/custom-template-associations',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Custom Template Associations
     *
     * Delete custom template associations. At least one query parameter must be used.
     */
    deleteCustomTemplateAssociations(
        query?: CustomTemplateAssociationsV3ApiSpecs.DeleteCustomTemplateAssociationsData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CustomTemplateAssociationsV3ApiSpecs.DeleteCustomTemplateAssociationsResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/storefront/custom-template-associations',
            query,
        });
    }
}
