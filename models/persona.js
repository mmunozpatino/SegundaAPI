var mongoose = require('mongoose');
var schema = mongoose.Schema;

var personaSchema = new schema({
   nombre : { type:String, required: true},
   apellido: { type:String, required: true},
   dni : Number,
   mascota : schema.Types.ObjectId,
   amigos : [schema.Types.ObjectId]
})

module.exports = mongoose.model('persona', personaSchema);