var mongoose=require('mongoose');
var models=require('../models/userlist.js');
//models has the schema for the todolist
var conn= mongoose.connection;
//name of the database in mongoDB is userlist_angular
var uri="http://localhost/userlist_angular";
conn.on('error', console.error.bind(console,"mongoose connection error"));

//pass a log saying you're connected
conn.once('open', function(){
	console.log("connected to "+ uri +" database");
});

module.exports= conn;


