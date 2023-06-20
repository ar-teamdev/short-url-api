const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true });

exports.checkRecordSchema = (body) => {
    const schema = {
        type: "object",
        properties: {
            old_url: { type: "string" },
            new_url: { type: "string" }
        },
        required: ["old_url","new_url"],
        additionalProperties: false
    }
    const validateBody = ajv.validate(schema, body);
    if (validateBody) { 
    } else {
        const validateError = ajv.errorsText();
        return validateError;
    }
};