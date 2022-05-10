import React, { Component } from 'react';

import sample01 from '../sample01.png';

import { SimpleCard } from 'matx';
import '../attackStyle.css';

function AttackLearnStucture(props) {
  return (
    <div className="">
      <input type="text" value="T1592"></input>
      <button>검색</button>
      <p className="infoTxt">
        노드 갯수 : N
        <br />
        간선 갯수 : E
      </p>
      <img src={sample01} className="h100"></img>
    </div>
  );
}

export default AttackLearnStucture;
