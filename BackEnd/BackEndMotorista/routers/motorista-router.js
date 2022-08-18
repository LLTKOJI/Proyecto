//Artistas Rest APi

var express=require('express');
var router=express.Router();
const moto=require('../models/motorista');
var mongoose = require('mongoose');


//Recibe Peticion
router.get('/',function(req,res){
    res.send("Peticion recibida");
    res.end();
});

//Crear un Artista
router.post('/',function(req,res){
    let m = new moto(
        {
        Nombre:req.body.nombre,
        foto:req.body.foto,
        placaVehicular:req.body.placaVehicular,
        Number:req.body.Number,
        email:req.body.email,
        password:req.body.password
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
    moto.find({_id:req.params.id}).then((data)=>{
        res.send(data);
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    });
});

//Obtener Todos los artistas
router.get('/',function(req,res){
    moto.find().then((data)=>{
        res.send(data[0]);
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    });
});

//Actualizar un Artista
router.put('/:id',function (req,res) {
moto.update({_id:req.params.id},
    {
        Nombre:req.body.nombre,
        foto:req.body.foto,
        direccion:req.body.direccion,
        Number:req.body.Number,
        email:req.body.email,
        password:req.body.password
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
    moto.remove({
        _id: req.params.id
    }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});


module.exports=router;