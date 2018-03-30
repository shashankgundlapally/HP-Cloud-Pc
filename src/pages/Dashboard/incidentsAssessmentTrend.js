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
    categories: [
      'Last month',
      '3 weeks ago',
      '2 weeks ago',
      'Last week',
      'Current week'
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Number of Incidents'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Reactive',
    data: [49.9, 71.5, 106.4, 129.2, 144.0]

  }, {
    name: 'Proactive',
    data: [83.6, 78.8, 98.5, 93.4, 106.0]

  }, {
    name: 'Predictive',
    data: [48.9, 38.8, 39.3, 41.4, 47.0]

  }],
  credits: {
    enabled: false
  }
};
