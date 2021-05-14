const db = require.main.require('./utils/database');

module.exports = function (app) {
  app.get('/categories', (req, res) => {
    db.all('select * from categories', [], (err, rows) => {
      if (err) {
        res.status(400).json({
          error: err.message,
        });
        return;
      }
      res.json({
        ok: true,
        categories: rows,
      });
    });
  });
};
