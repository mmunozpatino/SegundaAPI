var Persona = require('../models/persona');
var Mascota = require('../models/mascota');

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
   Persona.findById(req.params.id, function(err, persona){
      if(err){
         console.log('error buscando persona para setear mascota');
      }else{
         let mascota = new Mascota({
            nombre: req.body.nombre,
            raza: req.body.raza,
            especie: req.body.especie
         });
         console.log(mascota);
         mascota.save(function(err){
            if(err){
               console.log('error guardando mascota en persona');
               res.status(500, err.message);
            }else{
               persona.mascota = mascota._id;
               persona.save(function(err){
                  if(err){
                     console.log('error guardando persona con mascota');
                     res.status(500, err.message);
                  }else{
                     res.status(200).jsonp(persona);
                  }
               })
            }
         })
      }
   })
}

exports.getAll = function(req, res){
   Persona.find().populate('mascota').exec(function(err, personas){
      if(err){
         console.log('error al traer las personas');
         res.status(500, err.message);
      }else{
         res.status(200).jsonp(personas);
      }
   })
}

exports.getById = function(req, res){
   Persona.findById(req.params.id).populate('mascota').exec(function(err, persona){
      if(err){
         console.log('error al traer persona');
         res.status(500, err.message);
      }else{
         res.status(200).jsonp(persona);
      }
   })
}