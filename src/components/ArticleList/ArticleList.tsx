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
            // <tr key={item.url}>
            //   <td>
            //     <img
            //       src={item.urlToImage ? item.urlToImage : thumbnailImage}
            //       alt={item.title}
            //       width="100"
            //       height="70"
            //       loading="lazy"
            //     />
            //   </td>
            //   <td>
            //     <LinkMUI
            //       component={Link}
            //       to={ROUTES.ARTICLE}
            //       state={{ from: location, payload: item }}
            //       sx={{
            //         width: "100%",
            //         height: "100%",
            //         color: "#212932",
            //         ":hover": { color: "#8f969f" },
            //       }}
            //     >
            //       {trimText(item.title, 20)}
            //     </LinkMUI>
            //   </td>
            //   <td>{trimText(item.author, 20)}</td>
            //   <td>{trimText(item.description, 90)}</td>
            //   <td>{format(new Date(item.publishedAt), "yyyy-MM-dd")}</td>
            //   <td>
            //     <LinkMUI
            //       target="_blank"
            //       aria-label="Link to source article"
            //       href={item.url}
            //       sx={{
            //         color: "rgba(0,0,0,0.54)",
            //         ":hover": { color: "#000000" },
            //       }}
            //     >
            //       <LinkIcon />
            //     </LinkMUI>
            //   </td>
            // </tr>
            <ArticleRow key={item.url} item={item} location={location} />
          ))}
        </tbody>
      </TableStyled>
    </Box>
  );
};

export default ArticleList;
