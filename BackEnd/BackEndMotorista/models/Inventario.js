var mongoose=require('mongoose');

var esquemaInventario= new mongoose.Schema(
    {
        "nombre":String,
        "imagen": String,
        "precio": String
    }
);

module.exports=mongoose.model('Inventario',esquemaInventario);