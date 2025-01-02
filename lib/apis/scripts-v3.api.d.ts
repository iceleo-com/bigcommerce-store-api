import RequestService from '../helpers/request/request-service';
import * as ScriptsV3ApiSpecs from '../generated/scripts-v3';
export default class ScriptsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getScripts(query?: ScriptsV3ApiSpecs.GetScriptsData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<ScriptsV3ApiSpecs.GetScriptsResponse, ScriptsV3ApiSpecs.GetScriptsError>>;
    createScript(requestBody: ScriptsV3ApiSpecs.CreateScriptData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<ScriptsV3ApiSpecs.script_Response, ScriptsV3ApiSpecs.CreateScriptError>>;
    getScript(uuid: ScriptsV3ApiSpecs.GetScriptData['path']['uuid']): Promise<import("../helpers/request/request-service.types").RequestResponse<ScriptsV3ApiSpecs.script_Response, ScriptsV3ApiSpecs.GetScriptError>>;
    updateScript(uuid: ScriptsV3ApiSpecs.UpdateScriptData['path']['uuid'], requestBody: ScriptsV3ApiSpecs.UpdateScriptData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<ScriptsV3ApiSpecs.script_Response, ScriptsV3ApiSpecs.UpdateScriptError>>;
    deleteScript(uuid: ScriptsV3ApiSpecs.DeleteScriptData['path']['uuid']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, ScriptsV3ApiSpecs.DeleteScriptError>>;
}
