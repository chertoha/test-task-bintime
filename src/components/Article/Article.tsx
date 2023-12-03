import { Link, Navigate, useLocation } from "react-router-dom";
import { Box, Container, Link as LinkMUI, Typography } from "@mui/joy";
import { ROUTES } from "router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Article as ArticleType } from "types/dataTypes";
import { format } from "date-fns";

const Article = () => {
  // const params = useParams();

  const location = useLocation();
  const article: ArticleType = location.state?.payload;

  if (!article) return <Navigate to={ROUTES.HOME} replace={true} />;

  const locationForBackLink = location.state?.from ?? "/";

  const {
    author,
    description,
    publishedAt,
    source: { name: sourceName },
    title,
    urlToImage,
    content,
  } = article;

  console.log(content);

  return (
    <Box pb={5} pt={2}>
      <Container>
        <Box
          display="flex"
          columnGap={2}
          mb={2}
          sx={{
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <LinkMUI
            aria-label="Link back"
            component={Link}
            to={locationForBackLink}
            sx={{ color: "#4E5460", "&:hover": { color: "#000000" } }}
          >
            <ArrowBackIcon />
          </LinkMUI>
          <Typography level="title-md" component="h1" sx={{ fontSize: 22 }}>
            {title}
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          mb={2}
          sx={{
            flexDirection: {
              xs: "column",
              md: "row",
            },

            alignItems: {
              xs: "flex-start",
              md: "center",
            },
          }}
        >
          <Typography sx={{ color: "rgba(33, 41, 50, 0.54)" }}>
            {sourceName}
          </Typography>
          <Typography sx={{ color: "rgba(33, 41, 50, 0.54)" }}>
            {`Publication date: ${format(publishedAt, "yyyy-MM-dd")}`}
          </Typography>
        </Box>

        <Typography level="body-md" component="h2" sx={{ fontSize: 13 }}>
          Description
        </Typography>
        <Typography level="body-sm" component="p" mt={1} sx={{ fontSize: 13 }}>
          {description}
        </Typography>
      </Container>

      <Box my={3}>
        {urlToImage && (
          <img src={urlToImage} alt={title} width="100%" height="auto" />
        )}
      </Box>

      <Container>
        {content && (
          <Box borderBottom="1px solid #EFEFF3">
            <Typography level="body-md" component="h2" sx={{ fontSize: 13 }}>
              Content
            </Typography>
            <Typography
              level="body-sm"
              component="p"
              pb={2}
              mb={2}
              mt={1}
              // mt={1}
              sx={{ fontSize: 13 }}
            >
              {content}
            </Typography>
          </Box>
        )}

        <Typography
          level="body-sm"
          component="p"
          sx={{ fontSize: 12, color: "rgba(33, 41, 50, 0.54)" }}
        >
          {`Authors: ${author || ""}`}
        </Typography>
      </Container>
    </Box>
  );
};

export default Article;
