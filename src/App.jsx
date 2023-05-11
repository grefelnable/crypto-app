import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { lightTheme, darkTheme } from "./theme/Theme";
import { GlobalStyles } from "./theme/Global";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SharedLayout from "./components/SharedLayout";
import Portfolio from "./pages/Portfolio";
import { useEffect } from "react";
import { fetchCoins } from "./redux/coinSlice";

function App() {
  // Get theme from store
  const theme = useSelector((state) => state.theme);
  // Get currency from store
  const currency = useSelector((store) => store.currency);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, []);
  // Save theme setting on local storage
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Save currency setting on local storage
  useEffect(() => {
    document.documentElement.dataset.currency = currency;
    localStorage.setItem("currency", JSON.stringify(currency));
  }, [currency]);

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
