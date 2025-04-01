import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelBtn from "./CancelBtn";
import ConfirmBtn from "./ConfirmBtn";
export default function RegisterAlert({ open, handleClose }) {
  console.log("RegisterAlert Rendered - Open:", open);
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="success-dialog"
      >
        <Box
          sx={{
            position: "absolute",
            top: "-30px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#0ba39f",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <CheckCircleIcon
            sx={{ color: "white", fontSize: 40, fill: "white" }}
          />
        </Box>

        {/* Dialog Title */}
        <DialogTitle id="success-dialog">Registration Successful!</DialogTitle>

        <DialogContent>
          <Typography variant="body2" textAlign="center">
            Welcome! Your account has been register successfully. You can now
            log in and start exploring.
          </Typography>
        </DialogContent>

        {/* Divider */}
        <Divider />

        {/* Dialog Actions */}
        <DialogActions>
          {/* <CancelBtn onClick={handleClose}>Cancel</CancelBtn> */}

          <ConfirmBtn onClick={handleClose}>OK</ConfirmBtn>
        </DialogActions>
      </Dialog>
    </>
  );
}
