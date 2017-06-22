app.controller('commentController', function($scope, commentFactory){
  $scope.addComment = function(){
    commentFactory.addComment($scope.newComment)
  }
  commentFactory.getComments(function(data){
    $scope.comments = data
  })
})
