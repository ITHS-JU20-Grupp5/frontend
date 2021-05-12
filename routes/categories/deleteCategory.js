const db = require.main.require('./utils/database');

module.exports = function (app) {
  app.delete('/categories/:id', (req, res) => {
    db.run('delete from categories where Id = ?', req.params.id, function (err) {
      if (err) {
        res.status(400).json({
          error: err.message,
        });
        return;
      }
      db.run('delete from category_questions where CategoryId = ?', req.params.id, function (err) {
        if (err) {
          res.json({
            ok: false,
            error: err.message
          });
          return;
        }
        res.json({
          ok: true
        });
      });
    });
  });
};
