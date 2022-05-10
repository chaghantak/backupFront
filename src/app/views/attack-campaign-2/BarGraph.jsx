import React, { useRef, useEffect, useState } from "react";
import { select, axisBottom, axisLeft, scaleLinear, scaleBand } from "d3";


const BarGraph = ({props}) => {
console.log(props);
  const [data, setData] = useState([props]);
  const svgRef = useRef();

  useEffect(() => {
     const svg = select(svgRef.current);

 
     const xScale = scaleLinear()
       .domain([0, 100])
       .range([0, 100]);
 
     const yScale = scaleBand()
       .domain(data.map((value, index) => index))
       .range([0, 100])
       .padding(0.8);
 
 
     const colorScale = scaleLinear()
       .domain([50, 70, 90])
       .range(["gray", "yellow", "red"])
       .clamp(true);
 
     const yAxis = axisBottom(xScale).ticks(data.length);
 
     svg
       .select(".x-axis")
       .style("transform", "translateY(150px)")
       .style("opacity", "0")
       .call(yAxis);
 
     const xAxis = axisLeft(yScale);
     svg
       .select(".y-axis")
       .style("transform", "translateX(0px)")
       .style("opacity", "0")
       .call(xAxis);

       svg.append('text')
       .attr("y", (value, index) => yScale(index) -10 )
       .text(props + '%');
 
     svg
       .selectAll(".bar")
       .data(data)
       .join("rect")
       .attr("class", "bar")
 
       .style("transform", "scale(1, -1)")
       .attr("x", 0)
       .attr("y", (value, index) => yScale(index) -100)
       .attr("height", yScale.bandwidth())
       .transition()
       .attr("fill", colorScale)
       .attr("width", value => xScale(value));
   }, [data]);

 
 
       return (
 
      <React.Fragment>
  
       <svg ref={svgRef}  background = "#eee" overflow = "visible" display = "block" width="15vh">
         <g className="x-axis" />
         <g className="y-axis" />
       </svg>

     </React.Fragment>
 
     );
   }
 
   export default BarGraph;