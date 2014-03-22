angular.module("app", [
    "ui.router"
  ])
.config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state("home",{
      url: "/",
      templateUrl: "templates/home.html"
    })
    .state("career",{
      url: "/career",
      templateUrl: "templates/career.html"
    })
    .state("projects",{
      url: "/prjects",
      templateUrl: "templates/projects.html"
    })
    .state("blog",{
      url: "/blog",
      templateUrl: "templates/blog.html"
    })
    .state("contact",{
      url: "/contact",
      templateUrl: "templates/contact.html"
    })

}])