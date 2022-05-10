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

export default function NodeDialog(props) {

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={() => {props.closeHandler("close")}}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Node Properties</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="nodeLabel"
            id="label"
            label="Label"
            type="text"
            value={props.nodeLabel}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
          <FormLabel component="legend">Gate</FormLabel>
          <RadioGroup
                className="mb-4"
                value={props.nodeType}
                name="nodeType"
                onChange={props.handleValueChange}
                onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
                defaultValue="ATTACK"
                row
              >
                <FormControlLabel
                  value="ATTACK"
                  control={<Radio color="secondary" />}
                  label="Attack"
                  labelPlacement="end"
                  default
                />
                <FormControlLabel
                  value="DEFENSE"
                  control={<Radio color="secondary" />}
                  label="Defense"
                  labelPlacement="end"
                />
            </RadioGroup>
          <TextField
            margin="dense"
            name="nodeProps"
            id="props"
            label="Props"
            type="text"
            value={props.nodeProps}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
          <TextField
            margin="dense"
            name="nodeTechId"
            id="tech_id"
            label="Technique ID"
            type="text"
            value={props.nodeTechId}
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
            {props.caller=="addNode" ? "Add" : "Edit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
