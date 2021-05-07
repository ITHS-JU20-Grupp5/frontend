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

<!--<script>-->
<!--import HelloWorld from './components/HelloWorld.vue'-->

<!--export default {-->
<!--  name: 'App',-->
<!--  components: {-->
<!--    HelloWorld-->
<!--  }-->
<!--}-->
<!--</script>-->

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
@media screen and (min-width: 1025px){
  .wrapper {
    display: grid;
    color: #000;
    /*padding-left: 4vw;*/
    /*padding-right: 4vw;*/
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 200px auto auto 200px;
    height: 500px;
    width: clamp(200px, 80vw, 90%);
    gap: 10px;
    grid-template-areas:
      "a a b b b"
      "a a b b b"
      "c c d d d";
    /*grid-template-columns: auto;*/
    /*grid-template-rows: auto;*/
    /*text-align: left;*/
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
}

</style>
