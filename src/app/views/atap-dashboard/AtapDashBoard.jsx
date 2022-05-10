// import { DataSet } from "vis-data/peer";
import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { Card, Checkbox } from "@material-ui/core";
import { withStyles } from '@material-ui/styles';
//import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "@material-ui/core";
import 'vis/dist/vis.css';
import { addChain, getChains, updateChain, deleteChain, combineChainsDefault, combineChainsBayesian } from "../../redux/actions/ChainAction";
import { addGraph } from "../../redux/actions/GraphAction";
import { createTheme } from '@material-ui/core/styles';
import "../../../styles/views/_atapdashboard.scss";
const styles = theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  p: {
  color: "#00ff00"
  }
});



const expData = {
  labels: ["a", "b", "c"],
  datasets: [
    {
      labels: ["a", "b", "c"],
      data: [60, 13, 27],
      borderWidth: 2,
      hoverBorderWidth: 3,
      backgroundColor: [
        "rgba(238, 102, 121, 1)",
        "rgba(98, 181, 229, 1)",
        "rgba(255, 198, 0, 1)"
      ],
      fill: true
    }
  ]
};



class dashBoard extends Component{
  constructor(props){
    super(props);
    this.state = {
      chains : [],
      chain : {},
      checked : [],
      rowsPerPage : 10,
      page : 0,
    }
  }

  componentDidMount() {
    console.log('old');
  }

  setRowsPerPage = (rowsPerPage) => {
    this.setState({rowsPerPage});
  }

  setPage = (page) => {
    this.setState({page});
  }

  handleChangePage = (event, newPage) => {
    this.setPage(newPage);
  };

  handleChangeRowsPerPage = event => {
    this.setRowsPerPage(+event.target.value);
  };

  handleCheck = (key) => {
    if(this.state.checked.indexOf(key)==-1){
      this.setState({checked : [...this.state.checked, key]})
    }else{
      this.setState({checked : this.state.checked.filter((el) => { return el != key  })})
    }
  }

/* function openMapFullScreen(){
	window.open('dashboardPop.do','위협상황 현황판','height=' + screen.height + ',width=' + screen.width + 'fullscreen=yes');
}
function openChainFullScreen(){
	window.open('alertStatus.do','위협 경보 현황판','height=' + screen.height + ',width=' + screen.width + 'fullscreen=yes');
} */



  handleGenerate = async () => {
    let chains = this.props.chain.chains.filter((el) => { return this.state.checked.indexOf(el.id) != -1 })
    // await this.props.combineChainsDefault(chains);
    await this.props.combineChainsBayesian(chains);
    console.log(this.props.chain.combined);
    await this.props.addGraph(this.props.chain.combined);
  }

  render(){
  const pStyle={
        color : 'red',
        size: '600px'
    }
   const tempStyle={
        display:"inline-block",
        width:"100px",
        height:"100px",
        boder:"1px solid black",
        background:"orange",
    }
    const { classes } = this.props;

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'a',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 1)',
    },
    {
      label: 'b',
      data: [1, 16, 8, 5,7, 2],
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 1)',
    },
     {
      label: 'c',
      data: [20, 2, 15, 1, 11, 1.5],
      fill: false,
      backgroundColor: 'orange',
      borderColor: 'orange',
    },
  ],
};


/* const rand = () => Math.floor(Math.random() * 255); */
const genData = () => ({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'line',
      label: 'All',
      borderColor: 'white',
      borderWidth: 2,
      data: [225,200,156,240,100,190,210],
    },
      {
      type: 'bar',
      label: 'a',
      backgroundColor: 'rgb(255, 99, 132)',
      fill: true,
      data: [225,200,156,240,100,190,210],
    },
    {
      type: 'bar',
      label: 'b',
      backgroundColor: 'rgb(54, 162, 235)',
      fill: true,
      data: [225,200,156,240,100,190,210],
    },
    {
      type: 'bar',
      label: 'c',
      backgroundColor: 'orange',
      fill: true,
      data: [225,200,156,240,100,190,210],
    },
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




    return (
      <div className="m-sm-30">


					<div className="statusSection graphSection">

						<div className="sectionHeader">
							<div className="float-left" style={{marginTop: '-5px'}}>
								<i className="fa fa-bar-chart"></i>
								<h2 className="title" style={{display: 'inline', fontSize: '15px'}}>위협
									경보 현황</h2>
								<select name="searchType" id="searchType"
									style={{height: '25px', marginLeft: '10px'}}>
									<option value="alert-tactic-id">전술</option>
									<option value="alert-action-id">행동</option>
									<option value="alert-technique-id">기술</option>
									<option value="alert-rule-id">룰셋</option>
								</select>
							</div>
{/* 							<div className="float-right" style={{float:'right', marginTop: '-25px'}}> */}
{/* 								<button className='btn btn-primary float-right' */}
{/* 									style={{margin: '0 0 0 10px', height: '25px', padding: '0 6px 3px 6px'}} */}
{/* 									onclick={openChainFullScreen}>전체</button> */}
{/* 									<label className="box-radio-input">위협 경보현황</label> */}

{/* 								<label className="box-radio-input"> <input type="radio" */}
{/* 									name="check" value="alert" checked="checked" */}
{/* 									onClick="statusBtn('alertStatu');"> */}
{/* 									<span>위협 경보현황</span> </label> */}
{/* 								<label className="box-radio-input"> <input type="radio" */}
{/* 									name="check" value="campa" onClick="statusBtn('campaStatu');"> */}
{/* 									<span>위협 캠페인 현황</span> */}
{/* 								</label> */}

{/* 							</div> */}
						</div>

						<div id="alertTap"
							style={{position: 'relative', top: '15px', opacity: 1, zIndex: 10}}>
							<div className="" id="killchainDIV"
								style={{width: "20%", float: 'left', height: "200px", position: 'relative', overflow: 'auto', padding:"20px"}}>
<table style={{borderColor:"#fff !important"}}><thead style={{margin:'15px'}}><tr><td>항목1</td></tr><tr><td>항목2</td></tr><tr><td>항목3</td></tr></thead></table>
							</div>

							<div style={{width: '80%', float: 'left', borderLeft: '1px solid'}}>

								<div id="graphPane"
									style={{width: '100%', height: '200px', overflow: 'auto', position: 'relative'}}>
									<ul className="killchainInfo">
					                  	<li>
					                  		<span className="infoChain real"></span><b> : 실제</b>
					                  	</li>
					                    <li>
					                  		<span className="infoChain predicted"></span><b> : 예측</b>
					                  	</li>
				                	</ul>
									<svg id="killchainGraph">

									</svg>
								</div>
							</div>
						</div>

						<div id="campaignTap"
							style={{position: 'relative', top: '-202px', opacity: '0', zIndex: '0'}}>
							<div className="" id="scenarioDIV"
								style={{width: '20%', float: 'left', height: '200px', position: 'relative', overflow: 'auto'}}>

							</div>

							<div style={{width: '80%', float: 'left', borderLeft: '1px solid'}}>
								<div id="graphPane"
									style={{width: '100%', height: '200px', overflow: 'auto', position: 'relative'}}
									className="graphPaneClass">
									<svg width='100%' height='200px' id="scenarioGraph">

									</svg>
								</div>
							</div>
						</div>
					</div>
<div style={{height:"300px",width:"300px",transform:'translate(430%, -10%)'}}>
<Doughnut
        options={{
          legend: {
            display: true,
            position: "right"
          }
        }}
        data={expData}
        height={120}
      />
</div>


{/* <!-- 발생 빈도 start --> */}
					<div className="ratioSection graphSection">
						{/* <div className="closeBtn">
							<i className="fa fa-angle-left"></i>
						</div> */}
						<div className="sectionHeader">
							<div className="float-left">
								<i className="fa fa-table"></i>
								<h2 className="" style={{display: 'inline', fontSize: '15px'}}>킬체인
									단계별 위협 발생 빈도</h2>
							</div>

						</div>

						<div id="ratioScroll" style={{height: '100%', position: 'relative'}}>
							<div id="graphPane_circle" className="col-lg-12">
								<div id="graph_circle">
  <div className='header'>
      <div className='links' >

      </div>
    </div>
    <Line data={data} />
								</div>
								<script type="text/javascript">
									setDay(8);
								</script>
							</div>
						</div>


					</div>


					<div className="rankingSection graphSection" style={{transform: 'translate(0%, 150%)'}}>
						{/* <div className="closeBtn">
							<i className="fa fa-angle-right"></i>
						</div> */}
						<div className="sectionHeader">

							<div className="float-left">
								<i className="fa fa-line-chart"></i>
								<h2 style={{display: 'inline', fontSize: '15px'}}>위협 발생 순위</h2>
							</div>
					{/* 		<div className="float-right">
								<label className="box-radio-input"> <input type="radio"
									name="check2" value="tactic" checked="checked"
									onClick="rankingBtn('tactic');"> <span>전술</span>
								</label> <label class="box-radio-input"> <input type="radio"
									name="check2" value="action" onClick="rankingBtn('action');">
									<span>행동</span>
								</label> <label class="box-radio-input"> <input type="radio"
									name="check2" value="tecnique"
									onClick="rankingBtn('tecnique');"> <span>기술</span>
								</label>
							</div> */}
						</div>
						<div id="histogram_rankig" style={{width: '100%', height: '250px'}}>
							<script type="text/javascript">
								 call_ranking_histo(5,
											'#histogram_rankig',
											'#dropdown_rank', 'whole'
											,'tactic'
											 );
								</script>
								 <Bar data={genData} options={options} />
						</div>

					</div>




      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  chain : state.chain
});

const mapDispatchToProps = {
  addChain,
  updateChain,
  getChains,
  deleteChain,
  combineChainsDefault,
  combineChainsBayesian,
  addGraph,
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(dashBoard));
