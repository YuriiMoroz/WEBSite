new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
    labels: ["Chrom", "Safari", "Firefox"],
      datasets: [{
        borderWidth: 0,
      //  label: "Population (millions)",
        backgroundColor: ["#303f9f","#38b4ee", "#4caf50"],
        data: [59,27,14]
      }]
    },
    options: {
      rotation: 46,
      legend:{
        display: false,
      },
      // title: {
      //   // display: true,
      //   // text: 'Predicted world population (millions) in 2050'
      // }
    }
});
