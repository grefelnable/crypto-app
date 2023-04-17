import styled from "styled-components";

const ProgressBar = (props) => {
  const { percentage } = props;
  const fillerWidth = {
    width: `${percentage}%`,
  };
  return (
    <Container>
      <Filler style={fillerWidth}></Filler>
    </Container>
  );
};
export default ProgressBar;

const Container = styled.div`
  display: inline-block;
  height: 13px;
  width: 55px;
  background-color: var(--blue);
  border-radius: 1em;
`;

const Filler = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.text};
  border-radius: inherit;
`;
