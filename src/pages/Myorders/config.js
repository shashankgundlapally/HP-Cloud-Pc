export default {
  columns: [
    {
      column: 'orderdate',
      title: 'Order Date',
    },
    {
      column: 'customername',
      title: 'Customer Name',
      filter: {
        type: 'search',
      },
    },
    {
      column: 'domain',
      title: 'Domain',
    },
    {
      column: 'location',
      title: 'Location',
    },
    {
      column: 'deviceinfo',
      title: 'Device Info',
    },
    {
      column: 'noofusers',
      title: 'No of users',
    },
    {
      column: 'status',
      title: 'Status',
    },
  ],
  idColumn: 'customername',
};
