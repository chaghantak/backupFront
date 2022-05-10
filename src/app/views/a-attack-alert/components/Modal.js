import React, { useState } from "react";
import { createPortal } from "react-dom";
import App from "./App";
import DetailMatrix from "./DetailMatrix";
import NeoMatrix from "./NeoMatrix";

function Modal({ data, click }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selector, setSelector] = useState("상세정보");
  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  const tabContArr = [
    {
      tabTitle: (
        <span
          style={
            selector === "상세정보"
              ? {
                  color: "blue",
                  float: "left",
                  marginLeft: "10px",
                  cursor: "pointer",
                }
              : {
                  color: "black",
                  float: "left",
                  marginLeft: "10px",
                  cursor: "pointer",
                }
          }
          className={activeIndex === 0 ? "is-active" : ""}
          onClick={() => {
            tabClickHandler(0);
            setSelector("상세정보");
          }}
        >
          {" "}
          상세정보{" "}
        </span>
      ),
      tabCont: (
        <div style={{ display: "flex" }}>
         
          
          <div
            style={{
              width: "100%",
              float: "left",
            }}
          >
            <DetailMatrix id={data} />
          </div>
          <div
            style={{
              width: "100%",
              float: "left",
            }}
          >
            <NeoMatrix id={data} />
          </div>
        </div>
      ),
    },
    {
      tabTitle: (
        <span
          style={
            selector === "킬체인"
              ? {
                  color: "blue",
                  float: "left",
                  marginLeft: "10px",
                  cursor: "pointer",
                }
              : {
                  color: "black",
                  float: "left",
                  marginLeft: "10px",
                  cursor: "pointer",
                }
          }
          className={activeIndex === 1 ? "is-active" : ""}
          onClick={() => {
            tabClickHandler(1);
            setSelector("킬체인");
          }}
        >
          {" "}
          킬체인 분석{" "}
        </span>
      ),
      tabCont: (
        <div style={{ zIndex:"50",display: "flex", borderBottom: "1px solid black",height:"37.55vw"  }}>
          <div
            style={{
              float: "left",
             borderRight: "black solid 1px",
              width: "70%",
              height:"37.55vw",
            }}
          >
            <App />
          </div>
          <div
            style={{
              float: "left",
              width: "30%",
              height:"37.55vw",
            }}
          >
            blank
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
        zIndex:"50",
        marginLeft: "2%"
      }}
    >
      <div
        style={{
          width: "80%",
          height: "80%",
          textAlign: "center",
          marginTop:"2%",
          background: "white",
          fontSize: 20,
        }}
      >
        <div>
          <div className="tabs is-boxed">
            {tabContArr.map((section, index) => (
              <span key={index}>
             {section.tabTitle}
              </span>
            ))}
            <div style={{ float: "right" }}>
              {/* <button onClick={()=>window.open(`${ATTACK_NAVI_URL}${id.id}`,`_blank`)}>Click</button> */}
              <button
                onClick={() =>
                  window.open(
                    `https://mitre-attack.github.io/attack-navigator/`
                  )
                }
              >
                Click
              </button>
              <button onClick={click}>Close</button>
            </div>
          </div>
          <br />
          <div style={{ borderTop: "1px solid black" }}>
            {tabContArr[activeIndex].tabCont}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
