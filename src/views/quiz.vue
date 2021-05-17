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
					<span v-for="question in quiz.questions" :key="question.Id">
						<p>
							{{ question.Question }}
						</p>
						<span v-for="answer in question.Answers" :key="answer.Id">
							<input
								type="radio"
								:id="'answer' + answer.Id"
								:name="'bridge' + question.Id"
								:value="answer.Answer"
							/>
							<label :for="'answer' + answer.Id">{{ answer.Answer }}</label>
							<br />
						</span>
					</span>
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
				<h3>Levels</h3>
				<button class="button" type="button" value="easy">
					Easy
				</button>
				<button class="button" type="button" value="easy">
					Normal
				</button>
				<button class="button" type="button" value="easy">
					Hard
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Quiz',
	data() {
		return {
			quiz: {
				category: 'HISTORIA',
				Questions: [
					{
						Question: 'Test',
						Answers: [
							{
								Answer: 'Hello',
								Correct: false,
							},
							{
								Answer: 'Hello again',
								Correct: true,
							},
						],
					},
					{
						question: 'Testing',
						answers: [
							{
								answer: 'Hello',
								correct: false,
							},
							{
								answer: 'Hello again',
								correct: true,
							},
						],
					},
				],
			},
			startQuiz: false,
		};
	},
	mounted() {
		this.$store.dispatch('quiz/getQuiz').then((response) => {
			this.quiz = response;
		});
	},
	methods: {
		getQuiz() {
			return this.quiz;
		},
	},
};
</script>
