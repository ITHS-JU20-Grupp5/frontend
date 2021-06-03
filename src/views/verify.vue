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
          <div class="bubble">
            <h1>Please verify your account!</h1>
          <p>It's important that you verify so that we get to know you better and so that you aren't some nasty Godforsaken robot of some sort</p>
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>

  h1 {
    font-family: New Tegomin, serif;
    text-align: center;
    font-size: clamp(2rem, 3vw, 4rem);
  }
  .wrapper {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-template-areas:
		'b';
  }
  .item1 {
    grid-area: a;
    display: none;
  }
  .item2 {
    grid-area: b;
    display: grid;
    justify-content: center;
    align-content: start;
    background: whitesmoke;
    border-radius: 25px;
    padding-bottom: 10px;
    padding-top: 10px;
  }

.bubble {
  text-align: left;
  position: relative;
  width: clamp(200px, 12vw, 400px);
  background-color: #fff;
  padding: 1em 1em;
  font-size: 1em;
  border-radius: 2rem;
  margin: clamp(20px, 1vw, 20px);
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
  0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
}

/*Tablet*/
@media screen and (min-width: 768px) and (max-width: 1024px){

  .bubble {
    text-align: left;
    position: relative;
    width: clamp(300px, 15vw, 600px);
    background-color: #fff;
    padding: 0.5em 3em;
    font-size: 1em;
    border-radius: 2rem;
    margin: clamp(20px, 1vw, 20px);
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
    0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
  }
  .wrapper {
    display: grid;
    grid-template-columns: 25% 70%;
    grid-template-rows: auto;
    grid-template-areas: 'a b';
  }
  .item1 {
    grid-area: a;
    display: grid;
    background: whitesmoke;
    padding-inline: 1rem;
    border-bottom-left-radius: 25px;
    border-top-left-radius: 25px;
    border-top-right-radius: 0px;
    padding-bottom: 20px;
  }
  .item2 {
    grid-area: b;
    padding-left: 5px;
    padding-right: 5px;
    background: whitesmoke;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
  }
  form{
    width: 300px;
  }
}
@media screen and (min-width: 1025px) {
  .wrapper {
    display: grid;
    grid-template-columns: 25% 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'a b';
  }
  .item1 {
    grid-area: a;
    display: grid;
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
    justify-content: left;
    padding-left: 150px;
    border-radius: 0 25px 25px 0;
  }
  .bubble {
    text-align: left;
    position: relative;
    width: clamp(500px, 15vw, 600px);
    background-color: #fff;
    padding: 0.5em 3em;
    font-size: 1em;
    border-radius: 2rem;
    margin: clamp(20px, 1vw, 20px);
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
    0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
  }
  form{
    width: 500px;
  }
}
</style>