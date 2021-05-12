const db = require.main.require('./utils/database');

module.exports = function (app) {
  app.get('/users/:id', (req, res) => {
    db.get('select * from users where Id = ?', req.params.id, (err, row) => {
      if (err) {
        res.status(400).json({
          error: err.message,
        });
        return;
      }
      res.json({
        ok: true,
        user: {
          id: row.Id,
          username: row.Username,
          name: row.Name,
          email: row.Email
        }
      });
    });
  });
};
