export const planetChartData = {
	type: 'bar',
	data: {
		labels: ['History', 'Sports', 'Geography', 'Music', 'General Knowledge'],
		datasets: [
			{
				label: 'Statistik',
				data: [1, 2, 3, 4, 5],
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
				text: 'Custom Chart Title',
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

export default planetChartData;
