## API INTI

API core for Node.js using express framework and mongodb NoSQL database.

#### Using for:

- Nodejs
- Expressjs
- MongoDB
- Mongoose

#### List of Api parent class:

- this.list(q, population)
- this.show(q)
- this.create(input)
- this.update(q, input, opts)
- this.delete(q)
- this.softDelete(q)
- this.paginate(q, population, opts)

#### List of Controller parent class:

- this.success({code, msg, data})
- this.error({code, msg})

### How to use:

Import as parent class or function. For example:

- actions file

```javascript
const { Api } = require("api-inti")
const TestModel = require("models/test.model.js")

class Test extends Api {
    constructor() {
        super(TestModel)
    }

    async exec(params, populate) {
        try {
            return await this.list(params, populate)
        } catch(err) {
            throw err
        }
    }
}

module.exports = new Test()

```

- controllers file

```javascript
const { Controller } = require("api-inti")
const TestAction = require("actions/test.action.js")

class TestController extends Controller {
    constructor() {
        super()
    }

    async index(req, res) {
        try {
            let params = {}
            let data = await TestAction.exec(params)

            return res.send(
                this.success({
                    message: "Get test list",
                    data
                })
            )
        } catch(err) {
            return res.send(
                this.error({
                    error: err.message
                })
            )
        }
    }

    ...
}

module.exports = new TestController()

```
