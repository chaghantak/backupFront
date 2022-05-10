import React, { Component } from 'react';

import '../attackStyle.css';

function AttackAgentTimeTable(props) {
  return (
    <>
      <table className="MainTable" style={{ height: '100%' }}>
        <thead>
          <tr className="Mtt2">
            <th>시간</th>
            <th>에이전트 ID</th>
            <th>내용</th>
          </tr>
        </thead>

        <tbody>
          <tr className="Mtt2">
            <td>...</td>
            <td>A.XX</td>
            <td>정보 수집 완료</td>
          </tr>
          <tr className="Mtt2">
            <td>...</td>
            <td>A.YY</td>
            <td>자동대응 활성화</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default AttackAgentTimeTable;
