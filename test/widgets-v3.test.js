const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

const widgetTemplateShape = {
    uuid: 'string',
    name: 'string',
    schema: 'array',
    template: 'string',
    kind: 'string',
    storefront_api_query: 'string',
    icon_name: 'string',
    template_engine: 'string',
    client_rerender: 'boolean',
    current_version_uuid: 'string',
    channel_id: 'number',
    schema_translations: 'object',
    date_created: 'string',
    date_modified: 'string',
};

const widgetShape = {
    uuid: 'string',
    name: 'string',
    description: 'string',
    widget_configuration: 'object',
    widget_template: 'object',
    storefront_api_query_params: 'object',
    version_uuid: 'string',
    channel_id: 'number',
    date_created: 'string',
    date_modified: 'string',
};

const placementShape = {
    uuid: 'string',
    template_file: 'string',
    region: 'string',
    sort_order: 'number',
    entity_id: 'string',
    status: 'string',
    widget: 'object',
    channel_id: 'number',
    date_created: 'string',
    date_modified: 'string',
};

describe('Widgets V3 API', () => {
    test('List widget templates, get widget template', async () => {
        const response = await apiClient.v3.widgets.getWidgetTemplates({ limit: 5 });
        const templates = expectSuccess(response);

        expect(Array.isArray(templates)).toBe(true);
        expectPagination(response.meta);

        if (templates.length === 0) {
            return;
        }

        expectShape(templates[0], widgetTemplateShape);

        const templateResponse = await apiClient.v3.widgets.getWidgetTemplate(templates[0].uuid);
        const template = expectSuccess(templateResponse);
        expectShape(template, widgetTemplateShape);
        expect(template.uuid).toBe(templates[0].uuid);

        for (const item of template.schema) {
            expect(['tab', 'array', 'hidden']).toContain(item.type);
        }
    });

    test('List widgets, get widget', async () => {
        const response = await apiClient.v3.widgets.getWidgets({ limit: 5 });
        const widgets = expectSuccess(response);

        expect(Array.isArray(widgets)).toBe(true);
        expectPagination(response.meta);

        if (widgets.length === 0) {
            return;
        }

        expectShape(widgets[0], widgetShape);
        expectShape(widgets[0].widget_template, widgetTemplateShape);

        const widgetResponse = await apiClient.v3.widgets.getWidget(widgets[0].uuid);
        const widget = expectSuccess(widgetResponse);
        expectShape(widget, widgetShape);
        expect(widget.uuid).toBe(widgets[0].uuid);
    });

    test('List placements, get placement', async () => {
        const response = await apiClient.v3.widgets.getPlacements({ limit: 5 });
        const placements = expectSuccess(response);

        expect(Array.isArray(placements)).toBe(true);
        expectPagination(response.meta);

        if (placements.length === 0) {
            return;
        }

        expectShape(placements[0], placementShape);
        expectShape(placements[0].widget, widgetShape);
        expect(['active', 'inactive']).toContain(placements[0].status);

        const placementResponse = await apiClient.v3.widgets.getPlacement(placements[0].uuid);
        const placement = expectSuccess(placementResponse);
        expectShape(placement, placementShape);
        expect(placement.uuid).toBe(placements[0].uuid);
    });

    test('Get content regions', async () => {
        const response = await apiClient.v3.widgets.getContentRegions({ template_file: 'pages/home' });
        const regions = expectSuccess(response);

        expect(Array.isArray(regions)).toBe(true);

        if (regions.length > 0) {
            expectShape(regions[0], { name: 'string' });
        }
    });
});
