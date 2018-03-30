export default {
  columns: [
    {
      column: 'name',
      title: 'Name',
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
      column: 'email',
      title: 'Email',
    },
    {
      column: 'sex',
      title: 'Gender',
      filter: {
        type: 'dropdown',
        options: [{ value: 'M' }, { value: 'F' }],
      },
    },
    {
      column: 'birth',
      title: 'Birth',
      filter: {
        type: 'search',
      },
    },
    {
      column: 'sid',
      title: 'Sid',
      filter: {
        type: 'search',
      },
    },
  ],
  selectionColumn: 'image',
  idColumn: 'email',
};
