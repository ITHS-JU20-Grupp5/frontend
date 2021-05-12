const db = require.main.require('./utils/database');
const axios = require('axios');

module.exports = function (app) {
  app.post('/register', function (req, res) {
    axios.post('http://localhost:3000/users', {
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        email: req.body.email
      })
      .then(function (response) {
        res.json({
          ok: response.data.ok
        });
        res.end();
      })
      .catch(function (err) {
        if (err) res.json({
          ok: false,
          error: err.message
        });
      });
  });
}
