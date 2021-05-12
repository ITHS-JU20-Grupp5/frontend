<template>
  <div class="main">
    <div class="wrapper">
      <div class="item1"><img alt="TheGeneral" src="../assets/GeneralKnowledge.png" class="img"></div>
      <div class="item2">
        <h3>Categories</h3>
            <p>
            <button type="button" v-on:click="login()">History</button>
            <button type="button" v-on:click="register()">Sports</button><br/>
            <button type="button" v-on:click="login()">Geography</button>
            <button type="button" v-on:click="register()">General knowledge</button>
            </p>
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