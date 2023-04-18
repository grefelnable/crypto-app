import styled from "styled-components";
import BitcoinChart from "../components/AreaChartBtc";

const Home = () => {
  return (
    <Container>
      <h2>Your Overview</h2>
      <BitcoinChart />
    </Container>
  );
};
export default Home;

const Container = styled.main`
  h2 {
    font-size: 1.375rem;
  }
`;
