// IMPORTAZIONI
// express
const express = require('express');
//dotenv
const dotenv = require('dotenv').config();
// controllers
const homeController = require("./controllers/home");
// router
const postsRouter = require("./routers/posts");

// middleware
const errorsFormatterMiddleware = require("./middlewares/errorsFormatter");
const routesLoggerMiddleware = require('./middlewares/routesLogger');

// creiamo l'istanza di express
const app = express();
// configuro express per la lettura dei dati JSON
app.use(express.json());
// configuro express per la lettura dei dati x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// configuro i file statici
app.use(express.static("public"));

// routesLogger -> Middleware che stampa un log sulle rotte richieste dagli utenti
app.use(routesLoggerMiddleware);

// usiamo la nostra istanza per definire le rotte
app.get("/", homeController.index);
app.get("/about", homeController.about);
app.get("/contacts", homeController.contacts);

app.use("/posts", postsRouter);

// gestione degli errori
app.use(errorsFormatterMiddleware);

// avviamo il nostro server mettendolo in ascolto
app.listen(process.env.PORT || 3001, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
})