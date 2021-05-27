<template>
  <div>
    <canvas class="hej" id="planet-chart"></canvas>

  </div>
</template>

<script>
import Chart from 'chart.js'
import planetChartData from '@/planet-data.js'
import axios from "axios";

export default {
  name: 'PlanetChart',
  data() {
    return {
      planetChartData: planetChartData,
      scores: "",
      data: "",
      categoryId: "",
      history: 0,
    }
  },
  async mounted() {
    axios.defaults.headers.common.Authorization = "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
    const data = await axios.get("http://localhost:3000/scores")
    const scores = data.data
    console.log(scores)
    const ctx = document.getElementById('planet-chart');
    new Chart(ctx, this.planetChartData);
    if(scores.categoryId[1]){
      console.log('scores.categoryId')
      // else if(scores.categoryId === 2)
    }

  },
  // methods:{
  //   displayScoresOnEachCategory(){
  //     if(this.categoryId === 1){
  //       console.log(this.scores.score)
  //       // take score and add it to scoreTotal
  //     }
  //   }
  // }
}
</script>
<style scoped>
.hej{
  display: flex;
  width: clamp(200px, 50vw, 1000px);
}
canvas#planet-chart{
  display: flex;
  height: auto;
  width: clamp(200px, 50vw, 1000px);
}
</style>