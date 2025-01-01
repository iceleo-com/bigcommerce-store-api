import RequestService from '../helpers/request/request-service';
import * as TaxZoneCheckV3ApiSpecs from '../generated/tax-zone-check-v3';

export default class TaxZoneCheckV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Check zone given an address.
     *
     * Check the applicable tax zone for a given address and customer group.
     */
    zoneCheck(
        requestBody: TaxZoneCheckV3ApiSpecs.ZoneCheckData['body'],
    ) {
        return this.request.post<TaxZoneCheckV3ApiSpecs.ZoneCheckResponse, TaxZoneCheckV3ApiSpecs.ZoneCheckError>({
            path: 'v3/tax/zonecheck',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
