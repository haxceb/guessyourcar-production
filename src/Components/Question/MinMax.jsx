import React, { useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Autocomplete from "@material-ui/lab/Autocomplete";

import {
  Checkbox,
  FormHelperText,
  Input,
  InputLabel,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";

export default function MinMaxQuestion({ currentQuestion }) {
  const [value, setValue] = React.useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const { answerOptions, minMax } = currentQuestion;

  return (
    <FormControl component="fieldset">
      {currentQuestion?.minMax && (
        <FormLabel style={{ color: "black" }} className="d-flex flex-wrap">
          <Typography variant="h6" align="justify">
            {currentQuestion?.labelMinimum}
          </Typography>
          <FormControl className="mr-3 ml-3" style={{ minWidth: 120 }}>
            <Autocomplete
              id="combo-box-demo"
              options={currentQuestion?.minimumOptions}
              getOptionLabel={(option) => option.title}
              style={{ width: 120 }}
              renderInput={(params) => <TextField {...params} />}
            />
            <FormHelperText>Minimum Amount</FormHelperText>
          </FormControl>
          <Typography variant="h6" align="justify">
            {currentQuestion?.labelMaximum}
          </Typography>

          <FormControl className="mr-3 ml-3" style={{ minWidth: 120 }}>
            <Autocomplete
              id="combo-box-demo"
              options={currentQuestion?.minimumOptions}
              getOptionLabel={(option) => option.title}
              style={{ width: 120 }}
              renderInput={(params) => <TextField {...params} />}
            />
            <FormHelperText>Maximum Amount</FormHelperText>
          </FormControl>
        </FormLabel>
      )}

      {currentQuestion?.loanPayment && (
        <FormLabel style={{ color: "black" }} className="d-flex flex-wrap">
          <Typography variant="h6" align="justify">
            {currentQuestion?.loanLabel}
          </Typography>
          <FormControl className="mr-3 ml-3" style={{ minWidth: 120 }}>
            <Autocomplete
              id="combo-box-demo"
              options={currentQuestion?.loanYears}
              getOptionLabel={(option) => option.title}
              style={{ width: 150 }}
              renderInput={(params) => <TextField {...params} />}
            />
            <FormHelperText>Minimum Amount</FormHelperText>
          </FormControl>
        </FormLabel>
      )}

      {currentQuestion?.downPayment && (
        <FormLabel style={{ color: "black" }} className="d-flex flex-wrap">
          <Typography variant="h6" align="justify">
            {currentQuestion?.downPaymentLabel}
          </Typography>
          <FormControl className="mr-3 ml-3" style={{ minWidth: 120 }}>
            <Autocomplete
              id="combo-box-demo"
              options={currentQuestion?.downPaymentOptions}
              getOptionLabel={(option) => option.title}
              style={{ width: 150 }}
              renderInput={(params) => <TextField {...params} />}
            />
            <FormHelperText>Minimum Amount</FormHelperText>
          </FormControl>
        </FormLabel>
      )}
    </FormControl>
  );
}
