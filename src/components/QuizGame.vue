<template>
	<div class="item2">
		<h3>Questions</h3>
		<form class="bubble">
			<div id="quiz-container">
				<div class="correctAnswers">
					You have
					<strong>{{ correctAnswers }} correct {{ pluralizeAnswer }}!</strong>
				</div>
				<div class="correctAnswers">
					Currently at question {{ index + 1 }} of {{ questions.length }}
				</div>

				<hr class="divider" />
				<div>
					<h1 v-html="loading ? 'Loading...' : currentQuestion.question"></h1>
					<form v-if="currentQuestion">
						<button
							class="quizbutton"
							v-for="answer in currentQuestion.answers"
							:index="currentQuestion.id"
							:key="answer.id"
							v-html="answer.answer"
							@click.prevent="handleButtonClick"
						></button>
						<audio ref="applause" src="../assets/Applause.mp3"></audio>
						<audio ref="ooo" src="../assets/WrongAnswer.mp3"></audio>
					</form>
					<hr class="divider" />
				</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: 'QuizGame',
	props: ['category', 'difficulty'],
	data() {
		return {
			questions: [],
			loading: true,
			index: 0,
			correctAnswers: 0,
			quizCategory: this.category,
		};
	},
	computed: {
		currentQuestion() {
			if (this.questions !== []) {
				return this.questions[this.index];
			}
			return null;
		},
		score() {
			if (this.questions !== []) {
				// Here, we want to collect data in an object about the users statistics - later be emitted on an event when users finishes quiz
				return {
					allQuestions: this.questions.length,
					answeredQuestions: this.questions.reduce((count, currentQuestion) => {
						if (currentQuestion.userAnswer) {
							// userAnswer is set when user has answered a question, no matter if right or wrong
							count++;
						}
						return count;
					}, 0),
					correctlyAnsweredQuestions: this.questions.reduce(
						(count, currentQuestion) => {
							if (currentQuestion.rightAnswer) {
								// rightAnswer is true, if user answered correctly
								count++;
							}
							return count;
						},
						0,
					),
				};
			} else {
				return {
					allQuestions: 0,
					answeredQuestions: 0,
					correctlyAnsweredQuestions: 0,
				};
			}
		},
		pluralizeAnswer() {
			// For grammatical correctness
			return this.correctAnswers === 1 ? 'Answer' : 'Answers';
		},
		quizCompleted() {
			if (this.questions.length === 0) {
				return false;
			}
			/* Check if all questions have been answered */
			let questionsAnswered = 0;
			this.questions.forEach(function(question) {
				if (question.rightAnswer) {
					questionsAnswered++;
				}
			});
			return questionsAnswered === this.questions.length;
		},
	},
	methods: {
		async fetchQuestions() {
			this.loading = true;

			let quizVariabel = await this.$store.dispatch('quiz/getQuiz', {
				category: this.category,
				difficulty: this.difficulty,
			});

			this.quizCategory = quizVariabel.category;
			this.questions = quizVariabel.questions;
			this.loading = false;
		},
		handleButtonClick: function(event) {
			/* Find index to identiy question object in data */
			let index = event.target.getAttribute('index');
			let pollutedUserAnswer = event.target.innerHTML; // innerHTML is polluted with decoded HTML entities e.g ' from &#039;
			/* Clear from pollution with ' */
			let userAnswer = pollutedUserAnswer.replace(/'/, '&#039;');

			/* Set userAnswer on question object in data */
			this.questions[this.index].userAnswer = userAnswer;

			/* Set class "clicked" on button with userAnswer -> for CSS Styles; Disable other sibling buttons */
			event.target.classList.add('clicked');
			let allButtons = document.querySelectorAll(`[index="${index}"]`);

			for (let i = 0; i < allButtons.length; i++) {
				if (allButtons[i] === event.target) continue;

				allButtons[i].setAttribute('disabled', '');
			}

			/* Invoke checkAnswer to check Answer */
			this.checkAnswer(event, index);
		},
		playApplause: function() {
			this.$refs.applause.play();
		},
		playWrong: function() {
			this.$refs.ooo.play();
		},
		checkAnswer: function(event, index) {
			let question = this.questions[this.index];

			if (question.userAnswer) {
				if (this.index < this.questions.length - 1) {
					setTimeout(
						function() {
							let allButtons = document.querySelectorAll(`[index="${index}"]`);
							for (let i = 0; i < allButtons.length; i++) {
								allButtons[i].removeAttribute('disabled');
								allButtons[i].classList.remove(
									'rightAnswer',
									'wrongAnswer',
									'showRightAnswer',
									'clicked',
								);
							}
							this.index += 1;
						}.bind(this),
						3000,
					);
				}
				let questionsAnswered = 1;
				this.questions.forEach(function(question) {
					if (question.rightAnswer != null) {
						questionsAnswered++;
					}
				});
				if (questionsAnswered === this.questions.length) {
					setTimeout(
						function() {
							this.$emit('quizCompleted', this.quizCategory, this.score);
						}.bind(this),
						3000,
					);
				}
				let correctAnswer;
				question.answers.forEach((answer) => {
					if (answer.correct === true) {
						correctAnswer = answer.answer;
					}
				});
				if (question.userAnswer === correctAnswer) {
					/* Set class on Button if user answered right, to celebrate right answer with animation joyfulButton */
					event.target.classList.add('rightAnswer');
					this.playApplause();
					/* Set rightAnswer on question to true, computed property can track a streak out of 10 questions */
					this.questions[this.index].rightAnswer = true;
					this.correctAnswers++;
				} else {
					/* Mark users answer as wrong answer */
					event.target.classList.add('wrongAnswer');
					this.playWrong();
					this.questions[this.index].rightAnswer = false;
					/* Show right Answer */
					let allButtons = document.querySelectorAll(`[index="${index}"]`);
					allButtons.forEach(function(button) {
						if (button.innerHTML === correctAnswer) {
							button.classList.add('showRightAnswer');
						}
					});
				}
			}
		},
	},
	mounted() {
		this.fetchQuestions();
	},
};
</script>

<style scoped>
#quiz-container {
	margin: 1rem auto;
	padding: 1rem;
	max-width: 750px;
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
