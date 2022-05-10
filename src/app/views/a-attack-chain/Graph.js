import React from "react";
import { NEO4J_PASSWORD, NEO4J_EVENTS_URL, NEO4J_USER } from "../api";
import { NeoGraph } from "./NeoGraph";

const Graph = ({host}) => {
    return (
        <div className="App" style={{ fontFamily: "Quicksand" }}>
            <NeoGraph
                host={host}
                width={"50%"}
                height={800}
                containerId={"id1"}
                neo4jUri={NEO4J_EVENTS_URL}
                neo4jUser={NEO4J_USER}
                neo4jPassword={NEO4J_PASSWORD}
                backgroundColor={"gray"}
            />
        </div>
    );
};

export default Graph;
