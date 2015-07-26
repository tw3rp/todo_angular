var express = require('express');
var router = express.Router();
var TODO = require('../models/userlist');
//the schema is located in the models directory which is required here into a variable TODO
router.get('/todos', function(res,req){
	TODO.find({}, function(err,todos){
		if(err) res.send(err);
		res.json(todos);
	});
});
//the find function returns all the todos to the frontend using the json format
router.post('/todos/create', function(res,req){
	TODO.create({
	todo: req.body.todo,
	done:false
	}, function(err,todos){
	console.log(req.body.text);
	if(err) res.send(err);
	res.redirect('/');
	});
});

router.delete('/todo/delete/:todo_id',function(req,res){
		var id = req.param.todo_id;
		TODO.findByIdAndRemove(id,function(err,todo){
			if(err) res.send(err);
			res.redirect('/');

	});
});




/* GET home page. */
router.get('*', function(req, res, next) {
  res.sendfile('../public/index.html');
  //just load the index page rest of the interaction is done using json
});

module.exports = router;
