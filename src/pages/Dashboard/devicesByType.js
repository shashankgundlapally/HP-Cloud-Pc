export default {
  chart: {
    type: 'column',
    width: '420',
    height: '260'
  },
  title: {
    text: ''
  },
  xAxis: {
    type: 'category'
  },
  yAxis: {
    title: {
      text: 'Number of Devices'
    }
  },
  legend: {
    enabled: false
  },

  series: [{
    colorByPoint: true,
    data: [{
      name: 'Notebook',
      y: 76,
      drilldown: 'Default'
    }, {
      name: 'Desktop',
      y: 50,
      drilldown: 'Default'
    }, {
      name: 'Tablet',
      y: 43,
      drilldown: 'Default'
    }, {
      name: 'Phone',
      y: 54,
      drilldown: 'Default'
    }, {
      name: 'Others',
      y: 26,
      drilldown: 'Default'
    }]
  }],
  drilldown: {
    series: [{
      colorByPoint: true,
      name: 'Default',
      id: 'Default',
      data: [
        ['HP', 44],
        ['Lenovo', 6],
        ['Apple', 10],
        ['Dell', 13],
        ['Samsung', 5],
        ['Asus', 16],
        ['Acer', 9],
        ['Razer', 8],
        ['LG', 6],
        ['SMSI', 5],
      ]
    }]
  },
  credits: {
    enabled: false
  }
};
