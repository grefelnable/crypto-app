import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import * as Styled from "./CoinInformation.styled";
import { LinkIcon, SquareStackIcon } from "../../utils/icons";
import { ArrowIcon } from "../../components/Table/Table.styled";
import moment from "moment";

const CoinInformation = () => {
  // Access redux state from store
  const selectedCoin = useSelector((store) => store.singleCoin);
  const currency = useSelector((store) => store.currency);

  const [coinName, setCoinName] = useState();
  const [coinImage, setCoinImage] = useState();
  const [coinSymbol, setCoinSymbol] = useState();
  const [coinLink, setCoinLink] = useState();
  const [coinLinkName, setCoinLinkName] = useState();
  const [coinPrice, setCoinPrice] = useState();
  const [coinDailyChange, setCoinDailyChange] = useState();
  const [coinAth, setCoinAth] = useState();
  const [coinAthChange, setCoinAthChange] = useState();
  const [coinAthDate, setCoinAthDate] = useState();
  const [coinAtl, setCoinAtl] = useState();
  const [coinAtlChange, setCoinAtlChange] = useState();
  const [coinAtlDate, seCoinAtlDate] = useState();

  const COIN_URL = `
  https://api.coingecko.com/api/v3/coins/${selectedCoin}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`;

  useEffect(() => {
    console.log(currency.name);
    const fetchCoin = async () => {
      try {
        const response = await axios.get(COIN_URL);
        const data = response.data;
        // console log
        console.log(data.market_data.ath_date[`${currency.name}`]);
        // dates
        const athDate = moment(
          data.market_data.ath_date[`${currency.name}`]
        ).format("MM-DD-YYYY");

        console.log(athDate);
        // end of test
        setCoinName(data.name);
        setCoinImage(data.image.small);
        setCoinSymbol(data.symbol);
        setCoinLink(data.links.homepage[0]);
        setCoinPrice(data.market_data.current_price[`${currency.name}`]);
        setCoinDailyChange(
          data.market_data.price_change_percentage_24h_in_currency[
            `${currency.name}`
          ]
        );
        setCoinAth(data.market_data.ath[`${currency.name}`]);
        // display link without the https:// and the last character of the string
        const coinLinkLength = data.links.homepage[0].length;
        setCoinLinkName(
          data.links.homepage[0].substring(8, coinLinkLength - 1)
        );
        setCoinAthChange(
          data.market_data.ath_change_percentage[`${currency.name}`]
        );
        setCoinAthDate(athDate);
        setCoinAtl(data.market_data.atl[`${currency.name}`]);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchCoin();
  }, [currency]);

  return (
    <>
      <h2>Your Summary:</h2>
      <Styled.Container>
        {/* Image and website */}
        <Styled.CoinImageWebsite>
          <Styled.CoinImage>
            <img src={coinImage} alt={coinName} />
          </Styled.CoinImage>
          <Styled.CoinName>
            {coinName} <span>({coinSymbol})</span>
          </Styled.CoinName>
          <Styled.CoinLink>
            <a href={coinLink} target="_blank">
              <LinkIcon />
              {coinLinkName}
            </a>
          </Styled.CoinLink>
        </Styled.CoinImageWebsite>
        {/* price and ATH and ATL */}
        <Styled.MarketData>
          <Styled.Price>
            {currency.symbol} {coinPrice}
          </Styled.Price>
          <Styled.DailyPriceChange price={coinDailyChange}>
            <ArrowIcon price={coinDailyChange} />
            {Math.abs(coinDailyChange?.toFixed(2))}%
          </Styled.DailyPriceChange>
          <SquareStackIcon />
          <Styled.FlexContainer>
            {/* ATH */}
            <Styled.AthAtlWrapper>
              <h5>ATH:</h5>
              <p>
                {currency.symbol}
                {coinAth}
              </p>
              <p>{coinAthChange}</p>
              <p>{coinAthDate}</p>
            </Styled.AthAtlWrapper>
            {/* ATL */}
            <Styled.AthAtlWrapper>
              <h5>ATL:</h5>
              <p>
                {currency.symbol}
                {coinAtl}
              </p>
              <p>{coinAthChange}</p>
              <p>{coinAthDate}</p>
            </Styled.AthAtlWrapper>
          </Styled.FlexContainer>
        </Styled.MarketData>
        {/* Market Cap */}
      </Styled.Container>
    </>
  );
};
export default CoinInformation;
