const db = require.main.require('./utils/database');

module.exports = function (app) {
  app.delete('/questions/:questionId/answers/:answerId', function (req, res) {
    db.run('delete from answers where Id = ?', req.params.answerId, function (err) {
      if (err) {
        res.json({
          ok: false,
          error: err.message
        });
        return;
      }
      db.run('delete from question_answers where AnswerId = ?', req.params.answerId, function (err) {
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
}
