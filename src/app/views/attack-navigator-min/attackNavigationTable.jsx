import React, { useEffect, useRef, useCallback, useState, useMemo } from 'react';

import ReactDOM from "react-dom";

import style from "./style.css";

import mainData from "../../navigatorJson/enterprise-attack.json"


import { useHistory } from "react-router";
// import { index } from 'd3-array';
// import toDate from 'date-fns/fp/toDate';

function AttackNavigatorTable(props) {

    const [toggle, setToggle] = useState(false);
    const [toggleName, setToggleName] = useState(null);
    // const [visBtn, setVisBtn] = useState(true);


    //1
    const [inputs, setinputs] = useState({
        id: '',
        setStat: false,
        num: 0,
    });
    //2    
    const { id, setStat, num } = inputs;

    const onClicks = (e) => {
        console.log(e.target.name);
        //3 
        setinputs({
            ...inputs,
            [id]: e.target.name,
            [setStat]: !inputs.setStat,
            [num]: 0,
        });

    }



    // const btnRef = useRef(null);

    const history = useHistory();

    const statusToggle = () => {
        setToggle(!toggle);
    }

    const toggleNow = (pId, cId) => {
        var see = null;
        return (toggle) && (pId == cId) ? see = 'onHistory b' : see = 'onHistory a';
    }

    const popOne = (pop) => {
        var one = !pop;
        return one;
    }

    //궁극적으로는 이것도 받아와야 함....
    const tactics = [
        {
            "name": "reconnaissance",
            "id": "TA0043"
        },
        {
            "name": "resource-development",
            "id": "TA0042"
        },
        {
            "name": "initial-access",
            "id": "TA0001"
        },
        {
            "name": "execution",
            "id": "TA0002"
        },
        {
            "name": "persistence",
            "id": "TA0003"
        },
        {
            "name": "privilege-escalation",
            "id": "TA0004"
        },
        {
            "name": "defense-evasion",
            "id": "TA0005"
        },
        {
            "name": "credential-access",
            "id": "TA0006"
        },
        {
            "name": "discovery",
            "id": "TA0007"
        },
        {
            "name": "lateral-movement",
            "id": "TA0008"
        },
        {
            "name": "collection",
            "id": "TA0009"
        },
        {
            "name": "command-and-control",
            "id": "TA0011"
        },
        {
            "name": "exfiltration",
            "id": "TA0010"
        },
        {
            "name": "impact",
            "id": "TA0040"
        }
    ];



    const matrixEnt = tactics.map((tt, index) => {
        return (
            <th style={{ border: "1px solid black", width: "10vh" }} rowSpan="3">{tt.name}<br />{tt.id}</th>

        )
    });





    const bodyData = tactics.map((tt, index) => {
        return (
            <>
                <td style={{ border: "1px solid black", width: "10vh" }}>
                    {
                        mainData.objects.map((datas, idx) => {

                            if (datas.kill_chain_phases === undefined || datas.kill_chain_phases === null || Object.keys(datas.kill_chain_phases).length <= 0) {
                                return null;
                            } else {
                                for (var i = 0; i < Object.keys(datas.kill_chain_phases).length; i++) {
                                    if (datas.kill_chain_phases[i].phase_name == tt.name) {
                                        //서브가 아닌 경우에만 그린다.
                                        if (!datas.x_mitre_is_subtechnique) {
                                            var pId = datas.external_references[0].external_id;
                                            // console.log(datas.external_references[0].external_id);
                                            return (

                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td className="btn">
                                                                <button className="onHistory" onClick={() => {
                                                                    history.push({
                                                                        pathname: "/attack-navigator-min/datail/" + datas.id,
                                                                    })
                                                                }} >{datas.name}
                                                                </button>

                                                            </td>
                                                            {/* 버튼 */}
                                                            <td>
                                                                <button className="moreBtn" name={pId} onClick={() => {
                                                                    //  console.log(pId);
                                                                    setToggleName(pId);
                                                                    statusToggle();
                                                                }}>=</button>
                                                            </td>


                                                            {/* 서브*/}
                                                            <td>
                                                                {
                                                                    mainData.objects.map((subData) => {
                                                                        // var pop = false;
                                                                        // popOne(pop);

                                                                        if (subData.external_references === undefined || subData.external_references === null || Object.keys(subData.external_references).length <= 0) {
                                                                            return null;
                                                                        } else {
                                                                            var cId0;
                                                                            //서브면 그린다
                                                                            if (subData.x_mitre_is_subtechnique) {

                                                                                cId0 = subData.external_references[0].external_id;
                                                                                var cId = cId0.split('.')[0];
                                                                                //아이디 앞자리가 같을 때.....
                                                                                if (cId == pId && cId == toggleName
                                                                                ) {


                                                                                    return (

                                                                                        <>


                                                                                            <tr className={toggleNow(pId, cId)}>
                                                                                                <td>
                                                                                                    <button className='onHistory' onClick={() => {
                                                                                                        history.push({
                                                                                                            pathname: "/attack-navigator-min/datail/" + subData.id,
                                                                                                        })
                                                                                                    }} name={pId} >{subData.name}
                                                                                                    </button>
                                                                                                </td>
                                                                                                <hr></hr>
                                                                                            </tr>
                                                                                        </>
                                                                                    );
                                                                                }
                                                                            }
                                                                        }
                                                                    })
                                                                }
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            );
                                        } else {
                                            return (
                                                //     <table>
                                                //     <tbody>
                                                //         <tr>
                                                //             <td className="btn">
                                                //                 <button className="onHistory" onClick={() => {history.push({
                                                //                 pathname: "/attack-navigator-min/datail/" + datas.id,
                                                //                 // state: {id: datas.id}
                                                //                 })}} >{datas.name}
                                                //                 </button>
                                                //             </td>
                                                //             <td></td>
                                                //             <td></td>
                                                //         </tr>
                                                //     </tbody>
                                                // </table>
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

    return (
        <div>
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


export default AttackNavigatorTable;