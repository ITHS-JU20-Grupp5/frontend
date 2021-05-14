const db = require.main.require('./utils/database');
module.exports = function (app) {
    app.delete('/scores/:id', (req, res) => {
        db.run('delete from scores where Id = ?', req.params.id, function (err) {
            if(err) {
                res.status(400).json({
                    error: err.message,
                });
                return;
            }
            db.run('delete from user_scores where ScoreId = ?', req.params.id, function (err) {
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