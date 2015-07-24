var mongoose = require('mongoose')
var Schema= mongoose.Schema;
todoSchema=Schema ({
	todo:{type:String, required:true}
});
var Todo = mongoose.model('Todo', todoSchema);

module.exports= Todo;
