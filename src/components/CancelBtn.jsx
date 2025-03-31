import React from "react";
import Button from "@mui/material/Button";

const CancelBtn = ({
  children,
  onClick,
  color = "#322a58",
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
          backgroundColor: "#15102c",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CancelBtn;
