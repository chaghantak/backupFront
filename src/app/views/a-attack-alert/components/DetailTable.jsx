import React from "react";
import styled from "styled-components";

function DetailTable({ data }) {

  const dest = data.replace(/\:/, "@");
  const test1 = dest.split("@", -1);
  
  return (
    <tr style={{borderCollapse: "collapse" }}>
      <Td style={{}}>{test1[0]}</Td>
      <Td>{test1[1]}</Td>
    </tr>
  );
}

export default DetailTable;

const Td = styled.td`
 border-top: 1px solid gray;
  border-left: 1px solid gray;
  
  border-collapse: collapse;
  word-break: break-word;
 
  `
