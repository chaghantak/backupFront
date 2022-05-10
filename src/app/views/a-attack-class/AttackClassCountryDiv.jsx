import React, {useState} from 'react';

import AttackDiv from "./AttackCountry";


import "../attackStyle.css";

function AttackCountryDiv(props) {

    const groupData = [
        {
            "id" : "G0026",
            "name" : "APT18",
            "moreName" : "TG-0416, Dynamite Panda, Threat Group-0416",
            "country":"null",

            "percent" : 80,
        },
        {
            "id" : "G0008",
            "name" : "Carbanak",
            "moreName" : "Anunak, Carbon Spider",
            "country":"ua",

            "percent" : 75,
        },
        {
            "id" : "G0016",
            "name" : "APT29",
            "moreName" : "Dark Halo, StellarParticle, NOBELIUM, UNC2452, YTTRIUM, The Dukes, Cozy Bear, CozyDuke",
            "country":"ru",

            "percent" : 60,
        },
        
        {
            "id" : "G0067",
            "name" : "APT37",
            "moreName" : "ScarCruft, Reaper, Group123, TEMP.Reaper",
            "country":"kp",

            "percent" : 30,
        },
     
        {
            "id" : "G0035",
            "name" : "Dragonfly",
            "moreName" : "TG-4192, Crouching Yeti, IRON LIBERTY, Energetic Bear",
            "country":"ru",

            "percent" : 10,
        }
    ];
        return(
                <>
                {groupData.map((groupData, index) => (
                     <div className='footer allMargin'>
                      <div className='footerChild1'>
                         <p>top.{index + 1} {groupData.name}</p>
                      </div>

                           <div className='footerChild1'>
                            <img src={"flagImg/"+groupData.country+".png"} style={{border:"1px solid black"}} />
                           </div>
                            <div className="footerChild1">
                            <AttackDiv data={groupData} index={index}/>
                            </div>

                      
                       </div>
                  ))}
                  
                   </>
            );
        }
      
export default AttackCountryDiv;