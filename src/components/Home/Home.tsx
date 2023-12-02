import { useGetNewsQuery } from "redux/newsApi/newsApi";
// import Select, { selectClasses } from "@mui/joy/Select";
// import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import categories from "data/categories.json";
import countries from "data/countries.json";
import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_SIZE,
  DEFAULT_QUERY,
} from "services/apiConfig";
import { ChangeEvent, useState } from "react";
import DebouncedInput from "components/UIKit/DebouncedInput/DebouncedInput";
import ArticleList from "components/ArticleList";
// import { Box, Button } from "@mui/joy";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import IconButton from "@mui/joy/IconButton";
import { Article } from "types/dataTypes";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Home = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState<number>(DEFAULT_PAGE);
  const [pageSize, setPageSize] = useState<number>(DEFAULT_PAGE_SIZE);
  const [country, setCountry] = useState<string | null>(null);
  const [category, setCategory] = useState<string>("");

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

  // const onCategoryChange = (
  //   e: React.SyntheticEvent | null,
  //   newValue: string | null
  // ) => {
  //   setCategory(newValue);
  // };

  const onCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
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
      author: "aasdasd",
      title: "sadfsdf",
      description:
        "The mayor of Nashville, Tennessee, called Monday for an investigation after images purported to be the writings of a shooter who killed six people at The Covenant School in March were posted online.",
      url: "asdadas12123d",
      publishedAt: new Date("2015-03-25"),
      source: {
        id: "1",
        name: "asdasd",
      },
      urlToImage: "aasdasd",
    },
    {
      author: "a112asdasd",
      title: "sadfsdf",
      description:
        "The mayor of Nashville, Tennessee, called Monday for an investigation after images purported to be the writings of a shooter who killed six people at The Covenant School in March were posted online.",
      url: "asdadasd",
      publishedAt: new Date("2015-03-25"),
      source: {
        id: "2",
        name: "asdasd",
      },
      urlToImage: "aasdasd",
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
      <DebouncedInput
        placeholder="Search article"
        timeout={1000}
        // value={query}
        onChangeHandler={onSearch}
        inititalValue={query}
      />

      {/* Filter */}
      <Select
        onChange={onCategoryChange}
        value={category}
        size="small"
        placeholder="Select"
        // indicator={<KeyboardArrowDown />}
        // sx={{
        //   width: 240,
        //   [`& .${selectClasses.indicator}`]: {
        //     transition: "0.2s",
        //     [`&.${selectClasses.expanded}`]: {
        //       transform: "rotate(-180deg)",
        //     },
        //   },
        // }}
      >
        {categories.map(({ id, title, value }) => (
          <Option key={id} value={value}>
            {title}
          </Option>
        ))}
      </Select>

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
