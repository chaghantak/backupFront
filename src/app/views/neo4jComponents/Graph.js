import React from "react";
import { NEO4J_PASSWORD, NEO4J_CHAIN_URL, NEO4J_USER } from "../api";
import { NeoGraph } from "./NeoGraph";

const Graph = (id) => {
   
    return (
        
        <td className="App" >
            <NeoGraph
                id={id}
                width={"100%"}
                height={42}
                containerId={"viz"}
                neo4jUri={NEO4J_CHAIN_URL}
                neo4jUser={NEO4J_USER}
                neo4jPassword={NEO4J_PASSWORD}
                backgroundColor={"#2C3845"}
            />
        </td>
    );
};

export default Graph;
