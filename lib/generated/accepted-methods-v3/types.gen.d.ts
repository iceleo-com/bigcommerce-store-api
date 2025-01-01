export type ParameterAccept = string;
export type ParameterCheckoutIdQuery = string;
export type ParameterOrderIdQuery = number;
export type paymentMethod_Full = {
    id: string;
    name: string;
    stored_instruments?: Array<paymentMethodStoredInstrument>;
    supported_instruments: Array<{
        instrument_type: 'VISA' | 'MASTERCARD' | 'DISCOVER' | 'AMEX' | 'DINERS_CLUB' | 'JCB' | 'DANKORT' | 'MAESTRO' | 'STORED_CARD';
        verification_value_required?: boolean;
    }>;
    test_mode: boolean;
    type: string;
};
export type paymentMethodStoredInstrument = {
    brand: string;
    expiry_month: number;
    expiry_year: number;
    issuer_identification_number: string;
    last_4: string;
    token: string;
    is_default: boolean;
    type: string;
};
export type GetPaymentMethodsData = {
    headers: {
        Accept: string;
    };
    query?: {
        checkout_id?: string;
        order_id?: number;
    };
};
export type GetPaymentMethodsResponse = ({
    data?: Array<paymentMethod_Full>;
    meta?: {
        [key: string]: unknown;
    };
});
export type GetPaymentMethodsError = ({
    status: number;
    title: string;
    detail?: string;
    type: string;
    code?: number;
    errors?: {
        [key: string]: (string);
    };
});
