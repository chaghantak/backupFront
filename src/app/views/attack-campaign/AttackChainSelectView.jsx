// import { DataSet } from "vis-data/peer";
import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { Card, Checkbox } from "@material-ui/core";
import { withStyles } from '@material-ui/styles';
import ReactDOM from 'react-dom';
import CytoscapeComponent from 'react-cytoscapejs';
import cytoscape from 'cytoscape';
import cxtmenu from 'cytoscape-cxtmenu';

//import mongoose from "mongoose";

import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "@material-ui/core";
// import {DataGrid} from "@material-ui/lab"
import 'vis/dist/vis.css'
import { addChain, getChains, updateChain, deleteChain, combineChainsDefault, combineChainsBayesian } from "../../redux/actions/ChainAction"
import { addGraph } from "../../redux/actions/GraphAction"

cytoscape.use( cxtmenu );


const styles = theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
});
class AttackChainSelectView extends Component{
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
    this.props.getChains();
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

  handleGenerate = async () => {
    let chains = this.props.chain.chains.filter((el) => { return this.state.checked.indexOf(el.id) != -1 })
    // await this.props.combineChainsDefault(chains);
    await this.props.combineChainsBayesian(chains);
    console.log(this.props.chain.combined);
    await this.props.addGraph(this.props.chain.combined);
  }

  render(){
    const { classes } = this.props;
     const elements = [
       { data: { id: '1', label: 'Node 1' }, position: { x: 100, y: 100 } },
       { data: { id: '2', label: 'Node 2' }, position: { x: 100, y: 200 } },
       { data: { id: '3', label: 'Node 3' }, position: { x: 100, y: 50 } },
       { data: { id: '4', label: 'Node 4' }, position: { x: 150, y: 100 } },
       { data: { id: '5', label: 'Node 5' }, position: { x: 200, y: 300 } },
       { data: { source: '1', target: '2', label: 'Edge from Node1 to Node2' } },
       { data: { source: '1', target: '4', label: 'Edge from Node1 to Node4' } },
       { data: { source: '4', target: '3', label: 'Edge from Node1 to Node3' } },
       { data: { source: '5', target: '2', label: 'Edge from Node1 to Node2' } },
    ];
    return (
      <div className="m-sm-30">
        <div>
          <Button variant="contained" color="primary" className={classes.button} onClick={this.handleGenerate}>
            Generate Graph
          </Button>
        </div>
        <div className="w-full overflow-auto">
          <Table className="whitespace-pre">
            <TableHead>
              <TableRow>
                <TableCell className="px-0">Check</TableCell>
                <TableCell className="px-0">Title</TableCell>
                <TableCell className="px-0">Label</TableCell>
                <TableCell className="px-0">Content</TableCell>
                <TableCell className="px-0">Type</TableCell>
                <TableCell className="px-0">Props</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.chain.chains
                .slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                .map((chain, index) => (
                  <TableRow key={index}>
                    <TableCell className="px-0">
                    <Checkbox
                      checked={this.state.checked.indexOf(chain.id)==-1 ? false : true}
                      onChange={() => { this.handleCheck(chain.id) }}
                      color="primary"
                      inputProps={{
                        "aria-label": "primary checkbox"
                      }}
                    />
                    </TableCell>
                    <TableCell className="px-0 capitalize" align="left">
                      {chain.title}
                    </TableCell>
                    <TableCell className="px-0 capitalize" align="left">
                      {chain.label}
                    </TableCell>
                    <TableCell className="px-0 capitalize" align="left" overflow="auto">
                      <div style={{overflow : "auto", height : "60px"}}>
                        {chain.content}
                      </div>
                    </TableCell>
                    <TableCell className="px-0 capitalize">
                      {chain.type}
                    </TableCell>
                    <TableCell className="px-0 capitalize">
                      {chain.props}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>

          <TablePagination
            className="px-4"
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={this.props.chain.chains.length}
            rowsPerPage={this.state.rowsPerPage}
            page={this.state.page}
            backIconButtonProps={{
              "aria-label": "Previous Page"
            }}
            nextIconButtonProps={{
              "aria-label": "Next Page"
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
            <div>
        <CytoscapeComponent elements={elements}  style={{ width: 1500, height: 600 }}
        stylesheet={[
          {
            selector: "node",
            style: {
              label: "data(label)",
              width: 100,
              height: 50,
            }
          },
          {
            selector: "edge",
            style: {
              label: "data(label)",
              width: 2
            }
          }
        ]}
      />
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AttackChainSelectView));
