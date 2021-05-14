import axios from 'axios';

const API_URL = 'http://localhost:3000/';

class QuizService {
	getQuiz() {
		return axios.post(API_URL + 'quiz', {}).then((response) => {
			if (response.data.ok) {
				return response.data.quiz;
			}
			return {};
		});
	}
}

export default new QuizService();
