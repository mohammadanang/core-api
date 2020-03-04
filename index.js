const action = require("./actions/index.action")
const response = require("./responses/index.response")
const Controller = require("./controllers/index.controller")
const LogListener = require("./listeners/log.listener")
const mongoose = require("mongoose")
const connection = host => {
    mongoose.connect(host, {
        'useNewUrlParser': true
    })

    mongoose.set('useCreateIndex', true)
}

module.exports = {
    Api: action,
    response,
    Controller,
    LogListener,
    connection
}
