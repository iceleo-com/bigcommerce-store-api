import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as EmailTemplatesV3ApiSpecs from '../generated/email-templates-v3';
export * as EmailTemplatesV3ApiSpecs from '../generated/email-templates-v3';

export class EmailTemplatesV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get Email Templates
     *
     * Get a list of email templates.
     */
    getEmailTemplates(
        query?: EmailTemplatesV3ApiSpecs.GetEmailTemplatesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<EmailTemplatesV3ApiSpecs.GetEmailTemplatesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/marketing/email-templates',
            query,
        });
    }

    /**
     * Get an Email Template
     *
     * Get a single global email template or a channel-specific email template override.
     */
    getEmailTemplate(
        templateName: EmailTemplatesV3ApiSpecs.GetEmailTemplateData['path']['template-name'],
        query?: EmailTemplatesV3ApiSpecs.GetEmailTemplateData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<EmailTemplatesV3ApiSpecs.GetEmailTemplateResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/marketing/email-templates/${templateName}`,
            query,
        });
    }

    /**
     * Update a Template
     *
     * Update a global template or create a channel-specific email template override.
     */
    updateEmailTemplate(
        templateName: EmailTemplatesV3ApiSpecs.UpdateEmailTemplateData['path']['template-name'],
        requestBody: EmailTemplatesV3ApiSpecs.UpdateEmailTemplateData['body'],
        query?: EmailTemplatesV3ApiSpecs.UpdateEmailTemplateData['query'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<EmailTemplatesV3ApiSpecs.UpdateEmailTemplateResponses[200]>>,RequestErrorResponse<400, Required<EmailTemplatesV3ApiSpecs.UpdateEmailTemplateErrors[400]>>>({
            path: `v3/marketing/email-templates/${templateName}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Delete Email Template Override
     *
     * Removes a channel-specific email template override.
     */
    deleteEmailTemplateOverride(
        templateName: EmailTemplatesV3ApiSpecs.DeleteEmailTemplateOverrideData['path']['template-name'],
        query?: EmailTemplatesV3ApiSpecs.DeleteEmailTemplateOverrideData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<200, Required<EmailTemplatesV3ApiSpecs.DeleteEmailTemplateOverrideResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/marketing/email-templates/${templateName}`,
            query,
        });
    }
}
