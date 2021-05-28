<template>
	<div class="main">
		<div class="wrapper">
			<div class="item1">
				<img
					alt="TheGeneral"
					src="../assets/GeneralKnowledge.png"
					class="img"
				/>
			</div>
			<div class="item2">
				<QuizGame
					v-if="started"
					:category="category"
					:difficulty="difficulty"
					@quizCompleted="quizCompleted"
				/>
				<QuizSettings v-else @startQuiz="startQuiz" />
			</div>
			<div class="item4"></div>

			<Modal
				v-if="showModal"
				header="Congratulations!"
				subheader="You've completed your Quiz!"
				:quizScore="score"
				@reload="updateQuiz"
				@close="showModal = false"
			/>
		</div>
	</div>
</template>
<script>
import QuizGame from '@/components/QuizGame';
import QuizSettings from '@/components/QuizSettings';
import Modal from '@/views/Modal';
import axios from 'axios';

export default {
	name: 'Quiz',
	components: {
		QuizGame,
		QuizSettings,
		Modal,
	},
	data() {
		return {
			category: 'RANDOM',
			difficulty: 'easy',
			started: false,
			showModal: false,
			score: {},
		};
	},
	methods: {
		startQuiz(category, difficulty) {
			this.category = category;
			this.difficulty = difficulty;
			this.started = true;
		},
		async quizCompleted(score) {
			// TODO: Run code to add score
			await axios.post('https://generalknowledge.azurewebsites.net/scores', {
				score: score.correctlyAnsweredQuestions,
				category: this.category,
			});
			this.score = score;
			this.showModal = true;
		},
		updateQuiz() {
			this.showModal = false;
			this.started = false;
		},
	},
};
</script>

<style scoped>
#quiz-container {
	margin: 1rem auto;
	padding: 1rem;
	max-width: 750px;
}

#logo-headline {
	font-size: 3rem;
	padding: 0.5rem;
	color: #f50057;
	text-align: center;
}

#logo-crown {
	display: block;
	width: 40%;
	margin: 0 auto;
}

@media only screen and (max-width: 500px) {
	#logo-crown {
		width: 30%;
	}

	#logo-headline {
		font-size: 1.8rem;
	}
}

h1 {
	font-size: 1.3rem;
	padding: 0.7rem;
}

.divider {
	margin: 0.5rem 0;
	border: 3px solid #0f228c;
	border-radius: 2px;
	box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.3);
}

form {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-content: center;
}

.quizbutton {
	font-size: 1.1rem;
	display: block;
	box-sizing: border-box;
	white-space: break-spaces !important;
	text-overflow: ellipsis;
	word-wrap: break-word;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	padding-top: 10px;
	padding-bottom: 10px;
	margin: 0.3rem;
	width: clamp(150px, 14vw, 200px);
	background-color: rgba(100, 100, 100, 0.3);
	border: none;
	border-radius: 0.4rem;
	box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.2);
}

.button {
	box-shadow: inset 0px 1px 0px 0px #f2d335;
	background: linear-gradient(to bottom, #0f228c 5%, #010440 100%);
	background-color: #0f228c;
	border-radius: 6px;
	border: 1px solid #1f47bf;
	display: inline-block;
	cursor: pointer;
	color: #ffffff;
	font-family: Roboto, Helvetica, Arial, sans-serif;
	font-size: 15px;
	font-weight: bold;
	padding: 6px 25px;
	width: clamp(150px, 11vw, 180px);
	margin-right: 5px;
	margin-bottom: 10px;
	text-decoration: none;
	text-shadow: 0px 1px 0px #0f228c;
}

button:hover:enabled {
	transform: scale(1.02);
	box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12),
		0 3px 1px -1px rgba(0, 0, 0, 0.2);
}

button:focus {
	outline: none;
}

button:active:enabled {
	transform: scale(1.05);
}

button:hover:enabled {
	transform: scale(1.02);
	box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12),
		0 3px 1px -1px rgba(0, 0, 0, 0.2);
}

button:focus {
	outline: none;
}

button:active:enabled {
	transform: scale(1.05);
}

@keyframes flashButton {
	0% {
		opacity: 1;
		transform: scale(1.01);
	}
	50% {
		opacity: 0.7;
		transform: scale(1.02);
	}
	100% {
		opacity: 1;
		transform: scale(1);
	}
}

button.clicked {
	pointer-events: none;
}

button.rightAnswer {
	animation: flashButton;
	animation-duration: 700ms;
	animation-delay: 200ms;
	animation-iteration-count: 3;
	animation-timing-function: ease-in-out;
	color: black;
	background: linear-gradient(
		210deg,
		rgba(0, 178, 72, 0.25),
		rgba(0, 178, 72, 0.5)
	);
}

button.wrongAnswer {
	color: black;
	background: linear-gradient(
		210deg,
		rgba(245, 0, 87, 0.25),
		rgba(245, 0, 87, 0.5)
	);
}

button.showRightAnswer {
	animation: flashButton;
	animation-duration: 700ms;
	animation-delay: 200ms;
	animation-iteration-count: 2;
	animation-timing-function: ease-in-out;
	color: black;
	background: linear-gradient(
		210deg,
		rgba(0, 178, 72, 0.25),
		rgba(0, 178, 72, 0.5)
	);
}

.correctAnswers {
	text-align: center;
}
</style>
<!--<script>-->
<!--export default {-->
<!--	name: 'Quiz',-->
<!--	data() {-->
<!--		return {-->
<!--			quiz: {-->
<!--				category: 'HISTORIA',-->
<!--				Questions: [-->
<!--					{-->
<!--						Question: 'Test',-->
<!--						Answers: [-->
<!--							{-->
<!--								Answer: 'Hello',-->
<!--								Correct: false,-->
<!--							},-->
<!--							{-->
<!--								Answer: 'Hello again',-->
<!--								Correct: true,-->
<!--							},-->
<!--						],-->
<!--					},-->
<!--					{-->
<!--						question: 'Testing',-->
<!--						answers: [-->
<!--							{-->
<!--								answer: 'Hello',-->
<!--								correct: false,-->
<!--							},-->
<!--							{-->
<!--								answer: 'Hello again',-->
<!--								correct: true,-->
<!--							},-->
<!--						],-->
<!--					},-->
<!--				],-->
<!--			},-->
<!--			startQuiz: false,-->
<!--		};-->
<!--	},-->
<!--	mounted() {-->
<!--		this.$store.dispatch('quiz/getQuiz').then((response) => {-->
<!--			this.quiz = response;-->
<!--		});-->
<!--	},-->
<!--	methods: {-->
<!--		getQuiz() {-->
<!--			return this.quiz;-->
<!--		},-->
<!--	},-->
<!--};-->
<!--</script>-->
