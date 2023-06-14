//Se importa el módulo Router de Express.js 
const {Router} = require("express") 
//se importan los controladores de las rutas desde el archivo index.js de la carpeta controllers

const {rutaDelete,rutaGet,rutaPost,rutaPut} = require("../controllers/index.js")
const routes = Router()

//Se definen las rutas 
routes.get("/get", rutaGet) 

routes.post("/post", rutaPost) 

routes.put("/put", rutaPut) 

routes.delete("/delete", rutaDelete) 

module.exports = routes;