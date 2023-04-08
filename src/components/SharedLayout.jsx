import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <SectionCenter>
        <Outlet />
      </SectionCenter>
    </>
  );
};
export default SharedLayout;

const SectionCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
`;
