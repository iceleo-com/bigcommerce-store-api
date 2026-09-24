const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape } = require('./helpers/api-client');

const emailTemplateShape = {
    type_id: 'string',
    subject: 'string',
    body: 'string',
    translations: 'array',
};

describe('Email Templates V3 API', () => {
    test('List email templates, get email template', async () => {
        const response = await apiClient.v3.emailTemplates.getEmailTemplates();
        const templates = expectSuccess(response);

        expect(Array.isArray(templates)).toBe(true);

        if (templates.length === 0) {
            return;
        }

        expectShape(templates[0], emailTemplateShape);

        if (templates[0].translations.length > 0) {
            expectShape(templates[0].translations[0], { locale: 'string', keys: 'object' });
        }

        const templateResponse = await apiClient.v3.emailTemplates.getEmailTemplate(templates[0].type_id);
        const template = expectSuccess(templateResponse);
        expectShape(template, emailTemplateShape);
        expect(template.type_id).toBe(templates[0].type_id);
    });
});
