import { useGetNewsQuery } from "redux/newsApi/newsApi";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
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
// import Input from "@mui/joy/Input";

const Home = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState<number>(DEFAULT_PAGE);
  const [pageSize, setPageSize] = useState<number>(DEFAULT_PAGE_SIZE);
  const [country, setCountry] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);

  const { data, isFetching, isError } = useGetNewsQuery({
    // query: !query && (country || category) ? "" : DEFAULT_QUERY,
    query,
    page,
    pageSize,
    category: category || "",
    country: country || "",
  });

  /*
  country = "" && category ==""  && query === ""  ->  query = DEFAULT_QUERY
  
  country = "val" ||  category =="val"  && query === ""  ->  query = ""
  

  query === "val"   


  
  */

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

  if (isFetching) return <h3>Fetching ...</h3>;
  if (isError) return <h3>Error !!!</h3>;

  if (!data) return null;

  console.log(data);
  // console.log(`query`, query);

  return (
    <div>
      {/* <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      /> */}
      {/* <Input
        placeholder="Search article"
        size="sm"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setQuery(e.target.value);
        }}
        value={query}
      /> */}

      <DebouncedInput
        placeholder="Search article"
        timeout={1000}
        // value={query}
        onChangeHandler={onSearch}
        inititalValue={query}
      />
      {/* 
      <DebounceInput
        placeholder="Select article"
        debounceTimeout={1000}
        handleDebounce={handleDebounce}
        value={query}
      /> */}

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

      <ArticleList list={data.articles} />
    </div>
  );
};

export default Home;
