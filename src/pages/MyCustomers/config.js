export default {
  columns: [
    {
      column: 'name',
      title: 'Customer Name',
      filter: {
        type: 'search',
      },
      actionButton: [
        { label: 'Action 1', func: event => console.log(`Action 1! Event: ${JSON.stringify(event)}`) },
        { label: 'Action 2', func: event => console.log(`Action 2! Event: ${JSON.stringify(event)}`) },
        { label: 'Action 3', func: event => console.log(`Action 3! Event: ${JSON.stringify(event)}`) },
      ],
    },
    {
      column: 'Dname',
      title: ' Domain Name',
    },
    {
      column: 'adres',
      title: ' Address',

    },
    {
      column: 'state',
      title: 'State',

    },
    {
      column: 'city',
      title: ' City',

    },
    {
      column: 'zipcode',
      title: ' Zip Code',

    },
    {
      column: 'cntctname',
      title: ' Contact Name',

    },
    {
      column: 'cntctemail',
      title: ' Contact Email',

    },


  ],
  selectionColumn: 'image',
  idColumn: 'Dname',
};
