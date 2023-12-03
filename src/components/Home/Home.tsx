import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import categories from "data/categories.json";
import countries from "data/countries.json";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "services/apiConfig";
import { useState } from "react";
import DebouncedInput from "components/UIKit/DebouncedInput/DebouncedInput";
import ArticleList from "components/ArticleList";
import { Box, Button, FormLabel, Grid, Typography } from "@mui/joy";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/joy/IconButton";
import { Article } from "types/dataTypes";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const Home = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState<number>(DEFAULT_PAGE);
  const [pageSize, setPageSize] = useState<number>(DEFAULT_PAGE_SIZE);
  const [country, setCountry] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // const { data, isFetching, isError } = useGetNewsQuery({
  //   query,
  //   page,
  //   pageSize,
  //   category: category || "",
  //   country: country || "",
  // });

  const onSearch = (value: string): void => {
    setQuery(value);
  };

  const onCountryChange = (
    e: React.SyntheticEvent | null,
    newValue: string | null
  ) => {
    setCountry(newValue);
  };

  const onCategoryChange = (
    e: React.SyntheticEvent | null,
    newValue: string | null
  ) => {
    setCategory(newValue);
  };

  const onPageSizeChange = (
    e: React.SyntheticEvent | null,
    newValue: number | null
  ) => {
    if (!newValue) return;
    setPageSize(newValue);
  };

  // if (isFetching) return <h3>Fetching ...</h3>;
  // if (isError) return <h3>Error !!!</h3>;

  // if (!data) return null;

  // console.log(data);

  console.log("pageSize", pageSize);
  console.log("page", page);

  const tempList: Article[] = [
    {
      author: "aasdasd as;lksd;flksdf sdfs df",
      title: "sadfsdf",
      description:
        "The mayor of Nashville, Tennessee, called Monday for an investigation after images purported to be the writings of a shooter who killed six people at The Covenant School in March were posted online.",
      url: "asdadas12123d",
      publishedAt: new Date("2015-03-25"),
      source: {
        id: "1",
        name: "asdasd",
      },
      urlToImage: "img url",
      content:
        "The mayor of Nashville, Tennessee, called Monday for an investigation after images purported to be the writings of a shooter who killed six people at The Covenant School in March were posted online.",
    },
    {
      author: "a112asdasd",
      title:
        "sadfs dfsadf sdfsa dfsd fsadfs fsadfs fsa sadfsd fsad fsd sadfs dffsadfs dfsadfsdf sadfsdf adfsdfdf",
      description:
        "The mayor of Nashville, Tennessee, called Monday for an investigation after images purported to be the writings of a shooter who killed six people at The Covenant School in March were posted online.",
      url: "asdadasd",
      publishedAt: new Date("2015-03-25"),
      source: {
        id: "2",
        name: "asdasd",
      },
      urlToImage: "",
      content:
        "The mayor of Nashville, Tennessee, called Monday for an investigation after images purported to be the writings of a shooter who killed six people at The Covenant School in March were posted online.",
    },
  ];

  const tempTotalCount = 18;

  // const lastArticleNum = page * pageSize > data.totalResults ? data.totalResults : page * pageSize;
  const firstArticleNum = page * pageSize - pageSize + 1;
  const lastArticleNum =
    page * pageSize > tempTotalCount ? tempTotalCount : page * pageSize;

  // 1-5,   6-10,   11-15        2 * 5 -5 + 1,    1 * 5  - 5 +1

  return (
    <div>
      {/* Search */}
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
              // sx={{
              // fontWeight: 400,
              // color: "#1A232E",
              // backgroundColor: "#ECF0F6",
              // "&:hover": { backgroundColor: "#8e8f8f" },
              // }}
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

      {/* Filter */}
      <Box
        display="flex"
        py={3}
        columnGap={3}
        sx={{ display: isFilterOpen ? "flex" : "none" }}
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
            placeholder="Select"
            indicator={<KeyboardArrowDown />}
            sx={{
              width: 240,
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
            }}
          >
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
            placeholder="Select"
            indicator={<KeyboardArrowDown />}
            sx={{
              width: 240,
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
            }}
          >
            {countries.map(({ id, country, code }) => (
              <Option key={id} value={code}>
                {country}
              </Option>
            ))}
          </Select>
        </FormLabel>
      </Box>

      {/* Table */}
      {/* <ArticleList list={data.articles} /> */}
      <ArticleList list={tempList} />

      {/* Page manager */}
      <Box display="flex" alignItems="center" justifyContent="flex-end">
        <span>Rows per page:</span>

        <Select
          onChange={onPageSizeChange}
          defaultValue={DEFAULT_PAGE_SIZE}
          // value={rowsPerPage}
          indicator={<KeyboardArrowDown />}
          size="sm"
          sx={{
            // display: "inline",
            border: "none",
            boxShadow: "none",
            backgroundColor: "transparent",

            "&:hover": { backgroundColor: "transparent" },

            width: "fit-content",
            [`& .${selectClasses.indicator}`]: {
              transition: "0.2s",
              [`&.${selectClasses.expanded}`]: {
                transform: "rotate(-180deg)",
              },
            },
          }}
        >
          <Option value={DEFAULT_PAGE_SIZE}>{DEFAULT_PAGE_SIZE}</Option>
          <Option value={DEFAULT_PAGE_SIZE + 5}>{DEFAULT_PAGE_SIZE + 5}</Option>
          <Option value={DEFAULT_PAGE_SIZE + 10}>
            {DEFAULT_PAGE_SIZE + 10}
          </Option>
          <Option value={DEFAULT_PAGE_SIZE + 20}>
            {DEFAULT_PAGE_SIZE + 20}
          </Option>
        </Select>

        <p>
          {/* {firstArticleNum} - {lastArticleNum} of {data.totalResults} */}
          {firstArticleNum} - {lastArticleNum} of {tempTotalCount}
        </p>

        <IconButton
          disabled={firstArticleNum === 1}
          variant="plain"
          size="sm"
          onClick={() => {
            setPage((prev) => prev - 1);
          }}
          sx={{
            "&:hover": { backgroundColor: "transparent" },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          // disabled={lastArticleNum === data.totalResult}
          disabled={lastArticleNum === tempTotalCount}
          variant="plain"
          size="sm"
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
          sx={{
            "&:hover": { backgroundColor: "transparent" },
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>
    </div>
  );
};

export default Home;
