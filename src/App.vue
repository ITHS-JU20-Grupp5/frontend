<template>
  <div id="app">
    <div id="nav">
      <h1>General Knowledge Quiz</h1>
      <router-link to="/" class="routerlink">Home</router-link> |
      <router-link to="/quiz" class="routerlink">Quiz</router-link> |
      <router-link to="/result" class="routerlink">Result</router-link> |
      <router-link to="/member" class="routerlink">Member</router-link> |
      <router-link to="/categories" class="routerlink">Categories</router-link>
    </div>
    <router-view/>
  </div>

</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');
/* Mobile */
body{
  background-image: linear-gradient(#010440, #0F228C);
}
*#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #F2D335;
  margin-top: 60px;
  font-size: 20px;
  justify-content:center;
  align-items:center;
}
.align_left{
  float: left;
}
.routerlink{
  color: #F2D335;
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
/*.bubble_right {*/
/*  float: right;*/
/*  text-align: left;*/
/*  position: relative;*/
/*  max-width: 30em;*/
/*  background-color: #fff;*/
/*  padding: 1.25em 1.5em;*/
/*  font-size: 1.25em;*/
/*  border-radius: 2rem;*/
/*  margin: clamp(10px, 1vw, 20px);*/
/*  box-shadow:	0 0.125rem 0.5rem rgba(0, 0, 0, .3), 0 0.0625rem 0.125rem rgba(0, 0, 0, .2)*/
/*}*/
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
  "a b";
  /*grid-gap: 20px;*/
}
.item1 {
  grid-area: a;
  background: whitesmoke;
  padding-inline: 1rem;
  border-bottom-left-radius: 25px;
  border-top-left-radius: 25px;
}
.item2 {
  grid-area: b;
  background: whitesmoke;
  border-bottom-right-radius: 25px;
  border-top-right-radius: 25px;
  /*padding-inline: 1rem;*/
  /*border-radius: 25px;*/
  /*float: right;*/
  /*text-align: left;*/
  /*position: relative;*/
  /*max-width: 30em;*/
  /*!*background-color: #fff;*!*/
  /*padding: 1.25em 1.5em;*/
  /*font-size: 1.25em;*/
  /*!*border-radius: 2rem;*!*/
  /*margin: clamp(10px, 1vw, 20px);*/
  /*box-shadow:	0 0.125rem 0.5rem rgba(0, 0, 0, .3), 0 0.0625rem 0.125rem rgba(0, 0, 0, .2)*/
}
.item3 {
  grid-area: c;
  background: whitesmoke;
  padding-inline: 1rem;
  border-radius: 25px;
}
/*.item4 {*/
/*  grid-area: d;*/
/*  background: whitesmoke;*/
/*  padding-inline: 1rem;*/
/*  border-radius: 25px;*/
/*}*/
/*.item5 {*/
/*  grid-area: e;*/
/*  background: whitesmoke;*/
/*  padding-inline: 1rem;*/
/*  border-radius: 25px;*/
/*}*/
/*.item6 {*/
/*  grid-area: f;*/
/*  background: whitesmoke;*/
/*  padding-inline: 1rem;*/
/*  border-radius: 25px;*/
/*}*/
/*.item7 {*/
/*  grid-area: g;*/
/*  background: whitesmoke;*/
/*  padding-inline: 1rem;*/
/*  border-radius: 25px;*/
/*}*/
/*.item8 {*/
/*  grid-area: h;*/
/*  background: whitesmoke;*/
/*  padding-inline: 1rem;*/
/*  border-radius: 25px;*/
/*}*/
/*.item9 {*/
/*  grid-area: i;*/
/*  background: whitesmoke;*/
/*  padding-inline: 1rem;*/
/*  border-radius: 25px;*/
/*}*/
/*.item10 {*/
/*  grid-area: j;*/
/*  background: whitesmoke;*/
/*  padding-inline: 1rem;*/
/*  border-radius: 25px;*/
/*}*/
/*.item11 {*/
/*  grid-area: k;*/
/*  background: whitesmoke;*/
/*  padding-inline: 1rem;*/
/*  border-radius: 25px;*/
/*}*/
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
input {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  border-color: transparent;
  box-shadow: 0 0.125rem 0.5rem #010440, 0 0.0625rem 0.125rem #0f228c;
}
#nav {
  font-family: New Tegomin, serif;
  text-align: center;
  color: #F2D335;
}



/* Desktop */
@media screen and (min-width: 768px){
  .main{
    margin: 0 auto;
    text-decoration: none;
    width: clamp(200px, 80vw, 90%);
    padding: 20px;
  }
  /*.wrapper {*/
  /*  display: grid;*/
  /*  color: #000;*/
  /*  grid-template-columns: 1fr 1fr 1fr 1fr;*/
  /*  grid-template-rows: auto auto auto auto;*/
  /*  height: 500px;*/
  /*  !*width: clamp(200px, 80vw, 90%);*!*/
  /*  gap: 10px;*/
  /*  grid-template-areas:*/
  /*    "a b b b b"*/
  /*    "a b b b b"*/
  /*    "c d e f g"*/
  /*    "c h i j k";*/
  /*}*/
  .img{
    width: 100px;
    height: auto;
  }
  .categories{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>





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