import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BASE_URL } from "../../api";
import DetailHost from "./DetailHost";
import DetailTable from "./DetailTable";

export default function DetailMatrix({ id }) {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios({
      url: `${BASE_URL}/chain/events-id`,
      method: "POST",
      data: {
        id: id,
      },
    }).then(({ data }) => {
      setItem(data.items);
      setLoading(true);
    });
  }, [id]);

  //event
  const eventStr = JSON.stringify(item.event || "");
  const eventCut = eventStr.replace(/\"|\{|\}|\[|\]/g, "");
  const itemEvent = eventCut.split(",");

  //host
  const hostStr = JSON.stringify(item.host || "");
  const hostCut = hostStr.replace(/\"|\{|\}|\[|\]| /g, "");
  const hostCut1 = hostCut.replace(",os:", "@os:");
  const hostCut2 = hostCut1.split("@", -1);
  const itemHost = hostCut2[0].split(",");
  const itemHost1 = hostCut2[1] && hostCut2[1].replace("os:", "os@");
  const itemHost2 = itemHost1 && itemHost1.split("@", -1);

  //Process
  const processStr = JSON.stringify(item.process || "");
  const processCut = processStr.replace(/\"|\{|\}|\[|\]/g, "");
  const itemProcess = processCut.split(",");

  //file
  const fileStr = JSON.stringify(item.file || "");
  const fileCut = fileStr.replace(/\"|\{|\}|\[|\]/g, "");
  const itemFile = fileCut.split(",");

  //destination
  const destinationStr = JSON.stringify(item.destination || "");
  const destinationCut = destinationStr.replace(/\"|\{|\}|\[|\]/g, "");
  const itemDestination = destinationCut.split(",");

  //source
  const sourceStr = JSON.stringify(item.source || "");
  const sourceCut = sourceStr.replace(/\"|\{|\}|\[|\]/g, "");
  const itemSource = sourceCut.split(",");

  //registry
  const registryStr = JSON.stringify(item.registry || "");
  const registryCut = registryStr.replace(/\"|\{|\}|\[|\]/g, "");
  const itemRegistry = registryCut.split(",");

  //fileshare
  const fileshareStr = JSON.stringify(item.fileshare || "");
  const fileshareCut = fileshareStr.replace(/\"|\{|\}|\[|\]/g, "");
  const itemFileshare = fileshareCut.split(",");

  //winlog.user
  const userStr = JSON.stringify(item.winlog || "");
  const userCut = userStr.replace(/\"|\{|\}|\[|\]/g, "");
  const itemUser = userCut.split(",");

  return (
    <>
      {loading ? (
        <div
          style={{
            height: "37.56vw",
            overflow: "auto",
            borderRight: "1px solid black",
            borderBottom: "1px solid black",

            borderCollapse: "collapse",
          }}
        >
          <div
            style={{
              borderBottom: "1px solid black",
              borderRight: "1px solid black",
            }}
          >
            단위상세경보
          </div>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <Tr>
                <th style={{ borderRight: "1px solid black" }}></th>
                <th style={{ backgroundColor: "skyblue" }}>Event</th>
              </Tr>

              {itemEvent.map((data, idx) => (
                <DetailTable data={data} key={idx} />
              ))}
              {itemHost.length === 1 ? null : (
                <>
                  <Tr>
                    <th style={{ borderRight: "1px solid black" }}></th>
                    <th style={{ backgroundColor: "skyblue" }}>Host</th>
                  </Tr>
                  {itemHost.map((data, idx) => (
                    <DetailTable data={data} key={idx} />
                  ))}

                  <DetailHost data={itemHost2} />
                </>
              )}
              {itemProcess.length === 1 ? null : (
                <>
                  <Tr>
                    <th style={{ borderRight: "1px solid black" }}></th>
                    <th style={{ backgroundColor: "skyblue" }}>Process</th>
                  </Tr>
                  {itemProcess.map((data, idx) => (
                    <DetailTable data={data} key={idx} />
                  ))}
                </>
              )}
              {itemFile.length === 1 ? null : (
                <>
                  <Tr>
                    <th style={{ borderRight: "1px solid black" }}></th>
                    <th style={{ backgroundColor: "skyblue" }}>File</th>
                  </Tr>
                  {itemFile.map((data, idx) => (
                    <DetailTable data={data} key={idx} />
                  ))}
                </>
              )}
              {itemDestination.length === 1 ? null : (
                <>
                  <Tr>
                    <th style={{ borderRight: "1px solid black" }}></th>
                    <th style={{ backgroundColor: "skyblue" }}>Destination</th>
                  </Tr>
                  {itemDestination.map((data, idx) => (
                    <DetailTable data={data} key={idx} />
                  ))}
                </>
              )}
              {itemSource.length === 1 ? null : (
                <>
                  <Tr>
                    <th style={{ borderRight: "1px solid black" }}></th>
                    <th style={{ backgroundColor: "skyblue" }}>Source</th>
                  </Tr>
                  {itemSource.map((data, idx) => (
                    <DetailTable data={data} key={idx} />
                  ))}
                </>
              )}
              {itemRegistry.length === 1 ? null : (
                <>
                  <Tr>
                    <th style={{ borderRight: "1px solid black" }}></th>
                    <th style={{ backgroundColor: "skyblue" }}>Registry</th>
                  </Tr>
                  {itemRegistry.map((data, idx) => (
                    <DetailTable data={data} key={idx} />
                  ))}
                </>
              )}
              {itemFileshare.length === 1 ? null : (
                <>
                  <Tr>
                    <th style={{ borderRight: "1px solid black" }}></th>
                    <th style={{ backgroundColor: "skyblue" }}>Fileshare</th>
                  </Tr>
                  {itemFileshare.map((data, idx) => (
                    <DetailTable data={data} key={idx} />
                  ))}
                </>
              )}
              {itemUser.length === 1 ? null : (
                <>
                  <Tr>
                    <th style={{ borderRight: "1px solid black" }}></th>
                    <th style={{ backgroundColor: "skyblue" }}>Source</th>
                  </Tr>
                  {itemSource.map((data, idx) => (
                    <DetailTable data={data} key={idx} />
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      ) : null}
    </>
  );
}

const Tr = styled.tr`
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
`;
