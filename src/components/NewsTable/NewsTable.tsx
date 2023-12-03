import ArticleList from "components/ArticleList";
import PageManager from "components/PageManager";
import Loader from "components/UIKit/Loader";
import { Typography } from "@mui/joy";
import { FC } from "react";
import { News } from "types/dataTypes";
import { State } from "types/stateTypes";

interface INewsTableProps {
  data: News | undefined;
  isFetching: boolean;
  isError: boolean;
  pageState: State<number>;
  pageSizeState: State<number>;
}

const NewsTable: FC<INewsTableProps> = ({
  data,
  isFetching,
  isError,
  ...rest
}) => {
  if (isFetching) return <Loader />;

  if (isError)
    return (
      <Typography level="title-md" component="p" color="danger">
        Error! Sorry, something went wrong.
      </Typography>
    );

  if (!data) return null;

  const { articles, totalResults } = data;

  if (articles.length === 0)
    return (
      <Typography level="title-md" component="p" color="warning">
        Sorry, there are no articles under current search query{" "}
      </Typography>
    );

  return (
    <>
      <ArticleList list={articles} />

      <PageManager {...rest} totalResults={totalResults} />
    </>
  );
};

export default NewsTable;
