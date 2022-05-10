import React from "react";

const NetworkRoutes = [
  {
    path: "/network/:id",
    component: React.lazy(() => import("./NetworkView"))
  },
  {
    path: "/network",
    component: React.lazy(() => import("./NetworkListView"))
  },
];

export default NetworkRoutes;
