//Artistas Rest APi

var express=require('express');
var router=express.Router();
const invent=require('../models/Inventario');
var mongoose = require('mongoose');



//Recibe Peticion
router.get('/',function(req,res){
    res.send("Peticion recibida");
    res.end();
});

//Crear uno
router.post('/',function(req,res){
    let i = new invent(
        {
        Nombre:req.body.nombre,
        foto:req.body.foto,
        direccion:req.body.direccion,
        Number:req.body.Number,
        email:req.body.email,
        password:req.body.password
        }
            );
    i.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

// Obtener uno
router.get('/:id',function(req,res){
    invent.find({_id:req.params.id}).then((data)=>{
        res.send(data);
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    });
});

//Obtener Todos 
router.get('/',function(req,res){
    invent.find().then((data)=>{
        res.send(data[0]);
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    });
});

//Actualizar uno
router.put('/:id',function (req,res) {
invent.update({_id:req.params.id},
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

//Eliminar uno
router.delete('/:id', function (req, res) {
    invent.remove({
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