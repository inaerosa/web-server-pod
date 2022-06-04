const router = require("express").Router()
const ClientController = require("../controllers/ClientController")
router
     .get("/", ClientController.getClients)
     .get("/new", ClientController.formNewClient)
     .get("/totalClients", ClientController.getTotalClient)
     .post("/", ClientController.saveClient)
     .get("/searchClientById", ClientController.formSearchCode)
     .post("/byCodeBody", ClientController.getClientById)
     // .get("/byName/:id", ClientController.getClientByName)
     .delete("/:id", ClientController.deleteClientById)

module.exports = router
