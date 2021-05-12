const axios = require('axios');

const http = axios.create({
  baseURL: 'http://localhost:3000'
});

http.post('/users', {
  username: 'user',
  name: 'Test User',
  email: 'mail@example.com',
  password: 'Password123'
});

for (let i = 1; i < 4; i++) {
  http.post('/categories', {
      category: `Kategori${i}`
    })
    .then(categoryData => {
      let catId = categoryData.data.id;
      console.log('Created category', `Kategori${catId}`);
      for (let j = 1; j < 6; j++) {
        http.post(`/categories/${catId}/questions`, {
            question: `Question${j}-${catId}`
          }).then(questionData => {
            let questionId = questionData.data.id;
            console.log('Created question', `Question${questionId}-${catId}`);
            for (let k = 1; k < 7; k++) {
              http.post(`/questions/${questionId}/answers`, {
                  answer: `Answer${k}-${questionId}-${catId}`,
                  correct: k === 1
                })
                .then(answerData => {
                  console.log('Created answer', `Answer${answerData.data.id}-${questionId}-${catId}`);
                })
                .catch(err => {
                  if (err) {
                    console.error(err.message);
                  }
                });
            }
          })
          .catch(err => {
            if (err) {
              console.error(err.message);
            }
          });

      }
    })
    .catch(err => {
      if (err) {
        console.error(err.message);
      }
    });
}
