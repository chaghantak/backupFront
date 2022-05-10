import React from "react";
import { NEO4J_PASSWORD, NEO4J_CHAIN_URL, NEO4J_USER } from "../api";
import { NeoGraph } from "./NeoGraph";

const Graph = (id) => {
   
    return (
        
        <div className="App" style={{ fontFamily: "Quicksand", }}>
            <NeoGraph
                id={id}
                width={"100%"}
                height={36.55}
                containerId={"viz"}
                neo4jUri={NEO4J_CHAIN_URL}
                neo4jUser={NEO4J_USER}
                neo4jPassword={NEO4J_PASSWORD}
                backgroundColor={"black"}
            />
        </div>
    );
};

export default Graph;
