module.exports = function (req, res, next) {

    // res.status(404).send("<h1>404 Not Found! VOLIVI!</h1>")

    res.format({
        json: () => {
            res.status(404).json({
                message: "TU NON PUOI PASSARE!",
            });
        },
        default: () => {
            res.status(404).send("<h1>FUGGITE SCIOCCHI!</h1>");
        }
    })
}