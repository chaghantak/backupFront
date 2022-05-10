import React from "react";

const attackDataRoutes = [
 
  {
    path: "/a-attack-data",
    component: React.lazy(() => import("./AttackDataView"))
  },
];

export default attackDataRoutes;