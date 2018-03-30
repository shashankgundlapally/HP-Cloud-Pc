export default {
  chart: {
    type: 'line',
    width: '420',
    height: '260'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['4 Weeks Ago', '3 Weeks Ago', '2 Weeks Ago', 'Last Week', 'Current Week',]
  },
  yAxis: {
    title: {
      text: 'Number of Incidents'
    }
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true
      },
      enableMouseTracking: false
    }
  },
  series: [{
    name: 'Open',
    data: [170, 169, 95, 110, 130]
  }, {
    name: 'Closed',
    data: [150, 142, 110, 120, 125]
  }],
  credits: {
    enabled: false
  }
};
