import React, {Component} from 'react';
import "../attackStyle.css";

function AttackLearnSetting() {


        return(
        <>
        <label>학습 데이터</label> 
        <select>
            <option>npcore_v2.csv</option>
        </select>
        <br />

        <label>학습 알고리즘</label> 
        <select>
            <option>Hill Climbing</option>
        </select>
        <br />

        <label>점수지표</label> 
        <select>
            <option>BIC</option>
        </select>
        <br />

        <label>정확도 지표</label> 
        <select>
            <option>pred-lw</option>
        </select>
        <br />

        <label>반복 학습 횟수</label>
        <input type="text" value={500}></input>
        <br />

        <label>간선 연결 횟수</label>
        <input type="text" value={50}></input>
        <br />
        <button>학습 시작</button>
        
        </>
            );
        }
      
export default AttackLearnSetting;