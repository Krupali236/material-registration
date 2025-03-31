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
  // const navigate = useNavigate();
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
            backgroundColor: "#0faf82",
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
        <DialogTitle id="success-dialog" sx={{ fontWeight: "bold" }}>
          Sign up Successful!
        </DialogTitle>

        <DialogContent>
          <Typography variant="body2" sx={{ mt: 1, textAlign: "center" }}>
            Welcome! Your account has been created successfully. You can now log
            in and start exploring.
          </Typography>
        </DialogContent>

        {/* Divider */}
        <Divider />

        {/* Dialog Actions */}
        <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
          <CancelBtn onClick={handleClose}>Cancel</CancelBtn>

          <ConfirmBtn onClick={handleClose}>OK</ConfirmBtn>
        </DialogActions>
      </Dialog>
    </>
  );
}
