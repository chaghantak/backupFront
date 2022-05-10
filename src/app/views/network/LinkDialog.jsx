import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

export default function LinkDialog(props) {

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={() => {props.closeHandler("close")}}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Link Properties</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="linkLabel"
            id="label"
            label="Label"
            type="text"
            value={props.linkLabel}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
          <TextField
            margin="dense"
            name="linkType"
            id="type"
            label="Type"
            type="text"
            value={props.linkType}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
          <TextField
            margin="dense"
            name="linkProps"
            id="props"
            label="Props"
            type="text"
            value={props.linkProps}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
          <TextField
            margin="dense"
            name="linkDistance"
            id="distance"
            label="Distance"
            type="text"
            value={props.linkDistance}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {props.closeHandler("close")}} variant="outlined" color="secondary" onClick={props.closeHandler}>
            Cancel
          </Button>
          <Button onClick={() => {props.closeHandler("confirm")}} color="primary">
            {props.caller=="addLink" ? "Add" : "Edit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
