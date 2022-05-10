import React, { Component } from "react";
import { withStyles, ThemeProvider } from "@material-ui/core/styles";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab"
import { connect } from "react-redux";
import {confirmMessage } from "../../redux/actions/SnackBarAction"

class SnackBarLayout extends Component {
  render(){
    return (
      <div>
        <Snackbar open={this.props.snackbar.open} autoHideDuration={2000} onClose={this.props.confirmMessage} anchorOrigin={{ vertical : "top", horizontal : "right" }}>
          <Alert severity={this.props.snackbar.severity}>
            {this.props.snackbar.msg}
          </Alert>
        </Snackbar>
      </div>
    );
  }
};


const mapStateToProps = (state) => ({
  snackbar : state.snackbar
});

const mapDispatchToProps = {
  confirmMessage,
}


export default withStyles({})(connect(mapStateToProps, mapDispatchToProps)(SnackBarLayout));