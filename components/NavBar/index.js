import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <StyledNavigation>
      <StyledLink active={router.asPath === "/"} href="/" className="active">
        HOME
      </StyledLink>
      <StyledLink active={router.asPath === "/WatchList"} href="/WatchList">
        LIST
      </StyledLink>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 4rem;
  padding: 0rem 1rem 0rem 1rem;
  position: fixed;
  margin-bottom: 0.2em;
  height: 4rem;
  width: 100%;
  bottom: 0.4em;
  z-index: 100;
  max-width: 450px;
`;

const StyledLink = styled(Link)`
border: 5px outset black;#
  height: 1rem;
  color: orange;
  background-color: black;
  border-radius: 8px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 1.4rem;
  text-decoration: none;
  text-align: center;
  padding: 0.55em 1em 0.5em 1em;
  cursor: pointer;
  &:active {
    border: 5px inset black;
  }

  ${({ active }) =>
    active &&
    `
  background: blue;
`}
`;
