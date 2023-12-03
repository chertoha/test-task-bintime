import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import categories from "data/categories.json";
import countries from "data/countries.json";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "services/apiConfig";
import { useState } from "react";
import DebouncedInput from "components/UIKit/DebouncedInput/DebouncedInput";
import ArticleList from "components/ArticleList";
import { Box, Button, Container, FormLabel, Grid, Typography } from "@mui/joy";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/joy/IconButton";
import { Article } from "types/dataTypes";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { useGetNewsQuery } from "redux/newsApi/newsApi";
import Filter from "components/Filter";
import PageManager from "components/PageManager";

const Home = () => {
  const [query, setQuery] = useState("");
  const pageState = useState<number>(DEFAULT_PAGE);
  const pageSizeState = useState<number>(DEFAULT_PAGE_SIZE);
  const countryFilterState = useState<string | null>(null);
  const categoryFilterState = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [country] = countryFilterState;
  const [category] = categoryFilterState;
  const [page] = pageState;
  const [pageSize] = pageSizeState;

  // const TestType = typeof countryFilterState;

  const { data, isFetching, isError } = useGetNewsQuery({
    query,
    page,
    pageSize,
    category: category || "",
    country: country || "",
  });

  const onSearch = (value: string): void => {
    setQuery(value);
  };

  if (isFetching) return <h3>Fetching ...</h3>;
  if (isError) return <h3>Error !!!</h3>;

  if (!data) return null;

  console.log(data);

  // console.log("pageSize", pageSize);
  // console.log("page", page);

  return (
    <Container>
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
              inititalValue={query}
            />
            <Button
              aria-pressed={isFilterOpen ? "true" : "false"}
              onClick={() => {
                setIsFilterOpen(!isFilterOpen);
              }}
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

      <Filter
        categoryState={categoryFilterState}
        countryState={countryFilterState}
        isOpen={isFilterOpen}
      />

      {/* Table */}
      <ArticleList list={data.articles} />
      {/* <ArticleList list={tempList} /> */}

      <PageManager
        pageSizeState={pageSizeState}
        pageState={pageState}
        totalResults={data.totalResults}
      />
    </Container>
  );
};

export default Home;
