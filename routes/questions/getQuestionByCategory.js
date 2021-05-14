const db = require.main.require('./utils/database');

module.exports = function (app) {
  app.get('/categories/:id/questions', function (req, res) {
    let questions = [];
    db.all('select * from category_questions where CategoryId = ?', [req.params.id], function (err, rows) {
      if (err) {
        res.json({
          ok: false,
          error: err.message
        });
      }
      let index = 0;
      rows.forEach(row => {
        db.get('select questions.Id, Question from questions inner join categories where questions.Id = ? and categories.Id = ? order by RANDOM()', [row.QuestionId, row.CategoryId], function (err, row) {
          questions = [row, ...questions];
          index++;
          if (index === 5) {
            res.json({
              ok: true,
              questions
            });
          }
        });
      });
    });
  });
}
