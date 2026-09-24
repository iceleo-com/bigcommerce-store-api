export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type EmailTemplateTypeId = 'abandoned_cart_email' | 'account_details_changed_email' | 'combined_order_status_email' | 'createaccount_email' | 'createguestaccount_email' | 'giftcertificate_email' | 'invoice_email' | 'ordermessage_notification' | 'return_confirmation_email' | 'return_statuschange_email' | 'product_review_email' | 'account_reset_password_email' | 'order_ready_for_pickup' | 'passwordless_login_email' | 'guest_order_access_email';
export type LocaleObjectKeys = {
    [key: string]: string;
};
export type LocaleObject = {
    locale?: string;
    keys?: LocaleObjectKeys;
};
export type LocaleCollection = Array<LocaleObject>;
export type EmailTemplate = {
    type_id?: EmailTemplateTypeId;
    body?: string;
    translations?: LocaleCollection;
    subject?: string;
};
export type EmailTemplatesCollection = Array<EmailTemplate>;
export type MarketingEmailTemplatesGetResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type EmailTemplatesGetEmailTemplatesResponse200 = {
    data?: EmailTemplatesCollection;
    meta?: MarketingEmailTemplatesGetResponsesContentApplicationJsonSchemaMeta;
};
export type MarketingEmailTemplatesTemplateNameGetResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type EmailTemplatesGetEmailTemplateResponse200 = {
    data?: EmailTemplate;
    meta?: MarketingEmailTemplatesTemplateNameGetResponsesContentApplicationJsonSchemaMeta;
};
export type EmailTemplateUpdate = {
    body: string;
    translations?: LocaleCollection;
    subject: string;
};
export type MarketingEmailTemplatesTemplateNamePutResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type EmailTemplatesUpdateEmailTemplateResponse200 = {
    data?: EmailTemplate;
    meta?: MarketingEmailTemplatesTemplateNamePutResponsesContentApplicationJsonSchemaMeta;
};
export type DetailedErrors = {
    [key: string]: unknown;
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: DetailedErrors;
};
export type EmailTemplatesDeleteEmailTemplateOverrideResponse200 = {
    [key: string]: unknown;
};
export type GetEmailTemplatesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/marketing/email-templates';
};
export type GetEmailTemplatesResponses = {
    200: EmailTemplatesGetEmailTemplatesResponse200;
};
export type GetEmailTemplatesResponse = GetEmailTemplatesResponses[keyof GetEmailTemplatesResponses];
export type DeleteEmailTemplateOverrideData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        'template-name': string;
    };
    query: {
        channel_id: number;
    };
    url: '/marketing/email-templates/{template-name}';
};
export type DeleteEmailTemplateOverrideResponses = {
    200: EmailTemplatesDeleteEmailTemplateOverrideResponse200;
};
export type DeleteEmailTemplateOverrideResponse = DeleteEmailTemplateOverrideResponses[keyof DeleteEmailTemplateOverrideResponses];
export type GetEmailTemplateData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        'template-name': string;
    };
    query?: {
        channel_id?: number;
    };
    url: '/marketing/email-templates/{template-name}';
};
export type GetEmailTemplateResponses = {
    200: EmailTemplatesGetEmailTemplateResponse200;
};
export type GetEmailTemplateResponse = GetEmailTemplateResponses[keyof GetEmailTemplateResponses];
export type UpdateEmailTemplateData = {
    body?: EmailTemplateUpdate;
    headers: {
        Accept: string;
    };
    path: {
        'template-name': string;
    };
    query?: {
        channel_id?: number;
    };
    url: '/marketing/email-templates/{template-name}';
};
export type UpdateEmailTemplateErrors = {
    400: ErrorResponse;
};
export type UpdateEmailTemplateError = UpdateEmailTemplateErrors[keyof UpdateEmailTemplateErrors];
export type UpdateEmailTemplateResponses = {
    200: EmailTemplatesUpdateEmailTemplateResponse200;
};
export type UpdateEmailTemplateResponse = UpdateEmailTemplateResponses[keyof UpdateEmailTemplateResponses];
