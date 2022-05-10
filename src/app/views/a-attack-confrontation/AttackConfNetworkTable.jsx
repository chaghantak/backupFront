import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../attackStyle.css';

function AttackConfTable(props) {
  return (
    <>
      <table className="MainTable" style={{ height: '100%' }}>
        <thead>
          <tr></tr>
          <tr className="Mtt2">
            <th>Network</th>
            <th>IP</th>
            
          </tr>
        </thead>

        <tbody>
          <tr className="Mtt2">
            <td rowSpan={2}><Link to={"/a-attack-agent"}>ID1</Link></td>
            <td>192.168.0.10</td>
            
          </tr>
          <tr className="Mtt2">
            <td>192.168.0.11</td>
           
          </tr>
          <tr className="Mtt2">
            <td><Link to={"/a-attack-agent"}>ID2</Link></td>
            <td>...</td>
            
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default AttackConfTable;
