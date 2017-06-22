var app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider
  .when('/login', {
    templateUrl: 'partials/login.html'
  })
  .when('/home', {
    templateUrl: 'partials/home.html'
  })
  .when('/calendar', {
    templateUrl: 'partials/calendar.html'
  })
  .otherwise({
    redirectTo: '/login'
  })
})
