import { BASE_URL } from "app/views/api";
import Axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ModalTtp from "./ModalTtp";
import TacticTable from "./TacticTable";
import "./Modal.css";
import Modal from "./Modal";
import Button from "./Button";
function TableGo({ item }) {
  const [send, setSend] = useState("");
  const [ttpData, setTtpData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [neoId, setNeoId] = useState("");
  const [isShowing, setIsShowing] = useState(false);
  const [hide, setHide] = useState("");

  const [users, setUsers] = useState([
    {
      tecname: "",
    },
  ]);

  const onCreate = (id) => {
    const user = {
      tecname: id,
    };

    setUsers([...users, user]);
    
  };
  const onRemove = (id) => {
    setUsers(users.filter((user) => user.tecname !== id));
    
  };
  const onClick = (id) => {
    setSend(id);
  };
  const modalClick = (id) => {
    setNeoId(id);
    setIsShowing(true);
  };
  const handleModalClose = () => {
    setModal(false);
  };
  const handleModalOpen = () => {
    setModal(true);
  };

  const closeModal = () => {
    setIsShowing(false);
  };

  const backOn = (data) => {
    setHide(data);
    
  };
  useEffect(() => {
    setLoading((current) => !current);
  }, []);

  useEffect(() => {
    Axios({
      url: `${BASE_URL}/chain/events-ttp`,
      method: "POST",
      data: {
        ttp: send,
      },
    }).then(({ data }) => {
      setTtpData(data.items);
    });
  }, [send]);

  return (
    <>
      {loading ? (
        <>
          <div hidden={!modal}>
            <div className="modal-background">
             <div>
            <Button handleModalClose={handleModalClose}/>
            </div>
              <Container className="modal-card" >
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    backgroundColor: "#5BB9B8",
                    position: "sticky",
                    top: "0",
                  }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          width: "33%",
                          border: "1px solid black",
                        }}
                      >
                        일시
                      </td>
                      <td
                        style={{
                          width: "33%",
                          border: "1px solid black",
                        }}
                      >
                        공격명
                      </td>
                      <td
                        style={{
                          width: "33%",
                          border: "1px solid black",
                        }}
                      >
                        대상 호스트
                      </td>
                    </tr>
                  </tbody>
                </table>
                
              
             
                <ModalTtp data={ttpData} modalClick={modalClick}  backOn={backOn}
                hide={hide} />
              </Container>
              
            </div>
          </div>

          <Table>
            <TacticTable
              onCreate={onCreate}
              onRemove={onRemove}
              data={item}
              onClick={onClick}
              users={users}
              handleModalOpen={handleModalOpen}
              backOn={backOn}
              hide={hide}
            />
          </Table>

          {isShowing && <Modal data={neoId} click={closeModal} />}
        </>
      ) : null}
    </>
  );
}

export default TableGo;
const Table = styled.table`
  border-collapse: collapse;
  display: table;
  display: flex;

`;
const Container = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar{
    display : none;
  }
`