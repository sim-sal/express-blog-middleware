const express = require("express");
const fs = require("fs");
const path = require("path");

/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

function index(req, res) {
    res.format({
        text: () => {
            res.type("text").send("Hello World!");
        },
        html: () => {
            // genero errore
            dakjadjf
            let htmlContent = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf-8");
            let headContent = fs.readFileSync(path.resolve(__dirname, "../head.html"), "utf-8");
            const sottitolo = "Lasciate ogni speranza o voi che entrate..."

            htmlContent = htmlContent.replace("{{ sottotitolo }}", sottitolo);
            htmlContent = htmlContent.replace("@head", headContent);

            res.type("html").send(htmlContent);
        },
        json: () => {
            // genero errore
            dfasg
            res.type("json").send({
                message: "Hello World!",
            });
        },
        default: () => {
            res.status(406).send("Not Acceptable");
        },
    })
}


/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
function about(req, res) {
    res.send("<h1>About page</h1>");
}

/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
function contacts(req, res) {
    res.send("<h1>Contacts page</h1>");
}

module.exports = {
    index,
    about,
    contacts
}