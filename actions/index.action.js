class API {
  constructor(model) {
    this.model = model;
  }

  async list(q) {
    try {
      let params = {};
      if (q) {
        params = q;
      }

      let data = await this.model.find(params).exec();

      return data;
    } catch (err) {
      throw err;
    }
  }

  async show(q) {
    try {
      let data = await this.model.findOne(q).exec();

      return data;
    } catch (err) {
      throw err;
    }
  }

  async create(input) {
    try {
      let data = new this.model(input);
      await data.save();

      return data;
    } catch (err) {
      throw err;
    }
  }

  async update(q, input, opts) {
    try {
      let data = await this.model.findOneAndUpdate(q, input, opts).exec();

      return data;
    } catch (err) {
      throw err;
    }
  }

  async delete(q) {
    try {
      let data = await this.model.findOneAndDelete(q).exec();

      return data;
    } catch (err) {
      throw err;
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
    async paginate(req){
        try {
            let params = {}            
            let limit = parseInt(req.query.limit)
            if(!limit) {
                params.limit = parseInt(process.env.DATA_LIMIT)
            }else {
                params.limit = limit
            }
            let page = parseInt(req.query.page)
            if(!page){
                params.page = parseInt(process.env.DATA_PAGE)
            } else {
                params.page = page
            }

            let data = await this.model.paginate({}, params)
            .then(res => {
                return {
                    data: res.docs,
                    total: res.total,
                    limit: res.limit,
                    page: res.page,
                    pages: res.pages
                }
            })
            let meta = {
                total: data.total,
                limit: data.limit,
                page: data.page,
                pages: data.pages
            }
            data = data.data

            return { data, meta }
        } catch(err) {
            throw err
        }
    }
}

module.exports = API;
