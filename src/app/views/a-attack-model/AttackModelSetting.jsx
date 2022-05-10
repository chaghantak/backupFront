import React, { useEffect, useState } from "react";

import "../attackStyle.css";
import Axios from "axios";
import { BASE_URL } from "../api";

function AttackModelSetting(props) {
  const [item, setItem] = useState([]);
  const [inputs, setInputs] = useState({
    name: "",
    typeName: "",
    id: "",
  });
  const [submits, setSubmits] = useState();

  const { name, typeName, id } = inputs; //비구조화 할당

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmits(inputs);
  };


  useEffect(() => {
    Axios({
      url: `${BASE_URL}/campaign/campaign-gui`,
      method: "POST",
      data: {
        gui: "UI-ACC-004",
      },
    }).then(({ data }) => {
      setItem(data.items);
    });
  }, []);

  return (
    <div>
      <form style={{ height: "20vh" }} onSubmit={(e) => handleSubmit(e)}>
        <label>학습 타입</label>
        <br />
        <select>
          <option>최종 목표</option>
        </select>
        <br />

        <label>공격 기술 유형:</label>
        <br />
        <select onChange={onChange} value={name} name="name">
          <option>Select</option>
          {item
            .filter((data) => data.depth === 1)
            .map((info) => (
              <option key={info.index} value={info.train_type}>
                {info.value}
              </option>
            ))}
        </select>
        <br />

        <span>도메인 유형:</span>
        <br />
        <select onChange={onChange} value={typeName} name="typeName">
          <option>Select</option>
          {item
            .filter(
              (data) =>
                data.train_type === inputs.name &&
                data.depth > 1 &&
                data.type === "domain"
            )
            .map((info) => (
              <option key={info.index} value={info.value}>
                {info.value}
              </option>
            ))}
        </select>
        <br />

        <span>학습 알고리즘:</span>
        <br />
        <select onChange={onChange} value={id} name="id">
          <option>Select</option>
          {item
            .filter(
              (data) =>
                data.train_type === inputs.name &&
                data.depth > 1 &&
                data.type === "algorithm"
            )
            .map((info) => (
              <option key={info.index} value={info.value}>
                {info.value}
              </option>
            ))}
        </select>
        <br />

        <button>학습 시작</button>
      </form>
    </div>
  );
}

export default AttackModelSetting;
