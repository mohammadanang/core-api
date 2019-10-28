const action = require("./actions/index.action")
const response = require("./responses/index.response")
const Controller = require("./controllers/index.controller")

module.exports = {
    Api: action,
    response,
    Controller
}
