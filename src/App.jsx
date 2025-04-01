import "./App.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import ImageComponent from "./components/ImageComponent";
import Registration from "./pages/Registration";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/Theme";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" sx={{ paddingLeft: 2, paddingRight: 2 }}>
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: "white",
              height: { lg: "90vh", md: "90vh", sm: "90vh", xs: "100%" },
              borderRadius: "10px",
              margin: { xs: 2, sm: 0, md: 0, lg: 0 },
              padding: { xs: 2, sm: 0, md: 0, lg: 0 },
            }}
          >
            <Grid container spacing={2} sx={{ height: "100%" }}>
              <Grid
                size={{ lg: 5, sm: 5, xs: 0, md: 5 }}
                sx={{
                  height: "100%",
                  position: "relative",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                  overflow: "hidden",
                  display: {
                    lg: "block",
                    md: "block",
                    sm: "block",
                    xs: "none",
                  },
                }}
              >
                <ImageComponent />
              </Grid>
              <Grid
                size={{ lg: 7, sm: 7, xs: 12, md: 7 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 2,
                }}
              >
                <Registration />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
