const db = require.main.require('./utils/database');
const utils = require.main.require('./utils/utilities');

module.exports = function (app) {
    app.get('/highscore', utils.isAuthenticated, (req, res) => {
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
            rows.forEach(row => {
                db.get('select users.Id, Score from scores inner join users where scores.Id = ? and users.Id = ?', [row.ScoreId, row.UserId], function (err, row) {
                    scores = [row, ...scores];
                    index++;
                    if (index === rows.length) {
                        scores = scores.sort(function (a, b) {
                            if (a.Score > b.Score) return 1;
                            else if (a.Score < b.Score) return -1;
                            else return 0;
                        })
                        res.json({
                            ok: true,
                            score: scores[scores.length - 1]
                        });
                    }
                });
            });
        });
    })
}
