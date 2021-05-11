<template>
  <div class="main">
    <div class="wrapper">
      <div class="item1"><img alt="TheGeneral" src="../assets/GeneralKnowledge.png" class="img"></div>
      <div class="item2">
        <h3>Login</h3>
          <div class="align_left"> <p>
            <input type="text" name="username" v-model="input.username" placeholder="Username" /><br/>
            <input type="password" name="password" v-model="input.password" placeholder="Password" /><br/>
            <button type="button" v-on:click="login()">Login</button><br/>
            <button type="button" v-on:click="register()">Register</button>
            </p>
            <div>
              <h3>Register</h3>
              <form>
                <label for="fname">First name</label>
                <br>
                <input type="text" id="fname" name="firstname" placeholder="Your name...">
                <br>
                <label for="lname">Last name</label>
                <br>
                <input type="text" id="lname" name="lastname" placeholder="Your last name...">
                <br>
                <label for="phone">Phone</label>
                <br>
                <input type="tel" id="phone" name="phone" placeholder="Phone number">
                <br>
                <label for="email">Email</label>
                <br>
                <input type="email" id="email" name="email" placeholder="your@email.here">
                <br>
                <label for="password">Password</label>
                <br>
                <input type="password" id="password" name="password" placeholder="Password">
                <br>
                <input type="password" id="password2" name="password2" placeholder="Confirm password">
                <br>
                <button value="Submit" type="Submit" name="Submit">Register user</button>
                <br>
              </form>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    }
  },
  // methods: {
  //   login() {
  //     if(this.input.username != "" && this.input.password != "") {
  //       if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
  //         this.$emit("authenticated", true);
  //         this.$router.replace({ name: "result" });
  //       } else {
  //         console.log("The username and / or password is incorrect");
  //       }
  //     } else {
  //       console.log("A username and password must be present");
  //     }
  //   }
  // }
}
</script>

<!--<style scoped>-->
<!--#login {-->
<!--  margin: auto;-->
<!--}-->
<!--</style>-->