const router = require("express").Router()
const ClientController = require("../controllers/ClientController")
router
     .get("/", ClientController.getClients)
    // .get("/totalClients", ClientController.getTotalClient)

    .post("/", ClientController.saveClient)
    // .get("/:id", ClientController.getClientById)
    // .put("/", UserController.updateUser)
    .delete("/:id", ClientController.deleteClientById)

module.exports = router
