import styled from "styled-components";
import { useState, useEffect } from "react";
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
  console.log(coinItems);
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
  return (
    <CoinTable>
      <thead>
        <tr>
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
      {coinItems.map((item) => (
        <tbody key={item.id}>
          <tr>
            <td>
              <img src={item.image} alt="" />
            </td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
        </tbody>
      ))}
    </CoinTable>
  );
};
export default Table;

// CSS
const CoinTable = styled.table`
  background: ${({ theme }) => theme.background};
  width: 100%;
  border-collapse: collapse;
  /* loading color */
  .loading {
    border-top: 3px solid ${({ theme }) => theme.text};
  }

  tr {
    border-bottom: 1px solid var(--grey-700);
  }
`;
