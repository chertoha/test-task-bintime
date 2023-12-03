import categories from "data/categories.json";
import countries from "data/countries.json";
import { KeyboardArrowDown } from "@mui/icons-material";
import {
  Box,
  FormLabel,
  Option,
  Select,
  selectClasses,
  Typography,
} from "@mui/joy";
import { FC, SyntheticEvent } from "react";
import { State } from "types/stateTypes";

interface IFilterProps {
  isOpen: boolean;
  countryState: State<string | null>;
  categoryState: State<string | null>;
}

const Filter: FC<IFilterProps> = ({
  isOpen,
  countryState: [country, setCountry],
  categoryState: [category, setCategory],
}) => {
  const onCountryChange = (
    e: SyntheticEvent | null,
    newValue: string | null
  ) => {
    setCountry(newValue);
  };

  const onCategoryChange = (
    e: SyntheticEvent | null,
    newValue: string | null
  ) => {
    setCategory(newValue);
  };
  return (
    <Box
      display="flex"
      py={3}
      columnGap={3}
      sx={{
        display: isOpen ? "flex" : "none",
        flexDirection: {
          xs: "column",
          md: "row",
        },

        rowGap: 2,
      }}
    >
      <FormLabel
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        Category
        <Select
          onChange={onCategoryChange}
          value={category}
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
          {categories.map(({ id, title, value }) => (
            <Option key={id} value={value}>
              {title}
            </Option>
          ))}
        </Select>
      </FormLabel>

      <FormLabel
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        Country
        <Select
          onChange={onCountryChange}
          value={country}
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
          {countries.map(({ id, country, code }) => (
            <Option key={id} value={code}>
              {country}
            </Option>
          ))}
        </Select>
      </FormLabel>
    </Box>
  );
};

export default Filter;
