import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeBody = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  width: 80%;
`;
