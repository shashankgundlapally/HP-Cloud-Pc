export default {
  chart: {
    type: 'pie',
    width: '420',
    height: '260'
  },
  title: {
    text: ''
  },
  series: [{
    name: 'Incidents',
    data: [{
      name: 'HDD Full',
      y: 10.00,
      drilldown: 'Default'
    }, {
      name: 'CPU',
      y: 10.00,
      drilldown: 'Default'
    }, {
      name: 'Warranty',
      y: 10.00,
      drilldown: 'Default'
    }, {
      name: 'Antivirus',
      y: 10.00,
      drilldown: 'Default'
    }, {
      name: 'SW Mod',
      y: 10.00,
      drilldown: 'Default'
    }, {
      name: 'Device Online',
      y: 10.00,
      drilldown: 'Default'
    }, {
      name: 'Net Bandwidth',
      y: 10.00,
      drilldown: 'Default'
    }, {
      name: 'Bty Not Seen',
      y: 10.00,
      drilldown: 'Default'
    }, {
      name: 'HDD Smart',
      y: 10.00,
      drilldown: 'Default'
    }, {
      name: 'Slow Boot',
      y: 10.00,
      drilldown: 'Default'
    }]
  }],
  drilldown: {
    series: [{
      name: 'Default',
      id: 'Default',
      data: [
        ['Open', 50.00],
        ['Close', 50.00],
      ]
    }]
  },
  credits: {
    enabled: false
  }
};
