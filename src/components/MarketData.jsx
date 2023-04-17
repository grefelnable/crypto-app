import { useState, useEffect } from "react";
import { formatCompactNumber } from "../utils/FormatNumber";
import styled from "styled-components";
import ProgressBar from "./progress-bar.component";

const MarketData = () => {
  const [totalMarketCap, setTotalMarketCap] = useState(0);
  const [coins, setCoins] = useState(0);
  const [exchange, setExchange] = useState(0);
  const [totalVolume, setTotalVolume] = useState(0);
  const [btcMarketCapPercentage, setBtcMarketCapPercentage] = useState(0);
  const [ethMarketCapPercentage, setEthMarketCapPercentage] = useState(0);

  // fetch data from https://api.coingecko.com/api/v3/global
  useEffect(() => {
    const fetchMarketData = async () => {
      const response = await fetch("https://api.coingecko.com/api/v3/global");
      const items = await response.json();
      console.log(items);
      setCoins(items.data.active_cryptocurrencies);
      setExchange(items.data.markets);
      setTotalMarketCap(items.data.total_market_cap.usd);
      setTotalVolume(items.data.total_volume.usd);
      setBtcMarketCapPercentage(
        Math.floor(items.data.market_cap_percentage.btc)
      );
      setEthMarketCapPercentage(
        Math.floor(items.data.market_cap_percentage.eth)
      );
    };
    fetchMarketData().catch(console.error);
  }, []);

  return (
    <Container>
      <li>Coins: {coins}</li>
      <li>Exchange: {exchange}</li>
      <li>•${formatCompactNumber(totalMarketCap)}</li>
      <li>•${formatCompactNumber(totalVolume)}</li>
      <li>
        BTC: {btcMarketCapPercentage}%{" "}
        <ProgressBar percentage={btcMarketCapPercentage} />
      </li>
      <li>
        ETH: {ethMarketCapPercentage}%{" "}
        <ProgressBar percentage={ethMarketCapPercentage} />
      </li>
    </Container>
  );
};
export default MarketData;

const Container = styled.ul`
  margin: 0 auto;
  border: 1px solid magenta;
  background: ${({ theme }) => theme.navbarBackground};
`;
