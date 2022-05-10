import React, { useEffect, useRef, useCallback, useState } from 'react';
import ForceGraph2D from "react-force-graph-2d";
import svg_icons from "./all-svgs";
import ReactDOM from "react-dom";
import { notification } from "antd";
import moment from "moment";
import style from "./style.css";




import pcImg from "../../image/pc.png"
import hubImg from "../../image/hub.png"
import firewallImg from "../../image/firewall.png"
import serverImg from "../../image/server.png"

function GraphAddView(props) {
  // const imagePath = "/assets/images/products/w40";
  const fgRef = useRef();
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodePosition, setNodePosition] = useState(null);
  const [stopEngine, setStopEngine] = useState(false);
  const [graphData, setGraphData] = useState(props.signalData);

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
                  {selectedNode.group === "target"
                    ? selectedNode.field === "Host"
                      ? svg_icons.target_host
                      : selectedNode.field === "User"
                      ? svg_icons.target_user
                      : selectedNode.field === "Action"
                      ? svg_icons.target_action
                      : selectedNode.field === "Process"
                      ? svg_icons.target_process
                      : selectedNode.field === "Url"
                      ? svg_icons.target_url
                      : selectedNode.field === "Hash"
                      ? svg_icons.target_hash
                      : selectedNode.field === "Object"
                      ? svg_icons.target_object
                      : selectedNode.field === "Resource"
                      ? svg_icons.target_resource
                      : null
                    : null}
                  {selectedNode.group === "suspect"
                    ? selectedNode.field === "Host"
                      ? svg_icons.suspect_host
                      : selectedNode.field === "User"
                      ? svg_icons.suspect_user
                      : selectedNode.field === "Action"
                      ? svg_icons.suspect_action
                      : selectedNode.field === "Process"
                      ? svg_icons.suspect_process
                      : selectedNode.field === "Url"
                      ? svg_icons.suspect_url
                      : selectedNode.field === "Hash"
                      ? svg_icons.suspect_hash
                      : selectedNode.field === "Object"
                      ? svg_icons.suspect_object
                      : selectedNode.field === "Resource"
                      ? svg_icons.suspect_resource
                      : null
                    : null}

                  {selectedNode.group === "compromised"
                    ? selectedNode.field === "Host"
                      ? svg_icons.comp_host
                      : selectedNode.field === "User"
                      ? svg_icons.comp_user
                      : selectedNode.field === "Action"
                      ? svg_icons.comp_action
                      : selectedNode.field === "Process"
                      ? svg_icons.comp_process
                      : selectedNode.field === "Url"
                      ? svg_icons.comp_url
                      : selectedNode.field === "Hash"
                      ? svg_icons.comp_hash
                      : selectedNode.field === "Object"
                      ? svg_icons.comp_object
                      : selectedNode.field === "Resource"
                      ? svg_icons.comp_resource
                      : null
                    : null}
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
//           backgroundColor={"#18191d"}
          height={500}
          width={1450}
          nodeId="id"
          autoPauseRedraw={false}
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
          onNodeDrag={(node) => {
            node.fx = node.x;
            node.fy = node.y;
          }}
          onNodeDragEnd={(node) => {
            node.fx = node.x;
            node.fy = node.y;
          }}
          nodeCanvasObject={(node, ctx) => {
            const size = 8;
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

            img.src =
              node.group === "pc"
                ? pcImg
                : node.group === "hub"
                ? hubImg
                : node.group === "firewall"
                ? firewallImg
                : node.group === "server"
                ? serverImg
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
          maxZoom={10}
          onEngineStop={() => {
            if (!stopEngine) {
              fgRef.current.zoomToFit(1000, 50);
              setStopEngine(true);
            }
          }}
          cooldownTicks={100}
          linkDirectionalArrowLength={8}
          linkDirectionalArrowColor = {"#555"}
          linkDirectionalArrowRelPos={1}
          linkWidth={3}
//           linkColor={(link) => (link.current_case ? "#555" : "#555")}
//           linkDirectionalParticles={4}
//           linkWidth={(link) => (link.current_case ? 3 : 1)}
//           linkDirectionalParticleColor={() => "#ea671b"}
//           linkLineDash={(link) => (!link.current_case ? [2, 1] : null)}
//           linkDirectionalParticleWidth={(link) =>
//             link.current_case && props.type === "cases"
//               ? 4
//               : props.type === "signals"
//               ? 3
//               : 0
//           }
//           linkDirectionalParticleSpeed={() => 1 * 0.01}
          // linkDirectionalArrowLength={link =>
          //   !link.current_case && props.type === 'cases' ? 2 : 0
          // }
          // linkDirectionalArrowRelPos={() => 0.8}
          // linkDirectionalArrowColor={() => '#757575'}
        />
      </div>
    </div>
            );
}
export default GraphAddView;