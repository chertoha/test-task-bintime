import { CssVarsProvider, extendTheme } from "@mui/joy/styles";

export const theme = extendTheme({
  components: {
    // JoyChip: {
    //   defaultProps: {
    //     size: "sm",
    //   },
    //   styleOverrides: {
    //     root: {
    //       borderRadius: "4px",
    //     },
    //   },
    // },

    JoyLink: {
      styleOverrides: {
        root: {
          textDecoration: "none !important",
          ":hover": { textDecoration: "underline !important" },

          transition: "all 250ms ease-in-out",
        },
      },
    },
  },
});
