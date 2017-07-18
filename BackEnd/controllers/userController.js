var User = require('../models/user');
var Persona = require('../models/persona');

exports.createUser = function(req, res){
   var pers = new Persona({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      dni: req.body.dni
   })
   pers.save(function(err){
      if(err){
         res.status(500, err);
      }
   })
   var user = new User({
      username: req.body.username,
      password : req.body.password,
      persona : pers._id
   });
   user.save(function(err){
      if(err){
         res.status(500).jsonp({message: 'error'});
      }else{
         res.status(200).jsonp(user);
      }
   })
}

exports.deleteUser = function(req, res){
   User.findById(req.body.id, function(err, user){
      Persona.findById(user.persona, function(err, persona){
         persona.remove(function(err){
            if(err){
               console.log('error borrando persona');
            }
         })
      });
      user.remove(function(err){
         if(err){
            console.log('error borrando user');
            res.status(500).jsonp({message: 'error'});
         }else{
            res.status(200).jsonp({message:'borrado!'});
         }
      })
   })
}

exports.updateUser = function(req, res){
   User.findById(req.body.id, function(err, user){
      user.username = req.body.username;
      user.password = req.body.password;
      user.save(function(err){
         if(err){
            console.log('error actualizando user');
            res.status(500).jsonp({message: 'error'});
         }else{
            res.status(200).jsonp(user);
         }
      })
   })
}

exports.getByName = function(req, res){
   User.findOne({username: req.params.username}, function(err, user){
      if(err){
         console.log('error buscando por nombre de usuario');
         res.status(500).jsonp({message: 'error'});
      }
   }).populate('persona').exec(function(err, user){
      if(err){
         res.status(500).jsonp({message: 'error'});
      }else{
         res.status(200).jsonp(user);
      }
   });;
}

exports.getAll = function(req, res){
   User.find().populate('persona').exec(function(err, user){
      if(err){
         console.log('error en el populate de user');
         res.status(500).jsonp({message: 'error'});
      }else{
         res.status(200).jsonp(user);
      }
   })
}

exports.getById = function(req, res){
   User.findById(req.params.id, function(err, user){
      if(err){
         res.status(500).jsonp({message:'error'});
      }
   }).populate('persona').exec(function(err, user){
      if(err){
         res.status(500).jsonp({message: 'error'});
      }else{
         res.status(200).jsonp(user);
      }
   });
}