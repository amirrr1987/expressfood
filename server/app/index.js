const express = require("express")
const app = express()
const api = require("./routes")
const port = 5000
class App {
  constructor() { 
    this.setupServer()
    this.setupRoutes()
  }
  setupRoutes() { 
    app.use("/api", api)
  }
  setupMiddlewares() {
    
  }
  setupDatabase() { }
  setupServer() { 
    app.listen(port, ()=>{
      console.log('app run on port: ',port);
    })
  }
}
module.exports = App