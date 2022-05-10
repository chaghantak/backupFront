import React from "react";

const attackChainDataRoutes = [

  {
    path: "/attack-chain-test",
    component: React.lazy(() => import("./attackChainData"))
  },
];

export default attackChainDataRoutes;
