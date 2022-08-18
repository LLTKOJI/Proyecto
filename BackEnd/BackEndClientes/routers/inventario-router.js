//Artistas Rest APi

var express=require('express');
var router=express.Router();
const invent=require('../models/Inventario');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true})); 



//Crear uno
router.post('/',function(req,res){
    let i = new invent(
        {
        _id: new ObjectID(),
        id:req.body.id,
        nombre:req.body.nombre,
        imagen:req.body.imagen,
        precio:req.body.precio,
        cantidad:req.body.cantidad
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
    invent.findById({_id: mongoose.Types.ObjectId(req.params.id)}).then((data)=>{
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
        res.send(data);
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    });
});

//Actualizar uno
router.put('/:id',function (req,res) {
    invent.findByIdAndUpdate({_id: mongoose.Types.ObjectId(req.params.id)},
    {
        id:req.body.id,
        nombre:req.body.nombre,
        imagen:req.body.imagen,
        precio:req.body.precio,
        cantidad:req.body.cantidad
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
    invent.findByIdAndDelete({_id: mongoose.Types.ObjectId(req.params.id)}).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});


module.exports=router;