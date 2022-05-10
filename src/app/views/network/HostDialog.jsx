import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";

export default function HostDialog(props) {

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={() => {props.closeHandler("close")}}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Host Properties</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="hostId"
            id="id"
            label="Id"
            type="text"
            value={props.hostId}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
          <TextField
            autoFocus
            margin="dense"
            name="hostName"
            id="name"
            label="Name"
            type="text"
            value={props.hostName}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
          <TextField
            margin="dense"
            name="hostIP"
            id="ip"
            label="IP"
            type="text"
            value={props.hostIP}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
          <TextField
            margin="dense"
            name="hostMAC"
            id="mac"
            label="MAC"
            type="text"
            value={props.hostMAC}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
          <FormLabel component="legend">Type</FormLabel>
          <RadioGroup
                className="mb-4"
                value={props.hostType}
                name="hostType"
                onChange={props.handleValueChange}
                onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
                defaultValue="PC"
                row
              >
                {["PC", "ROUTER", "WIRELESS", "DB", "WEB", "DNS", "GATEWAY", "VPN_GATEWAY", "FIREWALL"].map((el) => {
                  return (
                  <FormControlLabel
                  value={el}
                  control={<Radio color="secondary" />}
                  label={el}
                  labelPlacement="end"
                  default
                  />);
                })}
          </RadioGroup>
          <TextField
            margin="dense"
            name="hostImportanceOverall"
            id="importance_overall"
            label="Importance Overall"
            type="text"
            value={props.hostImportanceOverall}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
          <TextField
            margin="dense"
            name="hostImportanceC"
            id="importance_confidentiality"
            label="Importance Confidentiality"
            type="text"
            value={props.hostImportanceC}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
          <TextField
            margin="dense"
            name="hostImportanceI"
            id="importance_integrity"
            label="Importance Integrity"
            type="text"
            value={props.hostImportanceI}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
          <TextField
            margin="dense"
            name="hostImportanceA"
            id="importance_A"
            label="Importance Availability"
            type="text"
            value={props.hostImportanceA}
            fullWidth
            onChange={props.handleValueChange}
            onKeyDown={(e) => { if(e.keyCode == 13){ console.log(e.keyCode); props.closeHandler("confirm"); }}}
          />
          <TextField
            margin="dense"
            name="hostProps"
            id="props"
            label="Props"
            type="text"
            value={props.hostProps}
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
            {props.caller=="addHost" ? "Add" : "Edit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
