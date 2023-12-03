import SearchIcon from "@mui/icons-material/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { Box, Button, Grid, Typography } from "@mui/joy";
import DebouncedInput from "components/UIKit/DebouncedInput";
import { FC } from "react";

interface ISearchBarProps {
  onSearch: (value: string) => void;
  isFilterOpen: boolean;
  toggleFilter: () => void;
  searchValue: string;
}

const SearchBar: FC<ISearchBarProps> = ({
  onSearch,
  isFilterOpen,
  toggleFilter,
  searchValue,
}) => {
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }} py={3}>
      <Grid xs={12} md={12} lg={8}>
        <Typography level="h1" sx={{ fontSize: 22, fontWeight: 500 }}>
          Formula Top Headlines
        </Typography>
      </Grid>
      <Grid xs={12} md={12} lg={4}>
        <Box display="flex" alignItems="center" columnGap={2}>
          <DebouncedInput
            startDecorator={<SearchIcon />}
            placeholder="Search article"
            timeout={1000}
            // value={query}
            onChangeHandler={onSearch}
            inititalValue={searchValue}
          />
          <Button
            aria-pressed={isFilterOpen ? "true" : "false"}
            onClick={toggleFilter}
            size="sm"
            sx={(theme) => ({
              fontWeight: 400,
              color: "#1A232E",
              backgroundColor: "#e0e0e0",
              border: "2px solid transparent",
              "&:hover": { backgroundColor: "#cecbcb" },
              [`&[aria-pressed="true"]`]: {
                backgroundColor: "#948f8f",
                border: "2px solid #373636",
              },
            })}
            startDecorator={<FilterAltOutlinedIcon />}
          >
            Filters
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
