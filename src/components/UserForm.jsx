import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Typography, Snackbar } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const UserForm = () => {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (unsavedChanges) {
        event.preventDefault();
        event.returnValue =
          "You have unsaved changes. Are you sure you want to leave?";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [unsavedChanges]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setUnsavedChanges(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    setUnsavedChanges(false);
    setOpenSnackbar(true);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "auto",
        p: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="h5" gutterBottom>
        User Data Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ style: { color: "#d1d5db" } }}
        />
        <TextField
          fullWidth
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ style: { color: "#d1d5db" } }}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ style: { color: "#d1d5db" } }}
        />
        <TextField
          fullWidth
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ style: { color: "#d1d5db" } }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            px: 3,
            py: 1,
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "8px",
            textTransform: "none",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              backgroundColor: "primary.dark",
              transform: "scale(1.05)",
              transition: "0.2s ease-in-out",
            },
          }}
        >
          Save
        </Button>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        message="User data saved!"
        onClose={() => setOpenSnackbar(false)}
      />
    </Box>
  );
};

export default UserForm;
