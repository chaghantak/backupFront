import React, { useEffect, useRef, useCallback, useState, useMemo } from 'react';
import ForceGraph2D, {Spritetext} from "react-force-graph-2d";

import ReactDOM from "react-dom";
import { notification } from "antd";
import * as d3 from 'd3'

import Modal from './ModalComponents'

import pcImg from "../../image/pc.png"
import pcImgRed from "../../image/pcred.png"
import pcImgCyan from "../../image/pccyan.png"

import hubImg from "../../image/hub.png"
import hubImgRed from "../../image/hubred.png"
import hubImgCyan from "../../image/hubcyan.png"

import firewallImg from "../../image/firewall.png"
import firewallImgRed from "../../image/firewallred.png"
import firewallImgCyan from "../../image/firewallcyan.png"

import serverImg from "../../image/server.png"
import serverImgRed from "../../image/serverred.png"
import serverImgCyan from "../../image/servercyan.png"

import internetImg from "../../image/internet.png"

import style from "./style.css";
import { index } from 'd3-array';




function GraphAddView(props) {
  const fgRef = useRef();
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodePosition, setNodePosition] = useState(null);
  const [stopEngine, setStopEngine] = useState(false);
  const [graphData, setGraphData] = useState(props.signalData);
  const [divStatus, setDiv] = useState(false);

  const [onLink, setOnLink] = useState(props.signalData.links);
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
            className="nodeCard"
            style={{
              position: "absolute",
              margin: "2px 0px 2px 0px",
              left: nodePosition?.x,
              top: nodePosition?.y,
              border:"2px solid #7467EF"

            }}
          >
      
              <div>
                <div style={{ display: "flex" }}>
                  <span style={{ maxWidth: "200px", wordBreak: "break-word" }}>
                    <strong>{selectedNode.LabelName}</strong>
                  </span>
                  <span
                    className="titleDate"
                    style={{
                      marginRight: "10px"
                    }}
                  >
                      {/* 모달창 만들기 */}
                   <button className="detailBtn" onClick={ModalOnOff}>상세보기</button>
                   {divStatus && <Modal ModalOnOff={ModalOnOff} id={selectedNode.id} type={selectedNode.group}></Modal>}
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
           
          </div>,
          document.body
        )}
      <div onMouseMove={setPosition} className='force2Douter'>
        <ForceGraph2D
          ref={fgRef}
          graphData={graphData}
          linkSource="source"
          linkTarget="target"
          height={700}
          width={1650}
          nodeId="id"
          nodeRelSize={6}
          // linkLabel = {(link) => (link.relation == "" ? link.relation : link.relation)}
          // linkDirectionalParticleWidth={20}
          autoPauseRedraw={false}
          linkLineDash={(link) => (link.scope_id != 'default'? [2, 1] : null)}
          // linkDirectionalArrowLength={8}
          linkColor={(link) => ((link.scope_id != 'default')? "#ff9999": (link.linkStyle ? "#33ffff" : "black" ))}
          // linkDirectionalArrowRelPos={1}
          cooldownTicks={5}
          linkDirectionalParticles={(link) => (link.linkStyle ? 4 : 0)}
          linkDirectionalParticleWidth={4}   
          linkDirectionalParticleColor={"black"}       



          // onNodeDragEnd={node => {
          //   node.fx = node.x;
          //   node.fy = node.y;
          //   node.fz = node.z;
          // }}
        
      
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
          
        
          onNodeClick={(node, event) => {
            setDiv(!divStatus);
            ModalOnOff();
            // fgRef.current.zoom(6, 1000);
          }}
    
          nodeCanvasObject={(node, ctx) => {
            const size = 10;
            const img = new Image();
            ctx.beginPath();
              const label = node.LabelName;
              const textWidth = ctx.measureText(label).width;
              const bgDimensions = [textWidth, 2].map((n) => n + 10 * 0.2); // for padding
              ctx.fillStyle = "#2d343c"; //background color for tag
              const fillY = node.current_case
                ? node.y - bgDimensions[1] / 2 + 10.5
                : node.y - bgDimensions[1] / 2 + 9.5;
              ctx.fillRect(
                node.x - bgDimensions[0] / 2 + 0.5,
                fillY,
                ...bgDimensions
              );
              const y = node.current_case ? node.y + 8 : node.y + 10.1;
              // for text styling
              ctx.font = `3px mukta`;
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillStyle = "#d3d3d3"; //node.color;
              ctx.fillText(label, node.x + 0.5, y);

            img.src =  
              node.group === "pc"
                ? (node.DetectionConfidence == "3" ? pcImgRed 
                : (node.DetectionConfidence == "2")
                ? pcImgCyan : pcImg)

                : node.group === "hub"
                ? (node.DetectionConfidence == "3" ? hubImgRed 
                : (node.DetectionConfidence == "2") 
                ? hubImgCyan : hubImg)

                : node.group === "firewall"
                ? (node.DetectionConfidence == "3" ? firewallImgRed 
                : (node.DetectionConfidence == "2") 
                ? firewallImgCyan : firewallImg)

                : node.group === "server"
                ? (node.DetectionConfidence == "3" ? serverImgRed 
                : (node.DetectionConfidence == "2") 
                ? serverImgCyan : serverImg)

                : node.group === "internet"
                ? internetImg
                : null
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
          maxZoom={8}
          onEngineStop={() => {
            if (!stopEngine) {
              fgRef.current.zoomToFit(450, 120);
              setStopEngine(true);
            }
          }}
        />
  
      </div>

    </div>
            );
}
export default GraphAddView;