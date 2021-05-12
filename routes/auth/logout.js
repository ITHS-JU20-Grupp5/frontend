module.exports = function (app) {
  app.get('/logout', function (req, res) {
    const isLoggedIn = (req.user ? true : false)
    req.logout();
    res.json({
      ok: isLoggedIn
    });
  })
}
