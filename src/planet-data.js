export const planetChartData = {
    type: "bar",
    data: {
        labels: ["History", "Sports", "Geography", "General Knowledge"],
        datasets: [
            // {
            //     label: "Number of Moons",
            //     data: [0, 0, 1, 2],
            //     backgroundColor: "rgba(54,73,93,.5)",
            //     borderColor: "#36495d",
            //     borderWidth: 3
            // },
            {
                label: "Statistik",
                data: [0.166, 2.081, 3.003, 0.323],
                backgroundColor: ['rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',],
                borderColor:[
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'],
                borderWidth: 3
            }
        ]
    },
    options: {
        responsive: true,
        lineTension: 1,
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        padding: 25
                    }
                }
            ]
        }
    }
};

export default planetChartData;