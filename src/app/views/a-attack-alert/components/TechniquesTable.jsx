import React, { useState } from "react";
import styled from "styled-components";

function TechniquesTable({
  tactic,
  tec,
  onCreate,
  onRemove,
  users,
  onClick,
  handleModalOpen,
  backOn,
  hide,
}) {
  return (
    <>
      <>
        {tec.events > 0 ? (
          <Td
            onClick={() => (
              onClick(`${tactic.id}.${tec.id}`), handleModalOpen()
            )}
            onMouseOver={() => {
              backOn(tec.name);
            }}
            onMouseOut={() => {
              backOn(null);
            }}
          >
            <a
              style={
                hide === tec.name
                  ? {
                      backgroundColor: "lightgray",
                      cursor: "pointer",
                      color: "#4f7cac",
                    }
                  : {
                      backgroundColor: "white",
                      cursor: "pointer",
                      color: "#4f7cac",
                    }
              }
            >
              {tec.name}
            </a>
          </Td>
        ) : (
          tec.subTechniques.length > 0 && (
            <>
              <Td style={{ position: "relative" }}>
                <a style={{ color: "#4f7cac" }}>
                  {`${tec.name}(${tec.subTechniques.length})`}
                </a>
                <Button
                  style={{ position: "absolute", float: "right" }}
                  onClick={() => onCreate(tec.id)}
                >
                  =
                </Button>

                {users.map((user, idx) => (
                  <span key={idx}>
                    {user.tecname === tec.id && (
                      <Button
                        style={{ position: "absolute", float: "right" }}
                        onClick={() => onRemove(tec.id)}
                      >
                        =
                      </Button>
                    )}
                  </span>
                ))}
              </Td>
            </>
          )
        )}
      </>
    </>
  );
}

export default TechniquesTable;
const Td = styled.th`
  border-collapse: collapse;
`;

const Button = styled.button`
  /*공통 스타일*/
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1px;
  padding-right: 1px;
  transform: rotate(90deg) !important;
  padding: 0 0 0 0;
  margin-top: 4px;
  /*크기*/
  height: 0.7rem;
  width: 0.6rem !important;
  font-size: 1rem;

  /*색상 */
  background: gray;
  &:hover {
    background: lightgray;
  }
  &:active {
    background: white;
  }

  /*기타 */
  & + & {
    margin-left: 0rem;
  }
`;
