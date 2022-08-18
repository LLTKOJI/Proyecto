var express=require('express');
var dataBase= require("./dataBase");
var usuarioRouter= require('./routers/usuarios-router')
var inventarioRouter= require('./routers/inventario-router')
var app=express();

app.use('/inventario',inventarioRouter);
app.use('/usuarios',usuarioRouter);

app.listen(5500,function(){
    console.log("Servidor levantado");
});