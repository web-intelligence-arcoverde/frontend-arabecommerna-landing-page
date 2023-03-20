import styled from "styled-components";

export const ContainerSelect = styled.div`
  @media (max-width: 769px) {
    width: 80%;
    padding: 0 10px;
  }
`;

export const CardSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: black;
  font-weight: 600;
  img {
    width: 20px;
    display: none;
  }
`;
