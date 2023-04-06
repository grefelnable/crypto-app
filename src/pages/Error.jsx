import styled from "styled-components";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Section>
      <div>
        <h2>404</h2>
        <p>Page not Found</p>
        <Link to="/">Back Home</Link>
      </div>
    </Section>
  );
};
export default Error;

// CSS

const Section = styled.section`
  height: 100vh;
  display: grid;
  place-items: center;

  h2 {
    color: var(--primary-500);
  }
`;
