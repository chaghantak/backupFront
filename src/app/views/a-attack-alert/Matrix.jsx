import React, { useEffect, useState } from "react";
import axios from "axios";

import "../attackStyle.css";
import { BASE_URL } from "../api";
import SearchBar from "./components/SearchBar";
import TableGo from "./components/TableGo";
import Graph from "../neo4jComponents/Graph"
function Matrix() {
  const [loading, setLoading] = useState(true); //로딩
  const [search, setSearch] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [send, setSend] = useState("");
  const [bag, setBag] = useState([]);

  const handleChange = ({ target: { value } }) => setSearch(value);

  const handleSubmit = async (e) => {
    setDisabled(true);
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    setSend(search);
    setDisabled(false);
  };

  useEffect(() => {
    setLoading((current) => !current);
  }, []);

  useEffect(() => {
    axios({
      url: `${BASE_URL}/chain/events-matrix`,
      method: "POST",
      data: {
        host: send,
        startTime: "",
        endTime: "",
      },
    }).then(({ data }) => {
      setBag(data.items);
    });
  }, [send]);

  return (
    <>
      {loading ? (
        <div className="loader"> "loading..."</div>
      ) : (
        <>
          <div className="allMargin">
            <h5>공격 체인 구성 ▶ 단위공격 경보</h5>
            <SearchBar
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              search={search}
              disabled={disabled}
            />
          
            <div className="" style={{ overflow: "auto", height: "89vh" }}>
              <div style={{ width: "100%", height: "77vh",border: "1px solid lightgray" ,overflow:"auto"}}>
                <TableGo item={bag} />
              </div>
            </div>
        
          </div>
        </>
      )}
    </>
  );
}

export default Matrix;
