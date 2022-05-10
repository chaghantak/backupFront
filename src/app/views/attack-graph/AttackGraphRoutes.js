import React from "react";

const attackGraphRoutes = [
  {
    path: "/attack-graph/:id",
    component: React.lazy(() => import("./AttackGraphView"))
  },
  {
    path: "/attack-graph",
    component: React.lazy(() => import("./AttackGraphListView"))
  },
];

export default attackGraphRoutes;
