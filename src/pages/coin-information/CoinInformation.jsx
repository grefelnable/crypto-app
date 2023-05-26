import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import * as Styled from "./CoinInformation.styled";
import { LinkIcon } from "../../utils/icons";

const CoinInformation = () => {
  const selectedCoin = useSelector((store) => store.singleCoin);
  const [coinName, setCoinName] = useState();
  const [coinImage, setCoinImage] = useState();
  const [coinSymbol, setCoinSymbol] = useState();
  const [coinLink, setCoinLink] = useState();
  const [coinLinkName, setCoinLinkName] = useState();

  const COIN_URL = `
  https://api.coingecko.com/api/v3/coins/${selectedCoin}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`;

  useEffect(() => {
    console.log(COIN_URL);
    const fetchCoin = async () => {
      try {
        const response = await axios.get(COIN_URL);
        const data = response.data;
        console.log(data.links.homepage[0]);
        setCoinName(data.name);
        setCoinImage(data.image.small);
        setCoinSymbol(data.symbol);
        setCoinLink(data.links.homepage[0]);
        // display link without the https:// and the last character of the string
        const coinLinkLength = data.links.homepage[0].length;
        setCoinLinkName(
          data.links.homepage[0].substring(8, coinLinkLength - 1)
        );
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchCoin();
  }, []);

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
            <LinkIcon />
            <a href={coinLink} target="_blank">
              {coinLinkName}
            </a>
          </Styled.CoinLink>
        </Styled.CoinImageWebsite>
        {/* price and ATH and ATL */}

        {/* Market Cap */}
      </Styled.Container>
    </>
  );
};
export default CoinInformation;
