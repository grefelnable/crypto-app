import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { lightTheme, darkTheme } from "./theme/Theme";
import { GlobalStyles } from "./theme/Global";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SharedLayout from "./components/SharedLayout";
import Portfolio from "./pages/Portfolio";
import { useEffect } from "react";

function App() {
  // Get theme from store
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;
