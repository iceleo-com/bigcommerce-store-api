export type ClientOptions = {
    baseUrl: 'https://payments.bigcommerce.com/stores/{store_hash}' | (string & {});
};
export type Card = {
    type?: string;
    cardholder_name?: string;
    number?: string;
    expiry_month?: number;
    expiry_year?: number;
    verification_value?: string;
    issue_month?: number;
    issue_year?: number;
    issue_number?: number;
};
export type StoredCard = {
    type?: string;
    token?: string;
    verification_value?: string;
};
export type StoredPayPalAccount = {
    type?: 'stored_paypal_account';
    token?: string;
};
export type StoredBankAccount = {
    type?: 'stored_bank_account';
    token?: string;
};
export type GiftCertificate = {
    type?: string;
    gift_certificate_code?: string;
};
export type StoreCredit = {
    type?: string;
};
export type TokenizedCard = {
    type: 'tokenized_card';
    token: string;
    iin?: string;
    last_four_digits?: string;
    expiration_month?: string;
    expiration_year?: string;
};
export type AcceptPaymentResponse = 'application/vnd.bc.v1+json';
export type ContentType = string;
export type PaymentsPostData = {
    body?: {
        payment: {
            instrument: Card | StoredCard | StoredPayPalAccount | GiftCertificate | StoreCredit | TokenizedCard | StoredBankAccount;
            payment_method_id: string;
            save_instrument?: boolean;
        };
    };
    headers: {
        Accept: 'application/vnd.bc.v1+json';
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/payments';
};
export type PaymentsPostErrors = {
    400: {
        status: number;
        title: string;
        detail?: string;
        type: string;
        code?: number;
        errors?: {
            [key: string]: string;
        };
    };
    401: {
        status: number;
        title: string;
        detail?: string;
        type: string;
        code?: number;
        errors?: {
            [key: string]: string;
        };
    };
    422: {
        status: number;
        title: string;
        detail?: string;
        type: string;
        code?: number;
        errors?: {
            [key: string]: string;
        };
    };
    default: {
        status: number;
        title: string;
        detail?: string;
        type: string;
        code?: number;
        errors?: {
            [key: string]: string;
        };
    };
};
export type PaymentsPostError = PaymentsPostErrors[keyof PaymentsPostErrors];
export type PaymentsPostResponses = {
    202: {
        id?: string;
        transaction_type?: 'authorization' | 'purchase';
        status?: 'success' | 'pending';
    };
};
export type PaymentsPostResponse = PaymentsPostResponses[keyof PaymentsPostResponses];
