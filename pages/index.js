import styled from "styled-components";
import Image from "next/image";
import MovieCard from "../components/MovieCard";

export default function Home() {
  return (
    <>
      <Background>
        <Image
          src="https://images.unsplash.com/photo-1542204637-e67bc7d41e48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
          alt="a movie reel"
          layout="responsive"
          width={2400}
          height={3200}
        />
      </Background>
      <StyledH2>Choose your Movies:</StyledH2>
      <MovieCard />
    </>
  );
}

const StyledH2 = styled.h2`
  margin-top: 35px;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  top: 0;
  left: 0;
  z-index: -10;
`;
