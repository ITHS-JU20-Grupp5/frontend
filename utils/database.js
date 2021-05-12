const sqlite = require('sqlite3');

const DBFILE = './general-knowledge.db';

let cb = function (err) {
  return;
}

let db = new sqlite.Database(DBFILE, (err) => {
  if (err) {
    console.error('Database Error', err.message);
    throw err;
  }
  db.run('CREATE TABLE answers(Id integer primary key autoincrement, Answer text not null, Correct numeric default 0)', cb);
  db.run('CREATE TABLE categories(Id integer primary key autoincrement, Category text not null)', cb);
  db.run('CREATE TABLE category_questions(CategoryId integer not null, QuestionId integer not null, primary key(CategoryId, QuestionId), foreign key(CategoryId) references categories(Id), foreign key(QuestionId) references questions(Id))', cb);
  db.run('CREATE TABLE question_answers(QuestionId integer not null, AnswerId integer not null, primary key(QuestionId, AnswerId), foreign key(QuestionId) references questions(Id), foreign key(AnswerId) references answers(Id))', cb);
  db.run('CREATE TABLE questions(Id integer primary key autoincrement, Question text not null)', cb);
  db.run('CREATE TABLE scores(Id integer primary key autoincrement, Score integer not null)', cb);
  db.run('CREATE TABLE user_scores(UserId integer not null, ScoreId integer not null, primary key(UserId, ScoreId), foreign key(UserId) references users(Id), foreign key(ScoreId) references scores(Id))', cb);
  db.run('CREATE TABLE users(Id integer primary key autoincrement, Username text not null, Name text not null, Email text not null, Password text not null)', cb)
});

module.exports = db;
