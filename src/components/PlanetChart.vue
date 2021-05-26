<template>
  <div>
    <canvas id="planet-chart"></canvas>
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
      planetChartData: planetChartData
    }
  },
  async mounted() {
    axios.defaults.headers.common.Authorization = "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
    const data = await axios.get("http://localhost:3000/scores")
    const scores = data.data
    console.log(scores)
    const ctx = document.getElementById('planet-chart');
    new Chart(ctx, this.planetChartData);
  }
}
</script>
<style scoped>
canvas {
  height: auto;
  width: clamp(200px, 50vw, 600px);
}
</style>