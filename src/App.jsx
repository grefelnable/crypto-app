import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Error from "./pages/Error";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

// CSS
