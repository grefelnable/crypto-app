import styled from "styled-components";

export const Container = styled.section``;

export const CoinImageWebsite = styled.article`
  background: ${({ theme }) => theme.background};
  border-radius: 1.5em;
  width: 300px;
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
  span {
    text-transform: uppercase;
  }
`;

export const CoinLink = styled.div`
  a {
    color: ${({ theme }) => theme.text};
  }
`;
