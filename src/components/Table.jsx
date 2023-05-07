import styled from "styled-components";
import { useState, useEffect } from "react";
import { ReactComponent as Arrow } from "../assets/arrow-icon.svg";
import { formatCompactNumber } from "../utils/FormatNumber";
import { ReactComponent as DotIcon } from "../assets/dot-icon.svg";
import { percentageColors } from "../data/percentageColors";
import SparklineChart from "./Charts/SparklineChart";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector, useDispatch } from "react-redux";
import { Filter } from "../utils/icons";
import { sortName } from "../redux/coinSlice";

// for production only; delete after
import faker from "../faker";

const Table = () => {
  // Get coinData from store
  const coinData = useSelector((store) => store.coinData);
  const dispatch = useDispatch();
  // Get currency from store
  const currency = useSelector((store) => store.currency);

  const [isLoaded, setIsLoaded] = useState(false);
  // const [coinItems, setCoinItems] = useState(faker);

  // url
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`;

  // for production only; delete after
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // // fetch coins information
  // useEffect(() => {
  //   const fetchCoinsInformation = async () => {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setIsLoaded(true);
  //     setCoinItems(data);
  //   };

  //   fetchCoinsInformation().catch(console.error);
  // }, [currency]);

  if (!isLoaded) {
    return <div className="loader"></div>;
  }
  return (
    <Container>
      <InfiniteScroll
        dataLength={coinData.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <CoinTable>
          <thead>
            <tr>
              <th className="display-none">#</th>
              <th>
                <Flex>
                  Name
                  <SortNameBtn onClick={() => dispatch(sortName())}>
                    <Filter />
                  </SortNameBtn>
                </Flex>
              </th>
              <th>
                <Flex>
                  Price
                  <SortPriceBtn>
                    <Filter />
                  </SortPriceBtn>
                </Flex>
              </th>
              <th>1h%</th>
              <th>24h%</th>
              <th>7d%</th>
              <th>24h Volume/Market Cap</th>
              <th>Circulating/Total Supply</th>
              <th>Last 7d</th>
            </tr>
          </thead>
          {coinData.map((item, index) => {
            // Different Colors for percentage bar
            const firstColor =
              // Access color by its index on the percentageColor array of objects
              percentageColors.colorA[index % percentageColors.colorA.length];
            const secondColor =
              percentageColors.colorB[index % percentageColors.colorB.length];
            // destructure coinItems
            const {
              id,
              symbol,
              name,
              image,
              current_price,
              total_volume,
              market_cap,
              circulating_supply,
              total_supply,
              sparkline_in_7d,
              // shorten name
              price_change_percentage_1h_in_currency: hourlyChange,
              price_change_percentage_24h_in_currency: dailyChange,
              price_change_percentage_7d_in_currency: weeklyChange,
            } = item;
            return (
              <tbody key={id}>
                <tr>
                  <td className="display-none">{index + 1}</td>
                  <CoinName>
                    <NameContainer>
                      <img src={image} alt={`Thumbnail of ${name}`} />
                      <p>
                        {name} <span>({symbol})</span>
                      </p>
                    </NameContainer>
                  </CoinName>
                  <td>
                    {currency.symbol}{" "}
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
                  {/* 24h Volume / Market Cap */}
                  <td>
                    <Wrapper>
                      <FlexContainer>
                        <FirstData color={firstColor}>
                          <DotIcon /> {currency.symbol}
                          {formatCompactNumber(total_volume)}
                        </FirstData>
                        <SecondData color={secondColor}>
                          <DotIcon /> {currency.symbol}
                          {formatCompactNumber(market_cap)}
                        </SecondData>
                      </FlexContainer>
                      <PercentageBar color={secondColor}>
                        <Bar
                          percent={(total_volume / market_cap) * 100}
                          color={firstColor}
                        ></Bar>
                      </PercentageBar>
                    </Wrapper>
                  </td>
                  {/* Circulating / Total Supply */}
                  <td>
                    <Wrapper>
                      <FlexContainer>
                        <FirstData color={firstColor}>
                          <DotIcon /> {currency.symbol}
                          {formatCompactNumber(circulating_supply)}
                        </FirstData>
                        <SecondData color={secondColor}>
                          <DotIcon /> {currency.symbol}
                          {formatCompactNumber(total_supply)}
                        </SecondData>
                      </FlexContainer>
                      <PercentageBar color={secondColor}>
                        <Bar
                          percent={(circulating_supply / total_supply) * 100}
                          color={firstColor}
                        ></Bar>
                      </PercentageBar>
                    </Wrapper>
                  </td>
                  <td>
                    <SparklineChart
                      sparklineData={sparkline_in_7d}
                      weeklyChange={weeklyChange}
                    />
                  </td>
                </tr>
              </tbody>
            );
          })}
        </CoinTable>
      </InfiniteScroll>
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
`;

const CoinTable = styled.table`
  font-size: 0.875rem;
  font-weight: 400;
  background: ${({ theme }) => theme.background};
  width: 100%;
  border-collapse: collapse;
  td {
    padding-right: 2px;
  }
  /* align tbody with thead */
  th {
    text-align: left;
  }

  tbody tr {
    border-bottom: 1px solid ${({ theme }) => theme.backgroundVariant};
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const SortNameBtn = styled.button`
  cursor: pointer;
  width: 28px;
  background: transparent;
  border: none;
  display: grid;
  place-items: center;
  svg {
    color: ${({ theme }) => theme.text};
  }
`;

const SortPriceBtn = styled(SortNameBtn)``;

const CoinName = styled.td`
  width: 250px;
`;

const NameContainer = styled.div`
  display: flex;
  gap: 0.75em;
  align-items: center;
  span {
    text-transform: uppercase;
  }
`;

const PriceChange = styled.td`
  color: ${(props) => (props.price > 0 ? "#00FC2A" : "#FE1040")};
  min-width: 70px;
`;

const ArrowIcon = styled(Arrow)`
  /* Change color when market data changes */
  stroke: ${(props) => (props.price > 0 ? "#00FC2A" : "#FE1040")};
  fill: ${(props) => (props.price > 0 ? "#00FC2A" : "#FE1040")};
  margin-bottom: 0.1875em;
  margin-right: 0.25em;
  transform: ${(props) => (props.price > 0 ? "none" : "rotate(180deg)")};
`;

const Wrapper = styled.div`
  margin-right: 0.5em;
`;

// align items using flexbox
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
// container for coin data: total volume, circulating supply and etc...
const FirstData = styled.p`
  color: ${(props) => props.color};
  fill: ${(props) => props.color};
`;
const SecondData = styled.p`
  color: ${(props) => props.color};
  fill: ${(props) => props.color};
`;
//  container for coin data end

const PercentageBar = styled.div`
  width: 100%;
  min-width: 120px;
  height: 8px;
  background: ${(props) => props.color};
  border-radius: var(--borderRadius);
  /* Add space at the bottom before the border */
  margin-bottom: 1.25em;
`;

const Bar = styled.div`
  width: ${(props) => props.percent}%;
  height: inherit;
  background: ${(props) => props.color};
  border-radius: var(--borderRadius);
`;
