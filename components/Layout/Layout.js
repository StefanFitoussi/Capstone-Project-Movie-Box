import styled from "styled-components";
import Header from "../Header/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  margin: 0;
  padding: 1rem;
  min-height: calc(100vh - 8rem);
  margin-top: 3.5em;
`;

export default Layout;
