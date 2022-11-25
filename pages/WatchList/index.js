import styled from "styled-components";

export default function WatchList() {
  return (
    <StyledWatchList>
      <StyledH2>Your watchlist</StyledH2>
    </StyledWatchList>
  );
}

const StyledWatchList = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;

const StyledH2 = styled.h2`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 0.5px;
  margin-top: 0;
`;
