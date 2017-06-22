app.factory('commentFactory', function($http, $route){
  var factory = {}
  factory.addComment = function(comment){
    $http.post('/addcomment', comment).then(function(data){
      $route.reload()
    })
  }
  factory.getComments = function (cb){
    $http.get('/getcomments').then(function(data){
      cb(data.data)
    })
  }
  return factory
})
