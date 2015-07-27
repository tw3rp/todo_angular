var express = require('express');
var mongoose= require('mongoose');
var router = express.Router();
var TODO = require('../models/userlist');
//the schema is located in the models directory which is required here into a variable TODO
router.get('/todos', function(res,req){
	TODO.find(function(err,todos){
		if(err) res.send(err);
		res.send(todos);
	});
});
//the find function returns all the todos to the frontend using the json format
router.post('/todos/create', function(res,req){
	TODO.create({
	todo:"rahul",
	is_it_done:false,
	}, function(err,todos){
	console.log("I am running");
	if(err) res.send("I am wrong");
  	var getTodos= function(){TODO.find(function(err, todos) {
			if (err) res.send(err);
			res.json(todos); 
			});
	}
	console.log("I am running");
	});
});

router.delete('/todo/delete/:todo_id',function(req,res){
		var id = req.param.todo_id;
		TODO.findByIdAndRemove(id,function(err,todo){
			if(err) res.send(err);
			res.redirect('/');

	});
});

router.get('/todos/hello',function(req,res){
		res.send("Hello World");
		});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('../public/index.html');
  //just load the index page rest of the interaction is done using json
});

module.exports = router;
