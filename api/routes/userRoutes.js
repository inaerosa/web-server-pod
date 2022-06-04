const router = require("express").Router()
const ClientController = require("../controllers/ClientController")
router
     .get("/", ClientController.getClients)
     .get("/new", ClientController.formNewClient)
     .post('/save', ClientController.saveClient)
     .get("/totalClients", ClientController.getTotalClient)
     .post("/", ClientController.saveClient)
     .get("/searchClientById", ClientController.formSearchCode)
     .post("/byCodeBody", ClientController.getClientById)
     .get("/searchClientByName", ClientController.formSearchName)
     .post("/byNameBody", ClientController.getClientByName)
     .get("/formDelete", ClientController.formDeleteClient)
     .delete("/delete", ClientController.deleteClientById)

module.exports = router
