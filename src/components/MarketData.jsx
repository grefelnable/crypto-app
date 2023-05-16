import { useState, useEffect } from "react";
import { formatCompactNumber } from "../utils/FormatNumber";
import styled from "styled-components";
import ProgressBar from "./progress-bar.component";
import btcImage from "../assets/bitcoin.png";
import ethImage from "../assets/eth.png";
import { ReactComponent as DotIcon } from "../assets/dot-icon.svg";
import { useSelector } from "react-redux";
// react loading skeleton imports
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MarketData = () => {
  const currency = useSelector((store) => store.currency);

  const [totalMarketCap, setTotalMarketCap] = useState(0);
  const [coins, setCoins] = useState(0);
  const [exchange, setExchange] = useState(0);
  const [totalVolume, setTotalVolume] = useState(0);
  const [btcMarketCapPercentage, setBtcMarketCapPercentage] = useState(0);
  const [ethMarketCapPercentage, setEthMarketCapPercentage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // fetch data from https://api.coingecko.com/api/v3/global
  useEffect(() => {
    const fetchMarketData = async () => {
      const response = await fetch("https://api.coingecko.com/api/v3/global");
      const items = await response.json();
      setIsLoaded(true);
      setCoins(items.data.active_cryptocurrencies);
      setExchange(items.data.markets);
      setTotalMarketCap(items.data.total_market_cap[`${currency.name}`]);
      setTotalVolume(items.data.total_volume[`${currency.name}`]);
      setBtcMarketCapPercentage(
        Math.floor(items.data.market_cap_percentage.btc)
      );
      setEthMarketCapPercentage(
        Math.floor(items.data.market_cap_percentage.eth)
      );
    };
    fetchMarketData().catch(console.error);
  }, [currency]);

  return (
    <Container>
      <ListContainer>
        <li className="display-none">
          {isLoaded ? (
            `Coins: ${coins.toLocaleString("en-US")}`
          ) : (
            <Skeleton width={100} />
          )}
        </li>
        <li className="display-none">
          {isLoaded ? `Exchange: ${exchange}` : <Skeleton width={100} />}
        </li>
        <li className="display-flex">
          {isLoaded ? (
            <>
              <DotIconStyled />
              {currency.symbol}
              {formatCompactNumber(totalMarketCap)}
            </>
          ) : (
            <Skeleton width={70} />
          )}
        </li>
        <li className="display-flex">
          {isLoaded ? (
            <>
              <DotIconStyled />
              {currency.symbol}
              {formatCompactNumber(totalVolume)}
            </>
          ) : (
            <Skeleton width={70} />
          )}
        </li>
        <li className=" display-flex">
          {isLoaded ? (
            <>
              <img src={btcImage} alt="btc image" />{" "}
              <p>{btcMarketCapPercentage}% </p>
              <ProgressBar percentage={btcMarketCapPercentage} />
            </>
          ) : (
            <Skeleton width={70} />
          )}
        </li>
        <li className="display-flex">
          {isLoaded ? (
            <>
              <img src={ethImage} alt="eth image" /> {ethMarketCapPercentage}%
              <ProgressBar percentage={ethMarketCapPercentage} />
            </>
          ) : (
            <Skeleton width={70} />
          )}
        </li>
      </ListContainer>
    </Container>
  );
};
export default MarketData;

const Container = styled.div`
  width: 100%;

  /* darken bg on small screen */
  @media screen and (max-width: 768px) {
    background: ${({ theme }) => theme.navbarBackground};
  }
`;

const ListContainer = styled.ul`
  width: 95vw;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 1.25em;
  background: ${({ theme }) => theme.navbarBackground};
  display: flex;
  align-items: center;
  padding: 0.5em 1em;
  border-bottom-left-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  gap: 0.75em;

  /* gap and width on bigger screen */
  @media screen and (min-width: 768px) {
    gap: 1em;
    width: fit-content;
  }

  li {
    justify-content: space-between;
    align-items: center;
    gap: 0.25em;
  }
  /* display on all screen */
  .display-flex {
    display: flex;
  }
`;

const DotIconStyled = styled(DotIcon)`
  fill: #fff;
`;
