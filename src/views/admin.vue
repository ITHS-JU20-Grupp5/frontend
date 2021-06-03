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
				<h3>Admin</h3>
				<form @submit.prevent="addQuestion">
					<br />
					<input
						class="input"
						type="text"
						name="addQuestionField"
						v-model="question"
						placeholder="New Question"
					/>
					<br />
					<input
						class="input"
						type="text"
						name="addQuestionField"
						v-model="answers[0].answer"
						placeholder="Answer 1"
					/>
					<input type="checkbox" v-model="answers[0].correct" value="true" />
					<br />
					<input
						class="input"
						type="text"
						name="addQuestionField"
						v-model="answers[1].answer"
						placeholder="Answer 2"
					/><input
						type="checkbox"
						v-model="answers[1].correct"
						value="true"
					/><br />
					<input
						class="input"
						type="text"
						name="addQuestionField"
						v-model="answers[2].answer"
						placeholder="Answer 3"
					/><input
						type="checkbox"
						v-model="answers[2].correct"
						value="true"
					/><br />
					<input
						class="input"
						type="text"
						name="addQuestionField"
						v-model="answers[3].answer"
						placeholder="Answer 4"
					/><input
						type="checkbox"
						v-model="answers[3].correct"
						value="true"
					/><br />
					<input
						class="input"
						type="text"
						name="addQuestionField"
						v-model="answers[4].answer"
						placeholder="Answer 5"
					/><input
						type="checkbox"
						v-model="answers[4].correct"
						value="true"
					/><br />
					<input
						class="input"
						type="text"
						name="addQuestionField"
						v-model="answers[5].answer"
						placeholder="Answer 6"
					/><input
						type="checkbox"
						v-model="answers[5].correct"
						value="true"
					/><br />
					<br />

					<button class="submit" type="submit" id="submitQuiz">
						Submit
					</button>
				</form>
			</div>
			<div class="item3">
				<h3>Categories</h3>
				<p>
					<input
						type="radio"
						id="history"
						value="Historia"
						v-model="category"
					/>
					<label for="history">History</label>
					<input
						type="radio"
						id="geography"
						value="Geografi"
						v-model="category"
					/>
					<label for="geography">Geography</label>
					<input type="radio" id="sports" value="Sport" v-model="category" />
					<label for="sports">Sports</label>
					<input type="radio" id="music" value="Musik" v-model="category" />
					<label for="music">Music</label>
					<input
						type="radio"
						id="general"
						value="Allmän Fakta"
						v-model="category"
					/>
					<label for="general">General Knowledge</label>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'admin',
	data() {
		return {
			category: '',
			question: '',
			answers: [
				{
					answer: '',
					correct: false,
				},
				{
					answer: '',
					correct: false,
				},
				{
					answer: '',
					correct: false,
				},
				{
					answer: '',
					correct: false,
				},
				{
					answer: '',
					correct: false,
				},
				{
					answer: '',
					correct: false,
				},
			],
		};
	},
	methods: {
		addQuestion() {
			axios
				.get('https://generalknowledge.azurewebsites.net/categories')
				.then((categories) => {
					categories.data.forEach((cat) => {
						if (cat.category === this.category) {
							axios
								.post(
									`https://generalknowledge.azurewebsites.net/categories/${cat.id}/questions`,
									{
										question: this.question,
									},
								)
								.then((q) => {
									let i = 0;
									this.answers.forEach(async (answer) => {
										await axios.post(
											`https://generalknowledge.azurewebsites.net/questions/${q.data.id}/answers`,
											answer,
										);
										i++;
										if (i === this.answers.length) {
											location.reload();
										}
									});
								});
						}
					});
				});
		},
	},
};
</script>

<style scoped>
.submit {
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

.button:focus {
	color: #010440;
	background: linear-gradient(180deg, rgb(246, 229, 176), rgb(255, 211, 0));
}
#submitQuiz:active:enabled {
	position: relative;
	top: 1px;
	color: #fff;
	background: linear-gradient(180deg, rgb(13, 37, 135), rgb(49, 84, 201));
}

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
</style>
