var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  comment: {type: String, required: true},
}, {timestamps: true})

mongoose.model('Comment', commentSchema)
