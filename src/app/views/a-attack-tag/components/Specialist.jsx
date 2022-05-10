import React, { useEffect, useState } from "react";

function Specialist({ data }) {
  const [item, setItem] = useState("");
  const [loading, setLoading] = useState(false); //로딩
  const arr = item.split(" ");

  const onRemove = (id) => {
    setItem((item) => item.filter((info) => console.log(info)));
  };

  useEffect(() => {
    setItem(data);
    setLoading((current) => !current);
  }, [data]);

  return (
    <>
    {loading? arr.map((data, idx) => (
        <div key={idx} style={{textAlign:"center",display:"flex"}}>
          <span >{data}</span>
          <input type="checkbox"/>
        </div>
      )):"데이터 불러오는중.."}
     
    </>
  );
}

export default Specialist;
