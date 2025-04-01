import React from "react";
import Box from "@mui/material/Box";
import img from "../assets/images/camera.jpg";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
const ImageComponent = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "black",
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      {/* Text Content */}
      <Box
        sx={{
          height: { lg: "70vh", md: "70vh", sm: "60vh" },
          position: "relative",
          zIndex: 1,
          padding: "20px",
          color: "white",
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex ",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 6,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Photography
              </Typography>
              <MenuIcon sx={{ fill: "white", cursor: "pointer" }} />
            </Box>
            <Typography variant="body1" textAlign="center" gutterBottom>
              CLICK FOR YOUR SHOOT
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontSize: {
                  lg: "45px !important",
                  md: "32px !important",
                  sm: "30px !important",
                  xs: "24px !important",
                },
              }}
            >
              Photography.
            </Typography>
          </div>
          <div>
            <Typography variant="body1" gutterBottom>
              JOURNEY EVERYWHERE
            </Typography>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default ImageComponent;
