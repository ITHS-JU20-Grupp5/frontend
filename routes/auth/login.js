const passport = require('passport');

module.exports = function (app) {
  app.post('/login', passport.authenticate('local', {
    failureRedirect: '/login'
  }), function (req, res) {
    res.json({
      ok: true,
      user: req.user
    })
  });
}
