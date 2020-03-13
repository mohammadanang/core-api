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
    onLog() {
        eventEmitter.on("log.custom", logging)
    }

    success(obj, dataLog = []) { // [0]:{ model, model_id, action, notes }
        let { code, message, data } = obj
        let result = response.success(code, message, data)
        if(dataLog && dataLog.length > 0) {
            dataLog[0].type = "success"
            dataLog[0].value = [result]

            emit(dataLog)
        }

        return result
    }

    error(obj, dataLog = []) { // [0]:{ action, notes }
        let { code, message } = obj
        let result = response.error(code, message)
        if(dataLog && dataLog.length > 0) {
            dataLog[0].type = "error"
            dataLog[0].value = [result]

            emit(dataLog)
        }

        return result
    }
}

module.exports = Controller
