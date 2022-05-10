import React, { createRef, useEffect, useRef, useState } from "react";

import { select, line, scaleBand,curveCardinal, axisBottom, axisLeft, scaleLinear } from "d3";

const [dataT, setDataT, getDataT] = "";



function BarGraph(props) {

    const { classes } = props;
   const [data, setData] = useState([0,25,30,45,60,75]);
// const [data, setDate] = useState[
//   {
//     groupName: "ex1",
//     groupCountry: "kr";
//     count: 20;
//   },
//   {
//     groupName: "ex2",
//     groupCountry: "cn";
//     count: 35;
//   },
//
// {
//     groupName: "ex3",
//     groupCountry: "fr";
//     count: 53;
//   },
//
// {
//     groupName: "ex4",
//     groupCountry: "it";
//     count: 65;
//   },
//
// {
//     groupName: "ex5",
//     groupCountry: "jp";
//     count: 78;
//   }
// ]
   const svgRef = useRef();
 useEffect(() => {
    const svg = select(svgRef.current);


//  const djangoTest = async () => {
//        try {
//
//            const res = await fetch('http://localhost:8000/api/chains');
//            const posts = await res.json();
//            this.setState({
//                posts
//            });
//        } catch (e) {
//            console.log(e);
//        }
//    }

    const xScale = scaleLinear()
      .domain([0, 80])
      .range([0, 300]);

    const yScale = scaleBand()
      .domain(data.map((value, index) => index))
      .range([-30, 150])
      .padding(0.2);


    const colorScale = scaleLinear()
      .domain([30, 55, 70])
      .range(["gray", "green", "red"])
      .clamp(true);

    const yAxis = axisBottom(xScale).ticks(data.length);

    svg
      .select(".x-axis")
      .style("transform", "translateY(150px)")
      .call(yAxis);

    const xAxis = axisLeft(yScale);
    svg
      .select(".y-axis")
      .style("transform", "translateX(0px)")
      .call(xAxis);

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")

      .style("transform", "scale(1, -1)")
      .attr("x", 0)
      .attr("y", (value, index) => yScale(index) - 150)
      .attr("height", yScale.bandwidth())
      .transition()
      .attr("fill", colorScale)
      .attr("width", value => xScale(value));
  }, [data]);



      return (

     <React.Fragment>
     <br/>
     <br/>
      <svg ref={svgRef}  background = "#eee"
  overflow = "visible"
  margin-bottom = "2rem"
  display = "block" >
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
{/*       <button onClick={() => setData(data.map(value => value + 5))}> */}
{/*         Update data */}
{/*       </button> */}
{/*       <button onClick={() => setData(data.filter(value => value < 100))}> */}
{/*         Filter data */}
{/*       </button> */}
<br/>
<br/>
    </React.Fragment>

    );
  }



export default BarGraph;
