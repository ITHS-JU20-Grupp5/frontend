<template>
	<div id="app">
		<div id="nav">
			<img
				class="banner"
				src="../src/assets/generalknowledgebanner.png"
			/><br />
			<router-link to="/" class="routerlink">| Home | </router-link>
			<router-link to="/quiz" class="routerlink">Quiz | </router-link>
			<router-link to="/result" class="routerlink">Result | </router-link>
			<router-link to="/settings" class="routerlink">Settings | </router-link>
			<!--      <router-link to="/admin" class="routerlink" v-if="currentUser">Admin |</router-link>-->
			<a href="/" class="routerlink" v-if="currentUser" @click="logOut">
				Logout |</a
			>
		</div>
		<router-view>
			<Quiz />
		</router-view>
	</div>
</template>

<script>
import Quiz from '@/views/Quiz.vue';

export default {
	name: 'App',
	components: {
		Quiz,
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
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');
/* Mobile */
div#app {
  background-image: linear-gradient(#010440, #0f228c);
  margin: 0;
  /*padding: 0;*/
  padding-top: 20px;
}
body {
	background-color: #0f228c;
  display: flex;
  margin: 0;
  /*padding-top: 20px;*/
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
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
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
	width: clamp(150px, 12vw, 400px);
	background-color: #fff;
	padding: 0.5em 3em;
	font-size: 1em;
	border-radius: 2rem;
	margin: clamp(30px, 1vw, 20px);
	box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
		0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
}

.wrapper {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
	grid-template-areas:
		'a b'
		'c c';
}
#audio {
  position: absolute;
  top: 5px;
  left: 5px;
  opacity: 10%;
  width: 5%;
  resize: vertical;
}
#audio:hover {
  opacity: 70%;
  width: 30%;
}
.item1 {
	grid-area: a;
	background: whitesmoke;
	padding-inline: 1rem;
	border-top-left-radius: 25px;
	/*padding-bottom: 20px;*/
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
	text-align: center;
	margin-bottom: 2px;
	font-size: clamp(2rem, 4vw, 4rem);
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
	cursor: pointer;
	color: #ffffff;
	font-family: Roboto, Helvetica, Arial, sans-serif;
	font-size: 15px;
	font-weight: bold;
	padding-left: 50px;
	padding-right: 50px;
	width: clamp(135px, 12vw, 180px);
	margin-right: 5px;
	text-decoration: none;
	text-shadow: 0px 1px 0px #0f228c;
  justify-content: center;
}

button:active:enabled {
	position: relative;
	top: 1px;
	color: #010440;
	background: linear-gradient(
		210deg,
		rgba(0, 178, 72, 0.25),
		rgba(0, 178, 72, 0.5)
	);
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
input.button {
  align-self: center;
  margin-bottom: 20px;
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
@media screen and (min-width: 768px) and (max-width: 1024px) {
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
		padding-left: 20px;
		padding-right: 5px;
		background: whitesmoke;
		border-top-right-radius: 0px;
	}
	.item3 {
		grid-area: c;
		background: whitesmoke;
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 25px;
		border-top-right-radius: 25px;
		padding-bottom: 20px;
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
  .bubble {
    text-align: left;
    position: relative;
    width: clamp(150px, 12vw, 400px);
    background-color: #fff;
    padding: 0.5em 3em;
    font-size: 1em;
    border-radius: 2rem;
    margin: clamp(30px, 1vw, 20px);
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
    0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
  }
  .bubble::before {
    content: '';
    position: absolute;
    left: 0;
    top: 20%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-right-color: #fff;
    border-left: 0;
    margin-top: -20px;
    margin-left: -20px;
    filter: drop-shadow(-0.0855rem 0rem 0.0625rem rgba(0, 0, 0, 0.2));
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
		/*padding-inline: 1rem;*/
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
  .bubble::before {
    content: '';
    position: absolute;
    left: 0;
    top: 20%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-right-color: #fff;
    border-left: 0;
    margin-top: -20px;
    margin-left: -20px;
    filter: drop-shadow(-0.0855rem 0rem 0.0625rem rgba(0, 0, 0, 0.2));
  }
}
</style>
