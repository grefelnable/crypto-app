import { useSelector } from "react-redux";
import styled from "styled-components";

const CoinInformation = () => {
  const selectedCoin = useSelector((store) => store.singleCoin);

  console.log(selectedCoin);

  return (
    <>
      <h2>Your Summary:</h2>
      {selectedCoin}
      {/* Image and website */}
      <Container></Container>
      {/* price and ATH and ATL */}
      {/* Market Cap */}
    </>
  );
};
export default CoinInformation;

// CSS

const Container = styled.section``;
