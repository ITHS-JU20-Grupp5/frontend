<template>
  <div class="main">
    <div class="wrapper">
      <div class="item1"><img alt="TheGeneral" src="../assets/GeneralKnowledge.png" class="img"></div>
      <div class="item2">
        <h3>Login</h3>
        <p>
        <input type="text" name="username" v-model="input.username" placeholder="Username" /><br/>
        <input type="password" name="password" v-model="input.password" placeholder="Password" /><br/>
        <button type="button" v-on:click="login()">Login</button><br/>
        <button type="button" v-on:click="register()">Register</button>
        </p>
      </div>
<!--      <div class="item3">Item 3</div>-->
<!--      <div class="item4">Item 4</div>-->
<!--      <div class="item5">Item 5</div>-->
<!--      <div class="item6">Item 6</div>-->
<!--      <div class="item7">Item 7</div>-->
<!--      <div class="item8">Item 8</div>-->
<!--      <div class="item9">Item 9</div>-->
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