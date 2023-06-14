//Importamos express y las dependencias
const express = require('express');
const app = express();
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet');
//Importamos los enrutamientos del archivo index.js de la carpeta routes
const routes = require("../routes/index.js")
require("dotenv").config();


//Puerto del servidor
const port = process.env.PORT || 6000


//Configuramos los middleware y express.json
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/", routes)


//Mensaje de inicializacion del servidor
app.listen(port, ( ) => {
    console.log(`server escuchando en el puerto ${port}`)
})

