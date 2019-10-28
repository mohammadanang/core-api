const jwt = require("jsonwebtoken")
const response = require("../responses/index.response")

class Controller {
    constructor(req, res) {
        this.req = req
        this.res = res
    }

    async authUser(jwt_secret) {
        try {
            let token = this.req.header("Authorization")
            if(!token) {
                throw new Error("Token not provided")
            }

            let user = await jwt.verify(token, jwt_secret)

            return user
        } catch(err) {
            throw err
        }
    }

    success(obj) {
        let { code, message, data } = obj
        let result = response.success(code, message, data)

        return this.res.send(result)
    }

    error(obj) {
        let { code, message } = obj
        let result = response.error(code, message)

        return this.res.send(result)
    }
}

module.exports = Controller
