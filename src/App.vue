<template>
	<div id="app">
		<div id="nav">
			<img
				class="banner"
				src="../src/assets/generalknowledgebanner.png"
			/><br />
			<router-link to="/" class="routerlink">| Home | </router-link>
			<router-link to="/Quiz" class="routerlink">Quiz | </router-link>
			<router-link to="/result" class="routerlink">Result | </router-link>
			<router-link to="/settings" class="routerlink">Settings |</router-link>
			<a href="/" class="routerlink" v-if="currentUser" @click="logOut">
				Logout |</a
			>
		</div>

    <Quiz @quiz-completed="handleQuizCompleted" :key="quizKey" />
    <Modal
        v-show="showModal"
        header="Congratulations!"
        subheader="You've completed your Quiz!"
        v-bind:quizScore="quizScore"
        @reload="updateQuiz"
        @close="showModal = false"
    />
    <footer>
      <p id="createdBy">
        created by <a href="https://chrisko.io">Christian Kozalla</a>
      </p>
    </footer>

	</div>
</template>

<script>
import Quiz from "@/views/Quiz.vue";
import Modal from "@/views/Modal.vue";

export default {
  name: "App",
  components: {
    Quiz,
    Modal,
  },
  data() {
    return {
      quizKey: 0,
      showModal: false,
      quizScore: {
        allQuestions: 0,
        answeredQuestions: 0,
        correctlyAnsweredQuestions: 0,
      },
    };
  },
	computed: {
		currentUser() {
			return this.$store.state.auth.user;
		},
	},
	methods: {
		logOut() {
			this.$store.dispatch('auth/logout');
			this.$router.push('/');
		},
    handleQuizCompleted(score) {
      this.quizScore = score;
      this.showModal = true;
    },
    updateQuiz() {
      this.showModal = false;
      this.quizKey++;
    },
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');
/* Mobile */
body {
	background-image: linear-gradient(#010440, #0f228c);
}
.main {
	margin: 0 auto;
	text-decoration: none;
	width: clamp(200px, 80vw, 90%);
	padding: 20px;
}
*#app {
	font-family: Roboto, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
  -webkit-user-select:none;
  -moz-user-select:none;
  user-select:none;
  color: #010440;
	margin-top: 20px;
	font-size: 20px;
	justify-content: center;
	align-items: center;
}
.routerlink {
	color: #f2d335;
	font-size: clamp(20px, 3vw, 30px);
	text-decoration: none;
}
.bubble {
	text-align: left;
	position: relative;
	max-width: 30em;
	background-color: #fff;
	padding: 1.25em 1.5em;
	font-size: 1.25em;
	border-radius: 2rem;
	margin: clamp(10px, 1vw, 20px);
	box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
		0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
}
.bubble::before {
	content: '';
	position: absolute;
	width: 0;
	height: 0;
	bottom: 100%;
	left: 1.5em;
	border: 0.75rem solid transparent;
	border-top: none;
	border-bottom-color: #fff;
	filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.1));
}

.wrapper {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
	grid-template-areas:
		'a b'
		'c c';
}
.item1 {
	grid-area: a;
	background: whitesmoke;
	padding-inline: 1rem;
	border-top-left-radius: 25px;
	padding-bottom: 20px;
}

.item2 {
	grid-area: b;
  display: grid;
  justify-content: center;
  align-content: start;
	background: whitesmoke;
	border-top-right-radius: 25px;
}
.item3 {
	grid-area: c;
	display: grid;
	justify-content: center;
	background: whitesmoke;
	padding-inline: 1rem;
	border-bottom-right-radius: 25px;
	border-bottom-left-radius: 25px;
	padding-bottom: 20px;
}

.item4 {
	grid-area: c;
	display: grid;
	/*grid-template-columns: 1fr 1fr;*/
	/*justify-self: inherit;*/
	justify-content: center;
	background: whitesmoke;
	padding-inline: 1rem;
	border-bottom-right-radius: 25px;
	border-bottom-left-radius: 25px;
	padding-bottom: 20px;
}
p {
	font-family: Roboto, Helvetica, Arial, sans-serif, serif;
	font-size: 20px;
}
h1 {
	font-family: New Tegomin, serif;
	text-align: center;
	font-size: clamp(2rem, 5vw, 5rem);
}
h2 {
	display: grid;
	justify-items: legacy;
	align-content: center;
	font-family: New Tegomin, serif;
	text-align: center;
	margin-top: 2px;
	margin-bottom: 2px;
	font-size: clamp(2rem, 4vw, 4rem);
}
h3 {
	font-family: New Tegomin, serif;
	margin-top: 2px;
	text-align: left;
	margin-bottom: 2px;
	font-size: clamp(2rem, 4vw, 4rem);
}
.form {
	line-height: 35px;
}
label {
	font-size: 20px;
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
	width: clamp(125px, 11vw, 180px);
	margin-right: 5px;
	text-decoration: none;
	text-shadow: 0px 1px 0px #0f228c;
}
button:hover {
	background: linear-gradient(to bottom, #010440 5%, #0f228c 100%);
	background-color: #010440;
}
button:active {
	position: relative;
	top: 1px;
}
.buttonSettings {
	margin-left: 5px;
}
.input {
	font-family: Roboto, Helvetica, Arial, sans-serif;
	font-size: clamp(12px, 1vw, 14px);
	border-color: transparent;
	box-shadow: 0 0.125rem 0.5rem #010440, 0 0.0625rem 0.125rem #0f228c;
	margin-bottom: 10px;
	width: clamp(120px, 11vw, 170px);
}
#nav {
	font-family: New Tegomin, serif;
	text-align: center;
	color: #f2d335;
}
.img {
	width: 100%;
	height: auto;
  pointer-events: none;
}
.banner {
	width: clamp(350px, 50%, 1200px);
  pointer-events: none;
}
/*Tablet*/
@media screen and (min-width: 768px) and (max-width: 1024px){
  .wrapper {
    display: grid;
    grid-template-columns: 30% 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'a b c';
  }

  .item1 {
    grid-area: a;
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
    border-top-right-radius: 0px;
  }
  .item3 {
    grid-area: c;
    background: whitesmoke;
    align-content: start;
    padding-inline: 1rem;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
  }

  .item4 {
    grid-area: c;
    background: whitesmoke;
    padding-inline: 1rem;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    padding-bottom: 20px;
  }
}
/* Desktop */
@media screen and (min-width: 1024px) {
	.wrapper {
		display: grid;
		grid-template-columns: 30% 1fr 1fr;
		grid-template-rows: auto;
		grid-template-areas: 'a b c';
	}

	.item1 {
		grid-area: a;
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
		border-top-right-radius: 0px;
	}
	.item3 {
		grid-area: c;
		background: whitesmoke;
		align-content: start;
		padding-inline: 1rem;
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 25px;
		border-top-right-radius: 25px;
	}

	.item4 {
		grid-area: c;
		background: whitesmoke;
		padding-inline: 1rem;
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 25px;
		border-top-right-radius: 25px;
		padding-bottom: 20px;
	}
}



* {
  box-sizing: border-box;
  margin: 0;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
  Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

footer {
  position: fixed;
  bottom: 0;
  padding: 0.5rem 1rem;
  width: 100%;
  font-size: 0.7rem;
  background-color: rgb(102, 255, 166);
}

#createdBy {
  float: right;
}
</style>
