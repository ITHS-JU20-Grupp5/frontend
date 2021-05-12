const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');

const fs = require('fs');
const path = require('path');
const password = require('./utils/passwordEncryption');
const db = require('./utils/database');

const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const session = require('express-session');

const app = express();

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cookieSession({
  maxAge: 1000 * 60 * 60 * 24 * 30,
  keys: [process.env.COOKIESECRET]
}));

app.use(session({
  secret: process.env.SESSIONSECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(new LocalStrategy(
  function (username, pass, done) {
    db.get('select * from users where Username = ?', username, async function (err, user) {
      if (err) return done(err);
      if (!user) return done(null, false);
      const verifiedPassword = await password.verify(pass, user.Password);
      if (!verifiedPassword) return done(null, false);
      return done(null, user);
    });
  }
));

function recursiveRoutes(folder) {
  fs.readdirSync(folder).forEach((file) => {
    const fullName = path.join(folder, file);
    const stat = fs.lstatSync(fullName);

    if (stat.isDirectory()) {
      recursiveRoutes(fullName);
    } else if (file.toLowerCase().indexOf('.js')) {
      require(`./${fullName}`)(app);
      console.log(`Loaded ${file}`);
    }
  });
}

recursiveRoutes('routes');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
