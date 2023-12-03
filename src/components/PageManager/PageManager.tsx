import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, IconButton, Option, Select, selectClasses } from "@mui/joy";
import { FC } from "react";
import { DEFAULT_PAGE_SIZE, pageSizeList } from "services/config";
import { State } from "types/stateTypes";

interface IPageManagerProps {
  pageState: State<number>;
  pageSizeState: State<number>;
  totalResults: number;
}

const PageManager: FC<IPageManagerProps> = ({
  pageState: [page, setPage],
  pageSizeState: [pageSize, setPageSize],
  totalResults,
}) => {
  const onPageSizeChange = (
    e: React.SyntheticEvent | null,
    newValue: number | null
  ) => {
    if (!newValue) return;
    setPageSize(newValue);
    setPage(1);
  };

  const increasePage = () => {
    setPage((prev) => prev + 1);
  };
  const decreasePage = () => {
    setPage((prev) => prev - 1);
  };

  const lastArticleNum =
    page * pageSize > totalResults ? totalResults : page * pageSize;
  const firstArticleNum = page * pageSize - pageSize + 1;

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      pt={2}
      sx={{
        fontSize: 12,
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: {
          xs: "flex-start",
          md: "center",
        },
        border: "1px solid rgba(53, 61, 106, 0.08)",
      }}
    >
      <Box display="flex" alignItems="center">
        <span>Rows per page:</span>
        <Select
          onChange={onPageSizeChange}
          defaultValue={DEFAULT_PAGE_SIZE}
          value={pageSize}
          indicator={<KeyboardArrowDown />}
          size="sm"
          sx={{
            fontFamily: "Roboto",
            fontSize: 12,
            border: "none",
            boxShadow: "none",
            backgroundColor: "transparent",
            mr: 2,

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
          {pageSizeList.map((val) => (
            <Option key={val} value={val}>
              {val}
            </Option>
          ))}
        </Select>
      </Box>

      <Box display="flex" alignItems="center">
        <Box component="p" mr={2}>
          {firstArticleNum} - {lastArticleNum} of {totalResults}
        </Box>

        <IconButton
          aria-label="Previous page"
          disabled={firstArticleNum === 1}
          variant="plain"
          size="sm"
          onClick={decreasePage}
          sx={{
            "&:hover": { backgroundColor: "transparent" },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          aria-label="Next page"
          disabled={lastArticleNum === totalResults}
          variant="plain"
          size="sm"
          onClick={increasePage}
          sx={{
            "&:hover": { backgroundColor: "transparent" },
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PageManager;
