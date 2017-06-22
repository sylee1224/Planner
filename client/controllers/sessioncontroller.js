app.controller('sessionController', function($scope, sessionFactory){
  $scope.login = function(){
    sessionFactory.login($scope.newUser);
  }
})
