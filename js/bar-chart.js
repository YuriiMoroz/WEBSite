var ctx = document.getElementById("chart");
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        data: [470, 210, 210, 210, 470, 370, 470, 470, 470, 370, 470, 470],
        backgroundColor: [
          '#303f9f',
          '#303f9f',
          '#303f9f',
          '#303f9f',
          '#303f9f',
          '#303f9f',
          '#303f9f',
          '#303f9f',
          '#303f9f',
          '#303f9f',
          '#303f9f',
          '#303f9f',
        ],

      },
      {
        data: [230, 90, 105, 110, 180, 150, 280, 200, 220, 130, 230, 140],
        backgroundColor: [
          '#3f51b5',
          '#3f51b5',
          '#3f51b5',
          '#3f51b5',
          '#3f51b5',
          '#3f51b5',
          '#3f51b5',
          '#3f51b5',
          '#3f51b5',
          '#3f51b5',
          '#3f51b5',
          '#3f51b5',
          '#3f51b5',
        ],
      }
    ]
  },
  options: {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false,
        },

        stacked: true,
        ticks: {
          beginAtZero: true
        },
        scaleLabal: {
          display: false,
        }
      }],
      xAxes: [{
        gridLines: {
          display: false,
        },

        stacked: true,
        ticks: {
          beginAtZero: true
        }
      }]

    }
  }
});
