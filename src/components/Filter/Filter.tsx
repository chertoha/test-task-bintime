import categories from "data/categories.json";
import countries from "data/countries.json";
import FilterSelect from "./FilterSelect";
import { Box } from "@mui/joy";
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
