import QuizService from '../services/quiz-service';

export const quiz = {
	namespaced: true,
	state: {},
	actions: {
		getQuiz({ commit }, options) {
			return QuizService.getQuiz(options).then(
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
