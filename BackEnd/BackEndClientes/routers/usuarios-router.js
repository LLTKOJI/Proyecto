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
    const u = new user(
        {
            _id: new ObjectID(),
            Nombre:req.body.Nombre,
            foto:req.body.foto,
            direccion:req.body.direccion,
            Number:req.body.Number,
            email:req.body.email,
            password:req.body.password
        });
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
    user.findById({_id: mongoose.Types.ObjectId(req.params.id)}).then((data)=>{
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
user.findByIdAndUpdate({_id: mongoose.Types.ObjectId(req.params.id)},
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
    user.findByIdAndDelete({_id: mongoose.Types.ObjectId(req.params.id)}).then(removeResult=>{
        res.send(removeResult);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});


module.exports=router;