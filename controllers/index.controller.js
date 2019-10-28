const response = require("../responses/index.response")

class Controller {
    constructor() {}
    
    success(obj) {
        let { code, message, data } = obj
        return response.success(code, message, data)
    }

    error(obj) {
        let { code, message } = obj
        return response.error(code, message)
    }
}

module.exports = Controller
