var mongoose=require('mongoose');

var esquemaUsuario= new mongoose.Schema(
    {
        "Nombre":String,
        "direccion":String,
    }
);

module.exports=mongoose.model('Usuarios',esquemaUsuario);