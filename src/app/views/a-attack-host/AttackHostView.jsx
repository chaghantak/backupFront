import React, {Component} from 'react';

import Navigation from "../attack-navigator/attackNavigator";

import { SimpleCard } from "matx";
import "../attackStyle.css";

function AttackHost(props) {
 

        return(
          <div className="allMargin hei89 tableScoll">
             <h5>공격대응 ▶ 호스트 대응 방책 조회</h5>
             <Navigation />
            

      </div>
            );
        }
      
export default AttackHost;