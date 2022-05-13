import { BASE_URL } from "app/views/api";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function KillLog({ data }) {
  const [item, setItem] = useState([]);
  useEffect(() => {
    Axios({
      url: `${BASE_URL}/chain/killchain-id`,
      method: "POST",
      data: {
        id: data,
      },
    }).then(({ data }) => {
      setItem(data.items.killchain);
    });
  }, [data]);

  return (
    <Container>
      <table style={{borderCollapse: "collapse"}}>
          <thead>
              <tr>
                  <Th colSpan={2}>Time Series</Th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <Th>RuleName</Th>
                  <Th>Time</Th>
              </tr>
        {item.subgraph &&
          item.subgraph.map((data) => (
            <tr key={data._id}>
              <Td> {data.rule_name}</Td>
              <Td style={{borderLeft: "1px solid gray"}}>{data.timestamp.$date}</Td>
            </tr>
          ))}
          </tbody>
      </table>
    </Container>
  );
}

export default KillLog;
const Th = styled.th`
border-bottom: 1px solid gray;

`

const Td = styled.td`
border-bottom: 1px solid gray;
font-size: small;

`
const Container = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  height: 42vw;
`;
