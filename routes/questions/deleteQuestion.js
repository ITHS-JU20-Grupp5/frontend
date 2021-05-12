const db = require.main.require('./utils/database');
module.exports = function (app) {
    app.delete('/questions/:id', (req, res) => {
        db.run('delete from questions where Id = ?', req.params.id, function (err) {
            if (err) {
                res.status(400).json({
                    error: err.message,
                });
                return;
            }
            db.run('delete from category_questions where QuestionId = ?', req.params.id, function (err) {
                if (err) {
                    res.json({
                        ok: false,
                        error: err.message
                    });
                    return;
                }
                db.run('delete from from question_answers where QuestionId = ?', req.params.id, function (err) {
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
    });
}