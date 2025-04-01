import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
const InputFields = React.memo(({ inputValue, setInputValue, errors }) => {
  const handleGenderChange = React.useCallback(
    (event, newGender) => {
      if (newGender !== null) {
        setInputValue((prev) => ({ ...prev, gender: newGender }));
      }
    },
    [setInputValue]
  );

  const handleInputChange = React.useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputValue((prev) => ({ ...prev, [name]: value }));
    },
    [setInputValue]
  );

  const handleCheckboxChange = React.useCallback(
    (event) => {
      const { name, checked } = event.target;
      setInputValue((prev) => {
        const updatedSubscriptions = checked
          ? [...prev.subscriptions, name]
          : prev.subscriptions.filter((item) => item !== name);
        return { ...prev, subscriptions: updatedSubscriptions };
      });
    },
    [setInputValue]
  );
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { width: "100%" } }}
      noValidate
      autoComplete="off"
    >
      <Grid
        container
        spacing={1}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          mt: errors.length > 0 ? 4 : 2,
        }}
      >
        {/* Name  */}
        <Grid size={{ lg: 4, md: 4, sm: 4, xs: 12 }}>
          <Typography variant="body2" gutterBottom>
            Name
          </Typography>
        </Grid>
        <Grid size={{ lg: 8, md: 8, sm: 8, xs: 12 }}>
          {/* Username  */}
          <TextField
            error
            id={errors?.username ? "filled-error-helper-text" : "filled-basic"}
            placeholder="Username"
            variant="filled"
            name="username"
            helperText={errors.username ? "please enter valid username" : ""}
            value={inputValue?.username}
            onChange={handleInputChange}
            type="text"
            sx={{
              "& .MuiFilledInput-root": {
                border: errors?.username ? "1px solid #d32f2f" : "none",
              },
            }}
          />
        </Grid>

        {/* Email */}
        <Grid size={{ lg: 4, md: 4, sm: 4, xs: 12 }}>
          <Typography variant="body2" gutterBottom>
            Email
          </Typography>
        </Grid>
        <Grid size={{ lg: 8, md: 8, sm: 8, xs: 12 }}>
          {/* Email  */}
          <TextField
            error
            id={errors?.email ? "filled-error-helper-text" : "filled-basic"}
            placeholder="Email"
            variant="filled"
            name="email"
            helperText={errors.email ? "please enter valid email" : ""}
            value={inputValue?.email}
            onChange={handleInputChange}
            type="email"
            sx={{
              "& .MuiFilledInput-root": {
                border: errors?.email ? "1px solid #d32f2f" : "none",
              },
            }}
          />
        </Grid>

        {/* Gender  */}
        <Grid size={{ lg: 4, md: 4, sm: 4, xs: 12 }}>
          <Typography variant="body2" gutterBottom>
            Gender
          </Typography>
        </Grid>
        <Grid size={{ lg: 8, md: 8, sm: 8, xs: 12 }}>
          {/* Gender  */}
          <ToggleButtonGroup
            value={inputValue?.gender}
            exclusive
            onChange={handleGenderChange}
            aria-label="gender selection"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 2,
            }}
          >
            <ToggleButton
              value="Male"
              sx={{
                padding: "5px !important",
                "&.MuiToggleButtonGroup-root, &.MuiToggleButtonGroup-firstButton, &.MuiToggleButtonGroup-middleButton , & .MuiToggleButtonGroup-lastButton":
                  {
                    border: 1,
                    borderColor: "transparent",
                    borderRadius: "100% !important",
                    backgroundColor: "#0aa69f",
                    "&:hover": { backgroundColor: "#088d86" },
                  },
              }}
            >
              <MaleIcon sx={{ fill: "white", fontSize: "18px !important" }} />
            </ToggleButton>
            <Typography variant="caption">Male</Typography>
            <ToggleButton
              value="Female"
              aria-label="Female"
              sx={{
                padding: "5px !important",
                "&.MuiToggleButtonGroup-root, &.MuiToggleButtonGroup-firstButton, &.MuiToggleButtonGroup-middleButton , &.MuiToggleButtonGroup-lastButton":
                  {
                    border: 1,
                    borderColor: "transparent",
                    borderRadius: "100% !important",
                    backgroundColor: "#3c2e86",
                    "&:hover": { backgroundColor: "#322c53" },
                  },
              }}
            >
              <FemaleIcon sx={{ fill: "white", fontSize: "18px !important" }} />
            </ToggleButton>
            <Typography variant="caption">Female</Typography>
          </ToggleButtonGroup>
        </Grid>

        {/* Date of birth  */}
        <Grid size={{ lg: 4, md: 4, sm: 4, xs: 12 }}>
          <Typography variant="body2" gutterBottom>
            Date of Birth
          </Typography>
        </Grid>
        <Grid size={{ lg: 8, md: 8, sm: 8, xs: 12 }}>
          {/* Date  */}
          <TextField
            error
            id={errors?.date ? "filled-error-helper-text" : "filled-basic"}
            variant="filled"
            name="date"
            helperText={errors.date ? "please enter valid date" : ""}
            // value={inputValue?.date}
            value={
              inputValue?.date
                ? inputValue.date.split("/").reverse().join("-") // Convert dd/mm/yyyy to yyyy-mm-dd
                : ""
            }
            onChange={handleInputChange}
            type="date"
            sx={{
              "& .MuiFilledInput-root": {
                border: errors?.date ? "1px solid #d32f2f" : "none",
              },
            }}
          />
        </Grid>

        {/* City  */}
        <Grid size={{ lg: 4, md: 4, sm: 4, xs: 12 }}>
          <Typography variant="body2" gutterBottom>
            City
          </Typography>
        </Grid>
        <Grid size={{ lg: 8, md: 8, sm: 8, xs: 12 }}>
          {/* City  */}
          <TextField
            error
            id={errors?.city ? "filled-error-helper-text" : "filled-basic"}
            placeholder="City"
            variant="filled"
            name="city"
            helperText={errors.city ? "please enter valid city" : ""}
            value={inputValue?.city}
            onChange={handleInputChange}
            type="text"
            sx={{
              "& .MuiFilledInput-root": {
                border: errors?.city ? "1px solid #d32f2f" : "none",
              },
            }}
          />
        </Grid>

        {/* Country  */}
        <Grid size={{ lg: 4, md: 4, sm: 4, xs: 12 }}>
          <Typography variant="body2" gutterBottom>
            Country
          </Typography>
        </Grid>
        <Grid size={{ lg: 8, md: 8, sm: 8, xs: 12 }}>
          {/* Country  */}
          <TextField
            error
            id={errors?.country ? "filled-error-helper-text" : "filled-basic"}
            placeholder="Country"
            variant="filled"
            name="country"
            helperText={errors.country ? "please enter valid country" : ""}
            value={inputValue?.country}
            onChange={handleInputChange}
            type="text"
            sx={{
              "& .MuiFilledInput-root": {
                border: errors?.country ? "1px solid #d32f2f" : "none",
              },
            }}
          />
        </Grid>

        {/* Subscription  */}
        <Grid size={{ lg: 4, md: 4, sm: 4, xs: 12 }}>
          <Typography variant="body2" gutterBottom>
            Subscription
          </Typography>
        </Grid>
        <Grid
          size={{ lg: 8, md: 8, sm: 8, xs: 12 }}
          sx={{ margin: { lg: "20px 0px", md: "5px 0px", sm: "10px 0px" } }}
        >
          {/* Checkboxes  */}
          <FormGroup
            row
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              gap: 1,
            }}
          >
            {["Bronze", "Silver", "Gold"].map((subscription) => (
              <FormControlLabel
                key={subscription}
                control={
                  <Checkbox
                    name={subscription}
                    checked={inputValue.subscriptions.includes(subscription)}
                    onChange={handleCheckboxChange}
                    sx={{ padding: "0 !important", marginRight: "5px" }}
                  />
                }
                label={<Typography variant="body2">{subscription}</Typography>}
              />
            ))}
          </FormGroup>
        </Grid>
      </Grid>
    </Box>
  );
});

export default InputFields;
