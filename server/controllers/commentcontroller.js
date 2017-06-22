var mongoose = require('mongoose')
var User = mongoose.model('User')
var Comment = mongoose.model('Comment')

module.exports = (function(){
  return {
    addComment: function(req, res){
      var comment = new Comment(req.body)
      comment.save()
      res.json({status: true})
    },
    getComments: function(req, res){
      Comment.find({}, function(err, data){
        res.send(data)
      })
    }
  }
})()
