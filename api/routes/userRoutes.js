const router = require("express").Router();
const ClientController = require("../controllers/ClientController");

router
  .get("/totalClients", ClientController.getClients)
  .get("/clientById/:id", ClientController.getClientById)
  .get("/clientByName/:name", ClientController.getClientByName)
  .post("/", ClientController.saveClient)
  .delete("/delete", ClientController.deleteClientById);

module.exports = router;
