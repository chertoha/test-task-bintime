import { KeyboardArrowDown } from "@mui/icons-material";
import { FormLabel, Option, Select, selectClasses, Typography } from "@mui/joy";
import { FC, SyntheticEvent } from "react";

interface IFilterSelectProps {
  label: string;
  list: { id: string; title: string; value: string }[];
  value: string | null;
  onChange: (e: SyntheticEvent | null, newValue: string | null) => void;
}

const FilterSelect: FC<IFilterSelectProps> = ({
  list,
  label,
  value,
  onChange,
}) => {
  return (
    <FormLabel
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {label}
      <Select
        onChange={onChange}
        value={value}
        size="sm"
        placeholder="-Select-"
        indicator={<KeyboardArrowDown />}
        sx={{
          width: {
            xs: "60%",
            md: 240,
          },
          [`& .${selectClasses.indicator}`]: {
            transition: "0.2s",
            [`&.${selectClasses.expanded}`]: {
              transform: "rotate(-180deg)",
            },
          },
        }}
      >
        <Option value="">
          <Typography
            sx={{ color: "gray", fontWeight: "400", fontSize: "14px" }}
          >
            -Select-
          </Typography>
        </Option>
        {list.map(({ id, title, value }) => (
          <Option key={id} value={value}>
            {title}
          </Option>
        ))}
      </Select>
    </FormLabel>
  );
};

export default FilterSelect;
