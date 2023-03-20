const express = require('express');                                     //trae la funcion desde la libreria
const app = express();                                                  //ejecuta la funcion
const PORT = 3001;                                                      //GET, POST, DELETE, PUT, PATCH - Verbos http
app.get('/api', (req,res)=>{                                            //
    res.json({mensaje:'hola mundo'}).status(200)
});
app.listen(PORT,()=>{console.log('estoy escuchando en el puerto: '+PORT)});