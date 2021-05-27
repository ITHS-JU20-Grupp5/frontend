<template>
  <div class="main">
    <div class="wrapper">
      <div class="item1">
        <img alt="TheGeneral" src="../assets/GeneralKnowledge.png" class="img">
      </div>
      <div class="item2">
        <h3>Admin</h3>
        <form>
          <br/>
          <input class="input" type="text" name="addQuestionField" placeholder="New Question"><br/>
          <input class="input" type="text" name="addQuestionField" placeholder="Answer 1"><br/>
          <input class="input" type="text" name="addQuestionField" placeholder="Answer 2"><br/>
          <input class="input" type="text" name="addQuestionField" placeholder="Answer 3"><br/>
          <input class="input" type="text" name="addQuestionField" placeholder="Answer 4"><br/>
          <input class="input" type="text" name="addQuestionField" placeholder="Answer 5"><br/>
          <input class="input" type="text" name="addQuestionField" placeholder="Answer 6"><br/>
          <br>
        </form>
        </div>
      <div class="item3">
        <h3>Categories</h3>
        <p>
          <button class="button" type="button" v-on:click="history()">
            History
          </button>
          <button class="button" type="button" v-on:click="sports()">
            Sports</button
          ><br />
          <button class="button" type="button" v-on:click="geography()">
            Geography
          </button>
          <button class="button" type="button" v-on:click="generalKnowledge()">
            General knowledge
          </button>
          <p>
          <button class="submit" type="submit" v-on:click="submit()" id="submitQuiz">
            Submit
          </button>
        </p>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: "admin",
  data() {
    return {
      questions: [],
      loading: true,
      index: 0,
      correctAnswers: 0,
    };
  },
  computed: {
    currentQuestion() {
      if (this.questions !== []) {
        return this.questions[this.index];
      }
      return null;
    },
  },
  methods: {
    async fetchQuestions() {
      this.loading = true;

      let quizVariabel = await this.$store.dispatch('quiz/getQuiz', {category: "Historia", difficulty: "hard"});

      // let jsonResponse = await quizVariabel.json();
      //let index = 0; // index is used to identify single answer
      let data = quizVariabel.questions;
      this.questions = data;
      this.loading = false;
    },
    submit(){
      console.log('Hej')
    },
    handleButtonClick: function(event) {
      /* Find index to identiy question object in data */
      let index = event.target.getAttribute("index");
      let pollutedUserAnswer = event.target.innerHTML; // innerHTML is polluted with decoded HTML entities e.g ' from &#039;
      /* Clear from pollution with ' */
      let userAnswer = pollutedUserAnswer.replace(/'/, "&#039;");

      //console.log(index, this.questions)
      /* Set userAnswer on question object in data */
      this.questions[this.index].userAnswer = userAnswer;

      /* Set class "clicked" on button with userAnswer -> for CSS Styles; Disable other sibling buttons */
      event.target.classList.add("clicked");
      let allButtons = document.querySelectorAll(`[index="${index}"]`);

      for (let i = 0; i < allButtons.length; i++) {
        if (allButtons[i] === event.target) continue;

        allButtons[i].setAttribute("disabled", "");
      }

      /* Invoke checkAnswer to check Answer */
      this.checkAnswer(event, index);
    },
  },
  mounted() {
    this.fetchQuestions();
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

  .button:focus{
    color: #010440;
    background: linear-gradient(
        180deg,
        rgb(246, 229, 176),
        rgb(255, 211, 0)
    );
  }
  #submitQuiz:active:enabled {
    position: relative;
    top: 1px;
    color: #FFF;
    background: linear-gradient(
        180deg,
        rgb(13, 37, 135),
        rgb(49, 84, 201)
    );
  }


@media screen and (min-width: 768px) and (max-width: 1024px){
  .wrapper {
    display: grid;
    grid-template-columns: 30% 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'a b c';
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
    align-content: start;
    padding-inline: 1rem;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
  }
  .item4 {
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