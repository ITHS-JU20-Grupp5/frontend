<template>
  <div id="app">
    <div id="nav">
      <h1>General Knowledge Quiz</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/quiz">Quiz</router-link> |
      <router-link to="/result">Result</router-link> |
      <router-link to="/member">Member</router-link>
    </div>
    <router-view/>
  </div>

</template>
<!--<script>-->
<!--export default {-->
<!--  name: 'app',-->
<!--  data() {-->
<!--    return {-->
<!--      authenticated: false,-->
<!--      mockAccount: {-->
<!--        username: "a",-->
<!--        password: "a"-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  mounted() {-->
<!--    if(!this.authenticated) {-->
<!--      this.$router.replace({ name: "login" });-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    setAuthenticated(status) {-->
<!--      this.authenticated = status;-->
<!--    },-->
<!--    logout() {-->
<!--      this.authenticated = false;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<style>
@import url('https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');
/* Mobile */
body{
  background-image: linear-gradient(#0F228C, #1F47BF);
}
*#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 20px;
  justify-content:center;
  align-items:center;

}

.bubble {
text-align: left;
  position: relative;
  max-width: 30em;
  background-color: #fff;
  padding: 1.25em 1.5em;
  font-size: 1.25em;
  border-radius: 2rem;
  margin: clamp(10px, 1vw, 20px);
  box-shadow:	0 0.125rem 0.5rem rgba(0, 0, 0, .3), 0 0.0625rem 0.125rem rgba(0, 0, 0, .2)
}

.bubble::before {
content: '';
  position: absolute;
  width: 0;
  height: 0;
  bottom: 100%;
  left: 1.5em;
  border: .75rem solid transparent;
  border-top: none;
  border-bottom-color: #fff;
  filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, .1));
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
  background: whitesmoke;
}
.item2 {
  grid-area: b;
  background: whitesmoke;
}
.item3 {
  grid-area: c;
  background: whitesmoke;
}
.item4 {
  grid-area: d;
  background: whitesmoke;
}
p {
  font-family: Roboto, Helvetica, Arial, sans-serif, serif;
  font-size: 30px;
}

h1 {
  font-family: New Tegomin, serif;
  text-align: center;
}
h2{
  font-family: New Tegomin, serif;
  text-align: center;
}
h3{
  font-family: New Tegomin, serif;
  text-align: start;
  padding-left: 20px;
  font-size: clamp(2rem, 4vw, 4rem);
}

button {
  box-shadow:inset 0px 1px 0px 0px #f2d335;
  background:linear-gradient(to bottom, #0f228c 5%, #010440 100%);
  background-color:#0f228c;
  border-radius:6px;
  border:1px solid #1f47bf;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Roboto, Helvetica, Arial, sans-serif;
  font-size:15px;
  font-weight:bold;
  padding:6px 24px;
  text-decoration:none;
  text-shadow:0px 1px 0px #0f228c;
}
button:hover {
  background:linear-gradient(to bottom, #010440 5%, #0f228c 100%);
  background-color:#010440;
}
button:active {
  position:relative;
  top:1px;
}


#nav {
  font-family: New Tegomin, serif;
  text-align: center;
}

/* Desktop */
@media screen and (min-width: 768px){
  .main{
    margin: 0 auto;
    text-decoration: none;
    width: clamp(200px, 80vw, 90%);
    padding: 20px;

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
    background: whitesmoke;
    padding-inline: 1rem;
    border-radius: 25px;
  }
  .item2 {
    grid-area: b;
    background: whitesmoke;
    padding-inline: 1rem;
    border-radius: 25px;
  }
  .item3 {
    grid-area: c;
    background: whitesmoke;
    padding-inline: 1rem;
    border-radius: 25px;
  }
  .item4 {
    grid-area: d;
    background: whitesmoke;
    padding-inline: 1rem;
    border-radius: 25px;
  }
  .item5 {
    grid-area: e;
    background: whitesmoke;
    padding-inline: 1rem;
    border-radius: 25px;
  }
  .item6 {
    grid-area: f;
    background: whitesmoke;
    padding-inline: 1rem;
    border-radius: 25px;
  }
  .item7 {
    grid-area: g;
    background: whitesmoke;
    padding-inline: 1rem;
    border-radius: 25px;
  }
  .item8 {
    grid-area: h;
    background: whitesmoke;
    padding-inline: 1rem;
    border-radius: 25px;
  }
  .item9 {
    grid-area: i;
    background: whitesmoke;
    padding-inline: 1rem;
    border-radius: 25px;
  }
  .item10 {
    grid-area: j;
    background: whitesmoke;
    padding-inline: 1rem;
    border-radius: 25px;
  }
  .item11 {
    grid-area: k;
    background: whitesmoke;
    padding-inline: 1rem;
    border-radius: 25px;
  }
  .img{
    width: 100px;
    height: auto;
  }
}

</style>
