
function rutaGet (req, res) {
    res.status(200).send("Ruta get")
}

function rutaPost (req, res) {
    res.status(200).send("Ruta post")
}

function rutaPut (req, res) {
    res.status(200).send("Ruta put")
}

function rutaDelete (req, res) {
    res.status(200).send("ruta delete")
}

module.exports= {
    rutaGet,
    rutaPost,
    rutaPut,
    rutaDelete
}