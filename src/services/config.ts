export const DEFAULT_QUERY = "ukraine";

export const DEFAULT_PAGE = 1;

export const DEFAULT_PAGE_SIZE = 5;

const PAGE_SIZE_LIST_ITTERATION_VALUE = 5;
export const pageSizeList = (() => {
  return Array.from(Array(PAGE_SIZE_LIST_ITTERATION_VALUE)).map(
    (val, i) => (i + 1) * DEFAULT_PAGE_SIZE
  );
})();
