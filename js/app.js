var app = angular.module("app", [
    "ui.router"
  ])
.config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state("home",{
      url: "/",
      templateUrl: "/home.html"
    })
    .state("career",{
      url: "/career",
      templateUrl: "/templates/career.html"
    })
    .state("projects",{
      url: "/projects",
      templateUrl: "/templates/projects.html"
    })
    .state("blog",{
      controller: "BlogController",
      url: "/blog",
      templateUrl: "/templates/blog.html"
    })
    .state("contact",{
      url: "/contact",
      templateUrl: "/templates/contact.html"
    })

}])

app.controller("BlogController", function($scope){
    $scope.title = parseTumblr();
})