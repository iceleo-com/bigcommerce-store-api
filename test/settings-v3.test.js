const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape } = require('./helpers/api-client');

const filterShape = {
    id: 'string',
    display_name: 'string',
    type: 'string',
    is_enabled: 'boolean',
    facet_id: ['number', 'null'],
    facet: 'string',
};

describe('Settings V3 API', () => {
    test('List analytics providers, get analytics provider', async () => {
        const response = await apiClient.v3.settings.getAnalyticsProviders();
        const providers = expectSuccess(response);

        expect(Array.isArray(providers)).toBe(true);

        if (providers.length === 0) {
            return;
        }

        const shape = {
            id: 'number',
            channel_id: 'number',
            name: 'string',
            code: 'string',
            enabled: 'boolean',
            data_tag_enabled: 'boolean',
            version: 'number',
        };
        expectShape(providers[0], shape);

        const providerResponse = await apiClient.v3.settings.getAnalyticsProvider(providers[0].id);
        const provider = expectSuccess(providerResponse);
        expectShape(provider, shape);
        expect(provider.id).toBe(providers[0].id);
    });

    test('Get catalog settings', async () => {
        const response = await apiClient.v3.settings.getSettingsCatalog();
        expectShape(expectSuccess(response), {
            auto_approve_reviews: 'boolean',
            enable_product_comparisons: 'boolean',
        });
    });

    test('Get email statuses', async () => {
        const response = await apiClient.v3.settings.getSettingsEmailStatuses();
        expectShape(expectSuccess(response), {
            abandoned_cart_email: 'boolean',
            account_details_changed_email: 'boolean',
            combined_order_status_email: 'boolean',
            createaccount_email: 'boolean',
            createguestaccount_email: 'boolean',
            giftcertificate_email: 'boolean',
            invoice_email: 'boolean',
            ordermessage_notification: 'boolean',
            product_review_email: 'boolean',
            return_confirmation_email: 'boolean',
            return_statuschange_email: 'boolean',
        });
    });

    test('Get inventory settings', async () => {
        const response = await apiClient.v3.settings.getSettingsInventory();
        expectShape(expectSuccess(response), {
            product_out_of_stock_behavior: 'string',
            option_out_of_stock_behavior: 'string',
            update_stock_behavior: 'string',
            edit_order_stock_adjustment: 'boolean',
            refund_order_stock_adjustment: 'boolean',
            stock_level_display: 'string',
            default_out_of_stock_message: 'string',
            hide_in_product_filtering: 'boolean',
            show_out_of_stock_message: 'boolean',
        });
    });

    test('Get inventory notification settings', async () => {
        const response = await apiClient.v3.settings.getSettingsInventoryNotifications();
        expectShape(expectSuccess(response), {
            low_stock_notification_address: 'array',
            out_of_stock_notification_address: 'array',
        });
    });

    test('Get logo settings', async () => {
        const response = await apiClient.v3.settings.getSettingsLogo();
        expectShape(expectSuccess(response), {
            logo_image_url: 'string',
            logo_text: 'string',
            type: 'string',
            favicon_url: 'string',
        });
    });

    test('Get enabled search filters', async () => {
        const response = await apiClient.v3.settings.getSettingsEnabledSearchFilters();
        const filters = expectSuccess(response);

        expect(Array.isArray(filters)).toBe(true);

        if (filters.length > 0) {
            expectShape(filters[0], filterShape);
        }
    });

    test('Get available search filters', async () => {
        const response = await apiClient.v3.settings.getSettingsAvailableFilters();
        const filters = expectSuccess(response);

        expect(Array.isArray(filters)).toBe(true);

        if (filters.length > 0) {
            expectShape(filters[0], {
                id: 'string',
                name: 'string',
                type: 'string',
            });
        }

        const priceFilter = filters.find((filter) => filter.type === 'price');
        if (priceFilter) {
            expectShape(priceFilter, {
                price_range_min: 'number',
                price_range_max: 'number',
            });
        }
    });

    test('Get search filter contexts', async () => {
        const response = await apiClient.v3.settings.getSettingsFiltersContexts();
        const contexts = expectSuccess(response);

        expect(Array.isArray(contexts)).toBe(true);

        if (contexts.length === 0) {
            return;
        }

        expectShape(contexts[0], {
            context: 'object',
            data: 'array',
        });
        expectShape(contexts[0].context, {
            channel_id: ['number', 'undefined'],
            category_id: ['number', 'undefined'],
        });

        if (contexts[0].data.length > 0) {
            expectShape(contexts[0].data[0], filterShape);
        }
    });

    test('Get locale settings', async () => {
        const response = await apiClient.v3.settings.getSettingsLocale();
        expectShape(expectSuccess(response), {
            default_shopper_language: 'string',
            store_country: 'string',
            shopper_language_selection_method: 'string',
        });
    });

    test('Get store profile', async () => {
        const response = await apiClient.v3.settings.getSettingsStoreProfile();
        expectShape(expectSuccess(response), {
            store_name: 'string',
            store_address: 'string',
            store_email: 'string',
            store_phone: 'string',
            store_address_type: 'string',
            pending_confirmation_email: ['string', 'null', 'undefined'],
        });
    });

    test('Get storefront category settings', async () => {
        const response = await apiClient.v3.settings.getSettingsStorefrontCategory();
        expectShape(expectSuccess(response), {
            listing_mode: 'string',
            default_product_sort: 'string',
            category_tree_depth: 'number',
        });
    });

    test('Get storefront product settings', async () => {
        const response = await apiClient.v3.settings.getSettingsStorefrontProduct();
        expectShape(expectSuccess(response), {
            show_product_price: 'boolean',
            show_product_sku: 'boolean',
            show_product_weight: 'boolean',
            show_product_brand: 'boolean',
            show_product_shipping: 'boolean',
            show_product_rating: 'boolean',
            show_add_to_cart_link: 'boolean',
            default_preorder_message: 'string',
            show_breadcrumbs_product_pages: 'string',
            show_add_to_cart_qty_box: 'boolean',
            show_add_to_wishlist: 'boolean',
            hide_price_from_guests: 'boolean',
        });
    });

    test('Get storefront search settings', async () => {
        const response = await apiClient.v3.settings.getSettingsStorefrontSearch();
        expectShape(expectSuccess(response), {
            product_filtering_enabled: 'boolean',
            default_product_sort: 'string',
            content_product_sort: 'string',
            search_suggest: 'boolean',
        });
    });

    test('Get storefront security settings', async () => {
        const response = await apiClient.v3.settings.getSettingsStorefrontSecurity();
        const security = expectSuccess(response);
        expectShape(security, {
            sitewide_https_enabled: 'boolean',
            csp_header: 'object',
            x_frame_options_header: 'object',
            hsts: 'object',
        });
        expectShape(security.csp_header, { enabled: 'boolean', header_value: 'string' });
        expectShape(security.x_frame_options_header, { enabled: 'boolean', setting: 'string', allowed_url: 'string' });
        expectShape(security.hsts, {
            enabled: 'boolean',
            include_subdomains: 'boolean',
            include_preload: 'boolean',
            max_age: 'string',
        });
    });

    test('Get storefront SEO settings', async () => {
        const response = await apiClient.v3.settings.getSettingsStorefrontSeo();
        expectShape(expectSuccess(response), {
            page_title: 'string',
            meta_keywords: 'string',
            meta_description: 'string',
            www_redirect: 'string',
        });
    });

    test('Get storefront status', async () => {
        const response = await apiClient.v3.settings.getSettingsStorefrontStatus();
        expectShape(expectSuccess(response), {
            down_for_maintenance_message: 'string',
            prelaunch_message: 'string',
            prelaunch_password: 'string',
        });
    });

    test('Get measurement units', async () => {
        const response = await apiClient.v3.settings.getSettingsMeasurementUnits();
        expectShape(expectSuccess(response), {
            weight_measurement: 'string',
            length_measurement: 'string',
            decimal_token: 'string',
            thousands_token: 'string',
            decimal_places: 'number',
            factoring_dimension: 'string',
        });
    });
});
