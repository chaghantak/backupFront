import React, { useState } from "react";
import styled from "styled-components";

function SubTable({ tactic, sub, tec, onClick, users,handleModalOpen,backOn,hide }) {
  return (
    <>
 
    
      {users.map((user, idx) => (
        <span key={idx} style={{ display: "block",whiteSpace: "nowrap", }}>
          {user.tecname === tec.id && (
            <Span onClick={() => (onClick(`${tactic.id}.${sub.id}`),handleModalOpen())}
            onMouseOver={() => {
              backOn(sub.name);
            }}
            onMouseOut={() => {
              backOn(null);
            }}  style={
              hide === sub.name
                ? { backgroundColor: "lightgray", cursor: "pointer",color:"#4f7cac" }
                : { backgroundColor: "white", cursor: "pointer",color:"#4f7cac" }
            }>
              {sub.name}
            </Span>
          )}
        </span>
      ))}
    </>
  );
}

export default SubTable;
const Span = styled.span`
  border-collapse: collapse;
  border: 1px solid gray;
  display:flex;
  cursor:pointer;
  padding: 5px;
 
`;
