// IMPORTAZIONI
// modulo fs
const fs = require("fs");
// array del db
const listaPosts = require("./db/db");
// importo funzione kebabCase di lodash
const { kebabCase } = require("lodash");

// inizializzo variabile id
let id = 0;

// genero lo slug(nel db è già presente)
// const generateSlug = (text) => {
//     const slug = kebabCase(text);

//     return slug;
// }

const nuovaLista = listaPosts.map(post => ({
    id: id++,
    ...post,
    // slug: generateSlug(post.title),
    updatedAt: new Date().toDateString()
}));

// Creo un nuovo array per mantenere la struttura originale
const nuovoModulo = [
    ...nuovaLista,
];

fs.writeFileSync("./db/db.js", "const posts = " + JSON.stringify(nuovoModulo, null, 2) + "; module.exports = posts;");