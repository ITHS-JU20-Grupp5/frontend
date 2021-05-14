import QuizService from '../services/quiz-service';

export const quiz = {
	namespaced: true,
	state: {},
	actions: {
		getQuiz({ commit }) {
			return QuizService.getQuiz().then(
				(quiz) => {
					commit('getSuccess', quiz);
					return Promise.resolve(quiz);
				},
				(error) => {
					commit('getFailure');
					return Promise.reject(error);
				},
			);
		},
	},
	mutations: {
		getSuccess(state, quiz) {
			state.quiz = quiz;
		},
		getFailure(state) {
			state.quiz = null;
		},
	},
};
