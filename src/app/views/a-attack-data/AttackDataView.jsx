import React, { useEffect, useState } from "react";
import Axios from "axios";

import Rank from "./AttackDataRank";
import Map from "./MapChart";
import styled from "styled-components";
// import Chart from "./AttackDataGraph";

import Detail from "./AttackDataDetail";
import "../attackStyle.css";
import { BASE_URL } from "../api";

const Table = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  width: 100%;
`;
const Th = styled.th`
  border: 1px solid black;
`;
const Td = styled.td`
  border: 1px solid black;
  text-align: center;
`;

function AttackDataView() {
  const [data, setData] = useState([]);
  const [item, setItem] = useState([]);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("");
  const [select, setSelect] = useState([])
  const is = true
  const onClick = (info) => {
    setItem(info)
    setSelect(info)
  }
  
  function nameSpace(event) {
    let keyword = event.target.value;
    setName(keyword);
  };
  function countrySpace(event) {
    let keyword = event.target.value;
    setCountry(keyword);
  };
  function yearSpace(event) {
    let keyword = event.target.value;
    setYear(keyword);
  };
  
  useEffect(() => {
    Axios({
      method: "POST",
      url: `${BASE_URL}/campaign/campaign-list-join`,
      data: {},
    }).then(({ data }) => {
      setData(data.items);
    });
  }, []);

  return (
      <div className="allMargin">
        <h5>공격 캠페인 분류 ▶ 데이터 수집현황</h5>

        <div className="footer hei89">
          <div className="footerChild">
            <div className="footerChild">
              <Rank />
            </div>
            <div>
              <Map/>
            </div>
            <div className="footerChild">
              <input
                  style={{ height: "29px", width: "204px" }}
                  type="text"
                  placeholder="name"
                  onChange={(e) => nameSpace(e)}
              />
              <input
                  style={{ height: "29px", width: "204px" }}
                  type="text"
                  placeholder="country"
                  onChange={(e) => countrySpace(e)}
              />
              <input
                  style={{ height: "29px", width: "204px" }}
                  type="text"
                  placeholder="year"
                  onChange={(e) => yearSpace(e)}
              />
            </div>
            <div className="footerChild tableScoll hei23">
              <Table
                    className="MainTable "
                    style={{ tableLayout: "fixed" }}
              >
                <thead>
                          <tr>
                            <Th>AttackGroup</Th>
                            <Th>Country</Th>
                            <Th>Year</Th>
                          </tr>
                </thead>
              {data.map((info) => {
                if (
                  info.group.toLowerCase().includes(name.toLowerCase()) &&
                  info.year.toLowerCase().includes(year.toLowerCase()) &&
                  info.country.toLowerCase().includes(country.toLowerCase())
                  ){
                  return (
                    <tbody className="MainTable fixed  " style={
                      select === info ? {background: "#9bdfff"} : {background: "#ffffff"}
                    } onClick={() => onClick(info)}>
                      <tr key={info.group} >
                        <Td className="Mtt">{info.group}</Td>
                        <Td className="Mtt">{info.country}</Td>
                        <Td className="Mtt">{info.year}</Td>
                      </tr>
                    </tbody>
                  )
                }
              })}
              </Table>
            </div>
          </div>
          <div className="footerChild">
            <Detail data={item}/>
          </div>
        </div>
      </div>
  );
}

export default AttackDataView;
