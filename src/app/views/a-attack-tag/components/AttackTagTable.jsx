import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Specialist from "./Specialist";
import TagInput from "./TagInput";

import "../../attackStyle.css";

function AttackTagTable({ filteredData, keyword, pdfHandler }) {
    return (
        <Table>
            <tbody>
            <tr>
                <Th>Name</Th>
                <Th>GroupName</Th>
                <Th>Year</Th>
                <Th>Existence</Th>
                <Th>Specialist</Th>
            </tr>
            {filteredData &&
                filteredData
                    .filter((table) => {
                        const str = JSON.stringify(table.filename);
                        const str1 = str.split("/");
                        const str2 = str1[str1.length - 1];
                        const groupName = str2.replace('.pdf"', "");

                        if (
                            groupName.toLowerCase().includes(keyword.toLowerCase()) ||
                            table.attack_year
                                .toLowerCase()
                                .includes(keyword.toLowerCase()) ||
                            table.attack_group.toLowerCase().includes(keyword.toLowerCase())
                        ) {
                            return table;
                        }
                    })
                    .slice(0,10).map((info, idx) => {
                    const str = JSON.stringify(info.filename);
                    const str1 = str.split("/");
                    const str2 = str1[str1.length - 1];
                    const groupName = str2.replace('.pdf"', "");

                    return (
                        <tr key={info.index}>
                            <Td
                                className="txt_line"
                                title={groupName}
                                style={{ maxWidth: "200px", textAlign: "center" }}
                                onClick={() => {
                                    pdfHandler(info.filename);
                                }}
                            >
                                {groupName}
                            </Td>
                            <Td style={{ width: "8%", textAlign: "center" }}>
                                {info.attack_group}
                            </Td>
                            <Td style={{ width: "15%", textAlign: "center" }}>
                                {info.attack_year}
                            </Td>
                            <Td
                                style={{ width: "15%", textAlign: "center" }}
                                onClick={() => {
                                    pdfHandler(info.filename);
                                }}
                            >
                    <span>
                      <span className="tooltip">
                        Rcatt:
                        <span className="tooltip-text">
                          Rcatt ttps : {info.rcatt_ttps}
                        </span>
                      </span>
                        {info.rcatt_ttps_processed.toString() === "true"
                            ? "O"
                            : "X"}
                    </span>
                                <br />
                                <span>
                      <span className="tooltip">
                        Tram:
                        <span className="tooltip-text">
                          Tram ttps : {info.tram_ttps}
                        </span>
                      </span>
                                    {info.tram_ttps_processed.toString() === "true"
                                        ? "O"
                                        : "X"}
                    </span>
                                <br/>
                                <span>
                      <span className="tooltip">
                        Pestudio:
                        <span className="tooltip-text">
                          Pestudio ttps : 추가중
                        </span>
                      </span>
                                    {info.pestudio_processed.toString() === "true"
                                        ? "O"
                                        : "X"}
                    </span>
                            </Td>
                            <Td>
                                <div style={{ overflow: "auto", height: "10vh" }}>
                                    <Specialist data={info.true_ttps} key={info.index} />
                                </div>
                                <span>
                      <TagInput/>
                    </span>
                            </Td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}

export default React.memo(AttackTagTable);

const Table = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  width: 100%;
  /* table-layout: fixed; */
`;
const Th = styled.th`
  border: 1px solid black;
`;
const Td = styled.td`
  border: 1px solid black;
`;
