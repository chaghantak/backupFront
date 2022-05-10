import React, { Component } from "react";
import Table from "./AttackNetworkTable";
import Table1 from "./AttackNetworkTable1";

import "../attackStyle.css";

function AttackNetworkView() {
  const onClick=()=>{
    alert("저장완료")
  }
  return (
    <div className="allMargin">
      <h5>공격대응 ▶ 네트워크 대응 방책 관리</h5>
      <div className="footer">
        <div className="footerChild hei89">
          <Table1 />
          <div className="footerChild"></div>
          <Table />
          <div>
            <button onClick={onClick}>전체적용</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AttackNetworkView;
