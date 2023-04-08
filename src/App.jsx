import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SharedLayout from "./components/SharedLayout";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

// CSS
