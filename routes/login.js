var express = require('express');
var router = express.Router();

/* GET login */
router.get('/', function (req, res, next) {
  res.render('login');
});

/* POST login */
router.post('/', function (req, res, next) {
	var loginErrors = [];

	if ( req.body.username && req.body.password ) {

    // DB query callback
    function (error, result) {
        var user = result ? result : false;

        if ( !user ) {
          loginErrors.push('Username not found');
          return res.render('login', {loginErrors: loginErrors});
        }

        if ( user.properties.password === req.body.password ) {
      		req.session.user = user;
      		return res.redirect('/user');
        } else {
          loginErrors.push( 'Wrong password' );
          return res.render('login', {loginErrors: loginErrors});
        };
    }
	}

	if ( !req.body.username ) { loginErrors.push( 'Need a username' ); }
	if ( !req.body.password ) { loginErrors.push( 'Need a password' ); }
  if ( loginErrors.length > 0 ) {
    return res.render('login', {loginErrors: loginErrors});
  }
});

module.exports = router;