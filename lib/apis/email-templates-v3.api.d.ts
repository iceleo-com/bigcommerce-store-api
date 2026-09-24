import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as EmailTemplatesV3ApiSpecs from '../generated/email-templates-v3';
export * as EmailTemplatesV3ApiSpecs from '../generated/email-templates-v3';
export declare class EmailTemplatesV3Api {
    private readonly request;
    constructor(request: RequestService);
    getEmailTemplates(query?: EmailTemplatesV3ApiSpecs.GetEmailTemplatesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<EmailTemplatesV3ApiSpecs.EmailTemplatesGetEmailTemplatesResponse200>>>;
    getEmailTemplate(templateName: EmailTemplatesV3ApiSpecs.GetEmailTemplateData['path']['template-name'], query?: EmailTemplatesV3ApiSpecs.GetEmailTemplateData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<EmailTemplatesV3ApiSpecs.EmailTemplatesGetEmailTemplateResponse200>>>;
    updateEmailTemplate(templateName: EmailTemplatesV3ApiSpecs.UpdateEmailTemplateData['path']['template-name'], requestBody: EmailTemplatesV3ApiSpecs.UpdateEmailTemplateData['body'], query?: EmailTemplatesV3ApiSpecs.UpdateEmailTemplateData['query']): Promise<RequestSuccessResponse<200, Required<EmailTemplatesV3ApiSpecs.EmailTemplatesUpdateEmailTemplateResponse200>> | RequestErrorResponse<400, Required<EmailTemplatesV3ApiSpecs.ErrorResponse>>>;
    deleteEmailTemplateOverride(templateName: EmailTemplatesV3ApiSpecs.DeleteEmailTemplateOverrideData['path']['template-name'], query?: EmailTemplatesV3ApiSpecs.DeleteEmailTemplateOverrideData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<EmailTemplatesV3ApiSpecs.EmailTemplatesDeleteEmailTemplateOverrideResponse200>>>;
}
