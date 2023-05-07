import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrency } from "../redux/currencySlice";
import { ReactComponent as Arrow } from "../assets/arrow-icon.svg";

const SetCurrency = () => {
  const currency = useSelector((store) => store.currency);

  // initialize dispatch variable
  const dispatch = useDispatch();

  const [showOptions, setShowOptions] = useState(false);

  // currency options
  const currencies = ["usd", "cad", "eur", "gbp"];

  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  const handleChangeCurrency = (e) => {
    dispatch(changeCurrency(e.target.value));
    setShowOptions(!showOptions);
  };
  return (
    <Container>
      <CurrencyBtn type="button" onClick={handleClick}>
        <span>{currency.symbol}</span> {currency.name} <ArrowIcon />
      </CurrencyBtn>
      {showOptions && (
        <CurrencyOptions>
          {currencies.map((currency, index) => {
            return (
              <CurrencyOptionList key={index}>
                <CurrencyOptionBtn
                  key={index}
                  type="button"
                  value={currency}
                  onClick={handleChangeCurrency}
                >
                  {currency}
                </CurrencyOptionBtn>
              </CurrencyOptionList>
            );
          })}
        </CurrencyOptions>
      )}
    </Container>
  );
};
export default SetCurrency;

// CSS
const Container = styled.div`
  position: relative;

  /* test */
  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const CurrencyBtn = styled.button`
  cursor: pointer;
  height: 2.65em;
  text-transform: uppercase;
  box-shadow: var(--shadow-1);
  border: none;
  border-radius: 0.5em;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.toggleBtn};
  padding: 7px 10px;
  transition: var(--transition);

  span {
    color: ${({ theme }) => theme.chartBorderColor};
    background-color: ${({ theme }) => theme.navbarBackground};
    padding: 4px 8px;
    border-radius: 50%;
    margin-right: 0.5em;
  }
  /* media query for small screens */
  @media screen and (max-width: 768px) {
    height: inherit;
  }
`;

const CurrencyOptions = styled.ul`
  border: 1px solid var(--grey-400);
  border-radius: var(--borderRadius);
  position: absolute;
  top: -9.5px;
  left: 30px;
  padding: 2px 3px;
  z-index: 10;
  background: ${({ theme }) => theme.toggleBtn};
`;

const CurrencyOptionList = styled.li`
  padding: 0 0.75em;
  border-radius: var(--borderRadius);
  transition: var(--transition);
  &:hover {
    background: var(--blue);
  }
`;

const CurrencyOptionBtn = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  background: none;
  border: none;
`;

const ArrowIcon = styled(Arrow)`
  stroke: var(--green);
  fill: var(--green);
  margin-bottom: 0.1875em;
  margin-right: 0.25em;
  transform: rotate(180deg);
`;
