import React from "react";
import {
  TextField,
  DialogContent,
} from "@material-ui/core";

export default function LinkTitle(props) {

  return (
    <div>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            name="linkLabel"
            id="label"
            label="Label"
            type="text"
            value={props.link.label}
            fullWidth
          />
          <br></br>
          <TextField
            margin="dense"
            name="linkType"
            id="type"
            label="Type"
            type="text"
            value={props.link.type}
            fullWidth
          />
          <br></br>
          <TextField
            margin="dense"
            name="linkProps"
            id="props"
            label="Props"
            type="text"
            value={props.link.props}
            fullWidth
          />
        </DialogContent>
    </div>
  );
}
