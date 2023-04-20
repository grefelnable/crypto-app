import { useState, useEffect } from "react";
import styled from "styled-components";
import BitcoinChart from "../components/AreaChartBtc";
import moment from "moment";

const url =
  "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=180&interval=current";
const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [coinData, setCoinData] = useState([{}]);
  const [lastUpdate, setLastUpdate] = useState(0);
  const [btcCurrentPrice, setBtcCurrentPrice] = useState("");
  // Fetch data for charts
  useEffect(() => {
    const fetchBitcoinData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const items = data.prices.map((value) => ({
        x: value[0],
        y: value[1].toFixed(2),
      }));
      setLastUpdate(moment(items[180].x).format("MMM DD YYYY"));
      setIsLoaded(true);
      setCoinData(items);
      setBtcCurrentPrice(Number(items[180].y).toLocaleString("en-US"));
    };
    fetchBitcoinData().catch(console.error);
  }, []);
  // console log
  console.log(btcCurrentPrice);
  return (
    <Container>
      <h2>Your Overview</h2>
      <BitcoinChart
        coinData={coinData}
        isLoaded={isLoaded}
        lastUpdate={lastUpdate}
        btcCurrentPrice={btcCurrentPrice}
      />
    </Container>
  );
};
export default Home;

const Container = styled.main`
  h2 {
    font-size: 1.375rem;
  }
`;
