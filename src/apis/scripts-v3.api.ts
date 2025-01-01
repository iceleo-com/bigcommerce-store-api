import RequestService from '../helpers/request/request-service';
import * as ScriptsV3ApiSpecs from '../generated/scripts-v3';

export default class ScriptsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get All Scripts
     *
     * Returns a list of *Scripts*. Optional parameters can be passed in.

     This operation will only return scripts generated by the API key and password used to create the script originally. 
     */
    getScripts(
        query?: ScriptsV3ApiSpecs.GetScriptsData['query'],
    ) {
        return this.request.get<ScriptsV3ApiSpecs.GetScriptsResponse, ScriptsV3ApiSpecs.GetScriptsError>({
            path: 'v3/content/scripts',
            query,
        });
    }

    /**
     * Create a Script
     *
     * Creates a *Script*.

     **Required Fields**
     * name

     **Read Only Fields**
     * uuid

     **Limits**
     * 50 scripts per channel.

     **Notes**
     * If the `kind` is `src`:
       * Specify the `src` property. 
       * Optionally, you can supply a `load_method`. 
       * Do not specify the `html` field.
     * If the `kind` is `script_tag`:
       * Specify the `html` property.
       * Do not specify the `src` field.
     * Each app can have 10 scripts installed.
     * Multiple scripts can be created [per call](/docs/integrations/scripts#notes). 
     */
    createScript(
        requestBody: ScriptsV3ApiSpecs.CreateScriptData['body'],
    ) {
        return this.request.post<ScriptsV3ApiSpecs.CreateScriptResponse, ScriptsV3ApiSpecs.CreateScriptError>({
            path: 'v3/content/scripts',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Script
     *
     * Returns a single *Script*.
     */
    getScript(
        uuid: ScriptsV3ApiSpecs.GetScriptData['path']['uuid'],
    ) {
        return this.request.get<ScriptsV3ApiSpecs.GetScriptResponse, ScriptsV3ApiSpecs.GetScriptError>({
            path: `v3/content/scripts/${uuid}`,
        });
    }

    /**
     * Update a Script
     *
     * Updates a *Script*.
     */
    updateScript(
        uuid: ScriptsV3ApiSpecs.UpdateScriptData['path']['uuid'],
        requestBody: ScriptsV3ApiSpecs.UpdateScriptData['body'],
    ) {
        return this.request.put<ScriptsV3ApiSpecs.UpdateScriptResponse, ScriptsV3ApiSpecs.UpdateScriptError>({
            path: `v3/content/scripts/${uuid}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Script
     *
     * Deletes a *Script*.
     */
    deleteScript(
        uuid: ScriptsV3ApiSpecs.DeleteScriptData['path']['uuid'],
    ) {
        return this.request.delete<any, ScriptsV3ApiSpecs.DeleteScriptError>({
            path: `v3/content/scripts/${uuid}`,
        });
    }
}