class API {
  constructor(model, model2) {
      this.model = model
      this.model2 = model2
  }

  async list(q, request_path) {
      try {
          let params = {}

          let populate_params = []

          if(request_path == []){
              populate_params = []
          }else{
              populate_params = {path: request_path, model: this.model2}
          }

          if(q) {
              params = q
          }

          let data = await this.model.find(params).populate(
              populate_params    
          ).exec()

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

  async softDelete(q) {
    try {
      let data = await this.model
        .findOneAndUpdate(q, {
          deleted_at: Date.now
        })
        .exec();

      return data;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = API;
