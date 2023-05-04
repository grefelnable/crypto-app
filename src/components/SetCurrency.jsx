import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrency } from "../redux/currencySlice";

const SetCurrency = () => {
  const currency = useSelector((store) => store.currency);
  console.log(currency);
  // initialize dispatch variable
  const dispatch = useDispatch();

  const [showOptions, setShowOptions] = useState(false);
  // const [test, setTest] = useState(currency);

  const currencies = ["usd", "cad", "eur", "gbp"];

  const handleClick = () => {
    setShowOptions(!showOptions);
  };
  return (
    <div>
      <CurrencyBtn type="button" onClick={handleClick}>
        $ {currency}
      </CurrencyBtn>
      {showOptions && (
        <CurrencyOptions>
          {currencies.map((currency, index) => {
            return (
              <CurrencyOptionBtn
                key={index}
                type="button"
                value={currency}
                onClick={(e) => dispatch(changeCurrency(e.target.value))}
              >
                {currency}
              </CurrencyOptionBtn>
            );
          })}
        </CurrencyOptions>
      )}
    </div>
  );
};
export default SetCurrency;

// CSS
const CurrencyBtn = styled.button`
  cursor: pointer;
  text-transform: uppercase;
`;

const CurrencyOptions = styled.div``;

const CurrencyOptionBtn = styled.button`
  cursor: pointer;
`;
