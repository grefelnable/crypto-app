import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import MarketData from "./MarketData";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <MarketData />
      <SectionCenter>
        <Outlet />
      </SectionCenter>
    </>
  );
};
export default SharedLayout;

const SectionCenter = styled.div`
  width: 95vw;
  margin: 0 auto;
  max-width: 1170px;
`;
