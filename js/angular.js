function Ctrl(dati){
	var app = angular.module("myApp", []);
	app.controller("myCtrl", function($scope) {
		$scope.dati = dati;//JSON.parse(json);
		//alert(dati);
		$scope.go = function(link,taskId){
				window.location.href =link+taskId;
			};
	});
}