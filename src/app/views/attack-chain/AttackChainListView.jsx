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
import ChainDialog from "./ChainDialog";
import ChainJsonDialog from "./ChainJsonDialog";
import {addChain, getChains, updateChain, deleteChain} from "../../redux/actions/ChainAction"
import { v4 as uuidv4 } from 'uuid';


import Graph from "./GraphAddView";

import style from './style.css'

const styles = theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
});

class AttackChainListView extends Component{
 constructor(props){
    super(props);
    this.state = {
      chains : [],
      chain : {},
      openChainDialog : false,
      openChainJsonDialog : false,
      caller : "",
      chainId : "",
      chainTitle : "",
      chainLabel : "",
      chainContent : "",
      chainType : "",
      chainProps : "",
      chainJson : ""
    }
  }
componentDidMount(){
    fetch("chains")
        .then(response => {
            if(response.status !== 200) {
                return this.setState({placeholder: "Server Error"});
            }
            return response.json();
            })
        .then(data => this.setState({data: data, loaded: true}));
}
  handleValueChange = (e) => {
    e.persist();
    this.setState({ [e.target.name]: e.target.value });
  }

 handleChainDialogClose = (btn) => {
    if(btn=="confirm"){
      this.state.chain.id = this.state.chainId;
      this.state.chain.title = this.state.chainTitle;
      this.state.chain.label = this.state.chainLabel;
      this.state.chain.content = this.state.chainContent;
      this.state.chain.type = this.state.chainType;
      this.state.chain.props = this.state.chainProps;
      if(this.state.caller=="addChain"){
        this.state.chain.nodes = [];
        this.state.chain.edges = [];
        this.props.addChain(this.state.chain);
      }else{
        this.state.chain.nodes = this.props.chain.chains.filter((el) => {return el.id == this.state.chain.id})[0].nodes
        this.state.chain.edges = this.props.chain.chains.filter((el) => {return el.id == this.state.chain.id})[0].edges
        this.props.updateChain(this.state.chain);
      }
    }
    this.setState({openChainDialog:false, caller : ""});
  }

  handleChainJsonDialogClose = (btn) => {
    if(btn=="confirm"){
      this.state.chain = JSON.parse(this.state.chainJson);
      this.props.addChain(this.state.chain);
    }
    this.setState({openChainJsonDialog:false});
  }

  deleteChain = (id) => {
    this.props.deleteChain(id);
  }

  componentDidMount() {
    this.props.getChains();
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
          "group": "pc",
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
          "group": "pc",
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
          "group": "pc",
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
          "group": "hub",
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
          "group": "firewall",
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
          "group": "server",
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
          "group": "server",
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
    const label = graph.links;

    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "AttackChain", path: "/attack-chain" },
            ]}
          />
        </div>
        <div>
          <Button variant="contained" color="primary" className={classes.button} onClick={() => { this.setState({openChainDialog : true, caller : "addChain", chainId : uuidv4()}); }}>
            Add Chain
          </Button>
          <Button variant="contained" color="primary" className={classes.button} onClick={() => { this.setState({openChainJsonDialog : true, chainId : uuidv4()}); }}>
            Add Chain with JSON
          </Button>
        </div>
        <div className="py-1" />

        {this.props.chain.chains.map((el, idx) => {
          return (<div>
            <Card className="px-6 py-6 pt-3 pb-3" key={el.id}>
              <div key={el.id}>
                <div style={{float : "left"}}>
                  <Button color="primary" className={classes.button} href={"/attack-chain/"+el.id}>
                    {el.title}
                  </Button>
                </div>
{/*                 <div style={{float : "right"}}> */}
{/*                   <Button variant="contained" color="primary" className={classes.button} onClick={() => { this.setState({openChainDialog : true, caller : "editChain", chainId : el.id, chainTitle : el.title, chainLabel : el.label, chainContent : el.content, chainType : el.type, chainProps : el.props}); }}> */}
{/*                     Edit */}
{/*                   </Button> */}
{/*                   <Button variant="contained" color="Secondary" className={classes.button} onClick={() => { console.log(el.id); this.props.deleteChain(el.id) }}> */}
{/*                     Delete */}
{/*                   </Button> */}
{/*                 </div> */}
              </div>
            </Card>
            <div className="py-1" />
          </div>);
        })}
        <div>
           <Graph signalData={graph} className="Appnode" />


        </div>

       <Card>
          <ChainDialog open={this.state.openChainDialog} caller={this.state.caller} chainTitle={this.state.chainTitle} chainLabel={this.state.chainLabel} chainContent={this.state.chainContent} chainType={this.state.chainType} chainProps={this.state.chainProps} handleValueChange={this.handleValueChange} closeHandler={this.state.handleChainDialogClose}></ChainDialog>
          <ChainJsonDialog open={this.state.openChainJsonDialog} chainJson={this.state.chainJson} handleValueChange={this.handleValueChange} closeHandler={this.handleChainJsonDialogClose}></ChainJsonDialog>
        </Card>

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
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AttackChainListView));
