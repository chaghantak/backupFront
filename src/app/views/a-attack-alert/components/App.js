import React from "react";
import Tree from "react-d3-tree";
import orgChartJson from "./data/org-chart.json";
import { useCenteredTree } from "./helpers";

const containerStyles = {
  width: "100%",
  height: "100vh"
};

// Here we're using `renderCustomNodeElement` to bind event handlers
// to the DOM nodes of our choice.
// In this case, we only want the node to toggle if the *label* is clicked.
// Additionally we've replaced the circle's `onClick` with a custom event,
// which differentiates between branch and leaf nodes.
const renderNodeWithCustomEvents = ({
  nodeDatum,
  toggleNode,
  handleNodeClick
}) => (
  <g>
    <circle r="15" onClick={() => handleNodeClick(nodeDatum)} />
    <text fill="black" strokeWidth="1" x="20" onClick={toggleNode}>
      {nodeDatum.name} 
    </text>
    {nodeDatum.attributes?.department && (
      <text fill="black" x="20" dy="20" strokeWidth="1">
        Department: {nodeDatum.attributes?.department}
      </text>
    )}
  </g>
);

export default function App() {
  const handleNodeClick = (nodeDatum) => {
    window.alert(
      nodeDatum.children ? "Clicked a branch node" : "Clicked a leaf node."
    );
  };
  const [translate, containerRef] = useCenteredTree();
  const svgSquare = {
    shape: 'rect',
    shapeProps: {
      width: 300,
      height: 300,
      x: -100,
      y: -100,
    }
  }
  return (
    <div style={{containerStyles,height:"640px",textAlign:"center"}} ref={containerRef}>
      <Tree
      nodeSvgShape={svgSquare}
        data={orgChartJson}
        translate={translate}
        renderCustomNodeElement={(rd3tProps) =>
          renderNodeWithCustomEvents({ ...rd3tProps, handleNodeClick })
        }
        orientation="horizontal"
        depthFactor={-300}
      />
    </div>
  );
}
