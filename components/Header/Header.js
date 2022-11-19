import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <StyledH1>Movie-Box</StyledH1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  padding: 0 1rem;
  height: 5rem;
  position: fixed;
  top: 0;
`;

const StyledH1 = styled.h1`
  border: 2px solid var(--text-primary);
  padding: 0.25em 2em;
  background-color: var(--background-primary);
`;
