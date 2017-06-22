app.factory('sessionFactory', function($http, $location){
  var factory = {};
  factory.login = function(user){
    $http.post('/login', user).then(function(data){
      if(data.status){
        $location.url('/home')
      }
    })
  }
  return factory;
})
