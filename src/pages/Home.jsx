import { useState, useEffect } from "react";
import styled from "styled-components";
import BitcoinChart from "../components/AreaChartBtc";

const url =
  "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=180&interval=daily";
const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [coinData, setCoinData] = useState([{}]);
  // Fetch data for charts
  useEffect(() => {
    const fetchBitcoinData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const items = data.prices.map((value) => ({
        x: value[0],
        y: value[1].toFixed(2),
      }));
      setIsLoaded(true);
      setCoinData(items);
    };
    fetchBitcoinData().catch(console.error);
  }, []);

  return (
    <Container>
      <h2>Your Overview</h2>
      <BitcoinChart coinData={coinData} isLoaded={isLoaded} />
    </Container>
  );
};
export default Home;

const Container = styled.main`
  h2 {
    font-size: 1.375rem;
  }
`;
