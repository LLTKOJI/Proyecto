var mongoose=require('mongoose');

var esquemamotorista= new mongoose.Schema(
    {
        "Nombre":String,
        "foto":String,
        "placaVehicular":String,
        "Number":String,
    }
);

module.exports=mongoose.model('Motorista',esquemamotorista);