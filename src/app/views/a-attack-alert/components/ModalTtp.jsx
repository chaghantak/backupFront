import React from "react";

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
                      }
                    : {
                        backgroundColor: "white",
                        cursor: "pointer",
                        border: "black solid 1px",
                        display: "flex",
                        width: "100%",
                      }
                }
                onMouseOver={() => {
                  backOn(data.id);
                }}
                onMouseOut={() => {
                  backOn(null);
                }}
              >
                <td
                  style={{
                    border: "black solid 1px",
                    width: "100%",
                    display: "flex",
                  }}
                >
                  {data.timestamp}
                </td>
                <td
                  style={{
                    border: "black solid 1px",
                    width: "100%",
                    display: "flex",
                  }}
                >
                  {data.name}
                </td>
                <td
                  style={{
                    border: "black solid 1px",
                    width: "100%",
                    display: "flex",
                  }}
                >
                  호스트:{data.ip}
                </td>
              </tr>
            </tbody>
          </table>
        ))}
    </>
  );
}

export default ModalTtp;
