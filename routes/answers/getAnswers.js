const db = require.main.require('./utils/database');

module.exports = function (app) {
  app.get('/questions/:id/answers', function (req, res) {
    let answers = [];
    db.all('select * from question_answers where QuestionId = ?', [req.params.id], function (err, rows) {
      if (err) {
        res.json({
          ok: false,
          error: err.message
        });
      }
      let index = 0;
      rows.forEach(row => {
        db.get('select answers.Id, Answer, Correct from answers inner join questions where answers.Id = ? and questions.Id = ?', [row.AnswerId, row.QuestionId], function (err, row) {
          answers = [row, ...answers];
          index++;
          if (index === rows.length) {
            res.json({
              ok: true,
              answers
            });
          }
        });
      });
    });
  });
}
