import React from "react";
import { useFormik } from "formik";
import { Box, Button, TextField, Typography } from "@mui/material";
import { registrationValidationSchema } from "../../validations/index.jsx";
import { toast } from 'react-toastify';
import Spinner from "../../components/Spinner/index.jsx";

const RegistrationForm = ({ registerUser, data, registerLoading}) => {
    const { styles } = data;
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
      validationSchema: registrationValidationSchema,
      onSubmit: (values) => {
        registerUser(values, (response) => {
           if(response.success) {
               toast(response.message)
           }
        });
      },
    });
  return (
      <Box sx={{ padding: "3rem", height: "35rem", ...styles }}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="firstName"
          label="First Name"
          variant="outlined"
          error={touched.firstName && errors.firstName}
          helperText={errors.firstName}
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          fullWidth
          margin="normal"
        />
        <TextField
          id="lastName"
          label="Last Name"
          variant="outlined"
          error={touched.lastName && errors.lastName}
          helperText={errors.lastName}
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          fullWidth
          margin="normal"
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          error={touched.email && errors.email}
          helperText={errors.email}
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type="email"
          fullWidth
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          error={touched.password && errors.password}
          helperText={errors.password}
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          fullWidth
          margin="normal"
        />
        <Box>
          <Button
            variant="outlined"
            type="submit"
            fullWidth
            sx={{ marginTop: "2rem" }}
            color="success"
          >
            {" "}
            Submit{" "}
          </Button>
        </Box>
      </form>

      <Box>
        <Typography>
          {" "}
          Already got an account ?
          <Button onClick={registerUser}> Login </Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default RegistrationForm;
