module.exports.isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
}

module.exports.isNotAuthenticated = function (req, res, next) {
  if (!req.isAuthenticated()) return next();
  res.redirect('/');
}
