import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EB5424",
    },
    secondary: {
      main: "#2684FF",
    },
  },
  typography: {
    fontFamily: "DM Sans",
    body5: {
      color: "#717171",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "18px",
    },
    body6: {
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "31px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    body7: {
      fontSize: "20px",
      fontWeight: "700",
      lineHeight: "26px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    body8: {
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "18px",
      letterSpacing: "0em",
      color: "#5F636D",
    },
    body9: {
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "24px",
      letterSpacing: "0em",
      color: "#000000",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: "#EB5424",
            padding: "10px 17px 10px 21px",
            borderRadius: "3px",
            fontWeight: "700",
            fontSize: "14px",
            lineHeight: "1rem",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#EB5424",
              color: "#FFFFFF",
              boxShadow: "none",
            },
          },
        },
      ],
    },
  },
});
export { theme };
