import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline, Container, Switch, StyledEngineProvider } from "@mui/material";
import React from "react";
import { useState } from "react";
import { SwitchComponent } from "./component/SwitchComponent/SwitchComponent";
import AccountMenuComponent from "./component/AccountMenuComponent/AccountMenuComponent";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "hsl(230, 17%, 14%)"
      }
    }
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "hsl(0, 0%, 100%)"
      }
    }
  });

  const selectedTheme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <AccountMenuComponent />
        <SwitchComponent onChange={() => setMode(mode === "light" ? "dark" : "light")} checked={mode === "light"}/>
      </StyledEngineProvider>
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default App;