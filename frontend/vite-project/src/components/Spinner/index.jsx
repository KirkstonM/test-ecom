import React from "react";
import { Box } from "@mui/material";
import { ClipLoader } from "react-spinners";


const Spinner = () =>
    <Box sx={{ width : "100%", height : "100vh", display : "flex", alignItems : "center", justifyContent : "center" }}>
        <ClipLoader
            color={"purple"}
            size={200}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </Box>

export default  Spinner;