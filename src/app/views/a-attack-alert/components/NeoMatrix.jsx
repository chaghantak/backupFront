import React from "react";
import styled from "styled-components";
import Graph from "../../neo4jComponents/Graph";

export default function NeoMatrix(id) {
  return (
    <Container style={{
      height: "42vw",
     overflow: "hidden",
      borderRight: "1px solid gray",
      borderBottom: "1px solid gray"
    }}>
      <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              height: "42vw",
            }}
          >
            <thead>
              <tr
                style={{
                  backgroundColor: "#2C3845",
                  position: "sticky",
                  top: "0",
                  borderBottom: "1px solid gray"
                }}
              >
            <td>Graph</td>
          </tr>
        </thead>
        <tbody>
          <tr>
          <Graph id={id} />
          </tr>
        </tbody>
      </table>
      {/* <div style={{borderBottom: "1px solid gray", backgroundColor: "#2C3845",
                  position: "sticky",
                  top: "0",}}>Neo4j Graph</div> */}
     
    </Container>
  );
}

const Container = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;