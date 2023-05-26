// CSS styling imports
import {
  Container,
  CoinTable,
  Flex,
  SortBtn,
  CoinName,
  NameContainer,
  PriceChange,
  ArrowIcon,
  Wrapper,
  FlexContainer,
  FirstData,
  SecondData,
  PercentageBar,
  Bar,
} from "./Table.styled";

import { formatCompactNumber } from "../../utils/FormatNumber";
import { ReactComponent as DotIcon } from "../../assets/dot-icon.svg";
import { percentageColors } from "../../data/percentageColors";
import SparklineChart from "../Charts/SparklineChart";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector, useDispatch } from "react-redux";
import { Filter } from "../../utils/icons";
import {
  sortDailyPercentage,
  sortHourlyPercentage,
  sortName,
  sortPrice,
  sortWeeklyPercentage,
} from "../../redux/coinSlice";
import { selectCoin } from "../../redux/individualCoinSlice";
import Skeleton from "react-loading-skeleton";
import CoinTableSkeleton from "./CoinTableSkeleton";

const Table = () => {
  const dispatch = useDispatch();

  // fetch user currency setting
  const currency = useSelector((store) => store.currency);
  const coinData = useSelector((store) => store.coins);

  if (coinData?.status === "failed") {
    return (
      <div>
        <h3>{coinData.error}</h3>
      </div>
    );
  }
  if (coinData?.status === "loading" || coinData?.status === "idle") {
    return <CoinTableSkeleton />;
  }
  return (
    <Container>
      <InfiniteScroll
        dataLength={coinData.coins.length}
        loader={<Skeleton width={100} />}
      >
        <CoinTable>
          <thead>
            <tr>
              <th className="display-none">#</th>
              <th>
                <Flex>
                  Name
                  <SortBtn
                    onClick={() => {
                      dispatch(sortName(coinData.coins));
                    }}
                  >
                    <Filter />
                  </SortBtn>
                </Flex>
              </th>
              <th>
                <Flex>
                  Price
                  <SortBtn
                    onClick={() => {
                      dispatch(sortPrice(coinData.coins));
                    }}
                  >
                    <Filter />
                  </SortBtn>
                </Flex>
              </th>
              <th>
                <Flex>
                  1h%
                  <SortBtn
                    onClick={() => {
                      dispatch(sortHourlyPercentage(coinData.coins));
                    }}
                  >
                    <Filter />
                  </SortBtn>
                </Flex>
              </th>
              <th>
                <Flex>
                  24h%
                  <SortBtn
                    onClick={() => {
                      dispatch(sortDailyPercentage(coinData.coins));
                    }}
                  >
                    <Filter />
                  </SortBtn>
                </Flex>
              </th>
              <th>
                <Flex>
                  7d%
                  <SortBtn
                    onClick={() => {
                      dispatch(sortWeeklyPercentage(coinData.coins));
                    }}
                  >
                    <Filter />
                  </SortBtn>
                </Flex>
              </th>
              <th>24h Volume/Market Cap</th>
              <th>Circulating/Total Supply</th>
              <th>Last 7d</th>
            </tr>
          </thead>
          {coinData.coins.map((item, index) => {
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
                    <NameContainer
                      to="coin"
                      onClick={() => {
                        console.log("coin:", id);
                        dispatch(selectCoin(id));
                      }}
                    >
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
                    {Math.abs(hourlyChange?.toFixed(2))}%
                  </PriceChange>
                  <PriceChange price={dailyChange}>
                    <ArrowIcon price={dailyChange} />
                    {Math.abs(dailyChange?.toFixed(2))}%
                  </PriceChange>
                  <PriceChange price={weeklyChange}>
                    <ArrowIcon price={weeklyChange} />
                    {Math.abs(weeklyChange?.toFixed(2))}%
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
                          {total_supply === null
                            ? "0.00"
                            : formatCompactNumber(total_supply)}
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
