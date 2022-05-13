import { BASE_URL } from "app/views/api";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function KillLog({ data }) {
  console.log(data);
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
      <table style={{ borderCollapse: "collapse" }}>
        <tbody>
         
          {item.subgraph &&
            item.subgraph.map((data) => (
              <tr key={data._id}>
                <Td>
                  <span style={{ fontSize: "x-small" }}>
                    {data.timestamp.$date.replace(/\T|\Z/g, " ")}
                  </span>
                <br/>
                  <span>{data.rule_name}</span>
                  <br />
                  <span
                    style={{ fontSize: "x-small" }}
                  >{`<${data.mitre_attack_ttp}>`}</span>
                </Td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
}

export default KillLog;

const Td = styled.td`
  text-align: left;
  font-size: 12px;
  padding: 20px 0 0 0;
`;
const Container = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  height: 42vw;
`;
