import React from 'react';

const attackNetworkRoutes = [
  {
    path: '/attack-network',
    component: React.lazy(() => import('./AttackNetworkView')),
  },
];

export default attackNetworkRoutes;
