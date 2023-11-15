// importo express
const express = require("express");
// creo l'istanza
const router = express.Router();
// importo il controller
const authController = require("../controllers/authController");

// creo la rotta
router.post("/login", authController.login);


// esporto l'istanza
module.exports = router;