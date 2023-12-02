import Table from "@mui/joy/Table";
import { FC } from "react";
import { Article } from "types/dataTypes";
import LinkIcon from "@mui/icons-material/Link";
import Link from "@mui/joy/Link";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { DEFAULT_PAGE_SIZE } from "services/apiConfig";

interface IArticlesProps {
  list: Article[];
}

const ArticleList: FC<IArticlesProps> = ({ list }) => {
  return (
    <div>
      <Table hoverRow>
        <thead>
          <tr>
            <th style={{ width: "40%" }}>Image</th>
            <th>Title</th>
            <th>Authors</th>
            <th>Description</th>
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
                <td>{title}</td>
                <td>{author}</td>
                <td>{description}</td>
                <td>{`${publishedAt}`}</td>
                <td>
                  <Link href={url}>
                    <LinkIcon />
                  </Link>
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ArticleList;
