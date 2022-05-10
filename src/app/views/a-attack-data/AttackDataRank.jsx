import React, {Component, useEffect, useState} from 'react';
import Axios from 'axios';

import { BASE_URL } from "../api";
import "../attackStyle.css";

function AttackDataRank(props) {
    const[item,setItem] = useState([])
    const test = 1
    useEffect(() => {
        Axios({
            method: "POST",
            url: `${BASE_URL}/campaign/rank-count`,
            data: {}
        }).then(({data})=>{
            setItem(data.items[0]);
        })
    }, [])

    return(
        <>
        <table>
            <thead></thead>
            <tbody>
                <tr>
                    <td>Campaign</td>
                    <td>{item.campaign_length}, ▲{item.campaign_week}(this week) </td>
                </tr>
                <tr>
                    <td>PE</td>
                    <td>{item.pe_length}, ▲{item.pe_week}(this week)</td>
                </tr>
                <tr>
                    <td>Intelligence</td>
                    <td>340.24K, ▲40K(this week)</td>
                </tr>
            </tbody>
        </table>
        </>
    );
}
      
export default AttackDataRank;