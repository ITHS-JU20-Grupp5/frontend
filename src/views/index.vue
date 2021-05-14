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
				<h3>Login</h3>
				<form class="form" @submit.prevent="handleLogin">
					<input
						class="input"
						type="text"
						name="username"
						v-model="loginUser.username"
						placeholder="Username"
					/><br />
					<input
						class="input"
						type="password"
						name="password"
						v-model="loginUser.password"
						placeholder="Password"
					/><br />
					<!-- <button class="button" type="button">
						Login
					</button> -->
					<input class="button" type="submit"  value="Login" />
				</form>
			</div>
			<div class="item3">
				<h2>Register</h2>
				<form class="form">
					<input
						class="input"
						type="text"
						id="username"
						name="username"
						placeholder="Username"
					/><br />
					<input
						class="input"
						type="text"
						id="name"
						name="name"
						placeholder="Name"
					/><br />
					<input
						class="input"
						type="email"
						id="email"
						name="email"
						placeholder="Email"
					/><br />
					<input
						class="input"
						type="password"
						id="password"
						name="password"
						placeholder="Password"
					/><br />
					<input
						class="input"
						type="password"
						id="password2"
						name="password2"
						placeholder="Confirm password"
					/><br />
					<button class="button" value="Submit" type="Submit" name="Submit">
						Register user
					</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import User from '../models/user';
export default {
	name: 'Login',
	data() {
		return {
			loginUser: new User('', ''),
			registerUser: new User('', '', '', ''),
		};
	},
	computed: {
		loggedIn() {
			return this.$store.state.auth.status.loggedIn;
		},
	},
	mounted() {
		if (this.loggedIn) {
			this.$router.push('/quiz');
		}
	},
	methods: {
		handleLogin() {
			// this.loading = true;
			// this.$validator.validateAll().then(isValid => {
			// if (!isValid) {
			// this.loading = false;
			// return;
			// }

			if (this.loginUser.username && this.loginUser.password) {
				this.$store.dispatch('auth/login', this.loginUser).then(
					() => {
						this.$router.push('/quiz');
					},
					// (error) => {
					// this.loading = false;
					// this.message =
					//   (error.response && error.response.data) || error.message || error.toString();
					// },
				);
			}
			// });
		},
		handleRegister() {
			// this.message = "";
			// this.submitted = true;
			// this.$validator.validate().then(isValid => {
			//   if (isValid) {
			this.$store
				.dispatch('auth/register', this.registerUser)
				.then
				// (data) => {
				// 	this.message = data.message;
				// 	this.successful = true;
				// },
				// (error) => {
				// this.message =
				//   (error.response && error.response.data) || error.message || error.toString();
				// this.successful = false;
				// },
				();
		},
		// });
	},
	//         },
	//         error => {
	//           this.loading = false;
	//           this.message =
	//             (error.response && error.response.data) || error.message || error.toString();
	//         }
	//       );
	//     }
	//   });
	// }
};
</script>
