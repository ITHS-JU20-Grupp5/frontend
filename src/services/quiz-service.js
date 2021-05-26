import axios from 'axios';

const API_URL = 'http://localhost:3000/';

class QuizService {
	getQuiz(options) {
		return axios.post(API_URL + 'quiz', options).then((response) => {
			if (response.status === 200) {
				return response.data;
			}
			return {};
		});
	}
}

export default new QuizService();
