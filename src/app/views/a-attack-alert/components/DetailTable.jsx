import React from "react";
import styled from "styled-components";

function DetailTable({ data }) {

  const dest = data.replace(/\:/, "@");
  const test1 = dest.split("@", -1);
  
  return (
    <tr style={{ border: "1px solid black", borderCollapse: "collapse" }}>
      <Td style={{}}>{test1[0]}</Td>
      <Td>{test1[1]}</Td>
    </tr>
  );
}

export default DetailTable;

const Td = styled.td`
  border: 1px solid black;
  border-collapse: collapse;
  word-break: break-word;
 
  `
