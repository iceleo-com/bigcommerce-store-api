import RequestService from '../helpers/request/request-service';
import * as TaxV3ApiSpecs from '../generated/tax-v3';
export default class TaxV3Api {
    private readonly request;
    constructor(request: RequestService);
    getTaxProviderConnection(providerId: TaxV3ApiSpecs.GetTaxProviderConnectionData['path']['provider_id']): Promise<import("../helpers/request/request-service.type").RequestResponse<TaxV3ApiSpecs.response_connection, unknown>>;
    updateTaxProviderConnection(providerId: TaxV3ApiSpecs.UpdateTaxProviderConnectionData['path']['provider_id'], requestBody: TaxV3ApiSpecs.UpdateTaxProviderConnectionData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<TaxV3ApiSpecs.response_connection, unknown>>;
    deleteTaxProviderConnection(providerId: TaxV3ApiSpecs.DeleteTaxProviderConnectionData['path']['provider_id']): Promise<import("../helpers/request/request-service.type").RequestResponse<TaxV3ApiSpecs.response_connection, unknown>>;
}
