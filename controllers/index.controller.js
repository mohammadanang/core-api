const response = require("../responses/index.response")
const { EventEmitter } = require("events")
const eventEmitter = new EventEmitter()
const CreateLog = require("../actions/logs/insert.action")

const logging = (input) => {
    new CreateLog(input).exec()
}

const emit = (data) => {
    eventEmitter.emit("log.custom", data)
    eventEmitter.removeListener("log.custom", logging)
}

class Controller {
    constructor() {}
    
    success(obj) {
        let { code, message, data, meta } = obj
        return response.success(code, message, data, meta)
    }

    error(obj, dataLog) { // [0]:{ action, notes }
        let { code, message } = obj
        let result = response.error(code, message)
        if(dataLog && dataLog.length > 0) {
            dataLog[0].type = result.status
            dataLog[0].value = [result]
            dataLog[0].notes = result.message

            emit(dataLog)
        }

        return result
    }
}

module.exports = Controller
