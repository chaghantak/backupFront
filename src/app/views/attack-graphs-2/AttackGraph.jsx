import React, { Component } from "react";
import Graph from "./GraphAddView";

class AttackGraph extends Component{
    constructor(props) {
        super(props);
        this.state = {
            table: [],
        };
    }
    // componentDidMount() {
    //     fetch('https://192.168.2.57:8001/api/apt-groups/')
    //       .then((res) => {
    //         return res.json(); //Promise 반환
    //       })
    //       .then(chain => this.setState({
    //         table: chain
    //       }))
    //   }
    
    
    render() {
        const graph = {
            nodes: [
              {
                  "CNAMTime": 1622799103136,
                  "DetectionConfidence": "1",
                  "LabelName": "인터넷",
                  "DetectionScore": 5,
                  "DetectionSeverity": null,
                  "DetectionTactic": "content",
                  "DetectionTechnique": "content2",
                  "current_case": false,
                  "group": "internet",
                  "id": "internet01",
                  "index": 0
              },
              {
                  "CNAMTime": 1622799103136,
                  "DetectionConfidence": "3",
                  "LabelName": "Win10",
                  "DetectionScore": 5,
                  "DetectionSeverity": null,
                  "DetectionTactic": "content",
                  "DetectionTechnique": "content2",
                  "current_case": false,
                  "group": "pc",
                  "id": "pc01",
                  "index": 1
              },
              {
                "CNAMTime": 1622799103136,
                "DetectionConfidence": "3",
                "LabelName": "Win10",
                "DetectionScore": 5,
                "DetectionSeverity": null,
                "DetectionTactic": "content",
                "DetectionTechnique": "content2",
                "current_case": false,
                "group": "pc",
                "id": "pc02",
                "index": 2
              },
              {
                "CNAMTime": 1622799103136,
                "DetectionConfidence": "2",
                "LabelName": "Win10",
                "DetectionScore": 5,
                "DetectionSeverity": null,
                "DetectionTactic": "content",
                "DetectionTechnique": "content2",
                "current_case": false,
                "group": "pc",
                "id": "pc03",
                "index": 3
              },
              {
                "CNAMTime": 1622799103136,
                "DetectionConfidence": "2",
                "LabelName": "Win10",
                "DetectionScore": 5,
                "DetectionSeverity": null,
                "DetectionTactic": "content",
                "DetectionTechnique": "content2",
                "current_case": false,
                "group": "pc",
                "id": "pc04",
                "index": 4
              },
              {
                "CNAMTime": 1622799103136,
                "DetectionConfidence": "2",
                "LabelName": "Win10",
                "DetectionScore": 5,
                "DetectionSeverity": null,
                "DetectionTactic": "content",
                "DetectionTechnique": "content2",
                "current_case": false,
                "group": "pc",
                "id": "pc05",
                "index": 5
              },
              {
                "CNAMTime": 1622799103136,
                "DetectionConfidence": "1",
                "LabelName": "Ubuntu",
                "DetectionScore": 5,
                "DetectionSeverity": null,
                "DetectionTactic": "content",
                "DetectionTechnique": "content2",
                "current_case": false,
                "group": "pc",
                "id": "pc06",
                "index": 6
              },
              {
                "CNAMTime": 1622799103136,
                "DetectionConfidence": "1",
                "LabelName": "Win10",
                "DetectionScore": 5,
                "DetectionSeverity": null,
                "DetectionTactic": "content",
                "DetectionTechnique": "content2",
                "current_case": false,
                "group": "pc",
                "id": "pc07",
                "index": 7
              },
              {
                "CNAMTime": 1622799103136,
                "DetectionConfidence": "1",
                "LabelName": "macOS",
                "DetectionScore": 5,
                "DetectionSeverity": null,
                "DetectionTactic": "content",
                "DetectionTechnique": "content2",
                "current_case": false,
                "group": "pc",
                "id": "pc08",
                "index": 8
              },
              {
                  "CNAMTime": 1622694788179,
                  "DetectionConfidence": "1",
                  "LabelName": "server",
                  "DetectionScore": 5,
                  "DetectionSeverity": "Medium",
                  "DetectionTactic": "content",
                  "DetectionTechnique": "content2",
                  "current_case": false,
                  "group": "server",
                  "id": "server01",
                  "index": 9
              },
              {
                "CNAMTime": 1622694788179,
                "DetectionConfidence": "1",
                "LabelName": "server",
                "DetectionScore": 5,
                "DetectionSeverity": "Medium",
                "DetectionTactic": "content",
                "DetectionTechnique": "content2",
                "current_case": false,
                "group": "server",
                "id": "server02",
                "index": 10
              },
              {
                "CNAMTime": 1622694788179,
                "DetectionConfidence": "1",
                "LabelName": "server",
                "DetectionScore": 5,
                "DetectionSeverity": "Medium",
                "DetectionTactic": "content",
                "DetectionTechnique": "content2",
                "current_case": false,
                "group": "server",
                "id": "server03",
                "index": 11
              },
              {
                  "CNAMTime": 1622694788179,
                  "DetectionConfidence": "1",
                  "LabelName": "hub",
                  "DetectionScore": 5,
                  "DetectionSeverity": "Medium",
                  "DetectionTactic": "content",
                  "DetectionTechnique": "content2",
                  "Occurrences": 3,
                  "current_case": false,
                  "group": "hub",
                  "id": "hub01",
                  "index": 12
              },
              {
                  "CNAMTime": 1622694788179,
                  "DetectionConfidence": "1",
                  "LabelName": "hub",
                  "DetectionScore": 5,
                  "DetectionSeverity": "Medium",
                  "DetectionTactic": "content",
                  "DetectionTechnique": "content2",
                  "Occurrences": 3,
                  "current_case": false,
                  "group": "hub",
                  "id": "hub02",
                  "index": 13
              },
              {
                  "CNAMTime": 1622694788179,
                  "DetectionConfidence": "1",
                  "LabelName": "hub",
                  "DetectionScore": 5,
                  "DetectionSeverity": "Medium",
                  "DetectionTactic": "content",
                  "DetectionTechnique": "content2",
                  "Occurrences": 3,
                  "current_case": false,
                  "group": "hub",
                  "id": "hub03",
                  "index": 14
              },
              {
                  "CNAMTime": 1622694788179,
                  "DetectionConfidence": "1",
                  "LabelName": "hub",
                  "DetectionScore": 5,
                  "DetectionSeverity": "Medium",
                  "DetectionTactic": "content",
                  "DetectionTechnique": "content2",
                  "Occurrences": 3,
                  "current_case": false,
                  "group": "hub",
                  "id": "hub04",
                  "index": 15
              },
              {
                  "CNAMTime": 1622694788179,
                  "DetectionConfidence": "1",
                  "LabelName": "firewall",
                  "DetectionScore": 5,
                  "DetectionSeverity": "Medium",
                  "DetectionTactic": "content",
                  "DetectionTechnique": "content2",
                  "Occurrences": 3,
                  "current_case": false,
                  "group": "firewall",
                  "id": "firewall01",
                  "index": 16
              },
              {
                  "CNAMTime": 1622694788179,
                  "DetectionConfidence": "1",
                  "LabelName": "firewall",
                  "DetectionScore": 5,
                  "DetectionSeverity": "Medium",
                  "DetectionTactic": "content",
                  "DetectionTechnique": "content2",
                  "Occurrences": 3,
                  "current_case": false,
                  "group": "firewall",
                  "id": "firewall02",
                  "index": 17
              },
              {
                  "CNAMTime": 1622694788179,
                  "DetectionConfidence": "1",
                  "LabelName": "firewall",
                  "DetectionScore": 5,
                  "DetectionSeverity": "Medium",
                  "DetectionTactic": "content",
                  "DetectionTechnique": "content2",
                  "Occurrences": 3,
                  "current_case": false,
                  "group": "firewall",
                  "id": "firewall03",
                  "index": 18
              }
          ],
            links: [
              {
                  "cnam_time": 1622616429663,
                  "graph_id": "node01",
                  "relation": "suspecthost",
                  "scope_id": "default", //dash
                  "source": "internet01",
                  "target": "hub01",
                  "current_case": true,
                  "id": "0",
                  "linkStyle":false,
              },
              {
                  "cnam_time": 1622629255230,
                  "graph_id": "node01",
                  "relation": "targethost",
                  "scope_id": "default",
                  "source": "firewall01",
                  "target": "hub01",
                  "current_case": true,
                  "id": "1",
                  "linkStyle":true,
              },
              {
                  "cnam_time": 1622629255230,
                  "graph_id": "node03",
                  "relation": "suspecthost",
                  "scope_id": "default",
                  "source": "hub01",
                  "target": "firewall02",
                  "current_case": true,
                  "id": "2",
                  "linkStyle":false,
              },
              
              {
                  "cnam_time": 1622693136904,
                  "graph_id": "node03",
                  "relation": "targetuser",
                  "scope_id": "default",
                  "source": "hub01",
                  "target": "firewall03",
                  "current_case": true,
                  "id": "3",
                  "linkStyle":true,
              },
              {
                  "cnam_time": 1622616429663,
                  "graph_id": "node05",
                  "relation": "targethost",
                  "scope_id": "default",
                  "source": "hub02",
                  "target": "firewall01",
                  "current_case": true,
                  "id": "4",
                  "linkStyle":true,
              },
              {
                  "cnam_time": 1622726297713,
                  "graph_id": "node06",
                  "relation": "targetuser",
                  "scope_id": "default",
                  "source": "firewall02",
                  "target": "hub04",
                  "current_case": true,
                  "id": "5",
                  "linkStyle":false,
              },
              {
                  "cnam_time": 1622726297713,
                  "graph_id": "node02",
                  "relation": "targetuser",
                  "scope_id": "default",
                  "source": "firewall03",
                  "target": "hub03",
                  "current_case": true,
                  "id": "6",
                  "linkStyle":true,
              },{
                "cnam_time": 1622616429663,
                "graph_id": "node01",
                "relation": "suspecthost",
                "scope_id": "dash",
                "source": "pc01",
                "target": "hub02",
                "current_case": true,
                "id": "7",
                "linkStyle":true,
            },{
                "cnam_time": 1622616429663,
                "graph_id": "node01",
                "relation": "suspecthost",
                "scope_id": "dash",
                "source": "pc02",
                "target": "hub02",
                "current_case": true,
                "id": "8",
                "linkStyle":true,
            },{
                "cnam_time": 1622616429663,
                "graph_id": "node01",
                "relation": "suspecthost",
                "scope_id": "default",
                "source": "hub02",
                "target": "pc03",
                "current_case": true,
                "id": "9",
                "linkStyle":true,
            },{
                "cnam_time": 1622616429663,
                "graph_id": "node01",
                "relation": "suspecthost",
                "scope_id": "default",
                "source": "hub02",
                "target": "pc04",
                "current_case": true,
                "id": "10",
                "linkStyle":true,
            },{
                "cnam_time": 1622616429663,
                "graph_id": "node01",
                "relation": "suspecthost",
                "scope_id": "default",
                "source": "hub03",
                "target": "pc05",
                "current_case": true,
                "id": "11",
                "linkStyle":true,
            },{
                "cnam_time": 1622616429663,
                "graph_id": "node01",
                "relation": "suspecthost",
                "scope_id": "default",
                "source": "hub03",
                "target": "pc06",
                "current_case": true,
                "id": "12",
                "linkStyle":false,
            },{
                "cnam_time": 1622616429663,
                "graph_id": "node01",
                "relation": "suspecthost",
                "scope_id": "default",
                "source": "hub03",
                "target": "pc07",
                "current_case": true,
                "id": "13",
                "linkStyle":false,
            },{
                "cnam_time": 1622616429663,
                "graph_id": "node01",
                "relation": "suspecthost",
                "scope_id": "default",
                "source": "hub03",
                "target": "pc08",
                "current_case": true,
                "id": "14",
                "linkStyle":false,
            },{
                "cnam_time": 1622616429663,
                "graph_id": "node01",
                "relation": "suspecthost",
                "scope_id": "default",
                "source": "hub04",
                "target": "server01",
                "current_case": true,
                "id": "15",
                "linkStyle":false,
            },{
                "cnam_time": 1622616429663,
                "graph_id": "node01",
                "relation": "suspecthost",
                "scope_id": "default",
                "source": "hub04",
                "target": "server02",
                "current_case": true,
                "id": "16",
                "linkStyle":false,
            },{
                "cnam_time": 1622616429663,
                "graph_id": "node01",
                "relation": "suspecthost",
                "scope_id": "default",
                "source": "hub04",
                "target": "server03",
                "current_case": true,
                "id": "17",
                "linkStyle":false,
            },
        
    
          ]
          };



        //   const { table } = this.state;
        // //   console.log(table[0])
      
        //   if (table[0] === undefined) {
        //     return null
        //   }
      

          
        return (
            <div className="m-sm-30">
            <div>
                <Graph signalData={graph} 
                // tdata={table} 
                className="Appnode"></Graph>
            </div>
            </div>
        );
    }
}

export default AttackGraph;