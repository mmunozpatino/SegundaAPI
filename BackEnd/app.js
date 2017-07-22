var express = require('express'),
   bodyParser = require('body-parser'),
   mongoose = require('mongoose'),
   methodOverride = require('method-override'),
   cors = require('cors')
   app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

//habilito CORS
app.use(cors());

app.get('/',function(req, res){
   res.send('Personas que tienen amigos y mascotas!');
});

//API REST
var mascotaCtrl = require('./controllers/mascotaController');

app.route('/mascota')
   .get(mascotaCtrl.getAll)
   .post(mascotaCtrl.add);

app.route('/mascota/:id')
   .get(mascotaCtrl.getById)
   .delete(mascotaCtrl.deletePet)
   .put(mascotaCtrl.editPet);

var personaCtrl = require ('./controllers/personaController.js');

app.route('/persona')
   .get(personaCtrl.getAll)
   .post(personaCtrl.add)
   .put(personaCtrl.addFriend)
   .delete(personaCtrl.delete);

app.route('/persona/:id')
   .get(personaCtrl.getById)
   .put(personaCtrl.update)
   .post(personaCtrl.setPet);

var userCtrl = require('./controllers/userController');

app.route('/user')
   .get(userCtrl.getAll)
   .put(userCtrl.updateUser)
   .delete(userCtrl.deleteUser)
   .post(userCtrl.createUser);

app.route('/user/:username')
   .get(userCtrl.getByName);

app.route('/userPerson/:idp')
   .get(userCtrl.getByPersonId);
//conexion a MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/redsocial', { useMongoClient : true }, function(err){
   if(err){
      console.log('problema al conectar a MongoDB');
   }else{
      console.log('Conecto a MongoDB!');
   }
})

//iniciar server
app.listen(3000, function(){
   console.log('arranco con éxito el server!');
})