const axios = require('axios');
const db = require.main.require('./utils/database');

module.exports = function (app) {
  app.post('/quiz', function (req, res) {
    const options = {
      category: req.body.category || 'RANDOM',
      questions: req.body.questions || 5,
      // easy = 2 answers
      // normal = 4 answers
      // hard = 6 answers
      difficulty: req.body.difficulty || 'easy'
    }

    let answersAmount = options.difficulty.toUpperCase() === 'EASY' ? 2 : (options.difficulty.toUpperCase() === 'NORMAL' ? 4 : 6);

    let quiz = {};

    db.all('select Category from categories', [], function (err, rows) {
      let categories = rows.map(row => row.Category);
      // Select query for categories
      let query = 'select Id from categories where Category = ?';
      let params = [];
      if (options.category !== 'RANDOM') {
        params.push(options.category.toUpperCase());
      } else {
        let cat = categories[Math.floor(Math.random() * categories.length)];
        options.category = cat;
        params.push(cat);
      }
      db.get(query, params, async function (err, row) {
        if (err) {
          res.json({
            error: err.message,
          });
          return;
        }
        let response = await axios.get(`http://localhost:3000/categories/${row.Id}/questions`);
        response = response.data;
        if (response.ok) {
          let index = 0;
          let tempArr = [];
          response.questions.forEach(async (question) => {
            axios.get(`http://localhost:3000/questions/${question.Id}/answers`)
              .then(response => {
                return response.data.answers
              })
              .then(answersData => {
                // Create an empty array to use later
                let answers = [];

                // Add the correct answer to the empty array
                answers.push(answersData.find(item => {
                  return item.Correct === 1;
                }));

                // Filter out the correct answer and create a new array with the incorrect answers
                let incorrect = answersData.filter(item => {
                  return item.Correct !== 1;
                });

                // Loop through the incorrect answers and add the necessary amount to the array
                for (let i = 0; i < answersAmount - 1; i++) {
                  answers.push(incorrect[Math.floor(Math.random() * incorrect.length)]);
                }

                let shuffledAnswers = answers
                  .map(a => ({
                    sort: Math.random(),
                    value: a
                  }))
                  .sort((a, b) => a.sort - b.sort)
                  .map(a => a.value);

                // Add the answers to the question object
                question.Answers = shuffledAnswers;

                // Using a temporary array we add the question to it for short term storage
                tempArr = [question, ...tempArr];

                index++;

                // If the last question has been looped through return the quiz object containing the questions and answers
                if (index === response.questions.length) {
                  quiz.category = options.category;
                  quiz.questions = tempArr;
                  res.json({
                    ok: true,
                    quiz
                  });
                }
              })
              .catch(error => {
                if (error) {
                  res.json({
                    ok: false,
                    error: error.message
                  })
                }
              })
          });
        }
      });
    })
  });
}
