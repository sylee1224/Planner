var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = (function(){
  return {
    login: function(req, res){
      User.findOne({name: req.body.name}, function(err, data){
        if(!data){
          var user = new User(req.body)
          user.save(function(err){
            res.json({status: true})
          })
        }
        else {
          res.json({status: true})
        }
      })
    },
  }
})()
