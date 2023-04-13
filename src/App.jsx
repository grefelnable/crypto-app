import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/Theme";
import { GlobalStyles } from "./theme/Global";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SharedLayout from "./components/SharedLayout";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
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
