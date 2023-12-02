import Input, { InputProps } from "@mui/joy/Input";
import { FC, useRef, useState } from "react";
import Typography from "@mui/joy/Typography";
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
}

const DebouncedInput: FC<IDebouncedInputProps> = ({
  placeholder = "Type in here…",
  timeout = 250,
  onChangeHandler,
  // value,
}) => {
  // console.log(value);

  const [value, setValue] = useState("");
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
        placeholder={placeholder}
        debounceTimeout={timeout}
        handleDebounce={onChangeHandler}
        value={value}
        controlValueHandler={setValue}
      />
      {/* <Typography>Debounced input: {debouncedValue}</Typography> */}
    </>
    // </Box>
  );
};

export default DebouncedInput;
