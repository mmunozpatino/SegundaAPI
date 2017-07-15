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
   Persona.find().populate('mascota amigos').exec(function(err, personas){
      if(err){
         console.log('error al traer las personas');
         res.status(500, err.message);
      }else{
         res.status(200).jsonp(personas);
      }
   })
}

exports.getById = function(req, res){
   Persona.findById(req.params.id).populate('mascota amigos').exec(function(err, persona){
      if(err){
         console.log('error al traer persona', err);
         res.status(500, err.message);
      }else{
         res.status(200).jsonp(persona);
      }
   })
}

exports.update = function(req, res){
   Persona.findById(req.params.id, function(err, persona){
      if(err){
         console.log('error al actualizar persona');
         res.status(500, err.message);
      }else{
         persona.nombre = req.body.nombre;
         persona.apellido = req.body.apellido;
         persona.dni = req.body.dni;
         persona.save(function(err){
            if(err){
               console.log('error guardando persona actualizada', err);
               res.status(500, err.message);
            }else{
               //res.status(200).jsonp(persona);
            }
         })
      }
   }).populate('mascota').exec(function(err, persona){
      if(err){
         console.log('ERROR')
      }else{
         res.status(200).jsonp(persona);
      }
   })
}

exports.addFriend = function(req, res){
   Persona.findById(req.body.id, function(err, persona){
      if(err){
         console.log('ERROR');
         res.send({message: err});
      }else{
         persona.amigos.push(req.body.idf);
         persona.save(function(err){
            if(err){
               res.send({message: err});
            }else{
               res.status(200).jsonp(persona);
            }
         })
      }
   })
}

exports.delete = function(req, res){
   Persona.findById(req.body.id, function(err, persona){
      if(err){
         console.log(err);
      }else{
         if( persona.mascota != null){
            Mascota.findById(persona.mascota, function(err, mascota){
               mascota.remove(function(err){
                  if(err){
                     console.log(err);
                  }
               })
            });
         }
         persona.remove(function(err){
            if(err){
               console.log(err);
            }else{
               res.status(200).jsonp({message: 'persona borrada'});
            }
         })
      }
   })
}