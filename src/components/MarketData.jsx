import { useState, useEffect } from "react";
import { formatCompactNumber } from "../utils/FormatNumber";
import styled from "styled-components";
import ProgressBar from "./progress-bar.component";
import btcImage from "../assets/bitcoin.png";
import ethImage from "../assets/eth.png";
import { ReactComponent as DotIcon } from "../assets/dot-icon.svg";

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
      <li className="display-none">Coins: {coins.toLocaleString("en-US")}</li>
      <li className="display-none">Exchange: {exchange}</li>
      <li className="display-flex">
        <DotIconStyled />${formatCompactNumber(totalMarketCap)}
      </li>
      <li className="display-flex">
        <DotIconStyled />${formatCompactNumber(totalVolume)}
      </li>
      <li>
        <img src={btcImage} alt="btc image" /> {btcMarketCapPercentage}%
        <ProgressBar percentage={btcMarketCapPercentage} />
      </li>
      <li>
        <img src={ethImage} alt="eth image" /> {ethMarketCapPercentage}%
        <ProgressBar percentage={ethMarketCapPercentage} />
      </li>
    </Container>
  );
};
export default MarketData;

const Container = styled.ul`
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 1.25em;
  background: ${({ theme }) => theme.navbarBackground};
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 0.5em 1em;
  border-bottom-left-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  li {
    align-items: center;
    gap: 0.25em;
  }
  /* display on all screen */
  .display-flex {
    display: flex;
  }
  /* hide on small screens */
  @media (max-width: 768px) {
    .display-none {
      display: none;
    }
  }
`;

const DotIconStyled = styled(DotIcon)`
  fill: #fff;
`;
