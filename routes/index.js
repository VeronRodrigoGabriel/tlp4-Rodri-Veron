const {Router} = require("express") 
const {rutaDelete,rutaGet,rutaPost,rutaPut} = require("../controllers/index.js")
const routes = Router()


routes.get("/get", rutaGet) 

routes.post("/post", rutaPost) 

routes.put("/put", rutaPut) 

routes.delete("/delete", rutaDelete) 

module.exports = routes;