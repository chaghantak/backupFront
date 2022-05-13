import React, { useEffect, useState } from "react";
import Axios from "axios";

import Rank from "./AttackDataRank";
import Map from "./MapChart";
import styled from "styled-components";
// import Chart from "./AttackDataGraph";

import Detail from "./AttackDataDetail";
import "../attackStyle.css";
import { BASE_URL } from "../api";

import Paper from '@material-ui/core/Paper' 

import st from 'styled-components'; 

const TableContainer = st(Paper)`
max-height : 31vh; 
width : 100%; 
overflow:auto; 
`;

function AttackDataView() {
  const [data, setData] = useState([]);
  const [item, setItem] = useState([]);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("");
  const [select, setSelect] = useState([]);
  const [sortyear, setSortyear] = useState(false);
  const [sortgroup, setSortgroup] = useState(false);
  const [sortcountry, setSortcountry] = useState(false);
  const [sortrefresh, setSortrefresh] = useState(false);

  const yearsort = () => {
    setSortyear((current) => !current);
    setSortrefresh((current) => !current);
  };
  const groupsort = () => {
    setSortgroup((current) => !current);
    setSortrefresh((current) => !current);
  };
  const countrysort = () => {
    setSortcountry((current) => !current);
    setSortrefresh((current) => !current);
  };

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
      data: {
        group: sortgroup,
        country: sortcountry,
        year: sortyear
      },
    }).then(({ data }) => {
      setData(data.items);
    });
  }, [sortrefresh]);

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
            <div className="footerChild tableScoll hei31">
              <div className="" >
                <table className="MainTable fixed  ">
                    <tr>
                      <td align="center">Attack Group</td><button onClick={groupsort} style={{
                                                                                              transform: "translate(20px,0%)",
                                                                                            }}>▼</button>
                      <td align="center">Country</td><button onClick={countrysort} style={{
                                                                                          transform: "translate(20px,0%)",
                                                                                        }}>▼</button>
                      <td align="center">Year</td><button onClick={yearsort} style={{
                                                                                      transform: "translate(20px,0%)",
                                                                                    }}>▼</button>
                    </tr>
                </table>
              </div>
            {data.map((info) => {
                if (
                  info.group.toLowerCase().includes(name.toLowerCase()) &&
                  info.year.toLowerCase().includes(year.toLowerCase()) &&
                  info.country.toLowerCase().includes(country.toLowerCase())
                  ){
                  return (
                      <div className="">
                        <table className="MainTable fixed  " style={
                          select === info ? {background: "#9bdfff"} : {background: "#ffffff"}
                        } onClick={() => onClick(info) }>
                          <tr key={info.group} >
                            <td className="Mtt"> {info.group}</td>
                            <td className="Mtt" title={info.country}>
                              {info.country}
                            </td>
                            <td className="Mtt">{info.year}</td>
                          </tr>
                        </table>
                      </div>
                  )
                }
              })}
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
