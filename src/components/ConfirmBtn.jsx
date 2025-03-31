import React from "react";
import Button from "@mui/material/Button";

const ConfirmBtn = ({
  children,
  onClick,
  color = "#0ba39f",
  size = "medium",
  fullWidth = false,
}) => {
  return (
    <Button
      variant="contained"
      color={color}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={{
        backgroundColor: color,
        color: "white",
        "&:hover": {
          backgroundColor: "#29938c",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default ConfirmBtn;
