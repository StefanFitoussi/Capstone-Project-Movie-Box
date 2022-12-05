import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <StyledNavigation>
      <StyledLink1 active={router.asPath === "/"} href="/" className="active">
        HOME
      </StyledLink1>
      <StyledLink2 active={router.asPath === "/WatchList"} href="/WatchList">
        LIST
      </StyledLink2>
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

const StyledLink1 = styled(Link)`
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
  ${({ active }) =>
    active &&
    `
    border: 5px inset orange;
`}
`;

const StyledLink2 = styled(Link)`
border: 5px outset black;#
  height: 1rem;
  color: orange;
  background-color: black;
  border-radius: 8px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 1.4rem;
  text-decoration: none;
  text-align: center;
  padding: 0.55em 1.25em 0.5em 1.25em;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
    border: 5px inset orange;
`}
`;
