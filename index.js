class API {
    constructor(model) {
        this.model = model
    }

    async list() {
        try {
            let data = await this.model.find({}).exec()

            return data
        } catch(err) {
            throw err
        }
    }

    async show(q) {
        try {
            let data = await this.model.findOne(q).exec()

            return data
        } catch(err) {
            throw err
        }
    }

    async create(input) {
        try {
            let data = new this.model(input)
            await data.save()

            return data
        } catch(err) {
            throw err
        }
    }

    async update(q, input, opts) {
        try {
            let data = await this.model.findOneAndUpdate(
                q, input, opts
            ).exec()

            return data
        } catch(err) {
            throw err
        }
    }

    async delete(q) {
        try {
            let data = await this.model.findOneAndDelete(q).exec()

            return data
        } catch(err) {
            throw err
        }
    }
}

module.exports = API
