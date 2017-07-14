var express = require('express'),
   bodyParser = require('body-parser'),
   mongoose = require('mongoose'),
   methodOverride = require('method-override'),
   app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

app.get('/',function(req, res){
   res.send('Personas que tienen amigos y mascotas!');
});

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