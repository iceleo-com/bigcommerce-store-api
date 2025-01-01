import RequestService from '../helpers/request/request-service';
import * as EmailTemplatesV3ApiSpecs from '../generated/email-templates-v3';

export default class EmailTemplatesV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get Email Templates
     *
     * Get a list of email templates.

     > #### Note
     > The `/marketing/email-templates` endpoints only work after opting into the new email management experience from your storeʼs control panel. You can opt-in by visiting Email Templates. If you have already opted in, visiting the Email Templates page will return a `404` error, and you will be able to access the new Transactional Emails page.
     */
    getEmailTemplates(
        query?: EmailTemplatesV3ApiSpecs.GetEmailTemplatesData['query'],
    ) {
        return this.request.get<EmailTemplatesV3ApiSpecs.GetEmailTemplatesResponse, any>({
            path: 'v3/marketing/email-templates',
            query,
        });
    }

    /**
     * Get an Email Template
     *
     * Get a single global email template or a channel-specific email template override.

     > #### Note
     > The `/marketing/email-templates` endpoints only work after opting into the new email management experience from your storeʼs control panel. You can opt-in by visiting [Email Templates](https://login.bigcommerce.com/deep-links/manage/marketing/email-templates). If you have already opted in, visiting the [Email Templates](https://login.bigcommerce.com/deep-links/manage/marketing/email-templates) page will return a `404` error, and you will be able to access the new [Transactional Emails](https://login.bigcommerce.com/deep-links/manage/transactional-emails) page.
     */
    getEmailTemplate(
        templateName: EmailTemplatesV3ApiSpecs.GetEmailTemplateData['path']['template-name'],
        query?: EmailTemplatesV3ApiSpecs.GetEmailTemplateData['query'],
    ) {
        return this.request.get<EmailTemplatesV3ApiSpecs.GetEmailTemplateResponse, any>({
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
        return this.request.put<EmailTemplatesV3ApiSpecs.UpdateEmailTemplateResponse, EmailTemplatesV3ApiSpecs.UpdateEmailTemplateError>({
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
        return this.request.delete<any, any>({
            path: `v3/marketing/email-templates/${templateName}`,
            query,
        });
    }
}
