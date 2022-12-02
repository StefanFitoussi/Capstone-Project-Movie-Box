import styled from "styled-components";
import Link from "next/link";

export default function NavBar() {
  return (
    <StyledNavigation>
      <StyledLink1 href="/">HOME</StyledLink1>
      <StyledLink2 href="/WatchList">LIST</StyledLink2>
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
border: 5px outset;#
  height: 1rem;
  color: orange;
  background-color: black;
  border-radius: 99rem;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 1.4rem;
  text-decoration: none;
  text-align: center;
  padding: 0.55em 1em 0.5em 1em;
  cursor: pointer;
`;

const StyledLink2 = styled(Link)`
border: 5px outset;#
  height: 1rem;
  color: orange;
  background-color: black;
  border-radius: 99rem;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 1.4rem;
  text-decoration: none;
  text-align: center;
  padding: 0.55em 1.4em 0.5em 1.4em;
  cursor: pointer;
`;
