import React from "react";

const attackAgentRoutes = [
 
  {
    path: "/a-attack-agent",
    component: React.lazy(() => import("./AttackAgentView"))
  },
];

export default attackAgentRoutes;