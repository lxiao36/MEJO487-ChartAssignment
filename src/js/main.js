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
console.log(data1);

new Chart(graphOne, {
  type: "bar",
  data: {
    labels: data1.labels,
    datasets: [
      {
        label: "# of Votes",
        data: data1.data,
        borderWidth: 1,
      },
    ],
  },
  options: {
    indexAxis: "y",
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(graphTwo, {
  type: "bar",
  data: {
    labels: data1.labels,
    datasets: [
      {
        label: "# of Votes",
        data: data1.data,
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

new Chart(graphThree, {
  type: "line",
  data: {
    labels: data1.labels,
    datasets: [
      {
        label: "# of Votes",
        data: data1.data,
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

new Chart(graphFour, {
  type: "pie",
  data: {
    labels: data1.labels,
    datasets: [
      {
        label: "# of Votes",
        data: data1.data,
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
