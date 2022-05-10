import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Icon,
  Grid,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";

export default function ChainDialog(props) {

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={() => {props.closeHandler("close")}}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Chain Properties</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="chainTitle"
            id="title"
            label="Title"
            type="text"
            value={props.chainTitle}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
          <TextField
            margin="dense"
            name="chainLabel"
            id="label"
            label="Label"
            type="text"
            value={props.chainLabel}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
          <TextField
            margin="dense"
            name="chainContent"
            id="content"
            label="Content"
            type="text"
            value={props.chainContent}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
          <TextField
            margin="dense"
            name="chainType"
            id="type"
            label="Type"
            type="text"
            value={props.chainType}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
          <TextField
            margin="dense"
            name="chainProps"
            id="props"
            label="Props"
            type="text"
            value={props.chainProps}
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
            {props.caller=="addChain" ? "Add" : "Edit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
