import Input, { InputProps } from "@mui/joy/Input";
import React, { FC, useRef, useState } from "react";
// import { FC } from "react";

interface IDebounceProps {
  handleDebounce: (value: string) => void;
  debounceTimeout: number;
  controlValueHandler: (value: string) => void;
}

function DebounceInput(props: InputProps & IDebounceProps) {
  const { handleDebounce, controlValueHandler, debounceTimeout, ...rest } =
    props;
  // console.log(debounceTimeout);

  const timerRef = useRef<number>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    controlValueHandler(value);

    timerRef.current = window.setTimeout(() => {
      handleDebounce(value);
    }, debounceTimeout);
  };

  // console.log(rest.value);

  return <Input {...rest} onChange={handleChange} />;
}

//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------

interface IDebouncedInputProps {
  // value: string;
  timeout?: number;
  placeholder?: string;
  onChangeHandler: (value: string) => void;
  inititalValue: string;
  startDecorator: React.ReactNode;
}

const DebouncedInput: FC<IDebouncedInputProps> = ({
  placeholder = "Type in here…",
  timeout = 250,
  onChangeHandler,
  inititalValue,
  startDecorator,
}) => {
  // console.log(value);

  const [value, setValue] = useState(inititalValue);
  // const [debouncedValue, setDebouncedValue] = useState("");
  // const handleDebounce = (value: string) => {
  //   // setDebouncedValue(value);
  //   // setDebouncedValue(value);
  //   console.log("debaunced", value);
  // };
  return (
    // <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
    <>
      <DebounceInput
        startDecorator={startDecorator}
        placeholder={placeholder}
        debounceTimeout={timeout}
        handleDebounce={onChangeHandler}
        value={value}
        controlValueHandler={setValue}
        size="sm"
      />
      {/* <Typography>Debounced input: {debouncedValue}</Typography> */}
    </>
    // </Box>
  );
};

export default DebouncedInput;
