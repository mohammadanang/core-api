const action = require("./actions/index.action")
const response = require("./responses/index.response")
const Controller = require("./controllers/index.controller")
const events = require("events")
const eventEmitter = new events.EventEmitter()
const LogListener = require("./listeners/log.listener")(eventEmitter) // need event emitter imported

module.exports = {
    Api: action,
    response,
    Controller,
    LogListener,
    eventEmitter
}
