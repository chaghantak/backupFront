import React from "react";

function DetailHost({ data }) {
  const atomData = JSON.stringify(data[1]);
  const replaceData = atomData.replace(/\"/g, "");
  const atomData1 = replaceData.split(",");
  return (
    <tr style={{ borderCollapse: "collapse", textAlign: "center" }}>
      <td
        style={{
          borderCollapse: "collapse",
          borderTop: "1px solid gray",
          borderLeft: "1px solid gray",
          height: "10%",
        }}
      >
        {data[0]}
      </td>
      {atomData1.map((data, idx) => (
        <td
          style={{
            width: "100%",
            display: "flex",
            borderCollapse: "collapse",
            justifyContent: "center",
            borderTop: "1px solid gray",
            borderLeft: "1px solid gray",
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
