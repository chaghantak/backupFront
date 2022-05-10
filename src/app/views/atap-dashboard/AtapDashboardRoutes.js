import React from "react";

const atapdashboardRoutes = [

  {
    path: "/atap-dashboard",
    component: React.lazy(() => import("./AtapDashBoard"))
  },
];

export default atapdashboardRoutes;
