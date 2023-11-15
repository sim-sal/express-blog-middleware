const fs = require("fs");
const path = require("path");

module.exports = function (err, req, res, next) {
    // se req ha un file, allora lo elimino
    if (req.file) {
        fs.unlinkSync(req.file.path);
    }

    res.format({
        json: () => {
            res.status(500).json({
                message: "OPS! NESCI I DOCU!",
                error: err.message,
            });
        },
        default: () => {
            res.status(500).send("<h1>PIJJALU!</h1>");
        }
    })
}