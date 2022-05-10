import React from "react";

const attackDomainRoutes = [
 
  {
    path: "/a-attack-domain",
    component: React.lazy(() => import("./AttackDomainView"))
  },
];

export default attackDomainRoutes;