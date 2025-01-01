import RequestService from '../helpers/request/request-service';
import * as PageWidgetsV3ApiSpecs from '../generated/page-widgets-v3';

export default class PageWidgetsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get a page snapshot
     *
     * Get a snapshot of all the page widget regions for a given channel, template file, or entity.
     */
    getPageWidgets(
        query?: PageWidgetsV3ApiSpecs.GetPageWidgetsData['query'],
    ) {
        return this.request.get<any, PageWidgetsV3ApiSpecs.GetPageWidgetsError>({
            path: 'v3/content/page-widgets',
            query,
        });
    }

    /**
     * Publish or overwrite page content
     *
     * Publish or overwrite the content of a page that uses page widgets.
     */
    createPageWidgets(
        requestBody: PageWidgetsV3ApiSpecs.CreatePageWidgetsData['body'],
    ) {
        return this.request.post<any, PageWidgetsV3ApiSpecs.CreatePageWidgetsError>({
            path: 'v3/content/page-widgets',
            body: requestBody,
        });
    }
}
