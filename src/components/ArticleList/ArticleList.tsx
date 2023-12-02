import Table from "@mui/joy/Table";
import { FC } from "react";
import { Article } from "types/dataTypes";
import LinkIcon from "@mui/icons-material/Link";
import LinkMUI from "@mui/joy/Link";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { DEFAULT_PAGE_SIZE } from "services/apiConfig";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { trimText } from "utils/trimText";
import { compareAsc, format } from "date-fns";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "router";

interface IArticlesProps {
  list: Article[];
}

const TableStyled = styled(Table)`
  & th {
    background-color: #ecf0f6;
    font-weight: 500;
    vertical-align: middle !important;
  }

  & td:nth-of-type(2) {
    cursor: pointer;
    /* text-decoration: underline; */
    /* color: #939495; */
  }
`;

const ArticleList: FC<IArticlesProps> = ({ list }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <TableStyled hoverRow>
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
                  src={item.urlToImage}
                  alt={item.title}
                  width="100"
                  height="70"
                />
              </td>
              <td>
                <Link
                  to={ROUTES.ARTICLE}
                  state={{ from: location, payload: item }}
                >
                  {trimText(item.title, 20)}
                </Link>
              </td>
              <td>{trimText(item.author, 20)}</td>
              <td>{trimText(item.description, 90)}</td>
              <td>{format(new Date(item.publishedAt), "yyyy-MM-dd")}</td>
              <td>
                <LinkMUI href={item.url}>
                  <LinkIcon />
                </LinkMUI>
              </td>
            </tr>
          ))}
        </tbody>
      </TableStyled>
    </div>
  );
};

export default ArticleList;
