<template>
  <div id="app">
    <div id="nav">
      <header>
      <img src="assets/generalknowledgebanner.png"/>
      </header>
      <h1>General Knowledge Quiz</h1>
      <router-link to="/" class="routerlink">Home</router-link> |
      <router-link to="/quiz" class="routerlink">Quiz</router-link> |
      <router-link to="/result" class="routerlink">Result</router-link> |
      <router-link to="/settings" class="routerlink">Settings</router-link>

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
.main{
  margin: 0 auto;
  text-decoration: none;
  width: clamp(200px, 80vw, 90%);
  padding: 20px;
}
*#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #010440;
  margin-top: 60px;
  font-size: 20px;
  justify-content:center;
  align-items:center;
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

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
  "a b"
  "c c";
}
.item1 {
  grid-area: a;
  background: whitesmoke;
  padding-inline: 1rem;
  border-top-left-radius: 25px;
  padding-bottom: 20px;
}

.item2 {
  grid-area: b;
  background: whitesmoke;
  border-top-right-radius: 25px;
}
.item3 {
  grid-area: c;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-self: inherit;
  background: whitesmoke;
  padding-inline: 1rem;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  padding-bottom: 20px;
}
p {
  font-family: Roboto, Helvetica, Arial, sans-serif, serif;
  font-size: 20px;
}
h1 {
  font-family: New Tegomin, serif;
  text-align: center;
  font-size: clamp(2rem, 5vw, 5rem);
}
h2{
  font-family: New Tegomin, serif;
  text-align: center;
}
h3{
  font-family: New Tegomin, serif;
  text-align: left;
  margin-bottom: 2px;
  font-size: clamp(2rem, 4vw, 4rem);
}
.form{
  line-height: 35px;

}
label{
  font-size: 20px;
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
  padding:6px 25px;
  width: clamp(125px, 11vw, 180px);
  margin-right: 5px;
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
.buttonSettings{
  margin-left: 5px;
}
.input {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: clamp(12px, 1vw, 14px);
  border-color: transparent;
  box-shadow: 0 0.125rem 0.5rem #010440, 0 0.0625rem 0.125rem #0f228c;
  margin-bottom: 10px;
  width: clamp(120px, 11vw, 170px);
}
#nav {
  font-family: New Tegomin, serif;
  text-align: center;
  color: #F2D335;
}
.img{
  width: 100%;
  height: auto;
}

/* Desktop */
@media screen and (min-width: 1024px){

  .wrapper {
    display: grid;
    grid-template-columns: 30% 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
  "a b c";
  }

  .item1 {
    grid-area: a;
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
    border-top-right-radius: 0px;
  }
  .item3 {
    grid-area: c;
    background: whitesmoke;
    padding-inline: 1rem;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    padding-bottom: 20px;
  }

}
</style>