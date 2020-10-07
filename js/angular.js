function Ctrl(dati){
	var app = angular.module("myApp", []);
	app.controller("myCtrl", function($scope) {
		$scope.data = obj.dati;//JSON.parse(json);
	});
}