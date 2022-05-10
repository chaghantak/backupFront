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

export default function NodeTitle(props) {

  return (
    <div>
        <DialogContent>
        <TextField
        autoFocus
        margin="dense"
        id="label"
        label="Label"
        type="text"
        value={props.node.label}
        fullWidth
        />
        <br></br>
        <FormLabel component="legend">Gate</FormLabel>
        <RadioGroup
            value={props.node.type}
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
        <br></br>
        <TextField
        margin="dense"
        id="props"
        label="Props"
        type="text"
        value={props.node.props}
        fullWidth
        />
        <br></br>
        <TextField
        margin="dense"
        id="tech_id"
        label="Technique ID"
        type="text"
        value={props.node.tech_id}
        fullWidth
        />
        </DialogContent>
    </div>
  );
}
