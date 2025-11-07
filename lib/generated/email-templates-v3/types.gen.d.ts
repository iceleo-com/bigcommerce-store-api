export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type ErrorResponse = BaseError & {
    errors?: DetailedErrors;
};
export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type DetailedErrors = {
    [key: string]: string;
};
export type EmailTemplatesCollection = Array<EmailTemplate>;
export type EmailTemplate = {
    type_id?: 'abandoned_cart_email' | 'account_details_changed_email' | 'combined_order_status_email' | 'createaccount_email' | 'createguestaccount_email' | 'giftcertificate_email' | 'invoice_email' | 'ordermessage_notification' | 'return_confirmation_email' | 'return_statuschange_email' | 'product_review_email' | 'account_reset_password_email';
    body?: string;
    translations?: LocaleCollection;
    subject?: string;
};
export type LocaleObject = {
    locale?: string;
    keys?: {
        [key: string]: unknown;
    };
};
export type LocaleCollection = Array<LocaleObject>;
export type EmailTemplateUpdate = {
    body: string;
    translations?: LocaleCollection;
    subject: string;
};
export type Scratch = {
    id?: string;
};
export type Accept = string;
export type ContentType = string;
export type ChannelIdParam = number;
export type RequiredChannelIdParamForDelete = number;
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
    200: {
        data?: EmailTemplatesCollection;
        meta?: {
            [key: string]: unknown;
        };
    };
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
    200: unknown;
};
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
    200: {
        data?: EmailTemplate;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type GetEmailTemplateResponse = GetEmailTemplateResponses[keyof GetEmailTemplateResponses];
export type UpdateEmailTemplateData = {
    body?: EmailTemplate;
    headers: {
        Accept: string;
        'Content-Type': string;
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
    200: {
        data?: EmailTemplate;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type UpdateEmailTemplateResponse = UpdateEmailTemplateResponses[keyof UpdateEmailTemplateResponses];
