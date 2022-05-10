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

export default function EdgeDialog(props) {

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={() => {props.closeHandler("close")}}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edge Properties</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="edgeLabel"
            id="label"
            label="Label"
            type="text"
            value={props.edgeLabel}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
          <TextField
            margin="dense"
            name="edgeType"
            id="type"
            label="Type"
            type="text"
            value={props.edgeType}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
          <TextField
            margin="dense"
            name="edgeProps"
            id="props"
            label="Props"
            type="text"
            value={props.edgeProps}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
          <TextField
            margin="dense"
            name="edgeProb"
            id="prob"
            label="Prob"
            type="text"
            value={props.edgeProb}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
          <FormLabel component="legend">Gate</FormLabel>
          <RadioGroup
                className="mb-4"
                value={props.edgeGate}
                name="edgeGate"
                onChange={props.handleValueChange}
                onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
                row
                defaultValue="OR"
              >
                <FormControlLabel
                  value="AND"
                  control={<Radio color="secondary" />}
                  label="And"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="OR"
                  control={<Radio color="secondary" />}
                  label="Or"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="KN"
                  control={<Radio color="secondary" />}
                  label="k/n"
                  labelPlacement="end"
                />
            </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {props.closeHandler("close")}} variant="outlined" color="secondary" onClick={props.closeHandler}>
            Cancel
          </Button>
          <Button onClick={() => {props.closeHandler("confirm")}} color="primary">
            {props.caller=="addEdge" ? "Add" : "Edit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
