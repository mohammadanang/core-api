const response = require("../responses/index.response")

class Controller {
    constructor() {}
    
    static success(obj) {
        let { code, message, data } = obj
        return response.success(code, message, data)
    }

    static error(obj) {
        let { code, message } = obj
        return response.error(code, message)
    }
}

module.exports = Controller
