var express = require('express');
var router = express.Router();

/* GET logout */
router.get('/', function (req, res, next) {
  req.session.reset();
  res.redirect('/');
});

module.exports = router;