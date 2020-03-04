const mongoose = require("mongoose")
const Schema = mongoose.Schema

const logSchema = new Schema({
    model: String, // table or collection reference name
    model_id: String, // table or collection reference id
    value: Array, // it may contains array of: values, params, or text
    type: String, // `success`, `info` or `error`
    action: String,
    notes: {
        type: String,
        default: null
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

const Log = mongoose.model("Log", logSchema)

module.exports = Log
