import { extendTheme } from "@mui/joy/styles";

export const theme = extendTheme({
  fontFamily: { body: `"Noto Sans", sans-serif ` },

  components: {
    JoySelect: {
      styleOverrides: {
        listbox: { fontFamily: `'Manrope', sans-serif` },
      },
    },

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
