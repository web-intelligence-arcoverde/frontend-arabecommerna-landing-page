import { COLORS } from "./../../../common/index";
import styled from "styled-components";
import { IMAGES } from "../../../assets";

export const PresentationContainer = styled.div`
  background-image: url(https://static.todamateria.com.br/upload/as/pi/as-piramides-do-egito-og.jpg);
  text-align: center;
  color: ${COLORS.light._05};
  height: 50vh;
  margin: auto;
`;

export const PresentationDetails = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  h2 {
    font-size: 2.75rem;
    font-weight: 700;
  }
  p {
    font-weight: 500;
    font-size: 1.1rem;
  }
  button {
    width: 266px;
    height: 48px;
    text-align: center;
    margin: auto;
    font: 1rem;
    font-weight: 500;
  }
  button:hover {
    border: 1px solid ${COLORS.light._05};
  }
`;
