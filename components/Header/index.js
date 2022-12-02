import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <StyledH1>Movie-Box</StyledH1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: inline-block;
  padding: 1rem;
  position: fixed;
  height: 5rem;
  width: 100%;
  max-width: 450px;
  top: -2em;
  z-index: 100;
`;

const StyledH1 = styled.h1`
  text-align: center;
  border: 7px outset;
  padding: 0.15em;
  color: orange;
  background-color: black;
  border-radius: 8px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 2.2px;
  font-size: 2.5rem;
`;
