const db = require.main.require('./utils/database');
module.exports = function (app) {
    app.get('/questions', (req, res) => {
       db.all('select * from questions', [], (err, rows) => {
           if (err) {
               res.status(400).json({
                   error: err.message,
               });
               return;
           }
           res.json({
               ok: true,
               questions: rows,
           })
       });
    });
};