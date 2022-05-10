import React from "react";

const attackClassRoutes = [
 
  {
    path: "/a-attack-class",
    component: React.lazy(() => import("./AttackClassView"))
  },
];

export default attackClassRoutes;