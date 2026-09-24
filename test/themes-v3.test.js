const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

const themeShape = {
    uuid: 'string',
    name: 'string',
    variations: 'array',
    is_private: 'boolean',
    is_active: 'boolean',
    updated_at: 'string',
};

const variationShape = {
    uuid: 'string',
    name: 'string',
    description: 'string',
    external_id: 'string',
};

const configurationShape = {
    uuid: 'string',
    store_hash: 'string',
    channel_id: 'number',
    settings: 'object',
    theme_uuid: 'string',
    version_uuid: 'string',
    variation_uuid: 'string',
    created_at: 'string',
    updated_at: 'string',
};

async function getActiveTheme() {
    const response = await apiClient.v3.themes.getStoreThemes();
    const themes = expectSuccess(response);

    return themes.find((theme) => theme.is_active);
}

describe('Themes V3 API', () => {
    test('List themes, get theme', async () => {
        const response = await apiClient.v3.themes.getStoreThemes();
        const themes = expectSuccess(response);

        expect(Array.isArray(themes)).toBe(true);

        if (themes.length === 0) {
            return;
        }

        expectShape(themes[0], themeShape);

        if (themes[0].variations.length > 0) {
            expectShape(themes[0].variations[0], variationShape);
        }

        const themeResponse = await apiClient.v3.themes.getStoreTheme(themes[0].uuid);
        const theme = expectSuccess(themeResponse);
        expectShape(theme, themeShape);
        expect(theme.uuid).toBe(themes[0].uuid);
    });

    test('Get active theme configuration and custom templates', async () => {
        const activeTheme = await getActiveTheme();

        if (!activeTheme) {
            return;
        }

        const response = await apiClient.v3.themes.getThemeConfiguration(activeTheme.uuid, { limit: 1 });
        const configurations = expectSuccess(response);

        expect(Array.isArray(configurations)).toBe(true);
        expectPagination(response.meta);

        if (configurations.length === 0) {
            return;
        }

        const configuration = configurations[0];
        expectShape(configuration, configurationShape);
        expect(configuration.theme_uuid).toBe(activeTheme.uuid);

        const templatesResponse = await apiClient.v3.themes.getThemeCustomTemplates(configuration.version_uuid);
        const templates = expectSuccess(templatesResponse);

        expect(Array.isArray(templates)).toBe(true);

        if (templates.length > 0) {
            expectShape(templates[0], { page_type: 'string', templates: 'array' });
        }
    });
});
