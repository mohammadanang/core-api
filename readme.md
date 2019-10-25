## API INTI

API core for Node.js using express framework and mongodb NoSQL database.

#### Using for:

- Nodejs
- Expressjs
- MongoDB
- Mongoose

### How to use:

Import as parent class or function. For example:

```javascript
const APIBase = require("api-inti")
const TestModel = require("models/test.model.js")

class Test extends APIBase {
    constructor() {
        super(TestModel)
    }
}

...
```
