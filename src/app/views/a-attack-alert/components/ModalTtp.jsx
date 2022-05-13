import React from "react";
import styled from "styled-components";
function ModalTtp({ data, modalClick, hide, backOn }) {
  return (
    <>
      {data &&
        data.map((data) => (
          <table
            style={{ borderCollapse: "collapse", width: "100%" }}
            key={data.id}
          >
            <tbody>
              <tr
                onClick={() => {
                  modalClick(data.id);
                }}
                style={
                  hide === data.id
                    ? {
                        backgroundColor: "lightgray",
                        cursor: "pointer",
                        border: "black solid 1px",
                        display: "flex",
                        width: "100%",
                        borderCollapse: "collapse"
                      }
                    : {
                        backgroundColor: "#2C3845",
                        cursor: "pointer",
                       
                        display: "flex",
                        width: "100%",
                        color: "white",
                        borderCollapse: "collapse"
                      }
                }
                onMouseOver={() => {
                  backOn(data.id);
                }}
                onMouseOut={() => {
                  backOn(null);
                }}
              >
                <Td>{data.timestamp}</Td>
                <Td>{data.name}</Td>
                <Td>호스트:{data.ip}</Td>
              </tr>
            </tbody>
          </table>
        ))}
    </>
  );
}

export default ModalTtp;

const Td = styled.td`
  border: gray solid 1px;
  width: 100%;
  display: flex;
  border-collapse: collapse;
`;
