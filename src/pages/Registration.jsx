import React, { useEffect, useState } from "react";
import InputFields from "../components/InputFields";
import CancelBtn from "../components/CancelBtn";
import ConfirmBtn from "../components/ConfirmBtn";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import RegisterAlert from "../components/registerAlert";
const Registration = () => {
  const [errors, setErrors] = useState({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    gender: "",
    city: "",
    country: "",
    date: "",
    subscriptions: [],
  });
  const isValid = (value) => {
    const handleError = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const alphabetRegex = /^[a-zA-Z]+$/;
    if (!value?.username) {
      handleError.username = "Please Enter username";
    } else if (!alphabetRegex.test(value?.username)) {
      handleError.username = "please enter valid username";
    }
    if (!value?.email) {
      handleError.email = "please Enter email";
    } else if (!emailRegex.test(value?.email)) {
      handleError.email = "please enter valid email";
    }
    if (!value?.date) {
      handleError.date = "Please Enter Date";
    }
    if (!value?.city) {
      handleError.city = "Please Enter city";
    }
    if (!value?.state) {
      handleError.state = "Please Enter state";
    }
    if (!value?.country) {
      handleError.country = "Please Enter country";
    }
    setErrors(handleError);
    console.log(Object.keys(handleError), "errors OBject");
    return Object.keys(handleError).length === 0;
  };
  const handleConfirmBtn = () => {
    const validation = isValid(inputValue);
    if (validation) {
      const userData = JSON.parse(localStorage.getItem("usersData")) || [];

      const userExist = userData.some(
        (user) =>
          user.username === inputValue.username ||
          user.email === inputValue.email
      );

      if (userExist) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          if (userData.some((user) => user.username === inputValue.username)) {
            newErrors.username = "Username already exists!";
          }
          if (userData.some((user) => user.email === inputValue.email)) {
            newErrors.email = "Email already exists!";
          }
          return newErrors;
        });
      } else {
        userData.push(inputValue);
        localStorage.setItem("usersData", JSON.stringify(userData));
        setInputValue({
          username: "",
          email: "",
          gender: "",
          city: "",
          country: "",
          date: "",
          subscriptions: [],
        });
        console.log("Opening Dialog..."); // Debugging log
        setDialogOpen(true);
      }
    }
  };

  const handleClearBtn = () => {
    setInputValue((prev) => ({
      ...prev,
      username: "",
      email: "",
      gender: "",
      city: "",
      state: "",
      country: "",
      date: "",
      subscriptions: [],
    }));
    setErrors({});
  };
  return (
    <>
      <Box sx={{ width: { xs: "100%", sm: "100%", md: "80%", lg: "70%" } }}>
        <Typography variant="h5" gutterBottom>
          Registration
        </Typography>
        <Typography variant="overline" gutterBottom textAlign="center">
          CLICK FOR YOUR SHOOT
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <InputFields
                inputValue={inputValue}
                setInputValue={setInputValue}
                errors={errors}
              />
              {errors?.user && (
                <Typography color="error">{errors.user}</Typography>
              )}
              <Box
                sx={{
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: {
                    lg: "row",
                    md: "row",
                    sm: "row",
                    xs: "row",
                  },
                  justifyContent: {
                    lg: "flex-end",
                    md: "flex-end",
                    sm: "center",
                    xs: "center",
                  },
                  gap: 1,
                }}
              >
                <CancelBtn onClick={handleClearBtn}>Clear</CancelBtn>
                <ConfirmBtn onClick={handleConfirmBtn}>Confirm </ConfirmBtn>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <RegisterAlert
        open={dialogOpen}
        handleClose={() => setDialogOpen(false)}
      />
    </>
  );
};

export default Registration;
