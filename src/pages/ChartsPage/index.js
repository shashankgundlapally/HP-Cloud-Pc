import React from 'react';
import './style.css';
import { Panel } from '@veneer/core';
import { Chart } from '@veneer/charts';
import devicesByType from './devicesByType';
import devicesByOS from './devicesByOS';
import incidentsWithOpenStatus from './incidentsWithOpenStatus';
import incidentsByType from './incidentsByType';
import incidentsBySubtype from './incidentsBySubtype';
import incidentsAssessmentTrend from './incidentsAssessmentTrend';
import incidentsBurnDown from './incidentsBurnDown';

const charts = [
  ['Devices By Type', devicesByType],
  ['Devices By OS', devicesByOS],
  ['Incidents With Open Status', incidentsWithOpenStatus],
  ['Incidents By Type', incidentsByType],
  ['Incidents By Subtype', incidentsBySubtype],
  ['Incidents Assessment Trend', incidentsAssessmentTrend],
  ['Incidents Burn Down', incidentsBurnDown],
];

export default () => (
  <div className="vnex-charts-page">
    {
      charts.map(
        chart => (<div key={chart[0]} className="vnex-charts-page__card-container">
          <Panel title={chart[0]}>
            <Chart options={chart[1]} />
          </Panel>
        </div>)
      )
    }
  </div>
);
