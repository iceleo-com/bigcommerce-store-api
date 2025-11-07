import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ScriptsV3ApiSpecs from '../generated/scripts-v3';
export * as ScriptsV3ApiSpecs from '../generated/scripts-v3';
export declare class ScriptsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getScripts(query?: ScriptsV3ApiSpecs.GetScriptsData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<ScriptsV3ApiSpecs.ScriptFull>;
        meta?: ScriptsV3ApiSpecs.CollectionMeta;
    }>> | RequestErrorResponse<422, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    } & {
        errors?: {
            [key: string]: unknown;
        };
    }>>>;
    createScript(requestBody: ScriptsV3ApiSpecs.CreateScriptData['body']): Promise<RequestSuccessResponse<200, Required<ScriptsV3ApiSpecs.ScriptResponse>> | RequestErrorResponse<422, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    } & {
        errors?: {
            [key: string]: unknown;
        };
    }>>>;
    getScript(uuid: ScriptsV3ApiSpecs.GetScriptData['path']['uuid']): Promise<RequestSuccessResponse<200, Required<ScriptsV3ApiSpecs.ScriptResponse>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    } & {
        errors?: {
            [key: string]: unknown;
        };
    }>> | RequestErrorResponse<422, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    } & {
        errors?: {
            [key: string]: unknown;
        };
    }>>>;
    updateScript(uuid: ScriptsV3ApiSpecs.UpdateScriptData['path']['uuid'], requestBody: ScriptsV3ApiSpecs.UpdateScriptData['body']): Promise<RequestSuccessResponse<200, Required<ScriptsV3ApiSpecs.ScriptResponse>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    } & {
        errors?: {
            [key: string]: unknown;
        };
    }>> | RequestErrorResponse<422, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    } & {
        errors?: {
            [key: string]: unknown;
        };
    }>>>;
    deleteScript(uuid: ScriptsV3ApiSpecs.DeleteScriptData['path']['uuid']): Promise<RequestSuccessResponse<204, Required<ScriptsV3ApiSpecs.NoContent>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    } & {
        errors?: {
            [key: string]: unknown;
        };
    }>> | RequestErrorResponse<422, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    } & {
        errors?: {
            [key: string]: unknown;
        };
    }>>>;
}
