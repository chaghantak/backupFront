import React, { useState } from "react";

import "../attackStyle.css";
import Graph from "./Graph";
import hostFile from "./components/host.json";
import styled from "styled-components";

function AttackChainView() {
  const [search, setSearch] = useState("");
  const [send, setSend] = useState("");
  const [disabled, setDisabled] = useState(false);
  const handleChange = ({ target: { value } }) => setSearch(value);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    setDisabled(true);
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    setSend(search);
    setDisabled(false);
  };
  return (
    <div className="allMargin">
      <h5>공격 체인 구성 ▶ 공격체인</h5>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            name="search"
            type="search"
            value={search}
            placeholder="192.168.37.100"
            onChange={(e) => handleChange(e)}
          />

          <select onChange={onChange}>
            <option>host_ip</option>
            {hostFile.items.map((data, idx) => (
              <option
                key={idx}
                value={JSON.stringify(data.node)}
                style={{ cursor: "pointer" }}
              >
                {JSON.stringify(data.node)}
              </option>
            ))}
          </select>

          <button type="submit" disabled={disabled}>
            조회
          </button>
        </form>
      </div>
      <div style={{ height: "84vh", width: "100%", float: "left" }}>
        <Graph host={send} />
      </div>
    </div>
  );
}

export default AttackChainView;
