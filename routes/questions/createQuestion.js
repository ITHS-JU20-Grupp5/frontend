const db = require.main.require('./utils/database');

module.exports = function (app) {
    app.post('/categories/:id/questions', (req, res) => {
        const question = req.body.question;
        db.get("select * from questions where Question = ?", question, (getErr, row) => {
            if (getErr) {
                res.status(400).json({
                    error: getErr.message,
                });
                return;
            }
            if (row) {
                res.json({
                    ok: false,
                    message: 'Question already in database',
                });
                return;
            }
            db.run(
                'insert into questions (Question) values (?)',
                question,
                function (runErr) {
                    if (runErr) {
                        res.status(400).json({
                            error: runErr.message,
                        });
                        return;
                    }
                    let questionId = this.lastID;
                    db.run('insert into category_questions (CategoryId, QuestionId) values (?, ?)', [req.params.id, questionId], function (err) {
                        if (err) {
                            res.json({
                                ok: false,
                                error: err.message
                            });
                            return;
                        }
                        res.json({
                            ok: true,
                            id: questionId
                        });
                    });
                }
            );
        });
    });
}
