import React, { Component } from 'react';

import { SimpleCard } from 'matx';
import '../attackStyle.css';

function AttackLearnParameter(props) {
  return (
    <>
      <input type="text" value="T1592"></input>
      <button>검색</button>
      <table className="MainTable MaxHeight hei16">
        <thead>
          <tr></tr>
          <tr className="Mtt">
            <th colSpan={3}>P(T1592 | T1595, T1020)</th>
          </tr>
        </thead>

        <tbody>
          <tr className="Mtt">
            <td>(T1595, T1020)</td>
            <td>T</td>
            <td>F</td>
          </tr>
          <tr className="Mtt">
            <td>(T, T)</td>
            <td>0.2</td>
            <td>0.8</td>
          </tr>
          <tr className="Mtt">
            <td>(T, F)</td>
            <td>0.5</td>
            <td>0.5</td>
          </tr>
          <tr className="Mtt">
            <td>(F, T)</td>
            <td>0.3</td>
            <td>0.7</td>
          </tr>
          <tr className="Mtt">
            <td>(F, F)</td>
            <td>0.8</td>
            <td>0.2</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default AttackLearnParameter;
