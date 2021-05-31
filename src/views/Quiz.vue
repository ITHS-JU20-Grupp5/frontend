<template>
	<div class="main">
    <audio autoplay controls="controls" id="audio">
      <source src="../assets/Generalknowledge.mp3" type="audio/mpeg">
    </audio>
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
	computed: {
		currentUser() {
			return this.$store.state.auth.user;
		},
	},
	methods: {
		startQuiz(category, difficulty) {
			this.category = category;
			this.difficulty = difficulty;
			this.started = true;
		},
		async quizCompleted(score) {
			// TODO: Run code to add score
			axios.defaults.headers.common.Authorization =
				'Bearer ' + this.currentUser.accessToken;
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
  mounted() {
    document.getElementById("audio").volume=0.1;
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
/*fieldset{*/
/*  display: grid;*/
/*  grid-template-columns: 100%;*/
/*  grid-template-rows: 50vh;*/
/*  grid-template-areas:*/
/*		'b';*/
/*}*/
  .wrapper {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-template-areas:
		'b';
  }
  .item1 {
    grid-area: a;
    display: none;
  }
  .item2 {
    grid-area: b;
    display: grid;
    justify-content: center;
    align-content: start;
    background: whitesmoke;
    border-radius: 25px;
  }

	#logo-crown {
		width: 30%;
	}

	#logo-headline {
		font-size: 1.8rem;
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
	flex-direction: column;
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

/*Tablet*/
@media screen and (min-width: 768px) and (max-width: 1024px){
  .wrapper {
    display: grid;
    grid-template-columns: 25% 50%;
    grid-template-rows: 60vh;
    grid-template-areas: 'a b';
  }
  .item1 {
    grid-area: a;
    display: grid;
    background: whitesmoke;
    padding-inline: 1rem;
    border-bottom-left-radius: 25px;
    border-top-left-radius: 25px;
    border-top-right-radius: 0px;
    padding-bottom: 20px;
  }
  .item2 {
    grid-area: b;
    padding-left: 20px;
    padding-right: 5px;
    background: whitesmoke;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
}
@media screen and (min-width: 1024px) {
  .wrapper {
    display: grid;
    grid-template-columns: 25% 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'a b';
  }
  .item1 {
    grid-area: a;
    display: grid;
    background: whitesmoke;
    padding-inline: 1rem;
    border-bottom-left-radius: 25px;
    border-top-left-radius: 25px;
    border-top-right-radius: 0px;
    padding-bottom: 20px;
  }
  .item2 {
    grid-area: b;
    background: whitesmoke;
    border-radius: 0 25px 25px 0;
  }
}
</style>
