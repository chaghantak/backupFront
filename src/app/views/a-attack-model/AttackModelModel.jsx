import React, { useState } from 'react';

import "../attackStyle.css";

function AttackModelModel(props) {




        return(
        <>
        <table className="MainTable MaxHeight">
            <thead>
                <tr>
              
                </tr>
                <tr className="Mtt">
                    <th>학습타입</th>
                    <th>Time</th>
                    <th>알고리즘</th>
                    <th>도메인 유형</th>
                </tr>
            </thead>
            
            <tbody>
                <tr className="Mtt">
                    <td>최종 목표</td>
                    <td>11/20</td>
                    <td>LSTM</td>
                    <td>Sequence</td>
                </tr>
                <tr className="Mtt">
                    <td>다음 공격 기술</td>
                    <td>11/21</td>
                    <td>Alg2</td>
                    <td>Sequence</td>
                </tr>
                <tr className="Mtt">
                    <td>캠페인 그룹</td>
                    <td>11/22</td>
                    <td>GCN</td>
                    <td>Cam2Vec</td>
                </tr>
                <tr className="Mtt">
                    <td>캠페인 국가</td>
                    <td>11/23</td>
                    <td>Hist</td>
                    <td>Image</td>
                </tr>
            </tbody>
        </table>
        
        </>
            );
        }
      
export default AttackModelModel;