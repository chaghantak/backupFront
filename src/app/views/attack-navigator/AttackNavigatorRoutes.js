import React from "react";

const attackNavigatorRoutes = [
 
  {
    path: "/attack-navigator",
    component: React.lazy(() => import("./attackNavigator"))
  },
];

export default attackNavigatorRoutes;
