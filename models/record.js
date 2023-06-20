const mongoose = require("mongoose");

const schema = mongoose.Schema(
    { 
        old_url: { type: String },
        new_url: { type: String },
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now },
    },
    { versionKey: false }
)

schema.index({ date_time: 1 }, { expireAfterSeconds: 0 });

const consent_records = mongoose.model('records', schema);

module.exports = consent_records;