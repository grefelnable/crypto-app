import { useSelector } from "react-redux";

const CoinInformation = () => {
  const selectedCoin = useSelector((store) => store.singleCoin);

  console.log(selectedCoin);

  return <div>{selectedCoin}</div>;
};
export default CoinInformation;
