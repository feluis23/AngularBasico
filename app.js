var app = angular.module('myApp',[]);

app.controller('myController', function($scope){
	$scope.total = 0;
	$scope.changeSi = function (){
		console.log('si:' + $scope.voto);
		$scope.total++;
	};
	$scope.changeNo = function (){
		console.log('No:' + $scope.voto);
		$scope.total--;
	};
});