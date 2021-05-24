var dada = document.getElementById("line-chart").getContext('2d');
var gradient=dada.createLinearGradient(600,0,0,0);
gradient.addColorStop(0, "#4daf4f");
gradient.addColorStop(0.2, "#95ad2f");
gradient.addColorStop(0.4, "#ff6b00");
gradient.addColorStop(0.6, "#c24a3b");
gradient.addColorStop(0.8, "#664d90");
gradient.addColorStop(1, "#50af4e");

new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [{
        borderWidth: 10,
        pointRadius: 0,
        data: [2300,1700,2050,1800,1700,1610,1830,2200,1800,2270],
        borderColor: gradient,
        fill: false
      },

    ]
  },
  options: {
    legend:{
      display:false,
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
          beginAtZero: true
        }
      }],
    },
  }
});
