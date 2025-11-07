import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as EmailTemplatesV3ApiSpecs from '../generated/email-templates-v3';
export * as EmailTemplatesV3ApiSpecs from '../generated/email-templates-v3';
export declare class EmailTemplatesV3Api {
    private readonly request;
    constructor(request: RequestService);
    getEmailTemplates(query?: EmailTemplatesV3ApiSpecs.GetEmailTemplatesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: EmailTemplatesV3ApiSpecs.EmailTemplatesCollection;
        meta?: {
            [key: string]: unknown;
        };
    }>>>;
    getEmailTemplate(templateName: EmailTemplatesV3ApiSpecs.GetEmailTemplateData['path']['template-name'], query?: EmailTemplatesV3ApiSpecs.GetEmailTemplateData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: EmailTemplatesV3ApiSpecs.EmailTemplate;
        meta?: {
            [key: string]: unknown;
        };
    }>>>;
    updateEmailTemplate(templateName: EmailTemplatesV3ApiSpecs.UpdateEmailTemplateData['path']['template-name'], requestBody: EmailTemplatesV3ApiSpecs.UpdateEmailTemplateData['body'], query?: EmailTemplatesV3ApiSpecs.UpdateEmailTemplateData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: EmailTemplatesV3ApiSpecs.EmailTemplate;
        meta?: {
            [key: string]: unknown;
        };
    }>> | RequestErrorResponse<400, Required<EmailTemplatesV3ApiSpecs.ErrorResponse>>>;
    deleteEmailTemplateOverride(templateName: EmailTemplatesV3ApiSpecs.DeleteEmailTemplateOverrideData['path']['template-name'], query?: EmailTemplatesV3ApiSpecs.DeleteEmailTemplateOverrideData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<unknown>>>;
}
