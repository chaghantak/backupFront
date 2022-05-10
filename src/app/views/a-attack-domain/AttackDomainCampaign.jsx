import React, { Component } from "react";

import { SimpleCard } from "matx";
import "../attackStyle.css";

function AttackDomainCampaign(props) {
  return (
    <div className="footer tableScoll">
      <div className="">
       <p>유사도 알고리즘</p>
        
        <select>
          <option>Cousine sim</option>
        </select>
        <br />
        <button>계산 시작</button>
      </div>
    </div>
  );
}

export default AttackDomainCampaign;


