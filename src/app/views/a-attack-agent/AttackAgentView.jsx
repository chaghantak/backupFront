import React from 'react';

import GraphAdd from './GraphAddView';
import Settings from './AttackAgentSetting';

import ModuelTable from './AttackAgentModuleTable';
import TimesTable from './AttackAgentTimeTable';

import '../attackStyle.css';

function AttackHost(props) {
  const graph = {
    nodes: [
      {
        group: 'Switch',
        label: 'Switch',
        id: 's01',
        index: 0,
      },
      {
        group: 'Switch',
        label: 'F.XX',
        id: 's02',
        index: 1,
      },
      {
        group: 'Switch',
        label: 'F.YY',
        id: 's03',
        index: 2,
      },

      {
        group: 'host',
        label: 'A.YY',
        id: 'h01',
        index: 3,
        status: 0,
      },
      {
        group: 'host',
        label: 'A.XX',
        id: 'h02',
        index: 4,
        status: 1,
      },
      {
        group: 'host',
        label: 'A.00',
        id: 'h03',
        index: 5,
        status: 1,
      },
      {
        group: 'host',
        label: 'A.11',
        id: 'h04',
        index: 6,
        status: 1,
      },
      {
        group: 'host',
        label: 'A.22',
        id: 'h05',
        index: 7,
        status: 0,
      },
      {
        group: 'host',
        label: 'A.33',
        id: 'h06',
        index: 8,
        status: 0,
      },
      {
        group: 'host',
        label: 'A.44',
        id: 'h07',
        index: 9,
        status: 0,
      },
      {
        group: 'host',
        label: 'A.55',
        id: 'h08',
        index: 10,
        status: 0,
      },
    ],
    links: [
      {
        source: 's01',
        target: 's02',
      },
      {
        source: 's02',
        target: 's03',
      },
      {
        source: 's03',
        target: 's01',
      },
      {
        source: 's02',
        target: 'h01',
      },
      {
        source: 's02',
        target: 'h02',
      },
      {
        source: 's03',
        target: 'h03',
      },
      {
        source: 's03',
        target: 'h04',
      },
      {
        source: 's01',
        target: 'h05',
      },
      {
        source: 's01',
        target: 'h06',
      },
      {
        source: 's01',
        target: 'h07',
      },
      {
        source: 's01',
        target: 'h08',
      },
    ],
  };

  return (
    <div className="allMargin">
      <h5>공격대응 ▶ 공격 대응 에이션트 설정</h5>
      <div className="footer">
        <div className="footerChild hei89">
          <div>
            <GraphAdd signalData={graph} className="graphDiv" />
          </div>
        </div>
        <div className="footerChild hei89">
          <div className="borderSolid tableScoll" style={{height: "39vh"}}>
            <Settings />
          </div>
         
          <div className="borderSolid tableScoll hei30 ">
            <ModuelTable />
          </div>
          <div className="borderSolid  hei17">
            <TimesTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttackHost;
