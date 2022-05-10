import React, { Component } from "react";

import AttackModelSetting from "./AttackModelSetting";
import AttackModelProcess from "./AttackModelSituation";
import AttackModelModel from "./AttackModelModel";
import AttackModelDetail from "./AttackModelDetail";

import { SimpleCard } from "matx";
import "../attackStyle.css";

function AttackModel(props) {
  return (
    <div className="allMargin">
      <h5>공격 캠페인 분류 ▶ 모델 학습</h5>
      <div className="footer hei89">
        <div className="footerChild">
          
          <div className="borderSolid">
          {`<학습 설정>`}
            <AttackModelSetting />{" "}
          </div>
         
          <div className="borderSolid">
            학습 진행 상황 및 결과 <br /> <AttackModelProcess />{" "}
          </div>
          <div className="borderSolid">
            학습된 모델 <br /> <AttackModelModel />
          </div>
        </div>
        <div className="footerChild3">
          <article className="">
            모델 상세
            <AttackModelDetail />
          </article>
        </div>
      </div>
    </div>
  );
}

export default AttackModel;
