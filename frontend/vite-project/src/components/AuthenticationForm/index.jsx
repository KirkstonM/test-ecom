import React from 'react';
import RegistrationForm from "../../forms/Registration/index.jsx";
import {Box} from "@mui/material";
import LoginForm from "../../forms/Login/index.jsx";
import Spinner from "../Spinner/index.jsx";

const AuthenticationForm = ({ userRegistered, registerLoading, ...props }) => {
  return (

    <Box sx={{ width : "33.3%",
      height: "100vh",
      margin: "0 auto",
      display: "flex",
      alignItems : "center",
      justifyContent : "center",
    }}>
        {
            registerLoading
                ? <Spinner />
                : userRegistered ? <LoginForm {...props}/> : <RegistrationForm {...props}/>
        }
    </Box>
  )
}

export default AuthenticationForm