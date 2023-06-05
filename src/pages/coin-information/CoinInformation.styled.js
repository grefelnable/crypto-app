import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  gap: 1em;
`;

export const CoinImageWebsite = styled.article`
  background: ${({ theme }) => theme.background};
  border-radius: 1.5em;
  width: 85vw;
  padding: 1.75em 3em;
  text-align: center;
`;

export const CoinImage = styled.div`
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.backgroundVariant};
  width: fit-content;
  padding: 1.5em 2em;
  margin: 0 auto;
  margin-bottom: 1em;
`;

export const CoinName = styled.p`
  letter-spacing: var(--letterSpacing);
  margin-bottom: 1em;
  span {
    text-transform: uppercase;
  }
`;

export const CoinLink = styled.div`
  padding: 2px 4px;
  border-radius: var(--borderRadius);
  svg {
    color: ${({ theme }) => theme.text};
    width: 1rem;
    margin-right: 1em;
    margin-bottom: -2px;
    stroke-width: 2px;
  }
  a {
    color: ${({ theme }) => theme.text};
  }
  background: ${({ theme }) => theme.backgroundVariant};
`;

export const MarketData = styled.article`
  background: ${({ theme }) => theme.background};
  border-radius: 1.5em;
  width: 85vw;
  padding: 1.75em 3em;
  text-align: center;

  /* square stack icon */
  svg {
    width: 40px;
  }
`;

export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const DailyPriceChange = styled.p`
  color: ${(props) => (props.price > 0 ? "#00FC2A" : "#FE1040")};
  min-width: 70px;
  margin-bottom: 0.5em;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;
`;

export const AthAtlWrapper = styled.div`
  h5 {
    margin-bottom: 0.15em;
  }
`;
