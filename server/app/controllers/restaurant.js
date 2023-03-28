class Restaurant {
  async getList(req, res) {
    res.send({ name: "amir maghami" })
  }
  async getOne(req, res) {
    res.send({ name: "amir maghami" })
  }
  async create(req, res) {
    res.send({ name: "amir maghami" })
  }
  async update(req, res) {
    res.send({ name: "amir maghami" })
  }
  async delete(req, res) {
    res.send({ name: "amir maghami" })
  }
}

module.exports = new Restaurant