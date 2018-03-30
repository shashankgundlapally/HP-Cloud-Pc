import React from 'react';
import TableWithActionBar from './tableWithActionBar';
import config from './config';
import data from './data';
import preferences from './preferences';

export default () => (
  <TableWithActionBar  config={config} data={data} preferences={preferences}  />
);
