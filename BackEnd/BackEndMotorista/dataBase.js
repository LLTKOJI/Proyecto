var mongoose=require("mongoose");
var Servidor ="localhost:27017";
var nombreBaseDatos="Express-Logistics";
class dataBase{

    constructor(){
        this.conectar();
    }
    conectar(){
        mongoose.connect(`mongodb://${Servidor}/${nombreBaseDatos}`)
        .then(()=>{
            console.log("Se conecto a la Base de Datos");
        })
        .catch(error=>{
            console.error(JSON.stringify(error));
        });
    }
}
module.exports=new dataBase();