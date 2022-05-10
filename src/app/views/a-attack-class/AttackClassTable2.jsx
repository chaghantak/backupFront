import React, {Component} from 'react';

import { SimpleCard } from "matx";
import "../attackStyle.css";

function AttackClassTable2(props) {


        return(
        <>
        <table className="MainTable MaxHeight">
            <thead>
            </thead>
            
            <tbody>
                <tr className="Mtt">
                    <td>다음 공격</td>
                    <td>
                        <select>
                            <option>GRU001</option>
                        </select>
                    </td>
                    <td><input type="checkbox"></input></td>
                </tr>
                <tr className="Mtt">
                    <td>최종 목표</td>
                    <td>
                        <select>
                            <option>RNN001</option>
                        </select>
                    </td>
                    <td><input type="checkbox"></input></td>
                </tr>
                <tr className="Mtt">
                    <td>유사 캠페인</td>
                    <td>
                        <select>
                            <option>W2V001</option>
                        </select>
                    </td>
                    <td><input type="checkbox"></input></td>
                </tr>
                <tr className="Mtt">
                    <td>공격 그룹</td>
                    <td>
                        <select>
                            <option>Cluster001</option>
                        </select>
                    </td>
                    <td><input type="checkbox"></input></td>
                </tr>
                <tr className="Mtt">
                    <td>공격 국가</td>
                    <td>
                        <select>
                            <option>TF-IDF001</option>
                        </select>
                    </td>
                    <td><input type="checkbox"></input></td>
                </tr>
            </tbody>
        </table>
        </>
            );
        }
      
export default AttackClassTable2;