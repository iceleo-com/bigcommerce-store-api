import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as TaxZoneCheckV3ApiSpecs from '../generated/tax-zone-check-v3';
export * as TaxZoneCheckV3ApiSpecs from '../generated/tax-zone-check-v3';

export class TaxZoneCheckV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Check Zone for Address
     *
     * Check the applicable tax zone for a given address and customer group.
     */
    zoneCheck(
        requestBody: TaxZoneCheckV3ApiSpecs.ZoneCheckData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<TaxZoneCheckV3ApiSpecs.ZoneCheckResponses[200]>>,RequestErrorResponse<422, Required<TaxZoneCheckV3ApiSpecs.ZoneCheckErrors[422]>>>({
            path: 'v3/tax/zonecheck',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
