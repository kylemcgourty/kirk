var app = angular.module('kirk');

app.config(function($routeProvider, $httpProvider) {
  $routeProvider.when(
    '/', {
      templateUrl: '/Search/searchTemplate.html',
      controller: 'searchCtrl',
      controllerAs: 'search'
    })
  .when('/news', {
    templateUrl: '/News/newsTemplate.html',
    controller: 'newsCtrl',
    controllerAs: 'news'
  })
  .when('/twitter', {
    templateUrl: '/Twitter/twitterTemplate.html',
    controller: 'twitterCtrl',
    controllerAs: 'twitter'
  })

});