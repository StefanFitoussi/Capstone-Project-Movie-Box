import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  return (
    <StyledHeader href="/">
      <Title>Movie-Box</Title>
    </StyledHeader>
  );
}

const StyledHeader = styled(Link)`
  display: inline-block;
  padding: 1rem;
  position: fixed;
  height: 5rem;
  width: 100%;
  max-width: 450px;
  top: -2em;
  z-index: 100;
  text-decoration: none;
`;

const Title = styled.h1`
  text-align: center;
  border: 7px outset black;
  padding: 0.15em;
  color: orange;
  background-color: black;
  border-radius: 8px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 2.2px;
  font-size: 2.5rem;
  &:active {
    border: 7px inset black;
  }
`;
