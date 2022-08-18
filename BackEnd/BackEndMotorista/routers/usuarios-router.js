//usuarios Rest APi

var express=require('express');
var router=express.Router();
var user=require('../models/usuario');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true})); 

//Crear un usuario
router.post('/',function(req,res){
    let u = new user(
        {
            Nombre:req.body.nombre,
            foto:req.body.foto,
            direccion:req.body.direccion,
            Number:req.body.Number,
            email:req.body.email,
            password:req.body.password
        }
            );
    u.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

// Obtener un usuario
router.get('/:id',function(req,res){
    user.find({Object_id:req.params.id}).then((data)=>{
        res.send(data);
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    });
});

//Obtener Todos los usuarios
router.get('/',function(req,res){
    user.find().then((data)=>{
        res.send(data);
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    });
});

//Actualizar un usuario
router.put('/:id',function (req,res) {
user.updateOne({_id:req.params.id},
    {
        Nombre:req.body.Nombre,
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

//Eliminar un usuario
router.delete('/:id', function (req, res) {
    user.deleteOne({Object_id: req.params.id}).then(removeResult=>{
        res.send(removeResult);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});


module.exports=router;