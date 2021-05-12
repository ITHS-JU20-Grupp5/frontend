const db = require.main.require('./utils/database');
module.exports = function (app) {
    app.patch('/questions/:id', (req, res) => {
        db.run(
            'update questions set question = ? where Id = ?',
            [req.body.question, req.params.id],
            function (err) {
                if (err) {
                    res.status(400).json({
                        error: err.message,
                    });
                    return;
                }
                res.json({
                    ok: this.changes > 0,
                });
            }
        );
    });
};