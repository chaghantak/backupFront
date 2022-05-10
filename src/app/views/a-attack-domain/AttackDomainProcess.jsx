import React, {Component} from 'react';


import "../attackStyle.css";

function AttackDomainProcess() {
var ProgressVal = 60;

        return(
        <>
       <label>진행도 : </label><progress value={ProgressVal} max="100"></progress>{ProgressVal}%
       <br />
       <div className='MaxHeight hei15'>
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
      
export default AttackDomainProcess;