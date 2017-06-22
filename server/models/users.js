var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {type: String, required: true, minlength: 2},
})

mongoose.model('User', userSchema)
