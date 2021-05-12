const db = require.main.require('./utils/database');

module.exports = function (app) {
  app.get('/users', (req, res) => {
    db.all('select * from users', [], (err, rows) => {
      if (err) {
        res.status(400).json({
          error: err.message,
        });
        return;
      }
      let users = [];
      rows.forEach(row => {
        users.push({
          id: row.Id,
          username: row.Username,
          name: row.Name,
          email: row.Email
        })
      });
      res.json({
        ok: true,
        users,
      });
    });
  });
};
