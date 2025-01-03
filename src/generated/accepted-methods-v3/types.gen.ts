// This file is auto-generated by @hey-api/openapi-ts

/**
 * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
 */
export type ParameterAccept = string;

/**
 * The ID of the subject checkout; identical to the cart ID.
 */
export type ParameterCheckoutIdQuery = string;

/**
 * The ID of the subject order.
 */
export type ParameterOrderIdQuery = number;

export type paymentMethod_Full = {
    /**
     * Identifier for this payment method
     */
    id: string;
    /**
     * Name of this payment method
     */
    name: string;
    stored_instruments?: Array<paymentMethodStoredInstrument>;
    supported_instruments: Array<{
        /**
         * Type of this instrument
         */
        instrument_type: 'VISA' | 'MASTERCARD' | 'DISCOVER' | 'AMEX' | 'DINERS_CLUB' | 'JCB' | 'DANKORT' | 'MAESTRO' | 'STORED_CARD';
        /**
         * Whether verification value is required for payment
         */
        verification_value_required?: boolean;
    }>;
    /**
     * Whether this payment method is on test mode
     */
    test_mode: boolean;
    /**
     * Type to classify this payment method
     */
    type: string;
};

export type paymentMethodStoredInstrument = {
    /**
     * Brand of this card such as VISA or Mastercard
     */
    brand: string;
    /**
     * Expiry month of this card
     */
    expiry_month: number;
    /**
     * Expiry year of this card
     */
    expiry_year: number;
    /**
     * Issuer identification number of this card. This is extracted from the card when the order is paid for.
     */
    issuer_identification_number: string;
    /**
     * Last four numbers of this card
     */
    last_4: string;
    /**
     * A BigCommerce-generated identifier that represents the stored card.
     */
    token: string;
    /**
     * Whether this instrument is a default instrument
     */
    is_default: boolean;
    /**
     * Type to classify this stored card
     */
    type: string;
};

export type GetPaymentMethodsData = {
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
    };
    query?: {
        /**
         * The ID of the subject checkout; identical to the cart ID.
         */
        checkout_id?: string;
        /**
         * The ID of the subject order.
         */
        order_id?: number;
    };
};

export type GetPaymentMethodsResponse = ({
    data?: Array<paymentMethod_Full>;
    /**
     * Response metadata.
     */
    meta?: {
        [key: string]: unknown;
    };
});

export type GetPaymentMethodsError = ({
    /**
     * HTTP status code
     */
    status: number;
    /**
     * Short summary describing the particular error
     */
    title: string;
    /**
     * Detailed summary describing the particular error
     */
    detail?: string;
    /**
     * Reference that identifies the particular error
     */
    type: string;
    /**
     * Code representing the particular error
     */
    code?: number;
    errors?: {
        [key: string]: (string);
    };
});