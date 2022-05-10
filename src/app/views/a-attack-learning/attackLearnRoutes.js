import React from "react";

const attackLearnRoutes = [
 
  {
    path: "/a-attack-learning",
    component: React.lazy(() => import("./AttackLearnView"))
  },
];

export default attackLearnRoutes;