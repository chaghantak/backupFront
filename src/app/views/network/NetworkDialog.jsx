import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

export default function NetworkDialog(props) {

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={() => {props.closeHandler("close")}}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Network Properties</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="networkTitle"
            id="title"
            label="Title"
            type="text"
            value={props.networkTitle}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
          <TextField
            margin="dense"
            name="networkLabel"
            id="label"
            label="Label"
            type="text"
            value={props.networkLabel}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
          <TextField
            margin="dense"
            name="networkContent"
            id="content"
            label="Content"
            type="text"
            value={props.networkContent}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
          <TextField
            margin="dense"
            name="networkType"
            id="type"
            label="Type"
            type="text"
            value={props.networkType}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
          <TextField
            margin="dense"
            name="networkProps"
            id="props"
            label="Props"
            type="text"
            value={props.networkProps}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {props.closeHandler("close")}} variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button onClick={() => {props.closeHandler("confirm")}} color="primary">
            {props.caller=="addNetwork" ? "Add" : "Edit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
