import React from "react";

function DetailHost({ data }) {
  const atomData = JSON.stringify(data[1]);
  const replaceData = atomData.replace(/\"/g, "");
  const atomData1 = replaceData.split(",");
  return (
    <tr style={{ borderCollapse: "collapse", border: "1px solid black", textAlign:"center" }}>
      <td
        style={{ borderCollapse: "collapse", borderRight: "1px solid black" }}
      >
        {data[0]}
      </td>
      {atomData1.map((data, idx) => (
        <td
          style={{
            width: "100%",
            display: "flex",
            borderBottom: "1px solid black",
            borderCollapse: "collapse",
           justifyContent:"center"
            
          }}
          key={idx}
        >
          {data}
        </td>
      ))}
    </tr>
  );
}

export default DetailHost;
