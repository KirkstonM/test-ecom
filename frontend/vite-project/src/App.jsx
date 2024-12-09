import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import DynamicRouter from "./routing";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { appTheme } from "./styles/Theme";
function App() {

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Router>
        <Suspense fallback={<div> Loading ...... </div>}>
          <DynamicRouter />
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}
export default App;
