const db = require.main.require('./utils/database');
const utils = require.main.require('./utils/utilities');

module.exports = function (app) {
    app.get('/scores', utils.isAuthenticated, (req, res) => {
        let userId = req.user.Id;
        let scores = [];
        db.all('select * from user_scores where UserId = ?', [userId], function (err, rows) {
            if (err) {
                res.json({
                    ok: false,
                    error: err.message
                });
            }
            let index = 0;
            if (rows.length === 0) {
                res.json({
                    ok: true,
                    scores: []
                });
                return;
            }
            rows.forEach(row => {
                db.get('select users.Id, Score from scores inner join users where scores.Id = ? and users.Id = ?', [row.ScoreId, row.UserId], function (err, row) {
                    console.log(row);
                    scores = [row, ...scores];
                    index++;
                    if (index === rows.length) {
                        res.json({
                            ok: true,
                            scores
                        });
                    }
                });
            });
        });
    })
}
