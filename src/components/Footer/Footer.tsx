import { Box, Container, Link, Typography } from "@mui/joy";
import { ReactComponent as Logo } from "images/logo.svg";

const Footer = () => {
  return (
    <Container>
      <Box pb={2}>
        <Logo width="85" />
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
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
        <Typography
          level="body-xs"
          component="p"
          sx={{ color: "#4E5460", fontSize: 13, fontWeight: 400 }}
        >
          &copy; Formula 2023. All Rights Reserved
        </Typography>
        <Link
          href="mailto:info@formula.com"
          sx={{
            color: "#4E5460",
            fontSize: 13,
            fontWeight: 400,
            textDecoration: "none",
          }}
        >
          info@formula.com
        </Link>
      </Box>
    </Container>
  );
};

export default Footer;
