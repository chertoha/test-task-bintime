import LinkMUI from "@mui/joy/Link";
import LinkIcon from "@mui/icons-material/Link";
import thumbnailImage from "images/thumbnail.jpg";
import { trimText } from "utils/trimText";
import { ROUTES } from "router";
import { Article } from "types/dataTypes";
import { FC, useState } from "react";
import { format } from "date-fns";
import { Link, Location } from "react-router-dom";
import { ImageStyled } from "./ArticleList.styled";

interface IArticleRowProps {
  item: Article;
  location: Location;
}

const ArticleRow: FC<IArticleRowProps> = ({ item, location }) => {
  const { author, description, publishedAt, title, url, urlToImage } = item;

  const [image, setImage] = useState(urlToImage);

  const onImageDownloadError = () => {
    setImage(thumbnailImage);
  };

  return (
    <tr key={url}>
      <td>
        <ImageStyled
          src={image ? image : thumbnailImage}
          alt={title}
          width="100"
          height="70"
          loading="lazy"
          onError={onImageDownloadError}
        />
      </td>
      <td>
        <LinkMUI
          component={Link}
          to={ROUTES.ARTICLE}
          state={{ from: location, payload: { ...item, urlToImage: image } }}
          sx={{
            width: "100%",
            height: "100%",
            color: "#212932",
            ":hover": { color: "#8f969f" },
          }}
        >
          {trimText(title, 20)}
        </LinkMUI>
      </td>
      <td>{trimText(author, 20)}</td>
      <td>{trimText(description, 90)}</td>
      <td>{format(new Date(publishedAt), "yyyy-MM-dd")}</td>
      <td>
        <LinkMUI
          target="_blank"
          aria-label="Link to source article"
          href={url}
          sx={{
            color: "rgba(0,0,0,0.54)",
            ":hover": { color: "#000000" },
          }}
        >
          <LinkIcon />
        </LinkMUI>
      </td>
    </tr>
  );
};

export default ArticleRow;
