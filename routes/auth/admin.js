const {
  isAuthenticated
} = require.main.require('./utils/utilities');

module.exports = function (app) {
  app.get('/test/admin', isAuthenticated, (req, res) => {
    res.json({
      msg: `Welcome ${req.user.Name}`
    });
  });
}
