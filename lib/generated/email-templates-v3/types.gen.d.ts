export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type DetailedErrors = {
    [key: string]: (string);
};
export type EmailTemplate = {
    type_id?: 'abandoned_cart_email' | 'account_details_changed_email' | 'combined_order_status_email' | 'createaccount_email' | 'createguestaccount_email' | 'giftcertificate_email' | 'invoice_email' | 'ordermessage_notification' | 'return_confirmation_email' | 'return_statuschange_email' | 'product_review_email' | 'account_reset_password_email';
    body?: string;
    translations?: LocaleCollection;
    subject?: string;
};
export type type_id = 'abandoned_cart_email' | 'account_details_changed_email' | 'combined_order_status_email' | 'createaccount_email' | 'createguestaccount_email' | 'giftcertificate_email' | 'invoice_email' | 'ordermessage_notification' | 'return_confirmation_email' | 'return_statuschange_email' | 'product_review_email' | 'account_reset_password_email';
export type EmailTemplatesCollection = Array<EmailTemplate>;
export type EmailTemplateUpdate = {
    body: string;
    translations?: LocaleCollection;
    subject: string;
};
export type ErrorResponse = BaseError & {
    errors?: DetailedErrors;
};
export type LocaleCollection = Array<LocaleObject>;
export type LocaleObject = {
    locale?: string;
    keys?: {
        [key: string]: unknown;
    };
};
export type ParameterAccept = string;
export type ParameterChannelIdParam = number;
export type ParameterContentType = string;
export type ParameterRequiredChannelIdParamForDelete = number;
export type scratch = {
    id?: string;
};
export type GetEmailTemplatesData = {
    headers: {
        Accept: string;
    };
    query?: {
        channel_id?: number;
    };
};
export type GetEmailTemplatesResponse = ({
    data?: EmailTemplatesCollection;
    meta?: {
        [key: string]: unknown;
    };
});
export type GetEmailTemplatesError = unknown;
export type GetEmailTemplateData = {
    headers: {
        Accept: string;
    };
    path: {
        'template-name': string;
    };
    query?: {
        channel_id?: number;
    };
};
export type GetEmailTemplateResponse = ({
    data?: EmailTemplate;
    meta?: {
        [key: string]: unknown;
    };
});
export type GetEmailTemplateError = unknown;
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
};
export type UpdateEmailTemplateResponse = ({
    data?: EmailTemplate;
    meta?: {
        [key: string]: unknown;
    };
});
export type UpdateEmailTemplateError = (ErrorResponse);
export type DeleteEmailTemplateOverrideData = {
    headers: {
        Accept: string;
    };
    path: {
        'template-name': string;
    };
    query: {
        channel_id: number;
    };
};
export type DeleteEmailTemplateOverrideResponse = (unknown);
export type DeleteEmailTemplateOverrideError = unknown;
