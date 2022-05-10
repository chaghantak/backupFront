import React, { useEffect, useRef, useCallback, useState, useMemo } from 'react';

import ReactDOM from "react-dom";

import style from "./style.css";

import mainData from "../../navigatorJson/enterprise-attack.json"
import Modal from './ModalComponents'



function AttackNavigator(props) {

    const [divStatus, setDiv] = useState(false); 
    const [clickId, setClickId] = useState(""); 

     const ModalOnOff = (pId, e) => {
        setDiv(!divStatus)
        setClickId(pId);
  }



//궁극적으로는 이것도 받아와야 함....
const tactics = [
    {
        "name" : "reconnaissance",
        "id" : "TA0043",
        "num" : 8
    }, 
    {
        "name" : "resource-development",
        "id" : "TA0042",
        "num" : 23
    }, 
    {
        "name" : "initial-access",
        "id" : "TA0001",
        "num" : 16
    }, 
    {
        "name" : "execution",
        "id" : "TA0002",
        "num" : 2
    }, 
    {
        "name" : "persistence",
        "id" : "TA0003",
        "num" : 3
    }, 
    {
        "name" : "privilege-escalation",
        "id" : "TA0004",
        "num" : 8
    }, 
    {
        "name" : "defense-evasion",
        "id" : "TA0005",
        "num" : 10
    }, 
    {
        "name" : "credential-access",
        "id" : "TA0006",
        "num" : 7
    }, 
    {
        "name" : "discovery",
        "id" : "TA0007",
        "num" : 6
    }, 
    {
        "name" : "lateral-movement",
        "id" : "TA0008",
        "num" : 22
    }, 
    {
        "name" : "collection",
        "id" : "TA0009",
        "num" : 8
    }, 
    {
        "name" : "command-and-control",
        "id" : "TA0011",
        "num" : 17
    }, 
    {
        "name" : "exfiltration",
        "id" : "TA0010",
        "num" : 2
    }, 
    {
        "name" : "impact",
        "id" : "TA0040",
        "num" : 1
    }
];

                

const matrixEnt = tactics.map((tt, index) => {
return (
    <th style={{border:"1px solid black", width:"10vh"}} rowSpan="3">{tt.name}//{tt.num}</th>
    
)
});



const bodyData = tactics.map((tt, index) => {
                    return (
                    <>
                     <td style={{border:"1px solid black", width:"10vh"}}>
                    {
                        mainData.objects.map((datas, idx) => {

                            if(datas.kill_chain_phases === undefined || datas.kill_chain_phases === null || Object.keys(datas.kill_chain_phases).length <= 0){
                                return null;
                            }else{ 
                                for(var i = 0; i < Object.keys(datas.kill_chain_phases).length; i++){
                                    if(datas.kill_chain_phases[i].phase_name == tt.name){
                                        //서브가 아닌 경우에만 그린다.
                                        if(!datas.x_mitre_is_subtechnique){
                                           var pId = datas.external_references[0].external_id;
                                            // console.log(datas.external_references[0].external_id);
                                            const ttNum = Object.keys(datas.external_references).length;
                                        return (
                                        
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td className="btn">
                                                            <button className="onHistory" onClick={(e)=>{ModalOnOff(pId, e)}} name={pId}> {datas.name}
                                                            </button>
                                                        </td>
                                                        <td>{ttNum}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        );
                                         }else{    
                                             return(
                                            null
                                        );            
                                            
                                        }
                                    }
                                }
                            }
                        })
                        }
                        </td>
                    </>
                    )
                    });
                    
        return(
        <div> 
         {divStatus && <Modal ModalOnOff={(ModalOnOff)} id={clickId}></Modal>}
        <table>
            <thead className="tableHeadBack">

                <tr>
                {matrixEnt}
                </tr>
            </thead>
            <tbody>
            <tr>
                {bodyData}
            </tr>
            </tbody>
        </table>

        </div>
            );

}

export default AttackNavigator;