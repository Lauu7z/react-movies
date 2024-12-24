import styled from "styled-components";

export const ContainerMovies = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    margin: 0;
  }

  & li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  & img {
    width: 100%;
    height: auto;
    aspect-ratio: 2/3;
  }
`;
