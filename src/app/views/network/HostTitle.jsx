import React from "react";
import {
  TextField,
  DialogContent,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";

export default function HostTitle(props) {

  return (
    <div>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="hostName"
            id="name"
            label="Name"
            type="text"
            value={props.host.name}
            fullWidth
          />
          <br></br>
          <TextField
            autoFocus
            margin="dense"
            name="hostIP"
            id="ip"
            label="IP"
            type="text"
            value={props.host.ip}
            fullWidth
          />
          <br></br>
          <TextField
            autoFocus
            margin="dense"
            name="hostMAC"
            id="mac"
            label="MAC"
            type="text"
            value={props.host.mac}
            fullWidth
          />
          <br></br>
          <TextField
            autoFocus
            margin="dense"
            name="hostType"
            id="type"
            label="Type"
            type="text"
            value={props.host.type}
            fullWidth
          />
          <br></br>
          <TextField
            margin="dense"
            name="hostImportance"
            id="importance"
            label="Importance"
            type="text"
            value={props.host.importance}
            fullWidth
          />
          <br></br>
          <TextField
            margin="dense"
            name="hostProps"
            id="props"
            label="Props"
            type="text"
            value={props.host.props}
            fullWidth
          />
        </DialogContent>
    </div>
  );
}
