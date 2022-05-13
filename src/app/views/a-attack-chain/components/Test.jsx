import Axios from 'axios';
import React, { useEffect, useState } from 'react';

function Test(props) {
    const [data,setData]=useState([]);
    useEffect(() => {
        Axios({
          url: `http://127.0.0.1:5000/main/GoodBaby`,
          method: "POST",
          data:""
        }).then(({ data }) => {
          setData(data)
        });
      }, []);
console.log(data)
    return (
        <div>
            
        </div>
    );
}

export default Test;