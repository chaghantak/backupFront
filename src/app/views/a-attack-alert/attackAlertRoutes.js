import React from "react";

const attackAlertRoutes = [
 
  {
    path: "/a-attack-alert",
    component: React.lazy(() => import("./Matrix"))
  },
];

export default attackAlertRoutes;