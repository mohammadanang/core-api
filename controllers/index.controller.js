const response = require("../responses/index.response")

class Controller {
    constructor() {}
    
    success(obj) {
        let { code, message, data, meta } = obj
        return response.success(code, message, data, meta)
    }

    error(obj) {
        let { code, message } = obj
        return response.error(code, message)
    }
}

module.exports = Controller
