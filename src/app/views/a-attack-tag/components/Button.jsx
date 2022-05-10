import React from "react";

function Button({ handleProcess }) {
  return (
    <>
      <button onClick={() => handleProcess("All")}>모두보기</button>
      <button onClick={() => handleProcess("rcatt")}>rcatt</button>
      <button onClick={() => handleProcess("tram")}>tram</button>
      <button onClick={() => handleProcess("pestudio")}>pestudio</button>
    </>
  );
}

export default Button;
