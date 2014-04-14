var app = angular.module("app", [
    "ui.router", "ui.bootstrap"])
.config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state("home",{
      url: "/",
      templateUrl: "/home.html"
    })
    .state("career",{
      controller: 'CareerController',
      url: "/career",
      templateUrl: "/templates/career.html"
    })
    .state("projects",{
      url: "/projects",
      templateUrl: "/templates/projects.html"
    })
    .state("blog",{
      controller: "ParseCtrl",
      url: "/blog",
      templateUrl: "/templates/blog.html"
    })
    .state("contact",{
      url: "/contact",
      templateUrl: "/templates/contact.html"
    })


}]);

