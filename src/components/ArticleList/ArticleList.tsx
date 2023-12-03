import Table from "@mui/joy/Table";
import { FC } from "react";
import { Article } from "types/dataTypes";
import LinkIcon from "@mui/icons-material/Link";
import LinkMUI from "@mui/joy/Link";
import styled from "@emotion/styled";
import { trimText } from "utils/trimText";
import { format } from "date-fns";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "router";
import { Box } from "@mui/joy";
import thumbnailImage from "images/thumbnail.jpg";

interface IArticlesProps {
  list: Article[];
}

const TableStyled = styled(Table)`
  min-width: 500px;
  font-size: 11px;

  & th {
    background-color: #ecf0f6;
    font-weight: 500;
    vertical-align: middle !important;
  }

  & td {
    border: 1px solid rgba(53, 61, 106, 0.08);
  }

  & th:nth-of-type(5),
  & td:nth-of-type(5),
  & th:nth-of-type(6),
  & td:nth-of-type(6) {
    text-align: center;
  }

  @media screen and (max-width: 899.98px) {
    & th:nth-of-type(4),
    & td:nth-of-type(4) {
      display: none;
    }
  }
`;

const ArticleList: FC<IArticlesProps> = ({ list }) => {
  const location = useLocation();

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
            <tr key={item.url}>
              <td>
                <img
                  src={item.urlToImage ? item.urlToImage : thumbnailImage}
                  alt={item.title}
                  width="100"
                  height="70"
                  loading="lazy"
                />
              </td>
              <td>
                <LinkMUI
                  component={Link}
                  to={ROUTES.ARTICLE}
                  state={{ from: location, payload: item }}
                  sx={{
                    width: "100%",
                    height: "100%",
                    color: "#212932",
                    // textDecoration: "none !important",
                    ":hover": { color: "#8f969f" },
                  }}
                >
                  {trimText(item.title, 20)}
                </LinkMUI>
              </td>
              <td>{trimText(item.author, 20)}</td>
              <td>{trimText(item.description, 90)}</td>
              <td>{format(new Date(item.publishedAt), "yyyy-MM-dd")}</td>
              <td>
                <LinkMUI
                  target="_blank"
                  aria-label="Link to source article"
                  href={item.url}
                  sx={{
                    color: "rgba(0,0,0,0.54)",
                    ":hover": { color: "#000000" },
                  }}
                >
                  <LinkIcon />
                </LinkMUI>
              </td>
            </tr>
          ))}
        </tbody>
      </TableStyled>
    </Box>
  );
};

export default ArticleList;
