import React from "react";

const attackHostRoutes = [
 
  {
    path: "/a-attack-host",
    component: React.lazy(() => import("./AttackHostView"))
  },
];

export default attackHostRoutes;