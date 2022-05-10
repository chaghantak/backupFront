import React, { useState } from "react";
import styled from "styled-components";
import SubTable from "./SubTable";
import TechniquesTable from "./TechniquesTable";

function TacticTable({
  onCreate,
  onRemove,
  data,
  onClick,
  users,
  handleModalOpen,
  backOn,
  hide
}) {
  return (
    <>
      {data.map((tactic) => (
        <tbody
          key={tactic.id}
          style={{
            display: "table-cell",
            height: "100%",
            position: "relative",
            border: "1px solid gray",
            borderCollapse:"collapse"
            
          }}
        >
          <tr style={{height:"5vw" ,borderBottom: "1px solid gray"}} >
            <Th>
              {tactic.name}
              <br />
              techniques : {tactic.techniques.length}
            </Th>
          </tr>

          {tactic.techniques.map((tec) => (
            <tr key={tec.id} style={{borderBottom: "1px solid gray"}}>
              <TechniquesTable
                tec={tec}
                onClick={onClick}
                tactic={tactic}
                onCreate={onCreate}
                onRemove={onRemove}
                users={users}
                handleModalOpen={handleModalOpen}
                backOn={backOn}
                hide={hide}
              />
              <td style={{padding:"0 0 0 20px"}}>
              {tec.subTechniques.map((sub) => (
                <span  key={sub.id}>
                <SubTable
                  tactic={tactic}
                  sub={sub}
                  tec={tec}
                 backOn={backOn}
                  users={users}
                  onClick={onClick}
                  handleModalOpen={handleModalOpen}
                  hide={hide}
                />
              </span>
              ))}
              </td>
            </tr>
          ))}
        </tbody>
      ))}
    </>
  );
}

export default TacticTable;
const Th = styled.th`
  border-collapse: collapse;
 background-color:white;
  display: table-cell;
  color:#4f7cac;
  `
