const express = require("express")
const { default: mongoose } = require("mongoose")
const app = express()
const cors = require("cors");
const routes = require("./routes")
const config = require('config');
const morgon = require('morgan')
const debug = require('debug')
class App {
  constructor() {
    this.setupDatabase()
    this.setupMiddlewares();
    this.setupRoutes()
    this.setupServer()
    this.debugDB = debug('app:DB')
    this.debugConfing = debug('app:Confing')
  }
  setupRoutes() {
    app.use("/api", routes)
  }
  setupMiddlewares() {
    this.debugConfing('middlewarw')
    app.use(express.json())
    app.use(cors());
    if(app.get("env") === "development")
      app.use(morgon('tiny'))
    app.use(function (err, req, res, next) {
      if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res
          .status(500)
          .send({
            code: 500,
            message: "JSON parse error",
            success: false,
          })
      }
      next(err)
    });
  }
  async setupDatabase() {
    mongoose.set('strictQuery', false);
    try {
      await mongoose.connect(config.get("dbAddress"),
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
      this.debugDB('DB is connected')
    } catch (error) {
      console.log(error);
    }
  }
  setupServer() {
    app.listen(config.get("serverPort"), () => {
      console.log("Server is running on port: " + config.get("serverPort"));
    });
  }
}
module.exports = App