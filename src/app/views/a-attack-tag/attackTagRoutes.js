import React from "react";

const attackTagRoutes = [
 
  {
    path: "/a-attack-tag",
    component: React.lazy(() => import("./AttackTagView"))
  },
];

export default attackTagRoutes;