<template>
  <div class="main">
    <audio autoplay controls="controls" id="audio">
      <source src="../assets/Fanfare.mp3" type="audio/mpeg">
    </audio>
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
@media screen and (min-width: 1024px) {
  .wrapper {
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: auto;
    grid-template-areas: 'a b';
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
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 0px;
  }

}
</style>