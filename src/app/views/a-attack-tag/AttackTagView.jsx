import Axios from "axios";
import React, { useEffect, useState } from "react";
import {BASE_URL, CAMPAIGN_API_URL} from "../api";
import "../attackStyle.css";
import TagPdf from "./components/TagPdf";
import Search from "./components/Search";
import Button from "./components/Button";
import PaginatedItems from "./components/PaginatedItems";

function AttackTag() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(null);
  const [pdf, setPdf] = useState("");
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [info, setInfo] = useState("");

  const buttonCheck = ['rcatt', 'tram', 'pestudio'];

  const pdfHandler = (info) => {
    setPdf(info);
  };

  function filters(tem) {
    let abc = data.filter(
        (data) =>
            tem === "rcatt"
                ? data.rcatt_ttps_processed !== true
                : tem === "tram"
                    ? data.tram_ttps_processed !== true
                    : tem === "pestudio"
                        ? data.pestudio_processed !== true
                        : null
    );
    console.log(abc)
    return abc;
  }

  const handleProcess = (tem) => {
    // TODO 여기에 /ui-acc-002/{btn_name} 호출
    let data = {};

    // tem 이 rcatt, tram, pestudio 일 경우
    if (buttonCheck.includes(tem)) {

    } else {

    }

    Axios({
      url: `${CAMPAIGN_API_URL}/ui-acc-002/${tem}`,
      method: 'PUT',
      data: data
    }).then(({ result }) => {

    });
  };

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    Axios({
      url: `${BASE_URL}/campaign/campaign-list`,
      method: "POST",
      data: {},
    }).then(({ data }) => {
      setData(data.items);
      setFilteredData(data.items);
      setLoading((current) => !current);
    });
  }, []);

  return (
      <>
        {loading ? (
            <div className="loader"></div>
        ) : (
            <>
              <div style={{ margin: "10px" }}>
                <h5>공격 캠페인 분류 ▶ 공격 기술 태그 할당</h5>
                <Search onChange={onChange} keyword={keyword} />
                <div>
                  <Button handleProcess={handleProcess} />
                </div>
                <div
                    style={{
                      position: "relative",
                      width: "50%",
                      height: "86vh",
                      border: "1px solid black",
                      float: "left",
                      overflow: "auto",
                    }}
                >
                  <PaginatedItems
                      itemsPerPage={10}
                      filteredData={filteredData}
                      keyword={keyword}
                      pdfHandler={pdfHandler}
                  />
                </div>
                <div
                    style={{
                      width: "45%",
                      height: "86vh",
                      border: "1px solid black",
                      float: "left",
                    }}
                >
                  <TagPdf id={pdf} />
                </div>
              </div>
            </>
        )}
      </>
  );
}

export default React.memo(AttackTag);
