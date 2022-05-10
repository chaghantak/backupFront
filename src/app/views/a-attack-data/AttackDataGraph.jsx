import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';

import "../attackStyle.css";

function AttackDataGraph(props) {

    const genData = () => ({
        labels: ['TA0043', 'TA0042', 'TA0001', 'TA0002'],
        datasets: [
        
            {
            type: 'bar',
            label : '# of TACTIC',
            backgroundColor: 'rgb(255, 99, 132)',
            fill: true,
            data: [4,2,3,5],
          }
        ],
      });
      
const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  
  
        return(
            <div className="allMargin">
              {/* react-chartjs-2 라이브러리 사용*/}
              	 <Bar data={genData} options={options} />
            </div>
            );
        }
      
export default AttackDataGraph;