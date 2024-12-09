import React from "react";
import { useFormik } from "formik";
import { Box, Button, TextField } from "@mui/material";
import {loginValidationSchema} from "../../validations/index.jsx";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ loginUser, data }) => {

    const { styles } = data;
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema : loginValidationSchema,
      onSubmit: (values) => {
          loginUser(values, (response) => {
              if(response.success) {
                  navigate("/web/home")
              }
          })
      }
    });
  return (
      <Box sx={{ padding: "3rem", height: "35rem", ...styles }}>
      <form onSubmit={handleSubmit}>
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
        <TextField
          id="confirmPassword"
          label="Confirm Password"
          variant="outlined"
          error={touched.confirmPassword && errors.confirmPassword}
          helperText={errors.confirmPassword}
          name="confirmPassword"
          value={values.confirmPassword}
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
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default LoginForm;
