import styled from "styled-components";
import ChartsOverview from "../components/ChartsOverview";

const Home = () => {
  return (
    <Container>
      <h2>Your Overview</h2>
      <ChartsOverview />
    </Container>
  );
};
export default Home;

const Container = styled.main`
  h2 {
    font-size: 1.375rem;
  }
`;
