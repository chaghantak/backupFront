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
import NetworkDialog from "./NetworkDialog";
import NetworkJsonDialog from "./NetworkJsonDialog";
import {addNetwork, getNetworks, updateNetwork, deleteNetwork} from "../../redux/actions/NetworkAction"
import { v4 as uuidv4 } from 'uuid';

const styles = theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
});

class NetworkListView extends Component{
  constructor(props){
    super(props);
    this.state = {
      networks : [],
      network : {},
      openNetworkDialog : false,
      openNetworkJsonDialog : false,
      caller : "",
      networkId : "",
      networkTitle : "",
      networkLabel : "",
      networkContent : "",
      networkType : "",
      networkProps : "",
      networkJson : ""
    }
  }

  handleValueChange = (e) => {
    e.persist();
    this.setState({ [e.target.name]: e.target.value });
  }

  handleNetworkDialogClose = (btn) => {
    if(btn=="confirm"){
      this.state.network.id = this.state.networkId;
      this.state.network.title = this.state.networkTitle;
      this.state.network.label = this.state.networkLabel;
      this.state.network.content = this.state.networkContent;  
      this.state.network.type = this.state.networkType;
      this.state.network.props = this.state.networkProps;
      if(this.state.caller=="addNetwork"){
        this.state.network.hosts = [];
        this.state.network.links = [];
        this.props.addNetwork(this.state.network);
      }else{
        this.state.network.hosts = this.props.network.networks.filter((el) => {return el.id == this.state.network.id})[0].hosts
        this.state.network.links = this.props.network.networks.filter((el) => {return el.id == this.state.network.id})[0].links
        this.props.updateNetwork(this.state.network);
      }
    }
    this.setState({openNetworkDialog:false, caller : ""});
  }

  handleNetworkJsonDialogClose = (btn) => {
    if(btn=="confirm"){
      this.state.network = JSON.parse(this.state.networkJson);
      this.props.addNetwork(this.state.network);
    }
    this.setState({openNetworkJsonDialog:false});
  }

  deleteNetwork = (id) => {
    this.props.deleteNetwork(id);
  }

  componentDidMount() {
    this.props.getNetworks();
  }

  render(){
    const { classes } = this.props;
    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Network", path: "/network" },
            ]}
          />
        </div>
        <div>
          <Button variant="contained" color="primary" className={classes.button} onClick={() => { this.setState({openNetworkDialog : true, caller : "addNetwork", networkId : uuidv4()}); }}>
            Add Network
          </Button>
          <Button variant="contained" color="primary" className={classes.button} onClick={() => { this.setState({openNetworkJsonDialog : true, networkId : uuidv4()}); }}>
            Add Network with JSON
          </Button>
        </div>
        <div className="py-1" />
        {this.props.network.networks.map((el, idx) => {
          return (<div>
            <Card className="px-6 py-6 pt-3 pb-3" key={el.id}>
              <div key={el.id}>
                <div style={{float : "left"}}>
                  <Button color="primary" className={classes.button} href={"/network/"+el.id}>
                    {el.title}
                  </Button>
                </div>
                <div style={{float : "right"}}>
                  <Button variant="contained" color="primary" className={classes.button} onClick={() => { this.setState({openNetworkDialog : true, caller : "editNetwork", networkId : el.id, networkTitle : el.title, networkLabel : el.label, networkContent : el.content, networkType : el.type, networkProps : el.props}); }}>
                    Edit
                  </Button>
                  <Button variant="contained" color="Secondary" className={classes.button} onClick={() => { console.log(el.id); this.props.deleteNetwork(el.id) }}>
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
            <div className="py-1" />
          </div>);
        })}
        <Card>
          <NetworkDialog open={this.state.openNetworkDialog} caller={this.state.caller} networkTitle={this.state.networkTitle} networkLabel={this.state.networkLabel} networkContent={this.state.networkContent} networkType={this.state.networkType} networkProps={this.state.networkProps} handleValueChange={this.handleValueChange} closeHandler={this.handleNetworkDialogClose}></NetworkDialog>
          <NetworkJsonDialog open={this.state.openNetworkJsonDialog} networkJson={this.state.networkJson} handleValueChange={this.handleValueChange} closeHandler={this.handleNetworkJsonDialogClose}></NetworkJsonDialog>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  network : state.network
});

const mapDispatchToProps = {
  addNetwork,
  updateNetwork,
  getNetworks,
  deleteNetwork,
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(NetworkListView));
