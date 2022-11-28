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
  height: 5rem;
  position: fixed;
  width: 100%;
  max-width: 450px;
  top: -1.6em;
  z-index: 100;
`;

const StyledH1 = styled.h1`
  text-align: center;
  border: 2px solid black;
  padding: 0.2em;
  background-color: orange;
  border-radius: 8px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 2.2px;
  font-size: 2.4rem;
`;
