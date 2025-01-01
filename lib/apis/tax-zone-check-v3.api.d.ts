import RequestService from '../helpers/request/request-service';
import * as TaxZoneCheckV3ApiSpecs from '../generated/tax-zone-check-v3';
export default class TaxZoneCheckV3Api {
    private readonly request;
    constructor(request: RequestService);
    zoneCheck(requestBody: TaxZoneCheckV3ApiSpecs.ZoneCheckData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<TaxZoneCheckV3ApiSpecs.ZoneCheckResponse, unknown>>;
}
