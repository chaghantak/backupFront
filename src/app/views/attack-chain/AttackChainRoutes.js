import React from "react";

const attackChainRoutes = [
  {
    path: "/attack-chain/:id",
    component: React.lazy(() => import("./AttackChainView"))
  },
  {
    path: "/attack-chain",
    component: React.lazy(() => import("./AttackChainListView"))
  },
];

export default attackChainRoutes;
