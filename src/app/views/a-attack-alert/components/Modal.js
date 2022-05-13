import React, { useState } from "react";
import { createPortal } from "react-dom";
import App from "./App";
import DetailMatrix from "./DetailMatrix";
import NeoMatrix from "./NeoMatrix";
import "./Buttons.css";
import styled from "styled-components";
import KillLog from "./KillLog";
function Modal({ data, click }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selector, setSelector] = useState("상세정보");
  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  const tabContArr = [
    {
      tabTitle: (
        <div style={{ float: "left" }}>
          {selector === "상세정보" ? (
            <Span
              className="bn40"
              style={{
                padding: "4px 15px ",
              }}
              onClick={() => {
                tabClickHandler(0);
                setSelector("상세정보");
              }}
            >
              Detail
            </Span>
          ) : (
            <span
              style={{
                color: "white",
                float: "left",
                marginLeft: "10px",
                cursor: "pointer",
                fontSize: "18px",
                padding: "5px",
              }}
              onClick={() => {
                tabClickHandler(0);
                setSelector("상세정보");
              }}
            >
              Detail
            </span>
          )}
        </div>
      ),
      tabCont: (
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "100%",
              float: "left",
              backgroundColor: "#2C3845",
              color: "white",
            }}
          >
            <DetailMatrix id={data} />
          </div>
          <div
            style={{
              width: "100%",
              float: "left",
              backgroundColor: "#2C3845",
              color: "white",
            }}
          >
            <NeoMatrix id={data} />
          </div>
        </div>
      ),
    },
    {
      tabTitle: (
        <div style={{ float: "left" }}>
          {selector === "킬체인" ? (
            <Span
              className="bn40"
              style={{
                padding: "4px 20px ",
              }}
              onClick={() => {
                tabClickHandler(1);
                setSelector("킬체인");
              }}
            >
              Kill Chain
            </Span>
          ) : (
            <span
              style={{
                color: "white",
                float: "left",
                marginLeft: "10px",
                cursor: "pointer",
                fontSize: "18px",
                padding: "5px 15px 0 0",
              }}
              onClick={() => {
                tabClickHandler(1);
                setSelector("킬체인");
              }}
            >
              Kill Chain
            </span>
          )}
        </div>
      ),
      tabCont: (
        <div style={{ display: "flex",height:"42vw",border: "1px solid gray" }}>
          <div
            style={{
              width: "70%",
              float: "left",
              backgroundColor: "#2C3845",
              color: "white",
            }}
          >
            <App />
          </div>
          <div
            style={{
              width: "30%",
              float: "left",
              backgroundColor: "#2C3845",
              color: "white",
              borderLeft:"1px solid gray"
            }}
          >
           <KillLog data={data}/>
          </div>
        </div>
      ),
    },
  ];
  return createPortal(
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        bottom: 30,
        left: 100,
        width: "100%",
        height: "100%",
        zIndex: "50",
        marginLeft: "2%",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "80%",
          textAlign: "center",
          marginTop: "2%",
          background: "#5BB9B8",
          fontSize: 20,
        }}
      >
        <div className="tabs is-boxed" style={{ display: "flow-root" }}>
          {tabContArr.map((section, index) => (
            <span key={index}>{section.tabTitle}</span>
          ))}

          {/* <button onClick={()=>window.open(`${ATTACK_NAVI_URL}${id.id}`,`_blank`)}>Click</button> */}
          <span
            style={{
              float: "left",
              padding: "2px 5px 0px 0px",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() =>
              window.open(`https://mitre-attack.github.io/attack-navigator/`)
            }
          >
            {`Mitre att&ck`}
          </span>
          <span
            onClick={() => click()}
            style={{
              float: "right",
              padding: "2px 15px 0px 0px",
              color: "white",
              cursor: "pointer",
            }}
          >
            닫기
          </span>
        </div>

        <div style={{ borderTop: "1px solid black" }}>
          {tabContArr[activeIndex].tabCont}
          {/* <span style={{backgroundColor:"#5BB9B8"}}>#5BB9B8</span>
            <span style={{backgroundColor:"#54a1a0"}}>54a1a0</span>
            <span style={{backgroundColor:"#2C3845"}}>2C3845</span>
            <span style={{backgroundColor:"#BD2A4E"}}>BD2A4E</span> */}
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;

const Span = styled.span``;
