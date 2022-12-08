import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  return (
    <StyledHeader>
      <Title>
        <StyledLink href="/">Movie-Box</StyledLink>
      </Title>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: inline-block;
  position: fixed;
  height: 5rem;
  width: 100%;
  max-width: 450px;
  top: -1em;
  text-align: center;
  z-index: 100;
`;

const Title = styled.p`
  color: #ffa500;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 2.2px;
  font-size: 2.5rem;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  border: 7px outset #000000;
  padding: 0.2em 1.7em 0.2em 1.78em;
  color: #ffa500;
  background-color: #000000;
  border-radius: 8px;
  text-decoration: none;
`;
