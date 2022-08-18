var mongoose=require('mongoose');

var esquemaUsuario= new mongoose.Schema(
    {
        "Nombre":String,
        "foto":String,
        "direccion":String,
        "Number":String,
        "email":String,
        "password":String
    }
);

module.exports=mongoose.model('Usuarios',esquemaUsuario);