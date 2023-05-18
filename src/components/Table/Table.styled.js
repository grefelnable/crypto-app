// table-styling
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/arrow-icon.svg";

export const Container = styled.div`
  padding: 2em 1em;
  background: ${({ theme }) => theme.background};
  border-radius: var(--borderRadius);
  img {
    width: 26px;
    height: 26px;
  }
`;

export const CoinTable = styled.table`
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

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const SortBtn = styled.button`
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

export const CoinName = styled.td`
  width: 250px;
`;

export const NameContainer = styled(Link)`
  color: inherit;
  display: flex;
  gap: 0.75em;
  align-items: center;
  span {
    text-transform: uppercase;
  }
`;

export const PriceChange = styled.td`
  color: ${(props) => (props.price > 0 ? "#00FC2A" : "#FE1040")};
  min-width: 70px;
`;

export const ArrowIcon = styled(Arrow)`
  /* Change color when market data changes */
  stroke: ${(props) => (props.price > 0 ? "#00FC2A" : "#FE1040")};
  fill: ${(props) => (props.price > 0 ? "#00FC2A" : "#FE1040")};
  margin-bottom: 0.1875em;
  margin-right: 0.25em;
  transform: ${(props) => (props.price > 0 ? "none" : "rotate(180deg)")};
`;

export const Wrapper = styled.div`
  margin-right: 0.5em;
`;

// align items using flexbox
export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
// container for coin data: total volume, circulating supply and etc...
export const FirstData = styled.p`
  color: ${(props) => props.color};
  fill: ${(props) => props.color};
`;
export const SecondData = styled.p`
  color: ${(props) => props.color};
  fill: ${(props) => props.color};
`;
//  container for coin data end

export const PercentageBar = styled.div`
  width: 100%;
  min-width: 120px;
  height: 8px;
  background: ${(props) => props.color};
  border-radius: var(--borderRadius);
  /* Add space at the bottom before the border */
  margin-bottom: 1.25em;
`;

export const Bar = styled.div`
  width: ${(props) => props.percent}%;
  height: inherit;
  background: ${(props) => props.color};
  border-radius: var(--borderRadius);
`;
