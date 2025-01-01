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
export type GiftCertificate = {
    type?: string;
    gift_certificate_code?: string;
};
export type ParameterAcceptPaymentResponse = 'application/vnd.bc.v1+json';
export type ParameterContentType = string;
export type StoreCredit = {
    type?: string;
};
export type StoredBankAccount = {
    type?: 'stored_bank_account';
    token?: string;
};
export type type = 'stored_bank_account';
export type StoredCard = {
    type?: string;
    token?: string;
    verification_value?: string;
};
export type StoredPayPalAccount = {
    type?: 'stored_paypal_account';
    token?: string;
};
export type type2 = 'stored_paypal_account';
export type TokenizedCard = {
    type: 'tokenized_card';
    token: string;
    iin?: string;
    last_four_digits?: string;
    expiration_month?: string;
    expiration_year?: string;
};
export type type3 = 'tokenized_card';
export type PaymentsPostData = {
    body?: {
        payment: {
            instrument: (Card | StoredCard | StoredPayPalAccount | GiftCertificate | StoreCredit | TokenizedCard | StoredBankAccount);
            payment_method_id: string;
            save_instrument?: boolean;
        };
    };
    headers: {
        Accept: 'application/vnd.bc.v1+json';
        'Content-Type': string;
    };
};
export type PaymentsPostResponse = ({
    id?: string;
    transaction_type?: 'authorization' | 'purchase';
    status?: 'success' | 'pending';
});
export type PaymentsPostError = ({
    status: number;
    title: string;
    detail?: string;
    type: string;
    code?: number;
    errors?: {
        [key: string]: (string);
    };
});
