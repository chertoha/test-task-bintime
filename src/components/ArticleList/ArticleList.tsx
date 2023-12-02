import Table from "@mui/joy/Table";
import { FC } from "react";
import { Article } from "types/dataTypes";
import LinkIcon from "@mui/icons-material/Link";
import Link from "@mui/joy/Link";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { DEFAULT_PAGE_SIZE } from "services/apiConfig";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { trimText } from "utils/trimText";
import { compareAsc, format } from "date-fns";

interface IArticlesProps {
  list: Article[];
}

const TableStyled = styled(Table)`
  & th {
    background-color: #ecf0f6;
    font-weight: 500;
    vertical-align: middle !important;
  }
`;

const ArticleList: FC<IArticlesProps> = ({ list }) => {
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
          {list.map(
            ({ url, author, description, publishedAt, title, urlToImage }) => (
              <tr key={url}>
                <td>
                  <img src={urlToImage} alt={title} width="100" height="70" />
                </td>
                <td>{trimText(title, 20)}</td>
                <td>{trimText(author, 20)}</td>
                <td>{trimText(description, 90)}</td>
                <td>{format(new Date(publishedAt), "yyyy-MM-dd")}</td>
                <td>
                  <Link href={url}>
                    <LinkIcon />
                  </Link>
                </td>
              </tr>
            )
          )}
        </tbody>
      </TableStyled>
    </div>
  );
};

export default ArticleList;
