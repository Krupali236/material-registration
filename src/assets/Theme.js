import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "32px",
      fontWeight: 500,
      color: "white",
    },
    h2: {
      fontSize: "2rem",
    },
    h3: {
      fontWeight: "bold",
    },
    h4: {
      color: "#fff",
      fontWeight: "bold",
    },
    h5: {
      fontSize: "24px",
      color: "#fff",
      fontWeight: 400,
      textAlign: "center",
      fontFamily: "emoji",
      letterSpacing: 1,
    },

    body2: {
      // input fields label
      fontSize: "12px",
      fontFamily: "system-ui",
      fontWeight: "500 !important",
      color: "black",
      textAlign: "left",
    },
    body1: {
      // image component caption
      fontSize: "11px",
      letterSpacing: 2,
      color: "#fff",
      fontFamily: "system-ui",
      fontWeight: 200,
    },
    subtitle1: {
      fontSize: "14px",
      fontWeight: "200 !important",
      color: "white",
    },
    button: {
      fontSize: "15px",
      fontWeight: 600,
      cursor: "pointer",
    },
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          width: "100%",
          borderRadius: "5px",
          "& input": {
            width: "100%",
            padding: "0px !important",
            height: "100%",
            font: "revert",
          },
          "&::before, &::after": {
            borderBottom: "none !important",
          },
        },
      },
    },
    MuiTextField: {
      // TextField uses the theme
      defaultProps: {
        variant: "filled",
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
          borderRadius: "5px",
          "& .MuiFilledInput-root": {
            height: "35px",
            backgroundColor: "#89ceb9", //inputs background color
            padding: "10px !important",
            BorderBottom: "0px !important",
            backgroundColor: "#f5f5f5",
            borderRadius: "5px",
            "&:hover": {
              backgroundColor: "#7abdaa", // input hover
            },
            "& .MuiFilledInput-input": {
              borderRadius: "5px",
              padding: "5px 10px",
              height: "25px !important",
              fontSize: "12px !important",
              font: "menu !imoprtant",
            },
            "&.Mui-focused": {
              backgroundColor: "#68ab96", // input focus background color
            },
            "&::before, &::after": {
              borderBottom: "none !important",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0px",
          width: "130px",
          height: "40px",
          color: "#fff",
          fontWeight: "lighter !important",
          textTransform: "uppercase",
          fontSize: "12px",
          transition: "0.3s",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: 400,
          color: "#000",
          cursor: "pointer",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          width: { lg: "30%", md: "50%", sm: "90%", xs: "90%" },
          position: "relative",
          paddingTop: "50px",
          borderRadius: "12px",
          textAlign: "center",
          overflow: "visible",
          borderTop: "4px solid #0ba39f", // Green top border
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", // Subtle shadow
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          justifyContent: "center",
          paddingBottom: "16px",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: "0 !important",
          padding: "0px",
        },
      },
    },
  },
});
export default theme;
