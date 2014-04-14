angular.module("app").controller('CareerController', ['$scope', '$modal', '$log',  function($scope, $modal, $log){
 
  $scope.title = "hej";


  $scope.open = function(urlString){
  	var modalInstance = $modal.open({
  		templateUrl: urlString,
  		
  	});
  };
}]);
