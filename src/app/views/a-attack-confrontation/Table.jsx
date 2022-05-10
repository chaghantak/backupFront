import Axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BASE_URL } from "../api";

const Table = styled.table`
  border-collapse: collapse;
  text-align: left;
  line-height: 1.5;
  border-left: 1px solid #ccc;
  margin: 20px 10px;
`;
const Thead = styled.thead`
  padding: 10px;
  font-weight: bold;
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;

  background: #dcdcd1;
`;
const Tr = styled(Thead)``;

const Tbody = styled.tbody`
  width: 150px;
  padding: 10px;
  font-weight: bold;
  vertical-align: top;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  background: #ececec;
`;
const Th = styled(Tbody)`
  display: flex;
`;

const Td = styled.td`
  width: 350px;
  padding: 10px;
  vertical-align: top;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;
const Button = styled(Td)``;

export default function MiddleTable() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  // const BASE_URL = "http://192.168.0.117";

  const onRemove = (index) => {
    setData(data.filter((data) => data.index !== index));
  };

  useEffect(() => {
    Axios({
      // url: "http://192.168.10.2:8000/apt/apis/chain/events-matrix",
      url: `${BASE_URL}/campaign/group-list`,
      method: "POST",
      data: {},
    }).then(({ data }) => {
      setData(data.items);
      setLoading((current) => !current);
    });
  }, []);
  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <Table>
          <Thead>
            <Tr></Tr>
          </Thead>

          <Tbody>
            {data.slice(0,11).map((data) => (
              <Tr key={data.id} onRemove={onRemove}>
                <Th>{data.name}</Th>
                <Td>{data.ttps.slice(0, 6)}</Td>
                <Td>{data.country}</Td>
                <Td>
                  <button onClick={() => onRemove(data.index)}>승인</button>
                  <button>거부</button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </>
  );
}
