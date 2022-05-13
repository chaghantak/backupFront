import React, { useEffect, useState } from "react";

import DomainSetting from "./AttackDomainSetting";
import DomainDomain from "./AttackDomainDomain";
import DomainProcess from "./AttackDomainProcess";

import "../attackStyle.css";
import styled from "styled-components";
import { BASE_URL } from "../api";
import Axios from "axios";

const Container = styled.div`
  height: 46vh;
`;
function AttackDomain() {
  const [loading, setLoading] = useState(false); //로딩
  const [item, setItem] = useState([]);

  useEffect(() => {
    Axios({
      url: `${BASE_URL}/campaign/campaign-list`,
      method: "POST",
      data: {},
    }).then(({ data }) => {
      setItem(data.items);
      setLoading((current) => !current);
    });
  }, []);
  return (
    <>
      <div className="allMargin ">
        <h5>공격 캠페인 분류 ▶ 도메인 변환</h5>
        <div className="MaxHeight hei15 ">
          {loading ? (
            <>
              <div>
                <main>
                  <Table
                    className="MainTable "
                    style={{ tableLayout: "fixed" }}
                  >
                    <thead>
                      <tr>
                        <Th>Name</Th>
                        <Th>GroupName</Th>
                        <Th>Year</Th>
                        <Th>Existence</Th>
                        <Th>Check</Th>
                      </tr>
                    </thead>

                    {item.map((data) => {
                      const str = JSON.stringify(data.filename);
                      const str1 = str.split("/");
                      const str2 = str1[str1.length - 1];
                      const groupName = str2.replace('.pdf"', "");
                      return (
                        <tbody key={data.index}>
                          <tr>
                            <Td
                              style={{
                                border: "black solid 1px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              }}
                              title={groupName}
                            >
                              {" "}
                              {groupName}
                            </Td>
                            <Td style={{ border: "black solid 1px" }}>
                              {data.attack_group}
                            </Td>
                            <Td style={{ border: "black solid 1px" }}>
                              {data.attack_year}
                            </Td>
                            <Td

                              style={{ border: "black solid 1px" }}
                            >
                              <span>
                            Rcatt:
                            {data.rcatt_ttps_processed.toString() === "true"
                              ? "O"
                              : "X"}
                          </span>
                          <br />
                          <span>
                            Tram:
                            {data.tram_ttps_processed.toString() === "true"
                              ? "O"
                              : "X"}
                          </span>
                          {/* <br/>
                          <span>
                            Tram:
                            {data.pestudio.toString() === "true"
                              ? "O"
                              : "X"}
                          </span> */}
                            </Td>
                            <Td>
                              <input type="checkbox" defaultChecked={true}/>
                            </Td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </Table>
                </main>
              </div>
            </>
          ) : (
            "데이터 불러오는중..."
          )}
        </div>


        <div className="footer" style={{ height: "70vh" }}>
          <div className="footerChild">
            <Container>
              <div style={{ height: "15vh" }}>
                <DomainSetting />
              </div>
            </Container>
            <div>
              <p>{`<변환 진행 및 결과>`}</p>
              <DomainProcess />
            </div>
          </div>

          <div className="footerChild3 borderSolid" style={{ height: "70vh" }}>
            <div className="hei45">
              <p>변환 도메인</p>
              <DomainDomain />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

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

export default AttackDomain;
