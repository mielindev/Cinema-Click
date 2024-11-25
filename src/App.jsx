import { useState } from "react";
import ThemeContext from "./context/themeContext";
import useRoutesElements from "./routes/useRoutesElements";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const routeElements = useRoutesElements();
  const [theme, setTheme] = useState("dark");
  const themeMode = createTheme({
    palette: {
      mode: theme,
    },
  });
  return (
    <ThemeProvider theme={themeMode}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        {routeElements}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
