import { useState, useEffect } from "react";
import styled from "styled-components";
import BitcoinChart from "../components/Charts/AreaChartBtc";
import moment from "moment";
import BarChartBtc from "../components/Charts/BarChartBtc";
import { formatCompactNumber } from "../utils/FormatNumber";
import Table from "../components/Table";
import { useSelector } from "react-redux";

const Home = () => {
  const currency = useSelector((store) => store.currency);

  const [isLoaded, setIsLoaded] = useState(false);
  const [coinData, setCoinData] = useState([{}]);
  const [lastUpdate, setLastUpdate] = useState(0);
  const [btcCurrentPrice, setBtcCurrentPrice] = useState(0);
  const [coinVolume, setCoinVolume] = useState([{}]);
  const [btcCurrentVolume, setBtcCurrentVolume] = useState(0);
  const [volumeLastUpdate, setVolumeLastUpdate] = useState(0);

  const url = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency.name}&days=180&interval=current`;

  // Fetch data for charts
  useEffect(() => {
    const fetchBitcoinData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const itemsPrices = data.prices.map((value) => ({
        x: value[0],
        y: value[1].toFixed(2),
      }));
      const itemsVolume = data.total_volumes.map((value) => ({
        x: value[0],
        y: value[1].toFixed(2),
      }));

      setIsLoaded(true);
      setLastUpdate(moment(itemsPrices[180].x).format("MMM DD, YYYY"));
      setCoinData(itemsPrices);
      setCoinVolume(itemsVolume);
      setBtcCurrentPrice(Number(itemsPrices[180].y).toLocaleString());
      setBtcCurrentVolume(formatCompactNumber(itemsVolume[180].y));
      setVolumeLastUpdate(moment(itemsVolume[180].x).format("MMM DD, YYYY"));
    };
    fetchBitcoinData().catch(console.error);

    // test
    console.log(currency);
  }, [currency]);

  return (
    <Container>
      <h2>Your Overview</h2>
      <ChartWrapper>
        <BitcoinChart
          coinData={coinData}
          isLoaded={isLoaded}
          lastUpdate={lastUpdate}
          btcCurrentPrice={btcCurrentPrice}
        />
        <BarChartBtc
          coinVolume={coinVolume}
          isLoaded={isLoaded}
          btcCurrentVolume={btcCurrentVolume}
          volumeLastUpdate={volumeLastUpdate}
        />
      </ChartWrapper>
      <h2>Your Overview</h2>
      <Table />
    </Container>
  );
};
export default Home;

const Container = styled.main`
  h2 {
    font-size: 1.375rem;
  }
`;

const ChartWrapper = styled.div`
  margin-bottom: 1em;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 2.875em;
  }
`;
