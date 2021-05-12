const db = require.main.require('./utils/database');

module.exports = function (app) {
  app.post('/categories', (req, res) => {
    const category = req.body.category.toUpperCase();
    db.get('select * from categories where Category = ?', category, (getErr, row) => {
      if (getErr) {
        res.status(400).json({
          error: getErr.message,
        });
        return;
      }
      if (row) {
        res.json({
          ok: false,
          message: 'That category already exists',
        });
        return;
      }
      db.run('insert into categories(Category) values (?)', category, function (runErr) {
        if (runErr) {
          res.status(400).json({
            error: runErr.message,
          });
          return;
        }
        res.json({
          ok: true,
          id: this.lastID
        });
      });
    });
  });
};
