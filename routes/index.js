var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('../public/index.html');
  //just load the index page rest of the interaction is done using json
});

module.exports = router;
