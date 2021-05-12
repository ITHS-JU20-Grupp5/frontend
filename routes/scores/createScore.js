const db = require.main.require('./utils/database');
const utils = require.main.require('./utils/utilities');

module.exports = function (app) {
    app.post('/scores', utils.isAuthenticated, (req, res) => {
        const score = req.body.score;
        db.get('select * from scores where Score = ?', score, (getErr, row) => {
            if(getErr) {
                res.status(400).json({
                    error: getErr.message,
                });
                return;
            }
            db.run(
                'insert into scores (Score) values (?)',
                score,
                function (runErr) {
                    if (runErr) {
                        res.status(400).json({
                            error: runErr.message,
                        });
                        return;
                    }
                    db.run('insert into user_scores (UserId, ScoreId) values (?, ?)', [req.user.Id, this.lastID], function (err) {
                        if(err) {
                            res.json({
                                ok:false,
                                error: err.message
                            });
                            return;
                        }
                        res.json({
                            ok: true
                        });
                    });
                }
            );
        });
    });
}