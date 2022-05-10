import React, {useState} from 'react';

import VarGraph from "./BarGraph";


import "../attackStyle.css";

function AttackCountryDiv(props) {

    const percent = props.data.percent;

        return(
                <>
                <VarGraph props={percent}/>
                </>
                
            );
        }
      
export default AttackCountryDiv;