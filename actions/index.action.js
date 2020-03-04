class API {
  constructor(model) {
      this.model = model
  }

  async list(q, population) {
      try {
          let params = {}
          let populate_params = []

          if(q) {
              params = q
          }
        
          if(population) {
              populate_params = population
          }

          let data = await this.model
            .find(params)
            .populate(populate_params)
            .lean()
            .exec()

          return data
      } catch(err) {
          throw err
      }
  }

  async show(q, population) {
      let params = {}
      let populate_params = []

      if(q) {
          params = q
      }

      if(population) {
          populate_params = population
      }

      try {
          let data = await this.model
            .findOne(params)
            .populate(populate_params)
            .lean()
            .exec()

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

  async delete(q, opts) {
      try {
          let data = await this.model.findOneAndDelete(
            q, opts
          ).exec()

          return data
      } catch(err) {
          throw err
      }
  }

  async softDelete(q, opts) {
    try {
      let params = {
        deleted_at: Date.now
      }

      let data = await this.model.findOneAndUpdate(
        q, params, opts
      ).exec();

      return data;
    } catch (err) {
      throw err;
    }
  }

  async paginate(q, population, opts) {
    try {
        let params = {},
            populate = [],
            options = {}
        
        if(q) {
            params = q
        }
        
        if(population) {
            populate = population
        }
      
        if(opts) {
            options = {
                populate,
                ...opts
            }
        }
        
        let data = await this.model.paginate(
            params,
            options
        )
        
        let meta = {
            total: data.total,
            limit: data.limit,
            page: data.page,
            pages: data.pages
        }
        data = data.docs

        return { data, meta }
      } catch(err) {
          throw err
      }
  }
}

module.exports = API;
