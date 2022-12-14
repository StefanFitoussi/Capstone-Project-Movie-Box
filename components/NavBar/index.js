import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <StyledNavigation>
      <StyledLink1
        active={router.asPath === "/" ? 1 : 0}
        href="/"
        className="active"
      >
        HOME
      </StyledLink1>
      <StyledLink2
        active={router.asPath === "/WatchList" ? 1 : 0}
        href="/WatchList"
      >
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
  max-width: 450px;
  z-index: 100;
`;

const StyledLink1 = styled(Link)`
border: 5px outset  #000000;#
  height: 1rem;
  color: #ffa500;
  background-color:  #000000;
  border-radius: 8px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 1.4rem;
  text-decoration: none;
  text-align: center;
  letter-spacing: 1px;
  padding: 0.55em 1em 0.5em 1em;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
    border: 5px inset #ffa500;
`}
`;

const StyledLink2 = styled(Link)`
border: 5px outset  #000000;#
  height: 1rem;
  color: #ffa500;
  background-color:  #000000;
  border-radius: 8px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 1.4rem;
  text-decoration: none;
  text-align: center;
  letter-spacing: 1px;
  padding: 0.55em 1.25em 0.5em 1.25em;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
    border: 5px inset #ffa500;
`}
`;
