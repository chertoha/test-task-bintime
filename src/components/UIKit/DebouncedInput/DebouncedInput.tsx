import Input, { InputProps } from "@mui/joy/Input";
import React, { FC, useRef, useState } from "react";

interface IDebounceProps {
  handleDebounce: (value: string) => void;
  debounceTimeout: number;
  controlValueHandler: (value: string) => void;
}

function DebounceInput(props: InputProps & IDebounceProps) {
  const { handleDebounce, controlValueHandler, debounceTimeout, ...rest } =
    props;

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

interface IDebouncedInputProps {
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
  const [value, setValue] = useState(inititalValue);

  return (
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
    </>
  );
};

export default DebouncedInput;
