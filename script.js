let chart1 = document.getElementById("bar")
let usPollution = new Chart(chart1, {
  type: "bar",
  data: {
    labels: ['1990', '2000', '2010', '2019'],
    datasets: [{
      label: 'USA Pm 2.5 Concentration',
      data: [0, 13.5, 10, 7.6],
      backgroundColor: ["white", "blue", "green", "yellow"]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Amount of pm 2.5 in the air',
    }
  }
});

let chart2 = document.getElementById("bar2")
let worldPollution = new Chart(chart2, {
  type: 'bar',
  data: {
    labels: ["China 2010", "China 2017", "France 2010", "France 2017", "England 2010", "England 2017", "United States 2010", "United States 2017", "Russia 2010", "Russia 2017"],
    datasets: [{
      label: 'Pm 2.5 Around the World Pt 1',
      data: [69.4, 52.6, 14.8, 11.8, 12.2, 10.4, 9.3, 7.4, 19.4, 16.1],
      backgroundColor: ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red']
    }]
  }
});

let chart3 = document.getElementById("bar3")
let worldPollution2 = new Chart(chart3, {
  type: 'bar',
  data: {
    labels: ["Japan 2010","Japan 2017","Canada 2010","Canada 2017","Mexico 2010","Mexico 2017","Italy 2010","Italy 2017","Singapore 2010","Singapore 2017","Afghanistan 2010","Afghanistan 2017"],
    datasets: [{
      label: 'Pm 2.5 Around the World Pt 2',
      data: [14.1,11.7,8.3,6.4,26.3,20.9,19,16.7,20.6,19,65.2,56.9],
      backgroundColor: ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red']
    }]
  }
});

/** let worldPollution = new Chart(chart1, {
            type: 'bar',
            data: {
              labels: ['Habit Burger', 'Shake Shack', 'McDonalds', 'Wendy\'s',
    backgroundColor:[] 'Burger King'],
              datasets: [{
                  label: '# of Votes in 2016',
                  data: [20, 9, 3, 4, 1],
                  backgroundColor: ['red', 'yellow', 'blue', 'green', 'purple']
              }, {
                label: '# of Votes in 2020',
                data: [30, 20, 10, 4, 6],
                backgroundColor: ['#E1B07E', "#E5BE9E", "#CBC0AD", "#86A397", "#361D2E"],
                borderWidth: 2,
                borderColor: 'orange'
              }],
            },
          });
          */