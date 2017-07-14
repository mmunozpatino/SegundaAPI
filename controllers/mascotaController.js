var Mascota = require('../models/mascota');

exports.add = function(req, res){
   var mascota = new Mascota({
      nombre: req.body.nombre,
      raza: req.body.raza,
      especie: req.body.especie
   })
   mascota.save(function(err){
      if(err){
         console.log('error guardando nueva mascota');
         res.status(500, err.message);
      }else{
         res.status(200).jsonp(mascota);
      }
   })
}

exports.getAll = function(req, res){
   Mascota.find(function(err, mascotas){
      if(err){
         console.log('error buscando todas las mascotas');
         res.status(500, err.message);
      }else{
         res.status(200).jsonp(mascotas);
      }
   })
}

exports.editPet = function(req, res){
   Mascota.findById(req.params.id, function(err, mascota){
      if(err){
         console.log('erro buscando la mascota');
         res.status(500, err.message);
      }else{
         mascota.nombre = req.body.nombre;
         mascota.raza = req.body.raza;
         mascota.especie = req.body.especie;
         mascota.save(function(err){
            if(err){
               console.log('error actualizando mascota');
               res.status(500, err.message);
            }else{
               res.status(200).jsonp(mascota);
            }
         })
      }
   })
}

exports.deletePet = function(req, res){
   Mascota.findById(req.params.id, function(err, mascota){
      mascota.remove(function(err){
         if(err){
            console.log('error borrando la mascota');
            res.status(500, err.message);
         }else{
            res.status(200).jsonp({message: 'mascota borrada!'});
         }
      })
   })
}