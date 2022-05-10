import React, { useEffect, useRef, useCallback, useState, useMemo } from 'react';

import style from "./style.css";
import ReactDOM from "react-dom";

import data from "../../navigatorJson/enterprise-attack.json"

import { useLocation } from "react-router";


function AttackNavigatorMinDetail(props) {
    const location = useLocation();
    // const item = location.state;
    const item = props.match.params;

  const detailData = data.objects.map((db, idx) => {
    if(db.id == item.id){
      console.log(db.external_references);
      return (
        <div  className="m-sm-30">
          <h3 className="headTitle">{db.name} <p className="external_id headTitle">{db.external_references[0].external_id}</p></h3><p>{db.id}</p>
          <hr></hr>
         {db.description}
        </div>
      )
    }else{
      return null;
    }
  });

        return(
        <div> 
          {detailData}
        </div>
            );
}
export default AttackNavigatorMinDetail;