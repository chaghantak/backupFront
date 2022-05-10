import React, {Component} from 'react';


import { SimpleCard } from "matx";
import "../attackStyle.css";

function AttackModelProcess(props) {
var ProgressVal = 100;
var CrossVal = 80.64;

        return(
        <>
       <label>진행도 : </label><progress value={ProgressVal} max="100"></progress>{ProgressVal}%
       <br />
       <label>Cross Validation : </label><progress value={CrossVal} max="100"></progress>{CrossVal}%
       <br />
       <div className='MaxHeight Mtt hei15'>
           <p>로그...</p>
           <p>로그...</p>
           <p>로그...</p>
           <p>로그...</p>
           <p>로그...</p>
           <p>로그...</p>
           <p>로그...</p>
           <p>로그...</p>
           <p>로그...</p>
           <p>로그...</p>
       </div>


        
        </>
            );
        }
      
export default AttackModelProcess;