const graphOne = document.getElementById("graph-1");
const graphTwo = document.getElementById("graph-2");
const graphThree = document.getElementById("graph-3");
const graphFour = document.getElementById("graph-4");

const data1 = {
  labels: [
    "Red",
    "Blue",
    "Yellow",
    "Green",
    "Purple",
    "Pink",
    "Black",
    "Orange",
  ],
  data: [12, 19, 3, 5, 2, 3, 5, 5],
};

const chartTypes = ["bar", "polarArea", "line", "pie"];
const graphElements = [graphOne, graphTwo, graphThree, graphFour];

function createChart(element, chartType, chartData) {
  new Chart(element, {
    type: chartType,
    data: {
      labels: chartData.labels,
      datasets: [
        {
          label: "# of Votes",
          data: chartData.data,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

for (let i = 0; i < chartTypes.length; i++) {
  createChart(graphElements[i], chartTypes[i], data1);
}
