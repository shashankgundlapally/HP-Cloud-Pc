export default {
  chart: {
    plotBackgroundColor: null,
    width: '420',
    height: '260',
  },
  title: {
    text: ''
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
      },
      startAngle: -90,
      endAngle: 90,
      center: ['50%', '75%']
    }
  },
  series: [{
    type: 'pie',
    name: 'Browser share',
    innerSize: '50%',
    data: [
      ['Windows', 90],
      ['Android', 56.33],
      ['iOS', 24.03],
      {
        name: 'Proprietary or Undetectable',
        y: 0.2,
        dataLabels: {
          enabled: false
        }
      }
    ]
  }],
  credits: {
    enabled: false
  }
};
