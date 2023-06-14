
//Funciones de las rutas que devuelven un .json

function rutaGet (req, res) {
    res.json("Ruta get")
}

function rutaPost (req, res) {
    res.json("Ruta post")
}

function rutaPut (req, res) {
    res.json("Ruta put")
}

function rutaDelete (req, res) {
    res.json("ruta delete")
}

//Exportamos las funciones 
module.exports= {
    rutaGet,
    rutaPost,
    rutaPut,
    rutaDelete
}