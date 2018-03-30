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
      text: 'Number of Incidents'
    }
  },
  legend: {
    enabled: false
  },

  series: [{
    colorByPoint: true,
    data: [{
      name: 'HW Health',
      y: 56.33,
      drilldown: 'Hardware Health'
    }, {
      name: 'Security',
      y: 24.03,
      drilldown: 'Security'
    }, {
      name: 'OS Health',
      y: 10.38,
      drilldown: 'OS Health'
    }, {
      name: 'HW Change',
      y: 34.77,
      drilldown: 'Hardware Change'
    }, {
      name: 'SW Change',
      y: 70.91,
      drilldown: 'Software Change'
    }, {
      name: 'SW Health',
      y: 40.2,
      drilldown: 'Software Health'
    }, {
      name: 'HW Inventory',
      y: 82.91,
      drilldown: 'HW Inventory'
    }, {
      name: 'Account',
      y: 50.91,
      drilldown: 'Account'
    }, {
      name: 'Network',
      y: 30.91,
      drilldown: 'Network'
    }, {
      name: 'Unknown',
      y: 20.91,
      drilldown: 'Unknown'
    }]
  }],
  drilldown: {
    series: [{
      colorByPoint: true,
      name: 'Hardware Health',
      id: 'Hardware Health',
      data: [
        ['HDD Storage Capacity Full', 4.65],
        ['HDD SMART Event Failure', 6.65],
        ['HDD - SSD R/W Cycle Nearing Max', 10.65],
        ['Battery Charge Capacity', 13.65],
        ['Battery Not Detected', 5.65],
        ['Battery Predictive Failure', 16.65],
        ['System Error - Thermal', 9.65],
        ['System Error - CPU', 8.65],
        ['System Error - Fan', 6.65],
        ['System Error - Power Supply', 5.65],
        ['System Error - Memory', 10.65],
        ['BIOS SureStart', 2.65],
        ['BIOS Outdated Version', 6.65],
        ['Clock Out of Sync with NTP', 5.65],
        ['CMOS Battery', 4.65],
      ]
    }, {
      name: 'Security',
      id: 'Security',
      data: [
        ['Encryption', 20.65],
        ['Antivirus', 16.65],
        ['Firewall', 12.65],
        ['Heartbeat Failure', 18.65],
        ['Device Online Unexpectedly', 14.65],
        ['Password Policy', 16.65],

      ]
    }, {
      name: 'OS Health',
      id: 'OS Health',
      data: [
        ['Driver Outdated Version', 12.5],
        ['Driver Missing', 12.5],
        ['OS BSOD', 12.5],
        ['OS Unexpected Crash/Reboot', 12.5],
        ['CPU High Utilization', 12.5],
        ['Memory High Utilization', 12.5],
        ['HDD Thrashing', 12.5],
        ['Slow Boot', 12.5],

      ]
    }, {
      name: 'Hardware Change',
      id: 'Hardware Change',
      data: [
        ['Memory', 20],
        ['HDD', 33.3],
        ['PNP Device', 45],

      ]
    }, {
      name: 'Software Change',
      id: 'Software Change',
      data: [
        ['Unapproved Modification', 20],
        ['Unapproved Uninstall', 33.3],
        ['New App Installed', 45],

      ]
    }, {
      name: 'Software Health',
      id: 'Software Health',
      data: [
        ['Unexpected Crash/Stop', 20],
        ['Required Apps Not Installed', 33.3],
        ['Patch Management', 45],

      ]
    }, {
      name: 'Hardware Inventory',
      id: 'HW Inventory',
      data: [
        ['Warrant Expired/Renewed', 100.00],
      ]
    }, {
      name: 'Account',
      id: 'Account',
      data: [
        ['Licensing', 20],
        ['APNS Certificate Expiring', 33.3],
        ['Account Cancel', 50],
      ]
    }, {
      name: 'Network Utilization',
      id: 'Network',
      data: [
        ['High Network Bandwidth Consumption', 100.00],
      ]
    }, {
      name: 'Unknown',
      id: 'Unknown',
      data: [
        ['Unknown', 100.00],
      ]
    }]
  },
  credits: {
    enabled: false
  }
};
