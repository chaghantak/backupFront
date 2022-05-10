import React, { useEffect, useRef, useCallback, useState, useMemo } from 'react';
import ForceGraph2D, {Spritetext} from "react-force-graph-2d";

import ReactDOM from "react-dom";

import * as d3 from 'd3';


import "../attackStyle.css";
import { index } from 'd3-array';




function GraphAddView(props) {
  const fgRef = useRef();
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodePosition, setNodePosition] = useState(null);
  const [stopEngine, setStopEngine] = useState(false);
  const [graphData, setGraphData] = useState(props.signalData);
  const [divStatus, setDiv] = useState(false);

  const [hi, setHi] = useState(false);

 const setPosition = (e) => {
    let position = {};
    position.x = e?.pageX;
    position.y = e?.pageY;
    setNodePosition(position);
  };



  const ModalOnOff = () => {
    setDiv(!divStatus)
  }



        return(
        <div>
      {selectedNode &&
        ReactDOM.createPortal(
          <div

          //마우스 오버 스타일
            style={{
              position: "absolute",
              margin: "2px 0px 2px 0px",
              left: nodePosition?.x,
              top: nodePosition?.y,
              border:"2px solid #7467EF",
              background:"gray",
              width:"300px",
              height:"100px"
            }}
          >
      
              <div>
                <div style={{ display: "flex" }}>
                  <span style={{ maxWidth: "200px", wordBreak: "break-word" }}>
                    <strong>{selectedNode.LabelName}</strong>
                  </span>
                  <span
               
                    style={{
                      marginRight: "5px",
                    }}
                  >
                      {/* 모달창 만들기 */}
                   {/* <button onClick={ModalOnOff}>상세보기</button>
                   {divStatus && <Modal ModalOnOff={ModalOnOff} id={selectedNode.id} type={selectedNode.group}></Modal>} */}
                  </span>
                  {!selectedNode.current_case && (
                    <span
                      style={{ cursor: "pointer", marginLeft: "auto" }}
                      onClick={() => {}}
                    >
                      <i />
                    </span>
                  )}
                </div>
                <div>
                  <span
    
                  >
                    {selectedNode.id.toUpperCase()}
                  </span>{" "}
                  /{" "}
                  <span

                  >
                    {selectedNode.group}
                  </span>
                </div>
              </div>
           
          </div>,
          document.body
        )}
      <div onMouseMove={setPosition} >
        <ForceGraph2D
          ref={fgRef}
          graphData={graphData}
          linkSource="source"
          linkTarget="target"
          height={200}
          width={250}
          nodeId="id"
          nodeRelSize={6}

          autoPauseRedraw={false}
          // linkLineDash={(link) => (link.scope_id != 'default'? [2, 1] : null)}

          linkColor={(link) => ( "black" )}

          cooldownTicks={3}
          linkDirectionalParticles={(link) => (link.linkStyle ? 0 : 0)}
          linkDirectionalParticleColor="black"     
          linkWidth={3}
          
          onNodeHover={(node) => {
            if (node) {
              setSelectedNode(node);
              setHi(!hi);
            } else {
              setHi(!hi);
              setSelectedNode(null);
            }
          }}
          
        
          // onNodeClick={(node, event) => {
          //   setDiv(!divStatus);
          //   ModalOnOff();
          // }}
    
          nodeCanvasObject={(node, ctx) => {
       
            ctx.beginPath();
              const label = node.label;
              const textWidth = ctx.measureText(label).width + 5;
              const bgDimensions = [textWidth, 20].map((n) => n + 10 * 0.2); // for padding
              ctx.fillStyle = node.group === "host"? "red" : "blue"; //background color for tag
              ctx.arc(node.x, node.y,12,0,10);
              ctx.fill(
                
              );
             
              ctx.font = `10px mukta`;
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillStyle = "#d3d3d3"; //node.color;
              ctx.fillText(label, node.x, node.y);
            return ctx;
          }}

  
          maxZoom={8}
          onEngineStop={() => {
            if (!stopEngine) {
              fgRef.current.zoomToFit(200, 60);
              setStopEngine(true);
            }
          }}
        />
  
      </div>

    </div>
            );
}
export default GraphAddView;