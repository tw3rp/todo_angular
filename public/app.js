//require('angular');
//require('bootstrap');

var app = angular.module('todo',[]);
/*app.controller('mainController', ['$scope','$http', function($scope, $http){
		$http.get('/todos')
			.success(function(data) {
				$scope.todos = data;
				$scope.loading = false;
			});
	$scope.formData={};
	$http.get('/todos').success(function(data){
		$scope.todos = data;
		console.log(data);
	})
	.error(function(data){
		console.log("error: "+data);
	});
	$scope.createTodo= function(){
			console.log("OMGGGGG");
			$http.post('/todos/create',$scope.formData).success(function(data){
			$scope.formData = {};
			$scope.todos= data;
			console.log(data);
		})
		.error(function(data){
		console.log("error: "+ data);
		});
};
	$scope.deleteTodo = function(id){
		$http.delete('/todos/delete/'+ id).success(function(data){
			$scope.todos =data;
			console.log(data);
		})
		.error(function(data){
		console.log("error: "+ data);
		});
	};
}]);
*/

app.controller('mainController', ['$scope','$http', function($scope,$http) {
	
	$scope.createTodo = function(){
			$http.post('/todos/create').success(function(data){
		//	$scope.formData = {};
		})
		.error(function(data){
		console.log("error: ");
		});
}

}]);






