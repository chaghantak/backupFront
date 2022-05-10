import React from "react";

const AttackCampaignsRoutes = [
  {
    path: "/attack-campaign-2",
    component: React.lazy(() => import("./AttackCampaigns"))
  },
];

export default AttackCampaignsRoutes;
