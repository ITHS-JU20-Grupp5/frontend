const db = require.main.require('./utils/database');

module.exports = function (app) {
  app.post('/questions/:id/answers', function (req, res) {
    const correct = (req.body.correct ? true : false);
    let answerId;
    db.run('insert into answers (Answer, Correct) values (?, ?)', [req.body.answer, correct], function (err) {
      if (err) {
        res.json({
          ok: false,
          error: err.message
        });
        return;
      }
      let answerId = this.lastID;
      db.run('insert into question_answers (QuestionId, AnswerId) values (?, ?)', [req.params.id, answerId], function (err) {
        if (err) {
          res.json({
            ok: false,
            error: err.message
          });
          return;
        }
        res.json({
          ok: true,
          id: answerId
        });
      });
    });
  });
}
