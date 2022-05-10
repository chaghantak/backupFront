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
import NodeDialog from "./NodeDialog";
import NodeTitle from "./NodeTitle";
import EdgeDialog from "./EdgeDialog";
import EdgeTitle from "./EdgeTitle";
import {getChains, getChain, updateChain} from "../../redux/actions/ChainAction"
import {showInfo, showMsg} from "../../redux/actions/SnackBarAction"



const styles = theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
});

class AttackChainView extends Component{
  constructor(props){
    super(props);
    this.network = {};
    this.appRef = createRef();
    this.state = {
      openNodeDialog : false,
      openEdgeDialog : false,
      caller : "",
      nodeLabel : "",
      nodeType : "",
      nodeProps : "",
      nodeTechId: "",
      edgeLabel : "",
      edgeType : "",
      edgeProps : "",
      edgeGate: "",
    }
    this.options = {
      nodes: {
        color: "rgba(0, 0, 200, 0.7)",
        shape: "box"
      },
      edges: {
        color: "#000000",
        arrows : {
          to :  true
        }
      },
      layout:{
        hierarchical: {
          direction: "LR",
          sortMethod : "directed",
          shakeTowards : "roots"
        }
      },
      physics: {
        barnesHut : {

        }
      },
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
    this.setState({openNodeDialog : true, caller : "addNode", nodeType : "ATTACK"});
    this.data = data;
    this.callback = callback;
  }

  editNode = (data, callback) => {
    this.setState({openNodeDialog : true, caller : "editNode", nodeLabel : data.label, nodeType : data.type, nodeProps : data.props, nodeTechId : data.tech_id});
    this.data = data;
    this.callback = callback;
  }

  addEdge = (data, callback) => {
    this.setState({openEdgeDialog : true, caller : "addEdge", edgeGate : "OR"});
    this.data = data;
    this.callback = callback;
  }

  editEdge = (data, callback) => {
    var real_data = this.network.body.data.edges.get(data.id);
    this.setState({openEdgeDialog : true, caller : "editEdge", edgeLabel : real_data.label, edgeType : real_data.type, edgeProps : real_data.props, edgeProb : real_data.prob, edgeGate : real_data.gate});
    this.data = data;
    this.callback = callback;
  }

  deleteObject = async (data, callback) => {
    callback(data);
    await this.setState({"prevChain" : this.state.chain});
    await this.setState({ chain : {...this.state.chain, nodes : this.network.body.data.nodes.get(), edges : this.network.body.data.edges.get()}})
    this.props.updateChain(this.state.chain);
  }

  handleValueChange = (e) => {
    e.persist();
    this.setState({ [e.target.name]: e.target.value });
  }

  generateNodeTitleHTML = (node) => {
    let titleElement = document.createElement("div");
    ReactDOM.render(<NodeTitle node={node}/>, titleElement);
    return titleElement;
  }

  generateEdgeTitleHTML = (edge) => {
    let titleElement = document.createElement("div");
    ReactDOM.render(<EdgeTitle edge={edge}/>, titleElement);
    return titleElement;
  }

  handleNodeDialogClose = async (caller) => {
    if(caller=="confirm"){
      this.data.label = this.state.nodeLabel;
      this.data.type = this.state.nodeType;
      this.data.color = this.data.type == "ATTACK" ? "rgba(255, 0, 0, 0.7)" : "rgba(0, 255, 0, 0.7)";
      this.data.props = this.state.nodeProps;
      this.data.tech_id = this.state.nodeTechId;
      this.data.title = this.generateNodeTitleHTML(this.data);
      this.data.prior = 1.0;
      this.callback(this.data);
      await this.setState({"prevChain" : this.state.chain});
      await this.setState({ chain : {...this.state.chain, nodes : this.network.body.data.nodes.get()}})
      this.props.updateChain(this.state.chain);
    }
    this.setState({openNodeDialog:false, caller : ""});
    this.network.disableEditMode();
  }

  handleEdgeDialogClose = async (caller) => {
    if(caller=="confirm"){
      this.data.label = this.state.edgeLabel;
      this.data.type = this.state.edgeType;
      this.data.props = this.state.edgeProps;
      this.data.prob = this.state.edgeProb;
      this.data.gate = this.state.edgeGate;
      switch(this.data.gate){
        case "AND":
          this.data.dashes = false;
          break;
        case "OR":
          this.data.dashes = true;
          break;
        case "KN":
          this.data.dashes = true;
          break; 
      }
      this.data.title = this.generateEdgeTitleHTML(this.data);
      this.callback(this.data);
      await this.setState({"prevChain" : this.state.chain});
      await this.setState({ chain : {...this.state.chain, edges : this.network.body.data.edges.get()}})
      this.props.updateChain(this.state.chain);
    }
    this.setState({openEdgeDialog:false, caller : ""});
    this.network.disableEditMode();
  }

  copyAsJson = async () => {
    await this.props.getChain(this.props.match.params.id, false);
    if(!navigator.clipboard) {
      var textArea = document.createElement("textarea");
      textArea.value = JSON.stringify(this.props.chain.chain);

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
      navigator.clipboard.writeText(JSON.stringify(this.props.chain.chain)).then(() => {
        this.props.showMsg("Copying text command was " + msg, "success");
      }, () => {
        this.props.showMsg("Unable to copy", "error");
      })
    }
  }

  revertChain = async () => {
    await this.setState({"chain" : this.state.prevChain});
    this.network.body.data.nodes.clear();
    this.network.body.data.edges.clear();
    this.network.body.data.nodes.add(this.state.chain.nodes);
    this.network.body.data.edges.add(this.state.chain.edges);
    this.props.updateChain(this.state.chain);
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
      console.log(nodes);

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
      this.revertGraph();
    }
  }


  async componentDidMount() {
    await this.props.getChain(this.props.match.params.id, true);
    this.setState({"chain" : this.props.chain.chain});
    this.setState({"prevChain" : this.props.chain.chain});
    this.network = new Network(this.appRef.current, {nodes : this.state.chain.nodes, edges : this.state.chain.edges}, this.options);
    this.network.on("doubleClick", (data) => {
      if(data.nodes.length == 1){
        this.network.editNode();
      }
      else{
        this.network.editEdgeMode();
      }
    });
    this.makeMultiSelect(this.appRef.current, this.network);
  }

  render(){
    const { classes } = this.props;
    return (
      <div className="m-sm-30" >
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "AttackChain", path: "/attack-chain" },
              { name: this.props.chain.chain.title, path: "/attack-chain/"+this.props.chain.chain.id }
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
          <Button variant="contained" className={classes.button} onClick={() => {this.revertChain();}}>
            Revert
          </Button>
          <div style={{float : "right"}}>
            <Button variant="contained" className={classes.button} onClick={() => {this.copyAsJson();}}>
              Export to JSON
            </Button>
          </div>
        </Card>
        <Card>
          <NodeDialog open={this.state.openNodeDialog} caller={this.state.caller} nodeLabel={this.state.nodeLabel} nodeType={this.state.nodeType} nodeProps={this.state.nodeProps} nodeTechId={this.state.nodeTechId} handleValueChange={this.handleValueChange} closeHandler={this.handleNodeDialogClose}></NodeDialog>
        </Card>
        <Card>
          <EdgeDialog open={this.state.openEdgeDialog} caller={this.state.caller} edgeLabel={this.state.edgeLabel} edgeType={this.state.edgeType} edgeProps={this.state.edgeProps} edgeGate={this.state.edgeGate}  edgeProb={this.state.edgeProb} handleValueChange={this.handleValueChange} closeHandler={this.handleEdgeDialogClose}></EdgeDialog>
        </Card>
        <div className="py-1" />
        <Card className="px-6 pt-2 pb-4" onKeyDown={this.handleKeyDown}>
          <div ref={this.appRef} style={{"height" : 0.6 * window.screen.height}}></div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  chain : state.chain
});

const mapDispatchToProps = {
  getChains,
  getChain,
  updateChain,
  showInfo,
  showMsg,
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AttackChainView));
