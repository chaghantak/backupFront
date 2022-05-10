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

export default function EdgeTitle(props) {

  return (
    <div>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="edgeLabel"
            id="label"
            label="Label"
            type="text"
            value={props.edge.label}
            fullWidth
          />
          <br></br>
          <TextField
            margin="dense"
            name="edgeType"
            id="type"
            label="Type"
            type="text"
            value={props.edge.type}
            fullWidth
          />
          <br></br>
          <TextField
            margin="dense"
            name="edgeProps"
            id="props"
            label="Props"
            type="text"
            value={props.edge.props}
            fullWidth
          />
          <br></br>
          <TextField
            margin="dense"
            name="edgeProb"
            id="prob"
            label="Prob"
            type="text"
            value={props.edge.prob}
            fullWidth
          />
          <br></br>
          <FormLabel component="legend">Gate</FormLabel>
          <RadioGroup
                className="mb-4"
                value={props.edge.gate}
                name="edgeGate"
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
    </div>
  );
}
