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
import CoinInformation from "./pages/CoinInformation";
import { SkeletonTheme } from "react-loading-skeleton";

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
        <SkeletonTheme
          baseColor={theme === "dark" ? "#1e293b" : "#e2e8f0"}
          highlightColor={theme === "dark" ? "#f1f5f9" : "#0f172a"}
        >
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="/coin" element={<CoinInformation />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </SkeletonTheme>
      </>
    </ThemeProvider>
  );
}

export default App;

// Skeleton theme colors if "dark" or "light" theme
