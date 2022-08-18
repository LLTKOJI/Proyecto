//Artistas Rest APi

var express=require('express');
var router=express.Router();
const moto=require('../models/motoristaC');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true})); 


//Crear un Artista
router.post('/',function(req,res){
    let m = new moto(
        {
        _id: new ObjectID(),
        Nombre:req.body.nombre,
        foto:req.body.foto,
        placaVehicular:req.body.placaVehicular,
        Number:req.body.Number,
        }
            );
    m.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

// Obtener un Artista
router.get('/:id',function(req,res){
    moto.findById({_id: mongoose.Types.ObjectId(req.params.id)}).then((data)=>{
        res.send(data);
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    });
});

//Obtener Todos los artistas
router.get('/',function(req,res){
    moto.findById().then((data)=>{
        res.send(data);
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    });
});

//Actualizar un Artista
router.put('/:id',function (req,res) {
moto.findByIdAndUpdate({_id: mongoose.Types.ObjectId(req.params.id)},
    {
        Nombre:req.body.nombre,
        foto:req.body.foto,
        placaVehicular:req.body.placaVehicular,
        Number:req.body.Number,
    }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

//Eliminar un artista
router.delete('/:id', function (req, res) {
    moto.findByIdAndDelete({_id: mongoose.Types.ObjectId(req.params.id)}).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});


module.exports=router;