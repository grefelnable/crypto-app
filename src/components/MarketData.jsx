import { useState, useEffect } from "react";
import { formatCompactNumber } from "../utils/FormatNumber";
import styled from "styled-components";

const MarketData = () => {
  const [data, setData] = useState(0);
  const [coins, setCoins] = useState(0);
  const [exchange, setExchange] = useState(0);

  // fetch data from https://api.coingecko.com/api/v3/global
  useEffect(() => {
    const fetchMarketData = async () => {
      const response = await fetch("https://api.coingecko.com/api/v3/global");
      const items = await response.json();
      console.log(items);
      setData(items.data.total_market_cap.usd);
      setCoins(items.data.active_cryptocurrencies);
      setExchange(items.data.markets);
    };
    fetchMarketData().catch(console.error);
  }, []);
  console.log(data);

  return (
    <Container>
      <li>Coins: {coins}</li>
      <li>Exchange: {exchange}</li>
      <li>•${formatCompactNumber(data)}</li>
      <li>Volume:</li>
      <li>Bitcoin</li>
      <li>Ethereum</li>
    </Container>
  );
};
export default MarketData;

const Container = styled.ul``;
