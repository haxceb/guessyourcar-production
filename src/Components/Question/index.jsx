import React, { useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Checkbox, Typography } from "@material-ui/core";
import { Container } from "../DragandDrop/Container";

export default function Index({ currentQuestion }) {
  const [value, setValue] = React.useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const {
    answerOptions,
    multiSelect,
    singleSelect,
    dragAndDrop,
  } = currentQuestion;

  return (
    <FormControl component="fieldset">
      <FormLabel style={{ color: "black" }}>
        <Typography variant="h6" align="justify">
          {currentQuestion?.label}
        </Typography>
      </FormLabel>
      {singleSelect &&
        answerOptions?.map((item, index) => {
          return (
            <RadioGroup
              aria-label="answerOptions"
              name="answerOptions"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value={item?.value}
                control={<Radio color="primary" />}
                label={item?.label}
              />
            </RadioGroup>
          );
        })}
      {multiSelect &&
        answerOptions?.map((item) => {
          return (
            <FormControlLabel
              value={item?.value}
              control={
                <Checkbox
                  checked={true}
                  onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label={item?.label}
            />
          );
        })}

      {dragAndDrop && <Container answerOptions={answerOptions} />}
    </FormControl>
  );
}
