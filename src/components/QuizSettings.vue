<template>
	<form @submit="startQuiz">
		<h3>Categories</h3>
		<fieldset id="category">
			<div class="radio-btn-group">
				<input
					id="history"
					name="category"
					type="radio"
					value="Historia"
					v-model="category"
					checked="checked"
				/>
				<label for="history">History</label>

				<input
					id="geography"
					name="category"
					type="radio"
					value="Geografi"
					v-model="category"
				/>
				<label for="geography">Geography</label>

				<input
					id="sport"
					name="category"
					type="radio"
					value="Sport"
					v-model="category"
				/>
				<label for="sport">Sport</label>

				<input
					id="music"
					name="category"
					type="radio"
					value="Musik"
					v-model="category"
				/>
				<label for="music">Music</label>
				<input
					id="general"
					name="category"
					type="radio"
					value="Allmän Fakta"
					v-model="category"
				/>
				<label for="general">General Knowledge</label>
				<input
					id="random"
					name="category"
					type="radio"
					value="RANDOM"
					v-model="category"
				/>
				<label for="random">Random</label>
			</div>
		</fieldset>
		<h3>Difficulty</h3>
		<fieldset id="difficulty">
			<div class="radio-btn-group">
				<input
					id="easy"
					name="difficulty"
					type="radio"
					value="easy"
					v-model="difficulty"
				/>
				<label for="easy">Easy</label>

				<input
					id="normal"
					name="difficulty"
					type="radio"
					value="normal"
					v-model="difficulty"
				/>
				<label for="normal">Normal</label>

				<input
					id="hard"
					name="difficulty"
					type="radio"
					value="hard"
					v-model="difficulty"
				/>
				<label for="hard">Hard</label>
			</div>
		</fieldset>
		<input type="submit" class="button" value="Start" />
	</form>
</template>

<script>
export default {
	name: 'QuizSettings',
	data() {
		return {
			category: 'RANDOM',
			difficulty: 'easy',
		};
	},
	methods: {
		startQuiz() {
			this.$emit('startQuiz', this.category, this.difficulty);
		},
	},
	mounted() {
		const categories = [
			'history',
			'music',
			'sports',
			'geography',
			'generalknowledge',
		];
		if (
			this.$route.query.category &&
			categories.includes(this.$route.query.category)
		) {
			document.getElementById(this.$route.query.category).checked = true;
		} else {
			document.getElementById('history').checked = true;
		}
		document.getElementById('easy').checked = true;
	},
};
</script>

<style scoped>
#difficulty {
	border: none;
}
#category {
	border: none;
}
.radio-btn-group {
	display: grid;
	padding-top: 20px;
	padding-bottom: 10px;
	text-align: center;
}
label {
	background: #fff;
	border: 1px solid #ddd;
	padding: 0.5rem 1.25rem;
	border-radius: 5px;
	cursor: pointer;
	color: #444;
	transition: box-shadow 400ms ease;
}
label:hover {
	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
input[type='radio'] {
	display: none;
}
input[type='radio']:checked + label {
	background: linear-gradient(to bottom, #0f228c 5%, #010440 100%);
	background-color: #0f228c;
	color: #fff;
}
</style>
