import React from "react";

 function TagPdf(id) {
  const ID = JSON.stringify(id);
  const PDF = ID.substring(7, ID.length - 2);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
      }}
    >
      <iframe
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
        }}
        title={""}
        src={PDF}
      ></iframe>
    </div>
  );
}
export default React.memo(TagPdf)