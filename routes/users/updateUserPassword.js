const db = require.main.require('./utils/database');
const {
  isAuthenticated
} = require.main.require('./utils/utilities')

module.exports = function (app) {
  app.patch('/users', isAuthenticated, (req, res) => {
    db.run(
      'update users set password = ? where Id = ?',
      [req.body.password, req.user.Id],
      function (err) {
        if (err) {
          res.status(400).json({
            error: err.message,
          });
          return;
        }
        res.json({
          ok: this.changes > 0,
        });
      }
    );
  });
};
