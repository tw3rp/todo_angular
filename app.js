//var express=require('express');
//var ada = express();
//var bootstrap=require('bootstrap');
//var angular=require('angular');
//var app = angular.module('todo', []);
//ada.use('scripts_bootstrap', express.static('/usr/lib/node_modules/bootstrap/dist'));
//console.log(__dirname);
//ada.use('/script_angular', express.static('usr/lib/node_modules/angular'));
(function(){
var app= angular.module('todo', []);
app.controller('StoreController', function(){
  this.todo_items=Todo1;
});
var Todo1=[{
	todo: "Todo",
	is_it_done:true,
	},
	{
	todo: "Second Todo",
	is_it_done:false
	}
];
})();
