import React, { useEffect, useRef, useCallback, useState, useMemo } from 'react';

import ReactDOM from "react-dom";

import style from "./style.css";

import data from "../../navigatorJson/enterprise-attack.json"


function attackNavigatorMade(props) {

//https://velog.io/@cada/React%EC%97%90%EC%84%9C-%EB%A1%9C%EC%BB%AC-JSON-%ED%8C%8C%EC%9D%BC%EC%9D%84-%EB%B6%88%EB%9F%AC%EC%98%A4%EB%8A%94-%EB%B0%A9%EB%B2%95
  // console.log("json test : ", typeof data);
  // console.log(data);
  const newData = data.objects.map((item, index) => {
    if(item.name == null){
      return(
        <div style={{border:"1px solid red"}}>
          {index} / {item.name} ////{item.id}/// {item.type} //// {item.relationship_type} 
        </div>
      );
    }else{
      if(item.type == "attack-pattern"){
        return (
          <div style={{border:"1px solid black"}}>
            {index} / {item.name} ////{item.id}/// {item.type} /// {item.external_references[0].external_id}/// 
          </div>
        );
      }else{
        return (
          <div style={{border:"1px solid blue"}}>
            {index} / {item.name} ////{item.id}/// {item.type} / 
          </div>
        );
      }
      }
     
  
  });
  
        return(
        <div style={{border:"1px solid black"}}> 
         
           {newData}
         
        </div>
            );
}
export default attackNavigatorMade;