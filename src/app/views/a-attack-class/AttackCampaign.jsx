import React from 'react';


import GraphDiv from "./AttackClassCampDiv";

import "../attackStyle.css";

function AttackCampaignView(props) {
    

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

        return(
           <div className='allMargin'>
           {groupData.map((groupData, index) => (
                <>
            <GraphDiv groupData={groupData} index={index}/>
                </>
           ))}
           
           </div>
            );
        }
      
export default AttackCampaignView;