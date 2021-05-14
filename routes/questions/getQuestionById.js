const db = require.main.require('./utils/database');
module.exports = function (app) {
    app.get('/questions/:id', (req, res) => {
        db.get('select * from questions where Id = ?', req.params.id, (err, row) => {
            if (err) {
                res.status(400).json({
                    error: err.message,
                });
                return;
            }
            if (!row) {
                res.json({
                    ok: false,
                    message: 'Invalid question Id',
                });
            }else
            {res.json({
                ok: true,
                question: row,
            })}
        });
    });
};