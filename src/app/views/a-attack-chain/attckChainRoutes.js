import React from "react";

const attackChainRoutes = [
 
  {
    path: "/a-attack-chain",
    component: React.lazy(() => import("./AttackChainView"))
  },
];

export default attackChainRoutes;