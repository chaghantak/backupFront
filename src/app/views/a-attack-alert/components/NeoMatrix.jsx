import React from "react";
import Graph from "../../neo4jComponents/Graph";

export default function NeoMatrix(id) {
  return (
    <div style={{
      height: "37.55vw",
      overflow: "auto",
      borderRight: "1px solid black",
      borderBottom: "1px solid black"
    }}>
      <div style={{borderBottom: "1px solid black"}}>Neo4j Graph</div>
      <Graph id={id} />
    </div>
  );
}
