import React from "react";

const attackchaintestRoutes = [

  {
    path: "/attack-chain-test",
    component: React.lazy(() => import("./attackChainData"))
  },
];

export default attackchaintestRoutes;
