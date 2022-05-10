import React from "react";
import Tree from "react-d3-tree";
import AttackClassTable from "./AttackClassTable";
import AttackClassTable2 from "./AttackClassTable2";
import Graph from "./AttackClassGraph";
import Campaign from "./AttackCampaign";
import Country from "./AttackClassCountryDiv";

import "../attackStyle.css";

function AttackClassView() {
  const orgChart = {
    name: "CEO",
    children: [
      {
        name: "Manager",
        attributes: {
          department: "Production",
        },
        children: [
          {
            name: "Foreman",
            attributes: {
              department: "Fabrication",
            },
            children: [
              {
                name: "Worker",
              },
            ],
          },
          {
            name: "Foreman",
            attributes: {
              department: "Assembly",
            },
            children: [
              {
                name: "Worker",
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <div className="allMargin">
      <h5>공격 캠페인 분류 ▶ 분류 결과</h5>
      <div className="footer hei89">
        <div className="footerChild">
          <AttackClassTable2 />
          <div className="tableScoll" style={{ height: "72vh" }}>
            <AttackClassTable />
          </div>
        </div>
        <div className="footerChild3 hei89 borderSolid">
          <div style={{ height: "64vh" }}>
            <p>다음 공격 기술 및 최종 목표 예측</p>
            <div id="treeWrapper" style={{ width: "50em", height: "100em" }}>
              <Tree data={orgChart} />
            </div>
            <Graph />
          </div>
          <div
            className="footer tableScoll borderSolid"
            style={{ height: "18vh" }}
          >
            <div className="footerChild1">
              <p>유사 캠페인 목록</p>
              <Campaign />
            </div>
            <div className="footerChild1">
              <p>공격 그룹 및 국가 예측</p>
              <Country />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttackClassView;
