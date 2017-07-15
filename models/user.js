var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
   username : {type: String, required: true},
   password : {type: String, required: true},
   persona : {type: Schema.Types.ObjectId, ref:'persona', required: 'true'}
})

module.exports = mongoose.model('user', userSchema);