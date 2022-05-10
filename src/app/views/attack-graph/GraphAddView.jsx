import React, { useEffect, useRef, useCallback, useState } from 'react';
import ForceGraph2D from "react-force-graph-2d";

import ReactDOM from "react-dom";
import { notification } from "antd";

import frame from "./node1.png";
import Modal from './ModalComponents'


function GraphAddView(props) {
  const imagePath = "/assets/images/products/w40";
  const fgRef = useRef();
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodePosition, setNodePosition] = useState(null);
  const [stopEngine, setStopEngine] = useState(false);
  const [graphData, setGraphData] = useState(props.signalData);
  const [divStatus, setDiv] = useState(false);
  
const CopyFunction = (statecopy) => {
    navigator.clipboard.writeText(statecopy);
    notification["info"]({
      placement: "bottomRight",
      duration: 4,
      message: "Copied to clipboard",
      description: "Copied to clipboard"
    });
  };
 const setPosition = (e) => {
    let position = {};
    position.x = e?.pageX;
    position.y = e?.pageY;
    setNodePosition(position);
  };

  const ModalOnOff = () => {
    setDiv(!divStatus)
  }

  useEffect(() => {
    setGraphData(props.signalData);
    fgRef.current.d3Force("charge").distanceMax(100);
  }, [graphData]);

        return(
        <div>
      {selectedNode &&
        ReactDOM.createPortal(
          <div
            className="nodeCard"
            style={{
              position: "absolute",
              margin: "2px 0px 2px 0px",
              left: nodePosition?.x,
              top: nodePosition?.y,
              border:"2px solid #7467EF"

            }}
          >
            {selectedNode.group === "signal" ? (
              <div>
                <div style={{ display: "flex" }}>
                  <span style={{ maxWidth: "200px", wordBreak: "break-word" }}>
                    <strong>{selectedNode.DetectionName.toUpperCase()}</strong>
                  </span>
                  <span
                    className="titleDate"
                    style={{
                      marginRight: "10px"
                    }}
                  >
                      {/* 모달창 만들기 */}
                   <button className="detailBtn" onClick={ModalOnOff}>상세보기</button>
                   {divStatus && <Modal ModalOnOff={ModalOnOff} id={selectedNode.id}></Modal>}
                  </span>
                  {!selectedNode.current_case && (
                    <span
                      style={{ cursor: "pointer", marginLeft: "auto" }}
                      onClick={() => {}}
                    >
                      <i className="fal fa-folder-plus" />
                    </span>
                  )}
                </div>
                <div className="tacticTechnic">
                  <span
                  // className="hoverElements}
                  >
                    {selectedNode.DetectionTactic.toUpperCase()}
                  </span>{" "}
                  /{" "}
                  <span
                  // className="hoverElements}
                  >
                    {selectedNode.DetectionTechnique}
                  </span>
                </div>
              </div>
            ) : (
              <div>
                <div style={{ display: "flex" }}>
                  <span style={{ color: "#757575" }}>
                    {selectedNode.group.toUpperCase()}
                  </span>{" "}
                  {!selectedNode.current_case && (
                    <span
                      style={{ cursor: "pointer", marginLeft: "auto" }}
                      onClick={() => {}}
                    >
                      <i className="fal fa-folder-plus" />
                    </span>
                  )}
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                 
                  <div
                    className="hoverItem"
                    style={{
                      fontWeight: "bold",
                      display: "flex",
                      cursor: "pointer"
                    }}
                  >
                    <span
                      className="entityInNode"
                      onClick={() => {
                        if (selectedNode) props.openUserPanel(selectedNode);
                      }}
                    >
                      {selectedNode.id}
                    </span>
                    <div className="copyToClipboard">
                      <i
                        className="fad fa-copy"
                        onClick={() => CopyFunction(selectedNode.id)}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>,
          document.body
        )}
      <div onMouseMove={setPosition} style={{border : "1px solid black"}}>
        <ForceGraph2D
          ref={fgRef}
          graphData={graphData}
          height={500}
          width={1450}
          nodeId="id"
          autoPauseRedraw={false}
          // linkLabel={graphData}
          linkLabel={graphData}
          cooldownTicks={100}
          linkDirectionalArrowLength={8}
          linkColor = {"red"}
          linkDirectionalArrowRelPos={1}
          linkWidth={3}
          onNodeHover={(node) => {
            if (node) {
              setSelectedNode(node);
            } else {
              setSelectedNode(null);
            }
          }}
          onNodeClick={(node, event) => {
            fgRef.current.centerAt(node.x, node.y, 1000);
            fgRef.current.zoom(6, 1000);
          }}
          nodeCanvasObject={(node, ctx) => {
            const size = 10;
            const img = new Image();
            ctx.beginPath();
              const label = node.id;
              const textWidth = ctx.measureText(label).width;
              const bgDimensions = [textWidth, 2].map((n) => n + 10 * 0.2); // for padding
              ctx.fillStyle = "#2d343c"; //background color for tag
              const fillY = node.current_case
                ? node.y - bgDimensions[1] / 2 + 10.5
                : node.y - bgDimensions[1] / 2 + 9.5;
              ctx.fillRect(
                node.x - bgDimensions[0] / 2 + 1.3,
                fillY,
                ...bgDimensions
              );
              const y = node.current_case ? node.y + 11.1 : node.y + 10.1;
              // for text styling
              ctx.font = `3px mukta`;
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillStyle = "#d3d3d3"; //node.color;
              ctx.fillText(label, node.x + 1.3, y);



            // for highlighting 프레임
//             const outline = new Image();
//             outline.src = node.current_case === true ? frame : null;
//             ctx.drawImage(
//               outline,
//               node.x - size / 2 - 1.9,
//               node.y - size / 2 - 2.8,
//               size + 6,
//               size + 7
//             ); //frame image

            img.src = frame;
            node.img = img;
            ctx.drawImage(
              img,
              node.x - size / 2,
              node.y - size / 2,
              size + 1,
              size
            );
            return ctx;
          }}
          maxZoom={10}
          onEngineStop={() => {
            if (!stopEngine) {
              fgRef.current.zoomToFit(1000, 50);
              setStopEngine(true);
            }
          }}
       

        
        />
      </div>

    </div>
            );
}
export default GraphAddView;