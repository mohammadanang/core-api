const action = require("./actions/index.action")
const response = require("./responses/index.response")
const Controller = require("./controllers/index.controller")
const LogListener = require("./listeners/log.listener") // need event emitter imported

module.exports = {
    Api: action,
    response,
    Controller,
    LogListener: LogListener(eventEmitter)
}
