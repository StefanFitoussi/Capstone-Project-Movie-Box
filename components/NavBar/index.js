import styled from "styled-components";
import Link from "next/link";

export default function NavBar() {
  return (
    <StyledNavigation>
      <StyledLink href="/">
        <img src="/Images/icons8-startseite-50.png" />
      </StyledLink>
      <StyledLink href="/WatchList">
        <img src="/Images/icons8-lesezeichen-50.png" />
      </StyledLink>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0rem 1rem;
  position: fixed;
  width: 100%;
  bottom: 0.8em;
  z-index: 100;
  max-width: 450px;
`;

const StyledLink = styled(Link)`
border: 2px solid black;#
  height: 1rem;
  padding: 0.2em 1em 0em 1em;
  background-color: orange;
  border-radius: 8px;
`;
