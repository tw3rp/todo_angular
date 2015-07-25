var express= require('express');
var index=require('../routes/index.js');
var router={
		setupRoutes: function(app)
	{
	app.use('/',index);
}
};
module.exports= router;
