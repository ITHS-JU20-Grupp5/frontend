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
				<h3>Settings</h3>
				<form>
					<!-- <input class="input" type="text" id="username" name="username" placeholder="Username">
              <button value="changename" type="button" name="changename" class="buttonSettings & button">Change</button> -->
					<input
						class="input"
						type="text"
						id="name"
						name="name"
						placeholder="Name"
						v-model="name"
					/>
					<button
						value="changelname"
						type="button"
						name="changelname"
						class="buttonSettings & button"
						@click="updateName"
					>
						Change
					</button>
					<!-- <input class="input" type="email" id="email" name="email" placeholder="Email">
              <button value="changeemail" type="button" name="changeemail" class="buttonSettings & button">Change</button> -->
					<input
						class="input"
						type="password"
						id="password"
						name="password"
						placeholder="Password"
						v-model="password"
					/><br />
					<input
						class="input"
						type="password"
						id="password2"
						name="password2"
						placeholder="Confirm password"
						v-model="confirmPassword"
					/>
					<button
						value="changepassword"
						type="button"
						name="changepassword"
						class="buttonSettings & button"
						@click="updatePassword"
					>
						Change
					</button>
					<br />
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			name: '',
			password: '',
			confirmPassword: '',
		};
	},
	computed: {
		currentUser() {
			return this.$store.state.auth.user;
		},
	},
	methods: {
		async updateName() {
			axios.defaults.headers.common.Authorization =
				'Bearer ' + this.currentUser.accessToken;

			await axios.patch('https://generalknowledge.azurewebsites.net/users', {
				name: this.name,
			});
		},
		async updatePassword() {
			if (this.password === this.confirmPassword) {
				axios.defaults.headers.common.Authorization =
					'Bearer ' + this.currentUser.accessToken;

				await axios.patch('https://generalknowledge.azurewebsites.net/users', {
					password: this.password,
				});
			}
		},
	},
};
</script>

<style scoped>
@media screen and (max-width: 767px) {
	.wrapper {
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: auto;
		grid-template-areas: 'b';
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
		padding-bottom: 20px;
		padding-left: 15px;
	}
}

/*Tablet*/
@media screen and (min-width: 768px) and (max-width: 1024px) {
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
		border-top-right-radius: 25px;
		border-bottom-right-radius: 25px;
	}
	form {
		width: 300px;
	}
}
@media screen and (min-width: 1025px) {
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
		justify-content: left;
		padding-left: 150px;
		border-radius: 0 25px 25px 0;
	}
	form {
		width: 500px;
	}
}
</style>
