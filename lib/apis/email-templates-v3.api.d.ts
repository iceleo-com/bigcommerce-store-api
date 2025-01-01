import RequestService from '../helpers/request/request-service';
import * as EmailTemplatesV3ApiSpecs from '../generated/email-templates-v3';
export default class EmailTemplatesV3Api {
    private readonly request;
    constructor(request: RequestService);
    getEmailTemplates(query?: EmailTemplatesV3ApiSpecs.GetEmailTemplatesData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<EmailTemplatesV3ApiSpecs.GetEmailTemplatesResponse, any>>;
    getEmailTemplate(templateName: EmailTemplatesV3ApiSpecs.GetEmailTemplateData['path']['template-name'], query?: EmailTemplatesV3ApiSpecs.GetEmailTemplateData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<EmailTemplatesV3ApiSpecs.GetEmailTemplateResponse, any>>;
    updateEmailTemplate(templateName: EmailTemplatesV3ApiSpecs.UpdateEmailTemplateData['path']['template-name'], requestBody: EmailTemplatesV3ApiSpecs.UpdateEmailTemplateData['body'], query?: EmailTemplatesV3ApiSpecs.UpdateEmailTemplateData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<EmailTemplatesV3ApiSpecs.UpdateEmailTemplateResponse, EmailTemplatesV3ApiSpecs.ErrorResponse>>;
    deleteEmailTemplateOverride(templateName: EmailTemplatesV3ApiSpecs.DeleteEmailTemplateOverrideData['path']['template-name'], query?: EmailTemplatesV3ApiSpecs.DeleteEmailTemplateOverrideData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
}
