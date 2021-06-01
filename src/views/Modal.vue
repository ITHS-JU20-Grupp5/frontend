<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h2>{{ header }}</h2>
            <h3>{{ subheader }}</h3>
          </div>

          <div class="modal-body">
            <div id="score">
              You answered
              <span class="highlight">
                {{
                  Math.floor(
                    (quizScore.correctlyAnsweredQuestions /
                      quizScore.allQuestions) *
                      100
                  )
                }}
                % correctly!
              </span>
              Answered
              <span class="highlight">
                {{ quizScore.correctlyAnsweredQuestions }} out of
                {{ quizScore.answeredQuestions }}
              </span>
              questions.
            </div>
          </div>

          <audio ref="allWrong" src="../assets/AllWrong.mp3"></audio>
          <audio ref="one" src="../assets/LowestFormOfLife.mp3"></audio>
          <audio ref="two" src="../assets/Offend.mp3"></audio>
          <audio ref="three" src="../assets/AnswerTheQuestion.mp3"></audio>
          <audio ref="four" src="../assets/GeneralSomeday.mp3"></audio>
          <audio ref="five" src="../assets/Genius.mp3"></audio>

          <div class="modal-footer">
            <button
              id="play-again"
              class="button"
              @click="$emit('reload')"
            >
              Play Again
            </button>
            <button
                id="feedback"
                class="button-footer"
                @click="playResultSfx()"
            >
              The General's Feedback!
            </button>
            <button
              id="close-button"
              class="button"
              @click="$emit('close')"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    header: String,
    subheader: String,
    quizScore: Object,
  },
  methods: {
    playResultSfx: function () {
      if (this.quizScore.correctlyAnsweredQuestions === 0) {
        this.$refs.allWrong.play();
      } else if (this.quizScore.correctlyAnsweredQuestions === 1) {
        this.$refs.one.play();
      } else if (this.quizScore.correctlyAnsweredQuestions === 2) {
        this.$refs.two.play();
      } else if (this.quizScore.correctlyAnsweredQuestions === 3) {
        this.$refs.three.play();
      } else if (this.quizScore.correctlyAnsweredQuestions === 4) {
        this.$refs.four.play();
      } else if (this.quizScore.correctlyAnsweredQuestions === 5) {
        this.$refs.five.play();
      }
    }
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 90vw;
  max-width: 650px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header {
  text-align: center;
}


.modal-body {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  line-height: 3rem;
}

.modal-body > * {
  margin: 1rem 0;
  padding: 0.25rem 0.5rem;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
}

.button-footer {
  padding: 1rem 2rem;
  background: linear-gradient(
    210deg,
    rgba(187, 0, 47, 0.8),
    rgba(245, 0, 87, 0.6)
  );
  border-radius: 7px;
  border: none;
}

#feedback {
  padding: 1rem 2rem;
  background: linear-gradient(
      210deg,
      #0f228c,
      yellow
  );
  border-radius: 7px;
  border: none;
}
.anchor-footer {
  color: black;
  text-decoration: none;
  cursor: default;
}

.button-footer:active,
.button-footer:focus {
  outline: none;
}

.button-footer:hover {
  transform: scale(1.02);
}

.highlight {
  border-radius: 4px;
  background-color: rgba(0, 178, 72, 0.5);
  padding: 0.25rem 0.5rem;
}

#score {
  background-color: whitesmoke;
  border-radius: 5px;
  box-shadow: 2px 3px 9px gray;
}

#chooseCategory {
  text-align: center;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
