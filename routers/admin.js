// importo express
const express = require("express");
// creo l'istanza
const router = express.Router();
// importo il controller
const adminController = require("../controllers/adminController");
const authenticateMiddleware = require("../middlewares/authenticate");

// importo middleware per l'autenticazione
router.use(authenticateMiddleware);

// creo la rotta
router.get("/", adminController.index);


// esporto l'istanza
module.exports = router;