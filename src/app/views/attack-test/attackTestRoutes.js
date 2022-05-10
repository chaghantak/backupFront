import React from 'react';

const attackTestRoutes = [
  {
    path: '/attack-test',
    component: React.lazy(() => import('./AttackTestView')),
  },
];

export default attackTestRoutes;
