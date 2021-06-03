<template>
	<div>
		<h1>High Score</h1>
		<canvas id="categoryhighscore"></canvas>
		<h1>Average Score</h1>
		<canvas id="score"></canvas>
	</div>
</template>

<script>
import Chart from 'chart.js';
import axios from 'axios';

export default {
	name: 'Chart',
	data() {
		return {
			categoryHighScores: {},
			scores: [],
		};
	},
	methods: {
		generateChartData(data, title) {
			return {
				type: 'bar',
				data: {
					labels: [
						'History',
						'Sports',
						'Geography',
						'Music',
						'General Knowledge',
					],
					datasets: [
						{
							label: 'Statistics',
							data,
							backgroundColor: [
								'rgba(255, 99, 132, 0.6)',
								'rgba(54, 162, 235, 0.6)',
								'rgba(255, 206, 86, 0.6)',
								'rgba(75, 192, 192, 0.6)',
								'rgba(153, 102, 255, 0.6)',
							],
							borderColor: [
								'rgba(255, 99, 132, 1)',
								'rgba(54, 162, 235, 1)',
								'rgba(255, 206, 86, 1)',
								'rgba(75, 192, 192, 1)',
								'rgba(153, 102, 255, 1)',
							],
							borderWidth: 1,
							hoverBorderColor: '#000',
							hoverBorderWidth: 2,
						},
					],
				},
				options: {
					plugins: {
						title: {
							display: true,
							text: title,
						},
					},
					responsive: true,
					lineTension: 1,
					scales: {
						yAxes: [
							{
								ticks: {
									beginAtZero: true,
									padding: 25,
								},
							},
						],
					},
					legend: {
						display: false,
					},
				},
			};
		},
	},
	async mounted() {
		axios.defaults.headers.common.Authorization =
			'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken;
		const allScores = await axios.get(
			'https://generalknowledge.azurewebsites.net/scores',
		);
		this.scores = allScores.data;

		this.scores.sort((a, b) => {
			let n = b.score - a.score;
			if (n !== 0) return n;

			return b.categoryId - a.categoryId;
		});

		Array.from(new Set(this.scores.map((a) => a.categoryId)))
			.map((id) => {
				return this.scores.find((a) => a.categoryId === id);
			})
			.forEach((score) => {
				if (score.category.category === 'Geografi')
					this.categoryHighScores.geography = score;
				else if (score.category.category === 'Historia')
					this.categoryHighScores.history = score;
				else if (score.category.category === 'Musik')
					this.categoryHighScores.music = score;
				else if (score.category.category === 'Allmän Fakta')
					this.categoryHighScores.general = score;
				else if (score.category.category === 'Sport')
					this.categoryHighScores.sports = score;
			});

		const averages = {
			geography: {
				score: 0,
				count: 0,
			},
			sports: {
				score: 0,
				count: 0,
			},
			history: {
				score: 0,
				count: 0,
			},
			music: {
				score: 0,
				count: 0,
			},
			general: {
				score: 0,
				count: 0,
			},
		};

		this.scores.forEach((score) => {
			if (score.category.category === 'Geografi') {
				averages.geography.score += score.score;
				averages.geography.count += 1;
			} else if (score.category.category === 'Historia') {
				averages.history.score += score.score;
				averages.history.count += 1;
			} else if (score.category.category === 'Musik') {
				averages.music.score += score.score;
				averages.music.count += 1;
			} else if (score.category.category === 'Allmän Fakta') {
				averages.general.score += score.score;
				averages.general.count += 1;
			} else if (score.category.category === 'Sport') {
				averages.sports.score += score.score;
				averages.sports.count += 1;
			}
		});

		new Chart(
			document.getElementById('score'),
			this.generateChartData(
				[
					averages.history.score / averages.history.count || 0,
					averages.sports.score / averages.sports.count || 0,
					averages.geography.score / averages.geography.count || 0,
					averages.music.score / averages.music.count || 0,
					averages.general.score / averages.general.count || 0,
				],
				'Average Score',
			),
		);

		new Chart(
			document.getElementById('categoryhighscore'),
			this.generateChartData(
				[
					this.categoryHighScores.history?.score || 0,
					this.categoryHighScores.sports?.score || 0,
					this.categoryHighScores.geography?.score || 0,
					this.categoryHighScores.music?.score || 0,
					this.categoryHighScores.general?.score || 0,
				],
				'High Score',
			),
		);
	},
};
</script>
<style scoped>
canvas {
	display: flex;
	height: auto;
	width: clamp(200px, 50vw, 1000px);
}
</style>
