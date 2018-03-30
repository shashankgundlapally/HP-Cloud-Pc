export default {
  chart: {
    type: 'column',
    width: '900',
    height: '260'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['HW Health', 'Security', 'OS Health', 'HW Change', 'SW Change', 'SW Health', 'HW Inventory', 'Account', 'Network', 'Unknown']
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Status'
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
    shared: true
  },
  plotOptions: {
    column: {
      stacking: 'percent'
    }
  },
  series: [{
    name: 'New',
    data: [5, 3, 4, 4, 6, 6, 7, 2, 8, 3]
  }, {
    name: 'Investigating',
    data: [2, 2, 3, 5, 3, 6, 2, 8, 3, 7]
  }, {
    name: 'Fix in Progress',
    data: [3, 4, 4, 5, 2, 5, 8, 8, 1, 4]
  }],
  credits: {
    enabled: false
  }
};
