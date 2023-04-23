import styled from "styled-components";
import { useState, useEffect } from "react";
import { ReactComponent as Arrow } from "../assets/arrow-icon.svg";
import { formatCompactNumber } from "../utils/FormatNumber";
import { ReactComponent as DotIcon } from "../assets/dot-icon.svg";
import { percentageColors } from "../data/percentageColors";
// to be deleted
import faker from "./faker";

// url
const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d";
const Table = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [coinItems, setCoinItems] = useState([]);

  // Temporary data for development only
  useEffect(() => {
    setCoinItems(faker);
  }, []);

  // console.log(coinItems);
  // // fetch coins information
  // useEffect(() => {
  //   const fetchCoinsInformation = async () => {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setIsLoaded(true);
  //     setCoinImage(data);
  //     // console log
  //     console.log(data.map((item) => item.id));
  //     console.log(coinImage);
  //   };

  //   fetchCoinsInformation().catch(console.error);
  // }, []);

  // if (!isLoaded) {
  //   return <div className="loading"></div>;
  // }
  //  TEST
  return (
    <Container>
      <CoinTable>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>1h%</th>
            <th>24h%</th>
            <th>7d%</th>
            <th>24h Volume/Market Cap</th>
            <th>Circulating/Total Supply</th>
            <th>Last 7d</th>
          </tr>
        </thead>
        {coinItems.map((item, index) => {
          // Different Colors for percentage bar
          const firstColor =
            percentageColors.colorA[index % percentageColors.colorA.length];
          console.log(firstColor);
          // destructure coinItems
          const {
            id,
            symbol,
            name,
            image,
            current_price,
            total_volume,
            market_cap,
            // shorten name
            price_change_percentage_1h_in_currency: hourlyChange,
            price_change_percentage_24h_in_currency: dailyChange,
            price_change_percentage_7d_in_currency: weeklyChange,
          } = item;
          return (
            <tbody key={id}>
              <tr>
                <td>{index + 1}</td>
                <td>
                  <NameContainer>
                    <img src={image} alt={`Thumbnail of ${name}`} />
                    <p>
                      {name} <span>({symbol})</span>
                    </p>
                  </NameContainer>
                </td>
                <td>
                  $
                  {current_price === 1
                    ? `${current_price}.00`
                    : current_price.toLocaleString()}
                </td>
                <PriceChange price={hourlyChange}>
                  <ArrowIcon price={hourlyChange} />
                  {Math.abs(hourlyChange.toFixed(2))}%
                </PriceChange>
                <PriceChange price={dailyChange}>
                  <ArrowIcon price={dailyChange} />
                  {Math.abs(dailyChange.toFixed(2))}%
                </PriceChange>
                <PriceChange price={weeklyChange}>
                  <ArrowIcon price={weeklyChange} />
                  {Math.abs(weeklyChange.toFixed(2))}%
                </PriceChange>
                <td>
                  <FlexContainer>
                    <FirstData>
                      <DotIcon /> ${formatCompactNumber(total_volume)}
                    </FirstData>
                    <SecondData>
                      <DotIcon /> ${formatCompactNumber(market_cap)}
                    </SecondData>
                  </FlexContainer>
                  <PercentageBar>
                    <Bar percent={(total_volume / market_cap) * 100}></Bar>
                  </PercentageBar>
                </td>
              </tr>
            </tbody>
          );
        })}
      </CoinTable>
    </Container>
  );
};
export default Table;

// CSS
const Container = styled.div`
  padding: 2em 1em;
  background: ${({ theme }) => theme.background};
  border-radius: var(--borderRadius);
  img {
    width: 26px;
    height: 26px;
  }

  /* loading color */
  .loading {
    border-top: 3px solid ${({ theme }) => theme.text};
  }
`;

const CoinTable = styled.table`
  font-size: 0.875rem;
  font-weight: 400;
  background: ${({ theme }) => theme.background};
  width: 100%;
  border-collapse: collapse;
  /* align tbody with thead */
  th {
    text-align: left;
  }

  tbody tr {
    border-bottom: 1px solid ${({ theme }) => theme.backgroundVariant};
  }
`;

const NameContainer = styled.div`
  display: flex;
  gap: 0.75em;
  align-items: center;

  p {
    margin-bottom: 0.75em;
  }

  span {
    text-transform: uppercase;
  }
`;

const PriceChange = styled.td`
  color: ${(props) => (props.price > 0 ? "#00FC2A" : "#FE1040")};
`;

const ArrowIcon = styled(Arrow)`
  /* Change color when market data changes */
  stroke: ${(props) => (props.price > 0 ? "#00FC2A" : "#FE1040")};
  fill: ${(props) => (props.price > 0 ? "#00FC2A" : "#FE1040")};
  margin-bottom: 0.1875em;
  margin-right: 0.25em;
  transform: ${(props) => (props.price > 0 ? "none" : "rotate(180deg)")};
`;

// align items using flexbox
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
// container for coin data: total volume, ciculating supply and etc...
const FirstData = styled.p`
  color: #ffb528;
  fill: #ffb528;
`;
const SecondData = styled.p`
  color: #fee158;
  fill: #fee158;
`;
//  container for coin data end

const PercentageBar = styled.div`
  width: 100%;
  height: 8px;
  background: #fee158;
  border-radius: var(--borderRadius);
`;

const Bar = styled.div`
  width: ${(props) => props.percent}%;
  height: inherit;
  background: #ffb528;
  border-radius: var(--borderRadius);
`;
