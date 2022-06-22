const router = require("express").Router();
const ClientController = require("../controllers/ClientController");

router
  .get("/getClients", ClientController.getClients)
  .get("/totalClients", ClientController.getTotalClient)
  .get("/clientById/:id", ClientController.getClientById)
  .get("/clientByName/:name", ClientController.getClientByName)
  .post("/", ClientController.saveClient)
  .delete("/:id", ClientController.deleteClientById);

module.exports = router;
