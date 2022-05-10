// import { DataSet } from "vis-data/peer";
import { Network } from "vis-network";
import React, { Component, createRef } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Breadcrumb } from "matx";
import { Card } from "@material-ui/core";
import { withStyles } from '@material-ui/styles';
import { FormLabel, Icon, Button, IconButton, Fab } from "@material-ui/core";
import 'vis/dist/vis.css'
import GraphDialog from "./GraphDialog";
import GraphJsonDialog from "./GraphJsonDialog";
import {addGraph, getGraphs, updateGraph, deleteGraph} from "../../redux/actions/GraphAction"
import { v4 as uuidv4 } from 'uuid';

import Graph from "./GraphAddView";
import style from './style.css'


import axios from 'axios';


const styles = theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
});
class AttackGraphListView extends Component{
  constructor(props){
    super(props);
    this.state = {
      graphs : [],
      graph : {},
      openGraphDialog : false,
      openGraphJsonDialog : false,
      caller : "",
      graphId : "",
      graphTitle : "",
      graphLabel : "",
      graphContent : "",
      graphType : "",
      graphProps : "",
      graphJson : ""
    }
  }

  handleValueChange = (e) => {
    e.persist();
    this.setState({ [e.target.name]: e.target.value });
  }

  handleGraphDialogClose = (btn) => {
    if(btn=="confirm"){
      this.state.graph.id = this.state.graphId;
      this.state.graph.title = this.state.graphTitle;
      this.state.graph.label = this.state.graphLabel;
      this.state.graph.content = this.state.graphContent;  
      this.state.graph.type = this.state.graphType;
      this.state.graph.props = this.state.graphProps;
      if(this.state.caller=="addGraph"){
        this.state.graph.nodes = [];
        this.state.graph.edges = [];
        this.props.addGraph(this.state.graph);
      }else{
        this.state.graph.nodes = this.props.graph.graphs.filter((el) => {return el.id == this.state.graph.id})[0].nodes
        this.state.graph.edges = this.props.graph.graphs.filter((el) => {return el.id == this.state.graph.id})[0].edges
        this.props.updateGraph(this.state.graph);
      }
    }
    this.setState({openGraphDialog:false, caller : ""});
  }

  handleGraphJsonDialogClose = (btn) => {
    if(btn=="confirm"){
      this.state.graph = JSON.parse(this.state.graphJson);
      this.props.addGraph(this.state.graph);
    }
    this.setState({openGraphJsonDialog:false});
  }

  deleteGraph = (id) => {
    this.props.deleteGraph(id);
  }

  componentDidMount() {
    this.props.getGraphs();
  }

  render(){
    const graph = {
      nodes: [
        {
            "CNAMTime": 1623212272390,
            "DetectionConfidence": "High",
            "DetectionName": "title",
            "DetectionScore": 5,
            "DetectionSeverity": "Medium",
            "DetectionTactic": "content",
            "DetectionTechnique": "content2",
            "Occurrences": 2,
            "current_case": false,
            "group": "signal",
            "id": "node01",
            "__indexColor": "#ec0001",
            "img": {},
            "index": 0
        },
        {
            "CNAMTime": 1622799103136,
            "DetectionConfidence": "High",
            "DetectionName": "title",
            "DetectionScore": 5,
            "DetectionSeverity": null,
            "DetectionTactic": "content",
            "DetectionTechnique": "content2",
            "Occurrences": 2985,
            "current_case": false,
            "group": "signal",
            "id": "node02",
            "__indexColor": "#d80002",
            "img": {},
            "index": 1
        },
        {
            "CNAMTime": 1622638815243,
            "DetectionConfidence": "High",
            "DetectionName": "title",
            "DetectionScore": 5,
            "DetectionSeverity": "Medium",
            "DetectionTactic": "content",
            "DetectionTechnique": "content2",
            "Occurrences": 2,
            "current_case": false,
            "group": "signal",
            "id": "node03",
            "__indexColor": "#c40003",
            "img": {},
            "index": 2
        },
        {
            "CNAMTime": 1622643053494,
            "DetectionConfidence": "High",
            "DetectionName": "title",
            "DetectionScore": 5,
            "DetectionSeverity": "Medium",
            "DetectionTactic": "content",
            "DetectionTechnique": "content2",
            "Occurrences": 8,
            "current_case": false,
            "group": "signal",
            "id": "node04",
            "__indexColor": "#b00004",
            "img": {},
            "index": 3
        },
        {
            "CNAMTime": 1622731840255,
            "DetectionConfidence": "High",
            "DetectionName": "title",
            "DetectionScore": 5,
            "DetectionSeverity": "Medium",
            "DetectionTactic": "content",
            "DetectionTechnique": "content2",
            "Occurrences": 5,
            "current_case": false,
            "group": "signal",
            "id": "node05",
            "__indexColor": "#9c0005",
            "img": {},
            "index": 4
        },
        {
            "CNAMTime": 1622733926236,
            "DetectionConfidence": "High",
            "DetectionName": "title",
            "DetectionScore": 5,
            "DetectionSeverity": "Medium",
            "DetectionTactic": "content",
            "DetectionTechnique": "content2",
            "Occurrences": 1,
            "current_case": false,
            "group": "signal",
            "id": "node06",
            "__indexColor": "#880006",
            "img": {},
            "index": 5
        },
        {
            "CNAMTime": 1622694788179,
            "DetectionConfidence": "High",
            "DetectionName": "title",
            "DetectionScore": 5,
            "DetectionSeverity": "Medium",
            "DetectionTactic": "content",
            "DetectionTechnique": "content2",
            "Occurrences": 3,
            "current_case": false,
            "group": "signal",
            "id": "node07",
            "__indexColor": "#740007",
            "img": {},
            "index": 6
        }
    ],
      links: [
        {
            "cnam_time": 1622616429663,
            "graph_id": "node01",
            "relation": "suspecthost",
            "scope_id": "default",
            "source": "node01",
            "current_case": false,
            "target": "node02"
        },
        {
            "cnam_time": 1622629255230,
            "graph_id": "node01",
            "relation": "targethost",
            "scope_id": "default",
            "source": "node01",
            "target": "node03",
            "current_case": false,
        },
        {
            "cnam_time": 1622629255230,
            "graph_id": "node03",
            "relation": "suspecthost",
            "scope_id": "default",
            "source": "node03",
            "target": "node05",
            "current_case": false,
        },
        {
            "cnam_time": 1622630217989,
            "graph_id": "node04",
            "relation": "targetuser",
            "scope_id": "default",
            "source": "node04",
            "target": "node05",
            "current_case": false,
        },
        {
            "cnam_time": 1622693136904,
            "graph_id": "node03",
            "relation": "targetuser",
            "scope_id": "default",
            "source": "node03",
            "target": "node04",
            "current_case": false,
        },
        {
            "cnam_time": 1622616429663,
            "graph_id": "node05",
            "relation": "targethost",
            "scope_id": "default",
            "source": "node05",
            "target": "node06",
            "current_case": true,
        },
        {
            "cnam_time": 1622726297713,
            "graph_id": "node06",
            "relation": "targetuser",
            "scope_id": "default",
            "source": "node06",
            "target": "node07",
            "current_case": false,
        },
        {
            "cnam_time": 1622726297713,
            "graph_id": "node02",
            "relation": "targetuser",
            "scope_id": "default",
            "source": "node02",
            "target": "node06",
            "current_case": false,
        }
  
  
    ]
    };

    const { classes } = this.props;
    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "AttackGraph", path: "/attack-graph" },
            ]}
          />
        </div>
<div>
<button className="btn btn-primary" onClick={()=>{

fetch('http://localhost:8000/api/attack-groups/')
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.error('Error', error));

}}>더보기</button>

</div>
        <div>
          <Button variant="contained" color="primary" className={classes.button} onClick={() => { this.setState({openGraphDialog : true, caller : "addGraph", graphId : uuidv4()}); }}>
            Add Graph
          </Button>
          <Button variant="contained" color="primary" className={classes.button} onClick={() => { this.setState({openGraphJsonDialog : true, graphId : uuidv4()}); }}>
            Add Graph with JSON
          </Button>
          <div>
           <Graph signalData={graph} className="Appnode" />
        </div>
        </div>
        <Card>
          <GraphDialog open={this.state.openGraphDialog} caller={this.state.caller} graphTitle={this.state.graphTitle} graphLabel={this.state.graphLabel} graphContent={this.state.graphContent} graphType={this.state.graphType} graphProps={this.state.graphProps} handleValueChange={this.handleValueChange} closeHandler={this.handleGraphDialogClose}></GraphDialog>
          <GraphJsonDialog open={this.state.openGraphJsonDialog} graphJson={this.state.graphJson} handleValueChange={this.handleValueChange} closeHandler={this.handleGraphJsonDialogClose}></GraphJsonDialog>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  graph : state.graph
});

const mapDispatchToProps = {
  addGraph,
  updateGraph,
  getGraphs,
  deleteGraph,
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AttackGraphListView));
