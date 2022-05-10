export const navigations = [
  // {
  //   name: "Dashboard",
  //   path: "/dashboard/analytics",
  //   icon: "dashboard"
  // },
  // {
  //   name: "Attack Graph",
  //   path: "/attack-graph",
  //   icon: "account_tree"
  // },
  // {
  //   name: "Attack Chain",
  //   path: "/attack-chain",
  //   icon: "linear_scale"
  // },
  // {
  //   name: "Attack Campaign",
  //   path: "/attack-campaign",
  //   icon: "emoji_flags"
  // },
  // {
  //   name: "Network Topology",
  //   path: "/network",
  //   icon: "device_hub"
  // },
  // {
  //   name: "Attack Scenario",
  //   path: "/attack-scenario",
  //   icon: "new_releases"
  // },
  // {
  //   name: "Atap Dashboard(test)",
  //   path: "/atap-dashboard",
  //   icon: "new_releases"
  // },

  {
    name: "이벤트 수집현황",
    type: "extLink",
    path: "https://www.add.re.kr/kps",
    icon: "new_releases",
  },

  {
    name: "이벤트 검색",
    type: "extLink",
    path: "https://www.add.re.kr/kps",
    icon: "new_releases",
  },

  {
    name: "공격체인 구성",

    icon: "new_releases",
    children: [
      {
        name: "단위공격 경보",
        path: "/a-attack-alert",
      },
      {
        name: "공격체인",
        path: "/a-attack-chain",
      },
    ],
  },

  {
    name: "공격 캠페인 분류",

    icon: "new_releases",
    children: [
      {
        name: "데이터 수집 현황",
        path: "/a-attack-data",
      },
      {
        name: "공격 기술 태그 할당",
        path: "/a-attack-tag",
      },
      {
        name: "도메인 변환",
        path: "/a-attack-domain",
      },
      {
        name: "모델 학습",
        path: "/a-attack-model",
      },
      {
        name: "분류 결과",
        path: "/a-attack-class",
      },
    ],
  },

  {
    name: "공격대응",

    icon: "new_releases",
    children: [
      {
        name: "공격 대응 현황",
        path: "/a-attack-confrontation",
      },
      {
        name: "공격 대응 에이션트 설정",
        path: "/a-attack-agent",
      },
      {
        name: "호스트 대응 방책 조회",
        path: "/a-attack-host",
      },
      {
        name: "네트워크 대응 방책 관리",
        path: "/attack-network",
      },
      {
        name: "공격예측 모델 학습",
        path: "/a-attack-learning",
      },
    ],
  },

  

  /////////////////////////////////

  // {

  //   name: "attack Graphes",
  //   path: "/attack-graphs-2",
  //   icon: "new_releases"
  // },
  // {
  //   name: "attack chain test",
  //   path: "/attack-chain-test",
  //   icon: "new_releases"
  // },
  // {
  //   name: "attack Campaigns",
  //   path: "/attack-campaign-2",
  //   icon: "new_releases"
  // },
  // {
  //   name: "attack Navigator",
  //   path: "/attack-navigator",
  //   icon: "new_releases"
  // },
  // {
  //   name: "attack Navigator min",
  //   path: "/attack-navigator-min",
  //   icon: "new_releases"
  // }

  //////////////////////////////////////

  // {
  //   name: "Forms",
  //   icon: "description",
  //   children: [
  //     {
  //       name: "Basic",
  //       path: "/forms/basic",
  //       iconText: "B"
  //     },
  //     {
  //       name: "Editor",
  //       path: "/forms/editor",
  //       iconText: "E"
  //     }
  //   ]
  // },
  // {
  //   name: "Drag and Drop",
  //   icon: "control_camera",
  //   path: "/others/drag-and-drop"
  // },
  // {
  //   name: "Multilevel",
  //   icon: "trending_up",
  //   children: [
  //     {
  //       name: "Level 1",
  //       icon: "list",
  //       children: [
  //         {
  //           name: "Item 1",
  //           path: "/charts/victory-charts",
  //           iconText: "1"
  //         },
  //         {
  //           name: "Item 2",
  //           path: "/charts/react-vis",
  //           iconText: "2"
  //         },
  //         {
  //           name: "Item 3",
  //           path: "/charts/recharts",
  //           iconText: "3"
  //         },
  //         {
  //           name: "Item 4",
  //           path: "/charts/echarts",
  //           iconText: "4"
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   name: "Utilities",
  //   icon: "format_list_bulleted",
  //   children: [
  //     {
  //       name: "Color",
  //       path: "/utilities/color",
  //       iconText: "C"
  //     },
  //     {
  //       name: "Spacing",
  //       path: "/utilities/spacing",
  //       iconText: "S"
  //     },
  //     {
  //       name: "Typography",
  //       path: "/utilities/typography",
  //       iconText: "T"
  //     },
  //     {
  //       name: "Display",
  //       path: "/utilities/display",
  //       iconText: "D"
  //     }
  //   ]
  // },
  // {
  //   name: "Sessions",
  //   icon: "trending_up",
  //   children: [
  //     {
  //       name: "Sign in",
  //       iconText: "SI",
  //       path: "/session/signin"
  //     },
  //     {
  //       name: "Sign up",
  //       iconText: "SU",
  //       path: "/session/signup"
  //     },
  //     {
  //       name: "Forgot password",
  //       iconText: "FP",
  //       path: "/session/forgot-password"
  //     },
  //     {
  //       name: "Error",
  //       iconText: "404",
  //       path: "/session/404"
  //     }
  //   ]
  // },

  // {
  //   name: "UI Kits",
  //   icon: "favorite",
  //   badge: { value: "50+", color: "secondary" },
  //   children: [
  //     {
  //       name: "Auto Complete",
  //       path: "/material/autocomplete",
  //       iconText: "A"
  //     },
  //     {
  //       name: "Buttons",
  //       path: "/material/buttons",
  //       iconText: "B"
  //     },
  //     {
  //       name: "Checkbox",
  //       path: "/material/checkbox",
  //       iconText: "C"
  //     },
  //     {
  //       name: "Dialog",
  //       path: "/material/dialog",
  //       iconText: "D"
  //     },
  //     {
  //       name: "Expansion Panel",
  //       path: "/material/expansion-panel",
  //       iconText: "E"
  //     },
  //     {
  //       name: "Form",
  //       path: "/material/form",
  //       iconText: "F"
  //     },
  //     {
  //       name: "Icons",
  //       path: "/material/icons",
  //       iconText: "I"
  //     },
  //     {
  //       name: "Menu",
  //       path: "/material/menu",
  //       iconText: "M"
  //     },
  //     {
  //       name: "Progress",
  //       path: "/material/progress",
  //       iconText: "P"
  //     },
  //     {
  //       name: "Radio",
  //       path: "/material/radio",
  //       iconText: "R"
  //     },
  //     {
  //       name: "Switch",
  //       path: "/material/switch",
  //       iconText: "S"
  //     },
  //     {
  //       name: "Slider",
  //       path: "/material/slider",
  //       iconText: "S"
  //     },
  //     {
  //       name: "Snackbar",
  //       path: "/material/snackbar",
  //       iconText: "S"
  //     },
  //     {
  //       name: "Table",
  //       path: "/material/table",
  //       iconText: "T"
  //     }
  //   ]
  // },

  // {
  //   name: "Map",
  //   icon: "add_location",
  //   path: "/map"
  // }
];
