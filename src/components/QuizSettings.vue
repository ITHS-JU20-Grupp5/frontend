<template>
	<form @submit="startQuiz">
		<h3>Categories</h3>
		<fieldset id="category">
			<input
				id="history"
				name="category"
				type="radio"
				value="Historia"
				v-model="category"
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
				type="radio"
				value="Allmän Fakta"
				checked
				v-model="category"
			/>
			<label for="general">General Knowledge</label>
		</fieldset>

		<h3>Difficulty</h3>
		<fieldset id="difficulty">
			<input
				id="easy"
				name="difficulty"
				type="radio"
				value="easy"
				checked
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
};
</script>

<style scoped></style>
