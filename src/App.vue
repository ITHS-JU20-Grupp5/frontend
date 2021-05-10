<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/quiz">Quiz</router-link> |
      <router-link to="/result">Result</router-link> |
      <router-link to="/member">Member</router-link>
    </div>
    <router-view/>
  </div>

</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "a",
        password: "password"
      }
    }
  },
  mounted() {
    if(!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');
/* Mobile */
*#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 20px;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto;
  grid-template-areas:
  "a"
  "b"
  "c"
  "d";
  grid-gap: 20px;
}

.item1 {
  grid-area: a;
  background: red;
}
.item2 {
  grid-area: b;
  background: yellow;
}
.item3 {
  grid-area: c;
  background: aqua;
}
.item4 {
  grid-area: d;
  background: orange;
}
p {
  font-family: Roboto, Helvetica, Arial, sans-serif, serif;
  font-size: 30px;
}

h1 {
  font-family: New Tegomin, serif;
}

#nav {
  font-family: New Tegomin, serif;
}

/* Desktop */
@media screen and (min-width: 768px){
  .result{
    margin: 0 auto;
    text-decoration: none;
    width: clamp(200px, 80vw, 90%);
  }

  .wrapper {
    display: grid;
    color: #000;
    grid-template-columns: 200px 1fr 1fr 1fr 1fr;
    grid-template-rows: auto auto auto auto;
    height: 500px;
    /*width: clamp(200px, 80vw, 90%);*/
    gap: 10px;
    grid-template-areas:
      "a b b b b"
      "a b b b b"
      "c d e f g"
      "c h i j k";
  }
  .item1 {
    grid-area: a;
    background: red;
  }
  .item2 {
    grid-area: b;
    background: yellow;
  }
  .item3 {
    grid-area: c;
    background: aqua;
  }
  .item4 {
    grid-area: d;
    background: orange;
  }
  .item5 {
    grid-area: e;
    background: orange;
  }
  .item6 {
    grid-area: f;
    background: orange;
  }
  .item7 {
    grid-area: g;
    background: orange;
  }
  .item8 {
    grid-area: h;
    background: orange;
  }
  .item9 {
    grid-area: i;
    background: orange;
  }
  .item10 {
    grid-area: j;
    background: orange;
  }
  .item11 {
    grid-area: k;
    background: orange;
  }
  .img{
    width: 100px;
    height: auto;
  }
}

</style>
