import React, { Component } from 'react';

import Learning from './AttackLearnSetting';
import Structure from './AttackLearnStructure';
import Progress from './AttackLearnProgress';
import Parameter from './AttackLearnParameter';

import { SimpleCard } from 'matx';
import '../attackStyle.css';

function AttackLearn(props) {
  return (
    <div>
      <div className="allMargin tableScoll">
        <h5>공격대응 ▶ 공격예측 모델 학습</h5>
      </div>
      <div className="hei89 Mtt footer ">
        <div className="hei61 ">
          학습설정 <br />
          <Learning />
          <br />
          <br />
          학습 진행 상황 및 결과
          <br />
          <Progress />
          학습된 파라미터
          <br />
          <Parameter />
        </div>
        <div className="hei89 widthT Mtt">
          학습된 구조 <br />
          <Structure />
        </div>
      </div>
    </div>
  );
}

export default AttackLearn;
