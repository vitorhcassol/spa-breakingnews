import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 1.3rem;
  background-color: white;
  padding: 2rem;
`;

export const CardBody = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  img {
    width: 70%;
    object-fit: cover;
    object-position: center;
  }

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 8;
    overflow: hidden;
  }
`;

export const CardFooter = styled.article`
  display: flex;
  align-items: center;
  gap: 1.3rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`;
