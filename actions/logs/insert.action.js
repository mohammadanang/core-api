const Log = require("../../models/log.model")
const Api = require("../index.action")

/**
 * Insert data to log.
 * 
 * @param { model, model_id, value, action, type, notes }  inputs   [ Array-Object ]
 */
class Insert extends Api {
    constructor(inputs) {
        super(Log)

        this.inputs = inputs
    }

    async exec() {
        let params = {
            created_at: new Date
        }

        let { model, model_id, value, action, type, notes } = this.inputs

        if(model) {
            params.model = model
        }

        if(model_id) {
            params.model_id = model_id
        }

        if(value) {
            params.value = value
        }

        if(action) {
            params.action = action
        }

        if(type) {
            params.type = type
        }

        if(notes) {
            params.notes = notes
        }

        try {
            return this.create(params)
        } catch(e) {
            throw e
        }
    }
}

module.exports = Insert
