import React from "react";

function Button({ handleProcess }) {
    return (
        <>
            <button onClick={() => handleProcess("rcatt")}>rcatt</button>
            <button onClick={() => handleProcess("tram")}>tram</button>
            <button onClick={() => handleProcess("pestudio")}>pestudio</button>
        </>
    );
}

export default Button;
