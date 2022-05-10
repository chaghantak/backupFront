// import { DataSet } from "vis-data/peer";
import { Network } from "vis-network";
import React, { Component, createRef } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Breadcrumb } from "matx";
import { Card } from "@material-ui/core";
import { withStyles } from '@material-ui/styles';
import { Button, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import 'vis/dist/vis.css'
import HostDialog from "./HostDialog";
import HostTitle from "./HostTitle";
import LinkDialog from "./LinkDialog";
import LinkTitle from "./LinkTitle";
import {getNetworks, getNetwork, updateNetwork} from "../../redux/actions/NetworkAction"
import {showInfo, showMsg} from "../../redux/actions/SnackBarAction"

const styles = theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
});

class NetworkView extends Component{
  constructor(props){
    super(props);
    this.network = {};
    this.appRef = createRef();
    this.state = {
      openHostDialog : false,
      openLinkDialog : false,
      caller : "",
      hostId : "",
      hostName : "",
      hostIP : "",
      hostMAC : "",
      hostType : "",
      hostImportanceOverall : "",
      hostImportanceC : "",
      hostImportanceI : "",
      hostImportanceA : "",
      hostProps : "",
      linkLabel : "",
      linkType : "",
      linkProps : "",
      linkDistance : "",
    }
    this.options = {
      nodes:{
        shape: "image"
      },
      edges: {
        color: "#000000",
        // arrows : {
        //   to :  true
        // }
      },
      layout:{
        randomSeed : 1000
        // hierarchical: {
        //   direction: "UD",
        //   sortMethod : "hubsize",
        //   shakeTowards : ";ea"
        // }
      },
      // physics: {
      //   barnesHut : {

      //   }
      // },
      // height: "1000px",
      interaction: {
        selectConnectedEdges : true,
        multiselect : true
      },
      manipulation: {
        enabled: false,
        initiallyActive: false,
        addNode: this.addNode,
        addEdge: this.addEdge,
        editNode: this.editNode,
        editEdge: this.editEdge,
        deleteNode: this.deleteObject,
        deleteEdge: this.deleteObject,
      }
    };
  }

  addNode = (data, callback) => {
    this.setState({openHostDialog : true, caller : "addHost", hostId : data.id});
    this.data = data;
    this.callback = callback;
  }

  editNode = (data, callback) => {
    this.setState({openHostDialog : true, caller : "editHost", hostId : data.id, hostName : data.name, hostIP : data.ip, hostMAC : data.mac, hostType : data.type, hostImportanceOverall : data.importance.overall, hostImportanceC : data.importance.confidentiality, hostImportanceI : data.importance.integrity, hostImportanceA : data.importance.availability, hostProps : data.props});
    console.log(data);
    this.data = data;
    this.callback = callback;
  }

  addEdge = (data, callback) => {
    this.setState({openLinkDialog : true, caller : "addLink"});
    this.data = data;
    this.callback = callback;
  }

  editEdge = (data, callback) => {
    var real_data = this.network.body.data.edges.get(data.id);
    this.setState({openLinkDialog : true, caller : "editLink", linkLabel : real_data.label, linkType : real_data.type, linkProps : real_data.props, linkDistance : real_data.distance});
    console.log(data);
    this.data = data;
    this.callback = callback;
  }

  deleteObject = async (data, callback) => {
    callback(data);
    await this.setState({"prevNetwork" : this.state.network});
    await this.setState({ network : {...this.state.network, hosts : this.network.body.data.nodes.get(), links : this.network.body.data.edges.get()}})
    this.props.updateNetwork(this.state.network);
  }

  handleValueChange = (e) => {
    e.persist();
    this.setState({ [e.target.name]: e.target.value });
  }

  generateHostTitleHTML = (host) => {
    let titleElement = document.createElement("div");
    ReactDOM.render(<HostTitle host={host}/>, titleElement);
    return titleElement;
  }

  generateLinkTitleHTML = (link) => {
    let titleElement = document.createElement("div");
    ReactDOM.render(<LinkTitle link={link}/>, titleElement);
    return titleElement;
  }

  handleHostDialogClose = async (caller) => {
    if(caller=="confirm"){
      this.data.id = this.state.hostId;
      this.data.name = this.state.hostName;
      this.data.ip = this.state.hostIP;
      this.data.mac = this.state.hostMAC;
      this.data.props = this.state.hostProps;

      this.data.type = this.state.hostType;
      this.data.importance = {
        id : this.data.id,
        overall : this.state.hostImportanceOverall,
        confidentiality : this.state.hostImportanceC,
        integrity : this.state.hostImportanceI,
        availability : this.state.hostImportanceA
      }
      this.data.security = {
        id : this.data.id,
        mitigations : []
      }
      this.data.os = {
        id : this.data.id,
        name : "",
        codename : "",
        family : "",
        kernel : "",
        platform : "",
        version : ""
      }
      

      this.data.image = "/assets/images/network/" + this.data.type + ".png";
      this.data.label = this.data.type + "\n" + this.data.name;
      this.data.title = this.generateHostTitleHTML(this.data);

      this.callback(this.data);
      await this.setState({"prevNetwork" : this.state.network});
      await this.setState({ network : {...this.state.network, hosts : this.network.body.data.nodes.get()}})
      this.props.updateNetwork(this.state.network);
    }
    debugger;
    this.setState({openHostDialog:false, caller : ""});
    this.network.disableEditMode();
  }

  handleLinkDialogClose = async (caller) => {
    if(caller=="confirm"){
      this.data.label = this.state.linkLabel;
      this.data.type = this.state.linkType;
      this.data.props = this.state.linkProps;
      this.data.distance = this.state.linkDistance;
      this.data.title = this.generateLinkTitleHTML(this.data);
      this.callback(this.data);
      await this.setState({"prevNetwork" : this.state.network});
      await this.setState({ network : {...this.state.network, links : this.network.body.data.edges.get()}})
      this.props.updateNetwork(this.state.network);
    }
    this.setState({openLinkDialog:false, caller : ""});
    this.network.disableEditMode();
  }

  copyAsJson = async () => {
    await this.props.getNetwork(this.props.match.params.id, false);
    if(!navigator.clipboard) {
      var textArea = document.createElement("textarea");
      textArea.value = JSON.stringify(this.props.network.network);

      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";

      document.body.appendChild(textArea);
      textArea.focus()
      textArea.select();

      try {
        var successful = document.execCommand('copy');
        var msg = successful ? "successful" : "unsuccessful";
        this.props.showMsg("Copying text command was " + msg, "success");
      } catch(err){
        this.props.showMsg("Unable to copy", "error");
      }

      document.body.removeChild(textArea);
    }
    else{
      navigator.clipboard.writeText(JSON.stringify(this.props.network.network)).then(() => {
        this.props.showMsg("Copying text command was " + msg, "success");
      }, () => {
        this.props.showMsg("Unable to copy", "error");
      })
    }
  }

  revertNetwork = async () => {
    await this.setState({"network" : this.state.prevNetwork});
    this.network.body.data.nodes.clear();
    this.network.body.data.edges.clear();
    this.network.body.data.nodes.add(this.state.network.hosts);
    this.network.body.data.edges.add(this.state.network.links);
    this.props.updateNetwork(this.state.network);
  }

  makeMultiSelect = (container, network) => {
    const NO_CLICK = 0;
    const RIGHT_CLICK = 3;

    console.log(container)
    container.oncontextmenu = () => false;

    let drag = false, DOMRect = {};

    let top = 0, left = 0, element = container;

    do {
      top += element.offsetTop || 0;
      left += element.offsetLeft || 0;
      element = element.offsetParent;
    } while(element);
    
    const canvasify = (DOMx, DOMy) => {
      const {x, y} = network.DOMtoCanvas({x : DOMx, y : DOMy});
      return [x, y];
    }

    const correctRange = (start, end) => start < end ? [start, end] : [end, start];

    const selectFromDOMRect = () => {
      const [sX, sY] = canvasify(DOMRect.startX, DOMRect.startY);
      const [eX, eY] = canvasify(DOMRect.endX, DOMRect.endY);
      const [startX, endX] = correctRange(sX, eX);
      const [startY, endY] = correctRange(sY, eY);

      let nodes = network.body.data.nodes.get();

      network.selectNodes(nodes.reduce(
        (selected, {id}) => {
          const {x, y} = network.getPositions(id)[id];
          return (startX <= x && x <= endX && startY <= y && y<= endY) ? selected.concat(id) : selected;
        }, []
      ));
    }

    container.addEventListener("mousedown", function({which, pageX, pageY}){
      if(which === RIGHT_CLICK) {
        console.log(this.offsetLeft);
        Object.assign(DOMRect, {
          startX : pageX - left,
          startY : pageY - top,
          endX : pageX - left,
          endY : pageY - top,
          // startX : pageX - this.offsetLeft,
          // startY : pageY - this.offsetTop,
          // endX : pageX - this.offsetLeft,
          // endY : pageY - this.offsetTop
        });
        drag = true;
      }
    })

    container.addEventListener("mousemove", function({which, pageX, pageY}){
      if(which === NO_CLICK && drag) {
        drag = false;
        network.redraw();
      }
      else if(drag){
        Object.assign(DOMRect, {
          endX: pageX - left,
          endY: pageY - top,
        });
        network.redraw();
      }
    });

    container.addEventListener("mouseup", function({which}) {
      if(which === RIGHT_CLICK){
        drag = false;
        network.redraw();
        selectFromDOMRect();
      }
    });

    network.on("afterDrawing", (ctx) => {
      if(drag){
        const [startX, startY] = canvasify(DOMRect.startX, DOMRect.startY);
        const [endX, endY] = canvasify(DOMRect.endX, DOMRect.endY);

        ctx.setLineDash([5]);
        ctx.strokeStyle = 'rgba(78, 146, 237, 0.75)';
        ctx.strokeRect(startX, startY, endX - startX, endY - startY);
        ctx.setLineDash([]);
        ctx.fillStyle = 'rgba(151, 194, 252, 0.45)';
        ctx.fillRect(startX, startY, endX - startX, endY - startY);
      }
    });
  }

  handleKeyDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if(e.key == 'n'){
      this.props.showInfo("AddNode mode is enabled. Click anywhere you want to add.");
      this.network.addNodeMode();
    }else if(e.key == 'e'){
      this.props.showInfo("AddEdge mode is enabled. Drag between two nodes.");
      this.network.addEdgeMode();
    }else if(e.key == 'd'){
      this.network.deleteSelected();
    }else if(e.key == 'z'){
      this.revertNetwork();
    }
  }


  async componentDidMount() {
    await this.props.getNetwork(this.props.match.params.id, true);
    this.setState({"network" : this.props.network.network});
    this.setState({"prevNetwork" : this.props.network.network});
    debugger;
    this.network = new Network(this.appRef.current, {nodes : this.state.network.hosts, edges : this.state.network.links}, this.options);
    this.network.on("doubleClick", (data) => {
      if(data.nodes.length == 1){
        this.network.editNode();
      }
      else{
        this.network.editEdgeMode();
      }
    });
    this.makeMultiSelect(this.appRef.current, this.network)
  }

  render(){
    const { classes } = this.props;
    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Network", path: "/network" },
              { name: this.props.network.network.title, path: "/network/"+this.props.network.network.id }
            ]}
          />
        </div>
        <Card className="px-6 pt-2 pb-4" >
          <Button variant="contained" color="primary" className={classes.button} onClick={() => {this.props.showInfo("AddNode mode is enabled. Click anywhere you want to add."); this.network.addNodeMode();}}>
            Add Node
          </Button>
          <Button variant="contained" color="primary" className={classes.button} onClick={() => {this.props.showInfo("EditNode mode is enabled. Select any node you want to modify and click this button."); this.network.editNode();}}>
            Edit Node
          </Button>
          <Button variant="contained" color="primary" className={classes.button} onClick={() => {this.props.showInfo("AddEdge mode is enabled. Drag between two nodes."); this.network.addEdgeMode();}}>
            Add Edge
          </Button>
          <Button variant="contained" color="primary" className={classes.button} onClick={() => {this.props.showInfo("EditEdge mode is enabled. Select any edge you want to modify and click this button."); this.network.editEdgeMode();}}>
            Edit Edge
          </Button>
          <Button variant="contained" color="secondary" className={classes.button} onClick={() => {this.network.deleteSelected();}}>
            Remove selected
          </Button>
          <Button variant="contained" className={classes.button} onClick={() => {this.revertNetwork();}}>
            Revert
          </Button>
          <div style={{float : "right"}}>
            <Button variant="contained" className={classes.button} onClick={() => {this.copyAsJson();}}>
              Export to JSON
            </Button>
          </div>
        </Card>
        <Card>
          <HostDialog open={this.state.openHostDialog} caller={this.state.caller} hostId={this.state.hostId} hostName={this.state.hostName} hostIP={this.state.hostIP} hostMAC={this.state.hostMAC} hostType={this.state.hostType} hostImportanceOverall={this.state.hostImportanceOverall} hostImportanceC={this.state.hostImportanceC} hostImportanceI={this.state.hostImportanceI} hostImportanceA={this.state.hostImportanceA} hostProps={this.state.hostProps} handleValueChange={this.handleValueChange} closeHandler={this.handleHostDialogClose}></HostDialog>
        </Card>
        <Card>
          <LinkDialog open={this.state.openLinkDialog} caller={this.state.caller} linkLabel={this.state.linkLabel} linkType={this.state.linkType} linkProps={this.state.linkProps} linkDistance={this.state.linkDistance} handleValueChange={this.handleValueChange} closeHandler={this.handleLinkDialogClose}></LinkDialog>
        </Card>
        <div className="py-1" />
        <Card className="px-6 pt-2 pb-4" onKeyDown={this.handleKeyDown}>
          <div id="network" ref={this.appRef} style={{"height" : 0.6 * window.screen.height}}></div>
        </Card>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  network : state.network
});

const mapDispatchToProps = {
  getNetworks,
  getNetwork,
  updateNetwork,
  showInfo,
  showMsg
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(NetworkView));
