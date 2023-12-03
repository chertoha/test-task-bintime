import Filter from "components/Filter";
import SearchBar from "components/SearchBar";
import NewsTable from "components/NewsTable";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "services/config";
import { useEffect, useMemo, useState } from "react";
import { Container } from "@mui/joy";
import { useGetNewsQuery } from "redux/newsApi/newsApi";
import { createStorage } from "services/createStorage";
import { GetNewsQuery } from "types/queryTypes";

type StorageData = GetNewsQuery & {
  isFilterOpen: boolean;
};

const storage = createStorage<StorageData>("news_request");

const Home = () => {
  const [query, setQuery] = useState(() => storage.get()?.query || "");
  const pageState = useState<number>(() => storage.get()?.page || DEFAULT_PAGE);
  const pageSizeState = useState<number>(
    () => storage.get()?.pageSize || DEFAULT_PAGE_SIZE
  );
  const countryFilterState = useState<string | null>(
    () => storage.get()?.country || null
  );
  const categoryFilterState = useState<string | null>(
    () => storage.get()?.category || null
  );
  const [isFilterOpen, setIsFilterOpen] = useState(
    () => storage.get()?.isFilterOpen || false
  );

  const [country] = countryFilterState;
  const [category] = categoryFilterState;
  const [page] = pageState;
  const [pageSize] = pageSizeState;

  const request = useMemo(
    () => ({
      query,
      page,
      pageSize,
      category: category || "",
      country: country || "",
    }),
    [category, country, page, pageSize, query]
  );

  const { data, isFetching, isError } = useGetNewsQuery(request);

  const onSearch = (value: string): void => {
    setQuery(value);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  useEffect(() => {
    storage.set({
      ...request,
      isFilterOpen,
    });
  }, [isFilterOpen, request]);

  return (
    <Container>
      <SearchBar
        isFilterOpen={isFilterOpen}
        toggleFilter={toggleFilter}
        searchValue={query}
        onSearch={onSearch}
      />

      <Filter
        categoryState={categoryFilterState}
        countryState={countryFilterState}
        isOpen={isFilterOpen}
      />

      <NewsTable
        isError={isError}
        isFetching={isFetching}
        // list={data.articles}
        pageSizeState={pageSizeState}
        pageState={pageState}
        // totalResults={data.totalResults}
        data={data}
      />
    </Container>
  );
};

export default Home;
