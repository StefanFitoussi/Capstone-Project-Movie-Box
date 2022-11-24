import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <StyledNavigation>
        <StyledLink href="/">
          <img src="/Images/icons8-startseite-50.png" />
          Hallo
        </StyledLink>
      </StyledNavigation>
    </>
  );
}

const StyledNavigation = styled.nav`
  padding: 0 1rem;
  height: 5rem;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 100;
`;

const StyledLink = styled(Link)`
  text-align: center;
  border: 2px solid black;#
  height: 5rem;
  padding: 0.5em 2em;
  background-color: white;
`;
