import Axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../api";
import "../attackStyle.css";

function AttackDomainSetting() {
  const [item, setItem] = useState([]);
  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");
  const [usertext, setUsertext] = useState("");
  const handleSelect1 = (e) => {
    setSelected1(e.target.value);
  };

  const handleSelect2 = (e) => {
    setSelected2(e.target.value);
  };

  const inputvalue = (e) => {
    setUsertext(e.target.value)
  }

  const startconvert = () => {
    Axios({
      url: `${BASE_URL}/call/domain-convert`,
      method: "POST",
      data: {
        type: selected1,
        param: usertext
      }
    })
  }

  useEffect(() => {
    Axios({
      url: `${BASE_URL}/campaign/campaign-gui`,
      method: "POST",
      data: {
        gui: "UI-ACC-003",
      },
    }).then(({ data }) => {
      setItem(data.items);
    });
  }, []);

  return (
    <div>
      <div style={{ height: "20vh" }}>
        <p>{`<변환 설정>`}</p>
      <p>변환 알고리즘</p>
      <select onChange={handleSelect1} value={selected1}>
        <option>Select</option>
        {item
          .filter(
            (data) => data.depth === 1 && data.train_type === "domain_trans"
          )
          .map((info) => (
            <option key={info.index} value={info.parent_id}>
              {info.value}
            </option>
          ))}
      </select>
      {item
        .filter(
          (data) =>
            data.train_type === "domain_trans" &&
            Number(selected1) === data.parent_id &&
            data.depth > 1
        )
        .map((info) => (
          <p key={info.index}>{info.value}<input type="text" onChange={(e) => inputvalue(e)}/></p>
        ))}
       <p><button onClick={() => startconvert()}>변환시작</button></p> 
</div>
<hr/>

<div style={{ height: "20vh" }}>
<p>{`<캠페인 유사도>`}</p>
      <p>유사도 알고리즘</p>
      <select onChange={handleSelect2} value={selected2}>
        <option>Select</option>
        {item
          .filter((data) => data.depth === 1 && data.train_type === "distance")
          .map((info) => (
            <option key={info.index} value={info.parent_id}>
              {info.value}
            </option>
          ))}
      </select>
      {item
        .filter(
          (data) =>
            data.train_type === "distance" &&
            Number(selected2) === data.parent_id &&
            data.depth > 1
        )
        .map((info) => (
          <p key={info.index}>{info.value}<input type="text"/></p>
        ))}
        <p><button>계산시작</button></p>
        
        </div>
        <hr/>
    </div>
  );
}

export default AttackDomainSetting;
