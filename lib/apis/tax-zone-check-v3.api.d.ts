import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as TaxZoneCheckV3ApiSpecs from '../generated/tax-zone-check-v3';
export * as TaxZoneCheckV3ApiSpecs from '../generated/tax-zone-check-v3';
export declare class TaxZoneCheckV3Api {
    private readonly request;
    constructor(request: RequestService);
    zoneCheck(requestBody: TaxZoneCheckV3ApiSpecs.ZoneCheckData['body']): Promise<RequestErrorResponse<422, Required<unknown>> | RequestSuccessResponse<200, Required<TaxZoneCheckV3ApiSpecs.TaxZoneCheckZoneCheckResponse200>>>;
}
