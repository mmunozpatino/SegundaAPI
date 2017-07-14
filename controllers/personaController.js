var Persona = require('../models/persona');
var mascotaCtrl = require('../models/mascota');

exports.add = function(req, res){
   var persona = new Persona({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      dni: req.body.dni
   })
   persona.save(function(err){
      if(err){
         console.log('error al guardar a la persona');
         res.status(500, err.message);
      }else{
         res.status(200).jsonp(persona);
      }
   })
}

exports.setPet = function(req, res){
   console.log(mascotaCtrl.add);
}