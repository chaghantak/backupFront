import React, {useState} from 'react';

import Graph from "./GraphAddView";
import VarGraph from "./BarGraph";


import "../attackStyle.css";

function AttackCampDiv(props) {

    const [countrysOn, setCountrysOn] = useState(false);

    const DivOnOff = () => {
        setCountrysOn(!countrysOn)
      }

const groupData = props.groupData;
const index = props.index;

 const graph = {
        nodes: [
          {
              "group": "Switch",
              "label" : "Switch",
              "id": "s01",
              "index": 0,
          },
          {
            "group": "Switch",
            "label" : "F.XX",
            "id": "s02",
            "index": 1,
        },
        {
            "group": "Switch",
            "label" : "F.YY",
            "id": "s03",
            "index": 2,
        },
    
    
        {
            "group": "host",
            "label" : "A.YY",
            "id": "h01",
            "index": 3,
            "status" : 0,
        },
        {
            "group": "host",
            "label" : "A.XX",
            "id": "h02",
            "index": 4,
            "status" : 1,
        },
        {
            "group": "host",
            "label" : "A.00",
            "id": "h03",
            "index": 5,
            "status" : 1,
        },
        {
            "group": "host",
            "label" : "A.11",
            "id": "h04",
            "index": 6,
            "status" : 1,
        },
        {
            "group": "host",
            "label" : "A.22",
            "id": "h05",
            "index": 7,
            "status" : 0,
        },
        {
            "group": "host",
            "label" : "A.33",
            "id": "h06",
            "index": 8,
            "status" : 0,
        },
        {
            "group": "host",
            "label" : "A.44",
            "id": "h07",
            "index": 9,
            "status" : 0,
        },
        {
            "group": "host",
            "label" : "A.55",
            "id": "h08",
            "index": 10,
            "status" : 0,
        },
      ],
        links: [
          {
              "source": "s01",
              "target": "s02"
          },
          {
            "source": "s02",
            "target": "s03"
          },
          {
            "source": "s03",
            "target": "s01"
          },
          {
            "source": "s02",
            "target": "h01"
          },
          {
            "source": "s02",
            "target": "h02"
          },
          {
            "source": "s03",
            "target": "h03"
          },
          {
            "source": "s03",
            "target": "h04"
          },
          {
            "source": "s01",
            "target": "h05"
          },
          {
            "source": "s01",
            "target": "h06"
          },
          {
            "source": "s01",
            "target": "h07"
          },
          {
            "source": "s01",
            "target": "h08"
          },
    
    
      ]
      };
      
        return(
                <>
                <div className='style2' onMouseOver={DivOnOff} onMouseOut={DivOnOff}>
                <pre>top.{index + 1} {groupData.name}<br />
                {countrysOn && <div className='MouseOver'>다른 이름으로는{groupData.moreName}</div>}
                </pre>
            </div>
            <div className='style4'>
                <Graph signalData={graph}></Graph>
            </div>
            <VarGraph props={groupData.percent}/>
                </>
            );
        }
      
export default AttackCampDiv;