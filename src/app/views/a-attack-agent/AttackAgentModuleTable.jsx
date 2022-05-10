import React from 'react';
import '../attackStyle.css';

function AttackAgentModuleTable(props) {
  return (
    <>
      <table className="MainTable" style={{ height: '100%' }}>
        <thead>
          <tr className="Mtt2">
            <th>방어기술</th>
            <th>모듈 명</th>
            <th>모듈 설명</th>
          </tr>
        </thead>

        <tbody>
          <tr className="Mtt2">
            <td>T1102</td>
            <td>자동실행 차단</td>
            <td>자동실행...</td>
          </tr>
          <tr className="Mtt2">
            <td>T1103</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr className="Mtt2">
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default AttackAgentModuleTable;
