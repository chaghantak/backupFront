import React from "react";
import { Redirect } from "react-router-dom";

import dashboardRoutes from "./views/dashboard/DashboardRoutes";
import atapDashboardRoutes from "./views/atap-dashboard/AtapDashboardRoutes";
import utilitiesRoutes from "./views/utilities/UtilitiesRoutes";
import sessionRoutes from "./views/sessions/SessionRoutes";

import materialRoutes from "./views/material-kit/MaterialRoutes";
import dragAndDropRoute from "./views/Drag&Drop/DragAndDropRoute";

import formsRoutes from "./views/forms/FormsRoutes";
import mapRoutes from "./views/map/MapRoutes";

import attackGraphRoutes from "./views/attack-graph/AttackGraphRoutes";
import attackGraphsRoutes from "./views/attack-graphs-2/attackGraphRoutes";
import attackChainRoutes from "./views/attack-chain/AttackChainRoutes";
import attackCampaignRoutes from "./views/attack-campaign/AttackCampaignRoutes";
import attackCampaignRoutes2 from "./views/attack-campaign-2/AttackCampaignsRoutes";
import networkRoutes from "./views/network/NetworkRoutes";


// import attackchaintestRoutes from "./views/attack-chain-test/attackChainData";
import attackChainDataRoutes from "./views/attack-chain-test/attackChainDataRoutes";

import attackNavigatorMinRoutes from "./views/attack-navigator-min/AttackNavigatorMinRoutes";


import attackNavigatorRoutes from "./views/attack-navigator/AttackNavigatorRoutes";







///////////////////////new

 import attackAlertRoutes from "./views/a-attack-alert/attackAlertRoutes"; //공격 경보
import attackChainNewRoutes from "./views/a-attack-chain/attckChainRoutes" //공격 체인

import attackDataRoutes from "./views/a-attack-data/attackDataRoutes";//데이터 수집형황
import attackTagRoutes from "./views/a-attack-tag/attackTagRoutes";//공격 기술 태그 할당 
import attackDomainRoutes from "./views/a-attack-domain/attackDomainRoutes"; //도메인 변환
import attackModelRoutes from "./views/a-attack-model/attackModelRoutes"; //모델 학습
import attackClassRoutes from "./views/a-attack-class/attackClassRoutes"; //분류 결과
import attackConfRoutes from "./views/a-attack-confrontation/attackConfRoutes"; //공격 대응 현황

import attackAgentRoutes from "./views/a-attack-agent/attackAgentRoutes"; //공격 에이전트 설정

import attackNetworkRoutes from "./views/attack-network/attackNetworkRoutes";//네트워크 대응방법
import attackHostRoutes from "./views/a-attack-host/attackHostRoutes"; //호스트 대응 방책 조회
import attackLearnRoutes from "./views/a-attack-learning/attackLearnRoutes"; //공격예측 모델 학습

















const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard/analytics" />
  }
];

const errorRoute = [
  {
    component: () => <Redirect to="/session/404" />
  }
];

const routes = [
  ...sessionRoutes,
  ...dashboardRoutes,
  ...attackGraphRoutes,
  ...attackChainRoutes,
  ...attackCampaignRoutes,
  ...networkRoutes,
  ...materialRoutes,
  ...utilitiesRoutes,
  ...dragAndDropRoute,
  ...formsRoutes,
  ...mapRoutes,
  ...redirectRoute,
  ...atapDashboardRoutes,
  ...attackGraphsRoutes,
  // ...attackchaintestRoutes,
  ...attackChainDataRoutes,
  ...attackCampaignRoutes2,
  ...attackNavigatorRoutes,
  ...attackNavigatorMinRoutes,

/////////new 
 ...attackAlertRoutes,
...attackChainNewRoutes,
...attackDataRoutes,
...attackTagRoutes,
...attackDomainRoutes,
...attackModelRoutes,
...attackClassRoutes,
...attackConfRoutes,

...attackAgentRoutes,
...attackHostRoutes,

...attackNetworkRoutes,
...attackLearnRoutes,


  ////맨 아래에 놓을 것.
 ...errorRoute,
 
];

export default routes;
