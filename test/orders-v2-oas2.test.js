const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape } = require('./helpers/api-client');

const resourceShape = {
    url: 'string',
    resource: 'string',
};

const orderShape = {
    id: 'number',
    customer_id: 'number',
    date_created: 'string',
    date_modified: 'string',
    date_shipped: 'string',
    status_id: 'number',
    status: 'string',
    custom_status: 'string',
    subtotal_ex_tax: 'string',
    subtotal_inc_tax: 'string',
    total_ex_tax: 'string',
    total_inc_tax: 'string',
    total_tax: 'string',
    items_total: 'number',
    items_shipped: 'number',
    payment_method: 'string',
    payment_status: 'string',
    refunded_amount: 'string',
    currency_id: 'number',
    currency_code: 'string',
    currency_exchange_rate: 'string',
    discount_amount: 'string',
    coupon_discount: 'string',
    is_deleted: 'boolean',
    is_tax_inclusive_pricing: 'boolean',
    is_email_opt_in: 'boolean',
    order_is_digital: 'boolean',
    credit_card_type: ['string', 'null'],
    order_source: 'string',
    channel_id: 'number',
    external_id: ['string', 'null'],
    external_source: ['string', 'null'],
    billing_address: 'object',
    products: 'object',
    shipping_addresses: 'object',
    coupons: 'object',
    consignments: 'object',
    fees: 'object',
};

const billingAddressShape = {
    first_name: 'string',
    last_name: 'string',
    street_1: 'string',
    city: 'string',
    zip: 'string',
    country: 'string',
    country_iso2: 'string',
    email: 'string',
    form_fields: 'array',
};

const orderProductShape = {
    id: 'number',
    order_id: 'number',
    product_id: 'number',
    variant_id: 'number',
    order_address_id: 'number',
    name: 'string',
    sku: 'string',
    type: 'string',
    base_price: 'string',
    price_ex_tax: 'string',
    price_inc_tax: 'string',
    total_ex_tax: 'string',
    total_inc_tax: 'string',
    quantity: 'number',
    quantity_shipped: 'number',
    is_refunded: 'boolean',
    parent_order_product_id: ['number', 'null'],
    option_set_id: ['number', 'null'],
    gift_certificate_id: ['number', 'null'],
    fulfillment_source: 'string',
    applied_discounts: 'array',
    product_options: 'array',
    configurable_fields: 'array',
};

const shippingAddressShape = {
    id: 'number',
    order_id: 'number',
    first_name: 'string',
    last_name: 'string',
    street_1: 'string',
    city: 'string',
    zip: 'string',
    country: 'string',
    country_iso2: 'string',
    items_total: 'number',
    items_shipped: 'number',
    shipping_method: 'string',
    base_cost: 'string',
    cost_inc_tax: 'string',
    shipping_zone_id: 'number',
    shipping_quotes: 'object',
    form_fields: 'array',
};

const shippingQuoteShape = {
    id: 'string',
    uuid: 'string',
    timestamp: 'string',
    shipping_provider_id: 'string',
    shipping_provider_quote: ['object', 'array'],
    provider_code: 'string',
    method_id: 'number',
};

const consignmentShippingShape = {
    id: 'number',
    first_name: 'string',
    last_name: 'string',
    line_items: 'array',
    items_total: 'number',
    items_shipped: 'number',
    shipping_method: 'string',
    base_cost: 'number',
    cost_inc_tax: 'number',
    shipping_zone_id: 'number',
    shipping_quotes: 'object',
    applied_discounts: 'array',
};

const shipmentShape = {
    id: 'number',
    order_id: 'number',
    customer_id: 'number',
    order_address_id: 'number',
    date_created: 'string',
    tracking_number: 'string',
    shipping_method: 'string',
    shipping_provider: 'string',
    tracking_carrier: 'string',
    comments: ['string', 'null'],
    billing_address: 'object',
    shipping_address: 'object',
    items: 'array',
};

const orderStatusShape = {
    id: 'number',
    name: 'string',
    system_label: 'string',
    custom_label: 'string',
    system_description: 'string',
    order: 'number',
};

const orderTaxShape = {
    id: 'number',
    order_id: 'number',
    order_address_id: 'number',
    sales_tax_id: 'string',
    tax_class_id: ['number', 'null'],
    name: 'string',
    class: 'string',
    rate: 'string',
    priority: 'number',
    priority_amount: 'string',
    line_amount: 'string',
    order_pickup_method_id: ['number', 'null'],
};

const couponShape = {
    id: 'number',
    coupon_id: 'number',
    order_id: 'number',
    code: 'string',
    amount: ['string', 'number'],
    type: 'number',
    discount: 'string',
};

/**
 * Asserts a successful response that is either `200` with data or `204` (empty).
 */
function expectSuccessOrEmpty(response) {
    if (response.status !== 'success') {
        expect(response.response_text).toBe('');
    }

    expect(response.status).toBe('success');
    expect([200, 204]).toContain(response.http_status);

    return response.http_status === 200 ? response.data : null;
}

async function getLatestOrder() {
    const response = await apiClient.v2.ordersV2Oas2.getOrders({
        limit: 1,
        sort: 'date_created:desc',
    });
    const orders = expectSuccessOrEmpty(response);

    return orders && orders.length > 0 ? orders[0] : null;
}

describe('Orders V2 API', () => {
    test('List orders, get order', async () => {
        const response = await apiClient.v2.ordersV2Oas2.getOrders({
            limit: 5,
            sort: 'date_created:desc',
        });
        const orders = expectSuccessOrEmpty(response);

        if (!orders || orders.length === 0) {
            return;
        }

        expect(Array.isArray(orders)).toBe(true);
        expectShape(orders[0], orderShape);
        expectShape(orders[0].billing_address, billingAddressShape);
        expectShape(orders[0].products, resourceShape);

        const orderResponse = await apiClient.v2.ordersV2Oas2.getOrder(orders[0].id);
        const order = expectSuccess(orderResponse);
        expectShape(order, orderShape);
        expect(order.id).toBe(orders[0].id);
    });

    test('Get orders count', async () => {
        const response = await apiClient.v2.ordersV2Oas2.getOrdersCount();
        const count = expectSuccess(response);
        expectShape(count, {
            count: 'number',
            statuses: 'array',
        });

        if (count.statuses.length > 0) {
            expectShape(count.statuses[0], {
                id: 'number',
                name: 'string',
                system_label: 'string',
                custom_label: 'string',
                count: 'number',
            });
        }
    });

    test('Get order products, product', async () => {
        const order = await getLatestOrder();

        if (!order) {
            return;
        }

        const response = await apiClient.v2.ordersV2Oas2.getOrderProducts(order.id);
        const products = expectSuccessOrEmpty(response);

        if (!products || products.length === 0) {
            return;
        }

        expectShape(products[0], orderProductShape);
        expect(products[0].order_id).toBe(order.id);

        if (products[0].product_options.length > 0) {
            expectShape(products[0].product_options[0], {
                id: 'number',
                option_id: 'number',
                product_option_id: 'number',
                display_name: 'string',
                display_value: 'string',
                type: 'string',
            });
        }

        const productResponse = await apiClient.v2.ordersV2Oas2.getOrderProduct(order.id, products[0].id);
        const product = expectSuccess(productResponse);
        expectShape(product, orderProductShape);
        expect(product.id).toBe(products[0].id);
    });

    test('Get order shipping addresses, address, shipping quotes', async () => {
        const order = await getLatestOrder();

        if (!order) {
            return;
        }

        const response = await apiClient.v2.ordersV2Oas2.getOrderShippingAddresses(order.id);
        const addresses = expectSuccessOrEmpty(response);

        if (!addresses || addresses.length === 0) {
            return;
        }

        expectShape(addresses[0], shippingAddressShape);
        expect(addresses[0].order_id).toBe(order.id);

        const addressResponse = await apiClient.v2.ordersV2Oas2.getOrderShippingAddress(order.id, addresses[0].id);
        const address = expectSuccess(addressResponse);
        expectShape(address, shippingAddressShape);
        expect(address.id).toBe(addresses[0].id);

        const quotesResponse = await apiClient.v2.ordersV2Oas2.getOrderShippingAddressShippingQuotes(order.id, addresses[0].id);
        const quote = expectSuccessOrEmpty(quotesResponse);

        if (quote) {
            expectShape(quote, shippingQuoteShape);
        }
    });

    test('Get order consignments, consignment shipping quotes', async () => {
        const order = await getLatestOrder();

        if (!order) {
            return;
        }

        const response = await apiClient.v2.ordersV2Oas2.getOrderConsignments(order.id);
        const consignments = expectSuccess(response);
        expectShape(consignments, {
            pickups: 'array',
            shipping: 'array',
            downloads: 'array',
            email: 'object',
        });
        expectShape(consignments.email, { gift_certificates: 'array' });

        if (consignments.shipping.length === 0) {
            return;
        }

        const shipping = consignments.shipping[0];
        expectShape(shipping, consignmentShippingShape);

        if (shipping.line_items.length > 0) {
            expectShape(shipping.line_items[0], resourceShape);
        }

        const quotesResponse = await apiClient.v2.ordersV2Oas2.getOrderConsignmentShippingQuotes(order.id, shipping.id);
        const quote = expectSuccessOrEmpty(quotesResponse);

        if (quote) {
            expectShape(quote, shippingQuoteShape);
        }
    });

    test('Get order coupons, fees, messages, taxes (200 or 204)', async () => {
        const order = await getLatestOrder();

        if (!order) {
            return;
        }

        const coupons = expectSuccessOrEmpty(await apiClient.v2.ordersV2Oas2.getOrderCoupons(order.id));

        if (coupons && coupons.length > 0) {
            expectShape(coupons[0], couponShape);
            expect(coupons[0].order_id).toBe(order.id);
        }

        const fees = expectSuccessOrEmpty(await apiClient.v2.ordersV2Oas2.getOrderFees(order.id));

        if (fees) {
            expect(Array.isArray(fees)).toBe(true);
        }

        const messages = expectSuccessOrEmpty(await apiClient.v2.ordersV2Oas2.getOrderMessages(order.id));

        if (messages) {
            expect(Array.isArray(messages)).toBe(true);
        }

        const taxes = expectSuccessOrEmpty(await apiClient.v2.ordersV2Oas2.getOrderTaxes(order.id));

        if (taxes && taxes.length > 0) {
            expectShape(taxes[0], orderTaxShape);
            expect(taxes[0].order_id).toBe(order.id);
        }

        const detailedTaxes = expectSuccessOrEmpty(await apiClient.v2.ordersV2Oas2.getOrderTaxes(order.id, { details: 'true' }));

        if (detailedTaxes && detailedTaxes.length > 0) {
            expectShape(detailedTaxes[0], {
                ...orderTaxShape,
                order_product_id: ['number', 'null'],
                line_item_type: 'string',
            });
        }
    });

    test('Get order shipments, shipments count, shipment', async () => {
        // shipped orders are the most likely to have shipments
        const ordersResponse = await apiClient.v2.ordersV2Oas2.getOrders({
            limit: 1,
            status_id: 2,
            sort: 'date_created:desc',
        });
        const orders = expectSuccessOrEmpty(ordersResponse);

        if (!orders || orders.length === 0) {
            return;
        }

        const orderId = orders[0].id;

        const countResponse = await apiClient.v2.ordersV2Oas2.getOrderShipmentsCount(orderId);
        const count = expectSuccess(countResponse);
        expectShape(count, { count: 'number' });

        const response = await apiClient.v2.ordersV2Oas2.getOrderShipments(orderId);
        const shipments = expectSuccessOrEmpty(response);

        if (!shipments || shipments.length === 0) {
            return;
        }

        expectShape(shipments[0], shipmentShape);
        expect(shipments[0].order_id).toBe(orderId);

        const shipmentResponse = await apiClient.v2.ordersV2Oas2.getOrderShipment(orderId, shipments[0].id);
        const shipment = expectSuccess(shipmentResponse);
        expectShape(shipment, shipmentShape);
        expect(shipment.id).toBe(shipments[0].id);
    });

    test('List order statuses, get order status', async () => {
        const response = await apiClient.v2.ordersV2Oas2.getOrderStatuses();
        const statuses = expectSuccess(response);

        expect(Array.isArray(statuses)).toBe(true);

        if (statuses.length === 0) {
            return;
        }

        expectShape(statuses[0], orderStatusShape);

        const statusResponse = await apiClient.v2.ordersV2Oas2.getOrderStatusesStatus(statuses[0].id);
        const status = expectSuccess(statusResponse);
        expectShape(status, orderStatusShape);
        expect(status.id).toBe(statuses[0].id);
    });
});
