import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <StyledH1>Movie-Box</StyledH1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  height: 5rem;
  position: sticky;
  z-index: 100;
`;

const StyledH1 = styled.h1`
  border: 2px solid var(--text-primary);
  padding: 0.5rem 5rem;
`;
