import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline, StyledEngineProvider } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Dashboard } from "./Dashboard";
import SignInSide from "./SignIn";

function App() {
  const [mode, setMode] = useState("light");

  const [isLogin,setLogin] = useState(false);

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
        {
          isLogin ? (
            /*<Dashboard onChange={() => setMode(mode === "light" ? "dark" : "light")} checked={mode === "light"} />*/
            <Dashboard/>
          ):(
            <SignInSide/>
          )
        }
      </StyledEngineProvider>
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default App;
