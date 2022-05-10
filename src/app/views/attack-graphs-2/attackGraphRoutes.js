import React from "react";

const attackGraphRoutes = [
 
  {
    path: "/attack-graphs-2",
    component: React.lazy(() => import("./AttackGraph"))
  },
];

export default attackGraphRoutes;
