import { useState } from "react";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Heading>Crypto App</Heading>
    </div>
  );
}

export default App;

// CSS

const Heading = styled.h1`
  color: var(--primary-500);
`;
