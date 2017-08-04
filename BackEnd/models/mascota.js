var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var especies = require('./especies');

var mascotaSchema = new Schema({
   nombre : {type: String, required: true},
   raza: String,
   especie: {type: String, enum: especies.especies}
})

module.exports = mongoose.model('mascota', mascotaSchema);