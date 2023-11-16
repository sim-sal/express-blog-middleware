// index
function index(req, res) {
    res.send("Che ci fai qui?! Bentornato " + req.user.username + " !!!");
}

module.exports = {
    index,
};