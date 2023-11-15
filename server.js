// IMPORTAZIONI
// express
const express = require('express');
//dotenv
const dotenv = require('dotenv').config();

// CONTROLLERS
const homeController = require("./controllers/home");

// ROUTERS
const postsRouter = require("./routers/posts");
const adminRouter = require("./routers/admin");
const authRouter = require("./routers/auth");

// MIDDLEWARES
// error
const errorsFormatterMiddleware = require("./middlewares/errorsFormatter");
// log
const routesLoggerMiddleware = require('./middlewares/routesLogger');
// 404
const routeNotFoundMiddleware = require('./middlewares/routeNotFound');

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

// rotte relative all'entità post
app.use("/posts", postsRouter);

// upload
// ------

// rotte relative all'entità admin
app.use("/admin", adminRouter);

// rotte relative all'entità auth(login)
app.use("/", authRouter);


// gestione degli errori
app.use(errorsFormatterMiddleware);

// middleware 404
app.use(routeNotFoundMiddleware);

// avviamo il nostro server mettendolo in ascolto
app.listen(process.env.PORT || 3001, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
})