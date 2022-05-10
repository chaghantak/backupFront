import React from "react";

const attackNavigatorMinRoutes = [
  {
    path: "/attack-navigator-min/datail/:id",
    component: React.lazy(() => import("./attackNavigatorMinDetail"))
  },
 
  {
    path: "/attack-navigator-min",
    component: React.lazy(() => import("./attackNavigatorMin"))
  },
];

export default attackNavigatorMinRoutes;
