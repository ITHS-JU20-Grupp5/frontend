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
        <p></p>
			<input
				id="general"
				type="radio"
				value="Allmän Fakta"
				checked
				v-model="category"
			/>
			<label for="general">General Knowledge</label>
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
};
</script>

<style scoped>
#difficulty{
  border: none;
}
#category{
  border: none;
}
.radio-btn-group {
  padding-top: 20px;
  padding-bottom: 10px;
  text-align: center;
}
label {
  background: #fff;
  border: 1px solid #ddd;
  padding: .5rem 1.25rem;
  border-radius: 5px;
  cursor: pointer;
  color: #444;
  transition: box-shadow 400ms ease;

}
label:hover {
   box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
 }
input[type="radio"] {
  display: none;

}
input[type="radio"]:checked+label {
  background: #2196F3;
  color: #fff;
  border-color: #2196F3;
}
</style>
