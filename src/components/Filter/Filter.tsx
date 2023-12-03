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
import FilterSelect from "./FilterSelect";

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
      <FilterSelect
        label="Category"
        list={categories}
        value={category}
        onChange={onCategoryChange}
      />

      <FilterSelect
        label="Country"
        list={countries}
        value={country}
        onChange={onCountryChange}
      />
    </Box>
  );
};

export default Filter;
