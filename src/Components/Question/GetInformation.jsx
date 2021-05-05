import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { FormControl, FormLabel, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function GetInformationQuestion({ currentQuestion }) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid item container className="w-50" justify="flex-start">
        <Grid item xs={6}>
          <TextField id="name" label="First Name" />
        </Grid>
        <Grid item xs={6}>
          <TextField id="mobile" label="Last Name" />
        </Grid>

        <Grid item xs={6}>
          <TextField id="Mobile" label="Mobile Number" />
        </Grid><Grid item xs={6}>
          <TextField id="city" label="City" />
        </Grid><Grid item xs={6}>
          <TextField id="OTP" label="OTP" />
        </Grid>
      </Grid>
    </form>
  );
}
