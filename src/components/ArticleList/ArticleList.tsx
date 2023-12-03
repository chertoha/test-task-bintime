import ArticleRow from "./ArticleRow";
import { FC } from "react";
import { Article } from "types/dataTypes";
import { Location, useLocation } from "react-router-dom";
import { Box } from "@mui/joy";
import { TableStyled } from "./ArticleList.styled";

interface IArticlesProps {
  list: Article[];
}

const ArticleList: FC<IArticlesProps> = ({ list }) => {
  const location: Location = useLocation();

  return (
    <Box sx={{ overflowX: "auto" }}>
      <TableStyled>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Authors</th>
            <th style={{ width: "30%" }}>Description</th>
            <th>Publication date</th>
            <th>Original URL</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <ArticleRow key={item.url} item={item} location={location} />
          ))}
        </tbody>
      </TableStyled>
    </Box>
  );
};

export default ArticleList;
