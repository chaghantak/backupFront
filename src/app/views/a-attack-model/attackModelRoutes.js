import React from "react";

const attackModelRoutes = [
 
  {
    path: "/a-attack-model",
    component: React.lazy(() => import("./AttackModelView"))
  },
];

export default attackModelRoutes;