// importo express
const express = require("express");

// importo multer
const multer = require("multer");

// creo l'istanza
const router = express.Router();

// importo il controller
const postsController = require("../controllers/postsController");



// CREO LE ROTTE

// index
router.get("/", postsController.index);

// show
router.get("/:id", postsController.show);

// create
router.post("/create", postsController.create);

// store
router.post("/", multer().none(), postsController.store);

// download immagine
// router.get("/:id/download", postsController.show);
router.get("/:slug/download", postsController.downloadImg);




// esporto l'istanza
module.exports = router;