import React, { useState } from "react";
import "../attackStyle.css";
import Switch from "@material-ui/core/Switch";
import { Link } from "react-router-dom";
function AttackAgentSetting() {
  const [toggle, setToggle] = useState(false);
  // useEffect(()=>{
  //     setToggle(true);
  // },[toggle])

  const handleSign = () => setToggle(true);

  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };
  return (
    <>
      <label>정보 수집 주기</label>
      <input type="number"></input>
      <button>적용</button>
      <br />
      <label>heartbeat 주기</label>
      <input type="number"></input>
      <button onClick={handleSign}>적용</button>

      <table className="MainTable" style={{ height: "80%" }}>
        <thead>
          <tr className="Mtt2">
            <th>네트워크</th>
            <th>ID</th>
            <th>IP</th>
            <th>C</th>
            <th>I</th>
            <th>A</th>
            <th>heart bit</th>
            <th>자동 대응</th>
          </tr>
        </thead>

        <tbody>
          <tr className="Mtt2">
            <td rowSpan={2}><Link to={"/a-attack-confrontation"}>ID1</Link></td>
            <td>A.XX</td>
            <td>192.168.0.10</td>
            <td>5</td>
            <td>2</td>
            <td>1</td>
            <td> {toggle ? "yes" : "no"}</td>
            <td>
              <Switch
                checked={state.checkedA}
                onChange={handleChange("checkedA")}
                value="checkedA"
              />
            </td>
          </tr>
          <tr className="Mtt2">
            <td>A.YY</td>
            <td>192.168.0.11</td>
            <td>5</td>
            <td>2</td>
            <td>1</td>
            <td> {toggle ? "yes" : "no"}</td>
            <td>
              <Switch
                checked={state.checkedB}
                onChange={handleChange("checkedB")}
                value="checkedB"
              />
            </td>
          </tr>
          <tr className="Mtt2">
            <td><Link to={"/a-attack-confrontation"}>ID2</Link></td>
            <td>A.ZZ</td>
            <td>...</td>
            <td>5</td>
            <td>2</td>
            <td>1</td>
            <td> {toggle ? "yes" : "no"}</td>
            <td>
              <Switch
                checked={state.checkedC}
                onChange={handleChange("checkedC")}
                value="checkedC"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default AttackAgentSetting;
