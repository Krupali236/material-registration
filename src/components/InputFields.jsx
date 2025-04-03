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
import Autocomplete from "@mui/material/Autocomplete";
import Location from "./location";
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

  const selectedCountry = Location[0].countries.find(
    (c) => c.name === inputValue?.country
  );

  const selectedState = selectedCountry?.states.find(
    (s) => s.name === inputValue?.state
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
            error={Boolean(errors?.username)}
            id={errors?.username ? "filled-error-helper-text" : "filled-basic"}
            placeholder="Username"
            variant="filled"
            name="username"
            helperText={errors.username ? errors.username : ""}
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
            helperText={errors.email ? errors.email : ""}
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
                    // backgroundColor: "#0aa69f",
                    // "&:hover": { backgroundColor: "#088d86" },
                    backgroundColor:
                      inputValue.gender === "Male" ? "#0aa69f" : "#ccc",
                    "&:hover": {
                      backgroundColor:
                        inputValue.gender === "Male" ? "#088d86" : "#bbb",
                    },
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
                    // backgroundColor: "#3c2e86",
                    backgroundColor:
                      inputValue.gender === "Female" ? "#3c2e86" : "#ccc",
                    "&:hover": {
                      backgroundColor:
                        inputValue.gender === "Female" ? "#322c53" : "#bbb",
                    },
                    // "&:hover": { backgroundColor: "#322c53" },
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
        {/* Country  */}
        <Grid size={{ lg: 4, md: 4, sm: 4, xs: 12 }}>
          <Typography variant="body2" gutterBottom>
            Country
          </Typography>
        </Grid>
        <Grid size={{ lg: 8, md: 8, sm: 8, xs: 12 }}>
          {/* Country  */}
          <Autocomplete
            disablePortal
            id={errors?.country ? "filled-error-helper-text" : "filled-basic"}
            name="country"
            options={Location[0].countries.map((country) => country.name)}
            sx={{ width: 300, color: "#000" }}
            value={inputValue?.country || null}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Country"
                // sx={{
                //   "& .MuiFilledInput-root": {
                //     border: errors?.country ? "1px solid #d32f2f" : "none",
                //   },
                // }}
                // error={Boolean(errors?.country)}
                // helperText={errors.country ? "please select country" : ""}
              />
            )}
            onChange={(event, value) => {
              setInputValue((prev) => ({
                ...prev,
                country: value || "",
                state: "",
                city: "",
              }));
            }}
          />
        </Grid>

        {/* State  */}
        <Grid size={{ lg: 4, md: 4, sm: 4, xs: 12 }}>
          <Typography variant="body2" gutterBottom>
            State
          </Typography>
        </Grid>
        <Grid size={{ lg: 8, md: 8, sm: 8, xs: 12 }}>
          {/* State  */}
          <Autocomplete
            disablePortal
            options={
              selectedCountry
                ? selectedCountry.states.map((state) => state.name)
                : []
            }
            value={inputValue?.state || null}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="State"
                // sx={{
                //   "& .MuiFilledInput-root": {
                //     border: errors?.state ? "1px solid #d32f2f" : "none",
                //   },
                // }}
                // error={Boolean(errors?.state)}
                // helperText={errors.state ? "please select state" : ""}
              />
            )}
            onChange={(event, value) => {
              setInputValue((prev) => ({
                ...prev,
                state: value || "",
                city: "",
              }));
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
          <Autocomplete
            disablePortal
            options={selectedState ? selectedState.cities : []}
            sx={{ width: 300 }}
            value={inputValue?.city || null}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="City"
                // sx={{
                //   "& .MuiFilledInput-root": {
                //     border: errors?.city ? "1px solid #d32f2f" : "none",
                //   },
                // }}
                // error={Boolean(errors?.city)}
                // helperText={errors.city ? "please select city" : ""}
              />
            )}
            onChange={(event, value) => {
              setInputValue((prev) => ({ ...prev, city: value || "" }));
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
