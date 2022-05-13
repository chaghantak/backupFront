import React, { useEffect, useRef } from "react";
import useResizeAware from "react-resize-aware";
import PropTypes from "prop-types";
import Neovis from "neovis.js/dist/neovis.js";
import "./index.css";
const NeoGraph = (props) => {
  const {
    width,
    height,
    containerId,
    backgroundColor,
    neo4jUri,
    neo4jUser,
    neo4jPassword,
    id,
  } = props;

  const visRef = useRef();
  const neoId = id.id.id;
 

  const cyphers = [
    //  `match (p2)-[b*]->(p3) WHERE p3.id="113417c7d463627c02c913ffe6692fbe3a7ffeebb89d9511feff508095ffda94ixDxin8BIE-ttn6W1OiV" return *`,
    //`match (p1)-[a]->(p2)-[b]->(p3)<-[c]-(p1) WHERE p3.id="${neoId}" return *`,
     `match path = (p1)-[a*1..1]-(p2)-[r*1..1]-(p3)-[b*1..1]-(p1) WHERE p3.id="113417c7d463627c02c913ffe6692fbe3a7ffeebb89d9511feff508095ffda94ixDxin8BIE-ttn6W1OiV" return *`,
    // `match path = (p1)-[a*1..1]-(p2)-[r*1..1]-(p3)-[b*1..1]-(p1) WHERE p3.id="${neoId}" return *`,
  ];
  useEffect(() => {
    const config = {
      container_id: visRef.current.id,
      server_url: neo4jUri,
      server_user: neo4jUser,
      server_password: neo4jPassword,

      labels: {
        File: {
          //caption: "file_path",
          caption:true,
          size:"pagerank",
           
        },
        Host: {
          //caption: "host_ip",
          caption:true,
          size: "pagerank",
            
        },
        FileShare: {
          //caption: "fileshare_name",
          caption:true,
          size: "pagerank",
             
        },
        Event: {
          //caption: "rule_name",
          caption:true,
          size: 1.0,
            
        },
        Process: {
          //caption: "process_name",
          caption:true,
          size: "pagerank",
            
        },
        Registry: {
          //caption: "registry_key",
          caption:true,
          size: "pagerank",
            
        },
        Service: {
          //caption: "service_name",
          caption:true,
          size: "pagerank",
           "sizeCypher": `MATCH (n) WHERE id(n) = {id} RETURN SIZE((n)--()) AS s`,
        },
      },
      relationships: {
        accessed: {
          thickness: "community",
          caption: true,
        },
        connected_to: {
          thickness: "community",
          caption: true,
        },
        created: {
          thickness: "community",
          caption: true,
        },
        deleted: {
          thickness: "community",
          caption: true,
        },
        executed: {
          thickness: "community",
          caption: true,
        },
        file_transferrred: {
          thickness: "community",
          caption: true,
        },
        file_used: {
          thickness: "community",
          caption: true,
        },
        injected_into: {
          thickness: "community",
          caption: true,
        },
        lm_diff_host: {
          thickness: "community",
          caption: true,
        },
        lm_remote_logon: {
          thickness: "community",
          caption: true,
        },
        logged_in: {
          thickness: "community",
          caption: true,
        },
        modified: {
          thickness: "community",
          caption: true,
        },
        network_reverse: {
          thickness: "community",
          caption: true,
        },
        network_same: {
          thickness: "community",
          caption: true,
        },
        persistence_srv_install: {
          thickness: "community",
          caption: true,
        },
        process_parent_child: {
          thickness: "community",
          caption: true,
        },
        process_same: {
          thickness: "community",
          caption: true,
        },
        related: {
          thickness: "community",
          caption: true,
        },
      },
      // initial_cypher: `MATCH (r1)-[r]->(n:Event)<-[r]-(n:Event)<-[r]-(r2)WHERE n.id="1f24c3e908337471e22672a7582f4e764a42d155428d0c52199a09e38dfabdd4XzrZin8BSH-jeRJsnySK" RETURN *`,
      arrows: true,

      hierarchical_layout: true,
      hierarchical_sort_method: "directed",
    };
    const vis = new Neovis(config);
    vis.render();

    for (const cypher of cyphers) {
      vis.updateWithCypher(cypher);
    }
  }, [neo4jUri, neo4jUser, neo4jPassword, neoId, cyphers]);

  return (
    <div
      id={containerId}
      ref={visRef}
      style={{
        width: `${width}px`,
        height: `${height}vw`,
        backgroundColor: `${backgroundColor}`,
      }}
    />
  );
};

NeoGraph.defaultProps = {
  width: 600,
  height: 600,
  backgroundColor: "#d3d3d3",
  display: "flex",
};

NeoGraph.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  containerId: PropTypes.string.isRequired,
  neo4jUri: PropTypes.string.isRequired,
  neo4jUser: PropTypes.string.isRequired,
  neo4jPassword: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  display: PropTypes.string,
};

const ResponsiveNeoGraph = (props) => {
  const [resizeListener, sizes] = useResizeAware();

  const side = Math.max(sizes.width, sizes.height) / 2;
  const neoGraphProps = { ...props, width: side, height: side };
  return (
    <div style={{ position: "relative" }}>
      {resizeListener}
      <NeoGraph {...neoGraphProps} />
    </div>
  );
};

ResponsiveNeoGraph.defaultProps = {
  backgroundColor: "#d3d3d3",
};

ResponsiveNeoGraph.propTypes = {
  containerId: PropTypes.string.isRequired,
  neo4jUri: PropTypes.string.isRequired,
  neo4jUser: PropTypes.string.isRequired,
  neo4jPassword: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

export { NeoGraph, ResponsiveNeoGraph };
