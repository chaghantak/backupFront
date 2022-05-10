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

export default function GraphJsonDialog(props) {

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={() => {props.closeHandler("close")}}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Graph JSON</DialogTitle>
        <p>Please change your graph id before post.</p>
        <DialogContent>
          <TextField
            autoFocus
            multiline={true}
            rows={30}
            margin="dense"
            name="graphJson"
            id="json"
            label="Json"
            type="textarea"
            value={props.graphJson}
            fullWidth
            onChange={props.handleValueChange}
            
            style={{width:500}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {props.closeHandler("close")}} variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button onClick={() => {props.closeHandler("confirm")}} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
