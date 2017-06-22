var session = require('./../controllers/session.js')
var comment = require('./../controllers/commentcontroller.js')

module.exports = function(app){
  app.post('/login', function(req, res){
    session.login(req, res);
  })
  app.post('/addcomment', function(req, res){
    comment.addComment(req, res);
  })
  app.get('/getcomments', function(req, res){
    comment.getComments(req, res)
  })
}
