import RequestService from '../helpers/request/request-service';
import * as CustomTemplateAssociationsV3ApiSpecs from '../generated/custom-template-associations-v3';

export default class CustomTemplateAssociationsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get Custom Template Associations
     *
     * Get a collection of the storeʼs custom template associations across all storefronts.
     */
    getCustomTemplateAssociations(
        query?: CustomTemplateAssociationsV3ApiSpecs.GetCustomTemplateAssociationsData['query'],
    ) {
        return this.request.get<CustomTemplateAssociationsV3ApiSpecs.GetCustomTemplateAssociationsResponse, any>({
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
        return this.request.put<CustomTemplateAssociationsV3ApiSpecs.UpsertCustomTemplateAssociationsResponse, CustomTemplateAssociationsV3ApiSpecs.UpsertCustomTemplateAssociationsError>({
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
        return this.request.delete<any, any>({
            path: 'v3/storefront/custom-template-associations',
            query,
        });
    }
}
