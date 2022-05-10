import React from "react";

const attackCampaignRoutes = [
  // {
  //   path: "/attack-campaign/:id",
  //   component: React.lazy(() => import("./AttackGraphView"))
  // },
  {
    path: "/attack-campaign",
    component: React.lazy(() => import("./AttackChainSelectView"))
  },
];

export default attackCampaignRoutes;
