var express= require('express');
var index=require('../routes/index.js');
//The router is modular so any more routes you might want to add you can do it right here and that route is added 
var router={
		setupRoutes: function(app)
	{
	app.all('*',index);
}
};
module.exports= router;
