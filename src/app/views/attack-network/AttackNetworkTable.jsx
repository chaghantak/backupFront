import React, { useState } from 'react';
import '../attackStyle.css';

export default function AttackNetworkTable(props) {
  return (
    <div className="">
      <table className="MainTable Mtt2 ">
        <thead>
          <tr className=" padding1">
            <th className="Mtt padding1">방화벽ID</th>
            <th className="Mtt padding1">정책</th>
            <th className="Mtt padding1">allow/deny</th>
            <th className="Mtt padding1">자동대응</th>
          </tr>
        </thead>
        <tbody>
          <tr className="Mtt padding1">
            <td className="Mtt padding1">F.x</td>
            <td className="Mtt padding1">source 192.172...</td>
            <td className="Mtt padding1">allow</td>
            <td className="Mtt padding1">Y</td>
          </tr>
          <tr className="Mtt padding1">
            <td className="Mtt padding1">...</td>
            <td className="Mtt padding1">...</td>
            <td className="Mtt padding1">...</td>
            <td className="Mtt padding1">Y</td>
          </tr>
          <tr className="Mtt padding1">
            <td className="Mtt padding1">...</td>
            <td className="Mtt padding1">...</td>
            <td className="Mtt padding1">...</td>
            <td className="Mtt padding1">Y</td>
          </tr>
          <tr className="Mtt padding1">
            <td className="Mtt padding1">...</td>
            <td className="Mtt padding1">...</td>
            <td className="Mtt padding1">...</td>
            <td className="Mtt padding1">Y</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
