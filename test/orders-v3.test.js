const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

const transactionShape = {
    id: 'number',
    order_id: 'string',
    event: 'string',
    method: 'string',
    amount: 'number',
    currency: 'string',
    gateway: 'string',
    gateway_transaction_id: 'string',
    payment_method_id: 'string',
    status: 'string',
    test: 'boolean',
    fraud_review: 'boolean',
    reference_transaction_id: ['number', 'null'],
    date_created: 'string',
    avs_result: 'object',
    cvv_result: 'object',
    credit_card: ['object', 'null'],
    gift_certificate: ['object', 'null'],
    store_credit: ['object', 'null'],
    offline: ['object', 'null'],
    custom: ['object', 'null'],
    payment_instrument_token: ['string', 'null'],
};

const refundShape = {
    id: 'number',
    order_id: 'number',
    user_id: 'number',
    created: 'string',
    reason: 'string',
    total_amount: 'number',
    total_tax: 'number',
    uses_merchant_override_values: 'boolean',
    payments: 'array',
    items: 'array',
};

const refundPaymentShape = {
    id: 'number',
    provider_id: 'string',
    amount: 'number',
    offline: 'boolean',
    is_declined: 'boolean',
    declined_message: 'string',
    transaction_id: ['string', 'null'],
};

const refundItemShape = {
    item_type: 'string',
    item_id: 'number',
    quantity: ['number', 'null'],
    requested_amount: ['number', 'null'],
    reason: 'string',
    adjustments: 'array',
};

const orderNotificationsShape = {
    order_placed: 'object',
    forward_invoice: 'object',
};

function expectRefund(refund) {
    expectShape(refund, refundShape);

    if (refund.payments.length > 0) {
        expectShape(refund.payments[0], refundPaymentShape);
    }

    if (refund.items.length > 0) {
        expectShape(refund.items[0], refundItemShape);
    }
}

async function getLatestOrderId() {
    const response = await apiClient.v2.ordersV2Oas2.getOrders({
        limit: 1,
        sort: 'date_created:desc',
    });

    if (response.status !== 'success' || !Array.isArray(response.data) || response.data.length === 0) {
        return null;
    }

    return response.data[0].id;
}

describe('Orders V3 API', () => {
    test('Get order transactions', async () => {
        const orderId = await getLatestOrderId();

        if (!orderId) {
            return;
        }

        const response = await apiClient.v3.orders.getOrderTransactions(orderId);
        const transactions = expectSuccess(response);

        expect(Array.isArray(transactions)).toBe(true);
        expectPagination(response.meta);

        if (transactions.length === 0) {
            return;
        }

        expectShape(transactions[0], transactionShape);
        expect(transactions[0].order_id).toBe(String(orderId));

        if (transactions[0].credit_card) {
            expectShape(transactions[0].credit_card, {
                card_type: 'string',
                card_iin: 'string',
                card_last4: 'string',
                card_expiry_month: ['number', 'null'],
                card_expiry_year: ['number', 'null'],
            });
        }
    });

    test('List all refunds, get refund, list order refunds', async () => {
        const response = await apiClient.v3.orders.getOrdersRefunds({ limit: 5 });
        const refunds = expectSuccess(response);

        expect(Array.isArray(refunds)).toBe(true);
        expectPagination(response.meta);

        if (refunds.length === 0) {
            return;
        }

        const listed = refunds[0];
        expectRefund(listed);

        const refundResponse = await apiClient.v3.orders.getOrderRefund(listed.id);
        const refund = expectSuccess(refundResponse);
        expectRefund(refund);
        expect(refund.id).toBe(listed.id);

        const refundByIdResponse = await apiClient.v3.orders.getOrderRefundById(listed.order_id, listed.id);
        const refundById = expectSuccess(refundByIdResponse);
        expectRefund(refundById);
        expect(refundById.id).toBe(listed.id);
        expect(refundById.order_id).toBe(listed.order_id);

        const orderRefundsResponse = await apiClient.v3.orders.getOrderRefunds(listed.order_id);
        const orderRefunds = expectSuccess(orderRefundsResponse);
        expectPagination(orderRefundsResponse.meta);
        expect(orderRefunds.length).toBeGreaterThan(0);
        expectRefund(orderRefunds[0]);
        expect(orderRefunds.every((item) => item.order_id === listed.order_id)).toBe(true);
    });

    test('List order metafields (all orders, one order)', async () => {
        const response = await apiClient.v3.orders.getOrdersMetafields({ limit: 5 });
        const metafields = expectSuccess(response);

        expect(Array.isArray(metafields)).toBe(true);
        expectPagination(response.meta);

        const orderId = await getLatestOrderId();

        if (!orderId) {
            return;
        }

        const orderResponse = await apiClient.v3.orders.getOrderMetafields(orderId, { limit: 5 });
        const orderMetafields = expectSuccess(orderResponse);

        expect(Array.isArray(orderMetafields)).toBe(true);
        expectPagination(orderResponse.meta);

        if (orderMetafields.length === 0) {
            return;
        }

        const metafieldResponse = await apiClient.v3.orders.getOrderMetafield(orderId, orderMetafields[0].id);
        const metafield = expectSuccess(metafieldResponse);
        expect(metafield.id).toBe(orderMetafields[0].id);
    });

    test('Get global and channel order settings', async () => {
        const response = await apiClient.v3.orders.getGlobalOrderSettings();
        const settings = expectSuccess(response);
        expectShape(settings, { notifications: 'object' });
        expectShape(settings.notifications, orderNotificationsShape);
        expectShape(settings.notifications.order_placed, { email_addresses: 'array' });
        expectShape(settings.notifications.forward_invoice, { email_addresses: 'array' });

        const channelResponse = await apiClient.v3.orders.getChannelOrderSettings(1);
        const channelSettings = expectSuccess(channelResponse);
        expectShape(channelSettings, { notifications: 'object' });
        expectShape(channelSettings.notifications, orderNotificationsShape);
        // null when inherited from the global settings
        expectShape(channelSettings.notifications.order_placed, { email_addresses: ['array', 'null'] });
    });
});
