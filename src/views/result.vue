<template>
  <div class="main">
    <div class="wrapper">
      <div class="item1">
        <img alt="TheGeneral" src="../assets/GeneralKnowledge.png" class="img">
      </div>
      <div class="item2">
        <h3>Result</h3>
          <PlanetChart/>
      </div>
    </div>
  </div>

</template>
<script>
import PlanetChart from '@/components/PlanetChart.vue'

export default {
  components: {
    PlanetChart
  },
}
</script>
<style scoped>

.wrapper {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50vh;
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
}
/*Tablet*/
@media screen and (min-width: 768px) and (max-width: 1024px){
  .wrapper {
    display: grid;
    grid-template-columns: 25% 75%;
    grid-template-rows: 60vh;
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
    padding-left: 20px;
    padding-right: 5px;
    background: whitesmoke;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
}
@media screen and (min-width: 1024px) {
  .wrapper {
    display: grid;
    grid-template-columns: 30% 70%;
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
    border-radius: 0 25px 25px 0;
  }

}
</style>