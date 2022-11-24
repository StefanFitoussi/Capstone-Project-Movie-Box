import styled from "styled-components";

export default function NavBar() {
  return (
    <>
      <StyledNavigation>
        <StyledH3>NavBar</StyledH3>
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

const StyledH3 = styled.h3`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  text-decoration: none;
  padding: 0;
  margin: 0;
  border: 2px solid black;
  background-color: white;
`;
