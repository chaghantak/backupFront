import React, { Component } from "react";

import DivStyle from "./DivStyle"
import ImgDiv from "./ImgDiv";
import BarGraph from './BarGraph';

import "react-tree-graph/dist/style.css";
import "./divStyleClass.css";


// npm install react-tree-graph --save 설치

class attackCampaigns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    }
  }

  componentDidMount() {
    fetch('http://192.168.0.119:8000/api/attack-chains/')
      .then((res) => {
        return res.json(); //Promise 반환
      })
      .then(chain => this.setState({
        table: chain
      }))
  }

  render() {
    const groupData = [
            {
                "id" : "G0016",
                "name" : "APT29",
                "moreName" : "Dark Halo, StellarParticle, NOBELIUM, UNC2452, YTTRIUM, The Dukes, Cozy Bear, CozyDuke",
                "country":"ru",
                "percent" : 90,
                "percent2" : 60,
            },
            {
                "id" : "G0008",
                "name" : "Carbanak",
                "moreName" : "Anunak, Carbon Spider",
                "country":"ua",
                "percent" : 80,
                "percent2" : 75,
            },
            {
                "id" : "G0067",
                "name" : "APT37",
                "moreName" : "ScarCruft, Reaper, Group123, TEMP.Reaper",
                "country":"kp",
                "percent" : 65,
                "percent2" : 30,
            },
            {
                "id" : "G0026",
                "name" : "APT18",
                "moreName" : "TG-0416, Dynamite Panda, Threat Group-0416",
                "country":"null",
                "percent" : 50,
                "percent2" : 80,
            },
            {
                "id" : "G0035",
                "name" : "Dragonfly",
                "moreName" : "TG-4192, Crouching Yeti, IRON LIBERTY, Energetic Bear",
                "country":"ru",
                "percent" : 30,
                "percent2" : 10,
            }
        ];

    return (
        <div>
            <div className="m-sm-30" style={{display:"flex"}}>
                <div  style={{flex: 1}}>
                    <div className='style1'>
                        <DivStyle data={groupData} count={0} />
                        <BarGraph props={groupData[0].percent}></BarGraph>
                        <ImgDiv data={groupData[0].country} />
                    </div>

                    <div className='style1'>
                        <DivStyle data={groupData} count={1} />
                        <BarGraph props={groupData[1].percent}></BarGraph>
                        <ImgDiv data={groupData[1].country} />
                    </div>
                    <div className='style1'>
                        <DivStyle data={groupData} count={2} />
                        <BarGraph props={groupData[2].percent}></BarGraph>
                        <ImgDiv data={groupData[2].country} />
                    </div>
                    <div className='style1'>
                        <DivStyle data={groupData} count={3} />
                        <BarGraph props={groupData[3].percent}></BarGraph>
                        <ImgDiv data={groupData[3].country} />
                    </div>
                    <div className='style1'>
                        <DivStyle data={groupData} count={4} />
                        <BarGraph props={groupData[4].percent}></BarGraph>
                        <ImgDiv data={groupData[4].country} />
                    </div>
                </div>

                <div style={{paddingLeft:"5px", flex: 1}}>
                <div className='style1'>
                        <DivStyle data={groupData} count={3} />
                        <BarGraph props={groupData[3].percent2}></BarGraph>
                        <ImgDiv data={groupData[3].country} />
                    </div><div className='style1'>
                        <DivStyle data={groupData} count={1} />
                        <BarGraph props={groupData[1].percent2}></BarGraph>
                        <ImgDiv data={groupData[1].country} />
                    </div><div className='style1'>
                        <DivStyle data={groupData} count={0} />
                        <BarGraph props={groupData[0].percent2}></BarGraph>
                        <ImgDiv data={groupData[0].country} />
                    </div><div className='style1'>
                        <DivStyle data={groupData} count={2} />
                        <BarGraph props={groupData[2].percent2}></BarGraph>
                        <ImgDiv data={groupData[2].country} />
                    </div>
                    <div className='style1'>
                        <DivStyle data={groupData} count={4} />
                        <BarGraph props={groupData[4].percent2}></BarGraph>
                        <ImgDiv data={groupData[4].country} />
                    </div>
                </div>


            </div>


        </div>
    );
  }
}

export default attackCampaigns;
