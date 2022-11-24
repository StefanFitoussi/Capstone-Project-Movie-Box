import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <StyledH1>Movie-X</StyledH1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  padding: 0 1rem;
  height: 5rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
`;

const StyledH1 = styled.h1`
  text-align: center;
  border: 2px solid black;
  padding: 0.25em 2em;
  background-color: white;
`;
