const InsertLog = require("../actions/logs/insert.action")

const log = {
    custom_log: async (inputs) => {
        try {
            new InsertLog(inputs).exec()
        } catch(e) {
            throw e
        }
    }
}

module.exports = eventEmitter => {
    eventEmitter.once("log.custom", log.custom_log)
}
