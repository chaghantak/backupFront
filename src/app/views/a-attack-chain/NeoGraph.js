import React, { useEffect, useRef } from "react";
import useResizeAware from "react-resize-aware";
import PropTypes from "prop-types";
import Neovis from "neovis.js/dist/neovis.js";

const NeoGraph = (props) => {
  const {
    width,
    height,
    containerId,
    backgroundColor,
    neo4jUri,
    neo4jUser,
    neo4jPassword,
    host,
  } = props;
  const hostId = host;
  const visRef = useRef();
  const cyphers = [
    ` MATCH path = (n1)-[r*1..2]->(m) WHERE m.host_ip=${hostId} RETURN * limit 100`,
  ];
  useEffect(() => {
    const config = {
      container_id: visRef.current.id,
      server_url: neo4jUri,
      server_user: neo4jUser,
      server_password: neo4jPassword,

      labels: {
        File: {
          caption: "file_path",
          size: "degree",
        },
        Host: {
          caption: "host_ip",
          size: "degree",
        },
        FileShare: {
          caption: "fileshare_name",
          size: "degree",
        },
        Event: {
          caption: "rule_name",
          size: "degree",
        },
        Process: {
          caption: "process_name",
          size: "degree",
        },
        Registry: {
          caption: "registry_key",
          size: "degree",
        },
        Service: {
          caption: "service_name",
          size: "degree",
        },
      },
      relationships: {
        accessed: {
          thickness: "count",
          caption: true,
        },
        connected_to: {
          thickness: "count",
          caption: true,
        },
        created: {
          thickness: "count",
          caption: true,
        },
        deleted: {
          thickness: "count",
          caption: true,
        },
        executed: {
          thickness: "count",
          caption: true,
        },
        file_transferrred: {
          thickness: "count",
          caption: true,
        },
        file_used: {
          thickness: "count",
          caption: true,
        },
        injected_into: {
          thickness: "count",
          caption: true,
        },
        lm_diff_host: {
          thickness: "count",
          caption: true,
        },
        lm_remote_logon: {
          thickness: "count",
          caption: true,
        },
        logged_in: {
          thickness: "count",
          caption: true,
        },
        modified: {
          thickness: "count",
          caption: true,
        },
        network_reverse: {
          thickness: "count",
          caption: true,
        },
        network_same: {
          thickness: "count",
          caption: true,
        },
        persistence_srv_install: {
          thickness: "count",
          caption: true,
        },
        process_parent_child: {
          thickness: "count",
          caption: true,
        },
        process_same: {
          thickness: "count",
          caption: true,
        },
        related: {
          thickness: "count",
          caption: true,
        },
      },

      arrows: true,

      hierarchical_layout: true,
      hierarchical_sort_method: "directed",
    };
    const vis = new Neovis(config);
    vis.render();

    for (const cypher of cyphers) {
      // hostId === "" || hostId ==="host_ip"
      //   ? `조회`
      //   : cyphers,
      vis.updateWithCypher(cypher);
    }
  }, [neo4jUri, neo4jUser, neo4jPassword, hostId]);

  return (
    <div
      id={containerId}
      ref={visRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
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
