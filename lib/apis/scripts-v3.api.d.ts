import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ScriptsV3ApiSpecs from '../generated/scripts-v3';
export * as ScriptsV3ApiSpecs from '../generated/scripts-v3';
export declare class ScriptsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getScripts(query?: ScriptsV3ApiSpecs.GetScriptsData['query']): Promise<RequestSuccessResponse<200, Required<ScriptsV3ApiSpecs.ScriptsGetScriptsResponse200>> | RequestErrorResponse<422, Required<ScriptsV3ApiSpecs.GetScriptsRequestUnprocessableEntityError>>>;
    createScript(requestBody: ScriptsV3ApiSpecs.CreateScriptData['body']): Promise<RequestSuccessResponse<200, Required<ScriptsV3ApiSpecs.ScriptResponse>> | RequestErrorResponse<422, Required<ScriptsV3ApiSpecs.CreateScriptRequestUnprocessableEntityError>>>;
    getScript(uuid: ScriptsV3ApiSpecs.GetScriptData['path']['uuid']): Promise<RequestSuccessResponse<200, Required<ScriptsV3ApiSpecs.ScriptResponse>> | RequestErrorResponse<404, Required<ScriptsV3ApiSpecs.GetScriptRequestNotFoundError>> | RequestErrorResponse<422, Required<ScriptsV3ApiSpecs.GetScriptRequestUnprocessableEntityError>>>;
    updateScript(uuid: ScriptsV3ApiSpecs.UpdateScriptData['path']['uuid'], requestBody: ScriptsV3ApiSpecs.UpdateScriptData['body']): Promise<RequestSuccessResponse<200, Required<ScriptsV3ApiSpecs.ScriptResponse>> | RequestErrorResponse<404, Required<ScriptsV3ApiSpecs.UpdateScriptRequestNotFoundError>> | RequestErrorResponse<422, Required<ScriptsV3ApiSpecs.UpdateScriptRequestUnprocessableEntityError>>>;
    deleteScript(uuid: ScriptsV3ApiSpecs.DeleteScriptData['path']['uuid']): Promise<RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>> | RequestErrorResponse<404, Required<ScriptsV3ApiSpecs.DeleteScriptRequestNotFoundError>> | RequestErrorResponse<422, Required<ScriptsV3ApiSpecs.DeleteScriptRequestUnprocessableEntityError>>>;
}
