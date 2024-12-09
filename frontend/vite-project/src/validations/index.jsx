import * as Yup from "yup";

export const registrationValidationSchema = Yup.object({
  firstName : Yup.string().required("First name required"),
  lastName : Yup.string().required("Last name required"),
  email : Yup.string().email("Invalid email address").required("Email required"),
  password : Yup.string().required("Password is required"),
  });

export const loginValidationSchema = Yup.object({
  email : Yup.string().email("Invalid email address").required("Email required"),
  password : Yup.string().required("Password is required"),
  confirmPassword : Yup.string().oneOf([Yup.ref('password'), null], "Passwords must match"),
  });