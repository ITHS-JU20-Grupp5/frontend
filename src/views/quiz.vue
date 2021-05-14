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
				<h3>Questions</h3>
				<form class="bubble">
					<p>
						What is the answer? Annan löpande text så att det fyller ut lite
						utrymme.
					</p>
					<input type="radio" id="answer1" name="bridge" value="333 685" />
					<label for="answer1">333 685</label>
					<br />
					<input type="radio" id="answer2" name="bridge" value="7 428 954" />
					<label for="answer2">7 428 954</label>
					<br />
					<input type="radio" id="answer3" name="bridge" value="78 435 785" />
					<label for="answer3">78 435 785</label>
					<br />
					<input type="radio" id="answer4" name="bridge" value="42" />
					<label for="answer4">42</label>
					<br />
					<button class="button" value="submit" type="submit" name="submit">
						Submit
					</button>
				</form>
			</div>
			<div class="item4">
				<h3>Categories</h3>
				<br />
				<p>
					<button class="button" type="button" v-on:click="login()">
						History
					</button>
					<button class="button" type="button" v-on:click="register()">
						Sports</button
					><br />
					<button class="button" type="button" v-on:click="login()">
						Geography
					</button>
					<button class="button" type="button" v-on:click="register()">
						General knowledge
					</button>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Quiz',
	data() {
		return {
			quiz: {},
		};
	},
	mounted() {
		this.$store.dispatch('quiz/getQuiz').then((response) => {
			console.log(response);
		});
	},
};
</script>
