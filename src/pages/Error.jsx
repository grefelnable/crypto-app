import styled from "styled-components";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Section>
      <div>
        <h2>404</h2>
        <p>Page not Found</p>
        <Link to="/">
          <span>Back Home</span>{" "}
        </Link>
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
  text-align: center;

  h2 {
    color: var(--primary-500);
    font-weight: 500;
    font-size: 10rem;
  }
  span {
    color: var(--primary-500);
  }
  span:hover {
    color: var(--primary-300);
  }
`;
