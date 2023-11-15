// importo express
const express = require("express");
// creo l'istanza
const router = express.Router();
// importo il controller
const adminController = require("../controllers/adminController");

// creo la rotta
router.get("/", adminController.index);


// esporto l'istanza
module.exports = router;