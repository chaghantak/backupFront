import React, { Component } from 'react';

import { SimpleCard } from 'matx';
import '../attackStyle.css';

function AttackLearnProgress(props) {
  var ProgressVal = 100;
  var CrossVal = 80.64;

  return (
    <>
      <label>진행도 : 100% </label>
      
      <br />
      <label>정확도 : 80.64% </label>
      
      <br />
      <button>▼</button>
      <div className="hei24 Mtt tableScoll">
        <p>2021-12-14-18:50 [INFO] BlahBlah 1</p>
        <p>2021-12-14-18:50 [INFO] BlahBlah 2</p>
        <p>로그...</p>
        <p>로그...</p>
        <p>로그...</p>
        <p>로그...</p>
        <p>로그...</p>
        <p>로그...</p>
        <p>로그...</p>
        <p>로그...</p>
      </div>
    </>
  );
}

export default AttackLearnProgress;
