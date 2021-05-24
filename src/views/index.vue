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
        <div class="bubble">Tjo bre</div>
      </div>
			<div class="item3">
				<h2>Login</h2>
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

					<button class="submit" type="submit" value="Login" id="loginButton">Login</button>
          </form>
        <h2>Register</h2>
        <form class="form" @submit.prevent="handleRegister">
          <input
              class="input"
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              v-model="registerUser.username"
          /><br />
          <input
              class="input"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              v-model="registerUser.name"
          /><br />
          <input
              class="input"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              v-model="registerUser.email"
          /><br />
          <input
              class="input"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              v-model="registerUser.password"
          /><br />
          <input
              class="input"
              type="password"
              id="password2"
              name="password2"
              placeholder="Confirm password"
              v-model="confirmPassword"
          /><br />
          <button class="submit" type="submit" value="Register" id="registerButton">Register</button>
          <p class="warning" v-if="confirmPassword !==registerUser.password && confirmPassword">Passwords must match!</p>
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
			confirmPassword: '',
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
			if (this.loginUser.username && this.loginUser.password) {
				this.$store.dispatch('auth/login', this.loginUser).then(
					() => {
						this.$router.push('/quiz');
					},
				);
			}
		},
		handleRegister() {
			if (this.confirmPassword === this.registerUser.password) {
				this.$store
					.dispatch('auth/register', this.registerUser)
					.then((data) => {
						console.log(data);
					});
			}
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

.warning{
  color: red;
  font-weight: bolder;
}

.button:focus{
  color: #010440;
  background: linear-gradient(
      180deg,
      rgb(246, 229, 176),
      rgb(255, 211, 0)
  );
}
#registerButton:active:enabled {
  position: relative;
  top: 1px;
  color: #FFF;
  background: linear-gradient(
      180deg,
      rgb(13, 37, 135),
      rgb(49, 84, 201)
  );
}
#loginButton:active:enabled {
  position: relative;
  top: 1px;
  color: #FFF;
  background: linear-gradient(
      180deg,
      rgb(13, 37, 135),
      rgb(49, 84, 201)
  );
}
</style>