var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mascotaSchema = new Schema({
   nombre : {type: String, required: true},
   raza: String,
   especie: {type: String, enum: ['gato', 'perro']}
})

module.exports = mongoose.model('mascota', mascotaSchema);