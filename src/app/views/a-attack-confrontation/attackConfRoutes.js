import React from "react";

const attackConfRoutes = [
 
  {
    path: "/a-attack-confrontation",
    component: React.lazy(() => import("./AttackConfView"))
  },
];

export default attackConfRoutes;